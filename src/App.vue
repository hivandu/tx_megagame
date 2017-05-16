<template>
  <div id="app">
    <index v-on:accSubmit="subSuccess">
      <t-submit slot="submit" v-on:undisSubmit="undisSubmit" v-show="display"></t-submit>
      <t-slide class="slide" slot="slide" :path="path"></t-slide>
      <div slot="login" class="login">
        <div class="logged" v-if="userInfo">
          <span>欢迎, </span><span>{{userInfo.nickName}}</span><span @click="logout" class="action">【注销】</span>
        </div>
        <div class="unLogged" v-else>
          <span class="action" @click="login">登录</span>
        </div>
      </div>
      <t-button :buttonText="'上传作品及报名'" :path="'/upload'" class="button upload" slot="button-up"></t-button>
      <t-button :buttonText="'全部作品'" :path="'/allWorks'" class="button all" slot="button-all"></t-button>
      <t-qrcode slot="qrcode" class="qr"></t-qrcode>
    </index>
  </div>
</template>
<script>
import BgImg from '../ossweb-img/image/bg.jpg'
import Index from './views/index/'
import TButton from './components/button/'
import TSlide from './components/slide/'
import TQrcode from './components/qrcode/'
import TSubmit from './components/submit.vue'
export default {
  name: 'app',
  components: {
    Index,
    TButton,
    TSlide,
    TQrcode,
    TSubmit
  },
  watch: {
    '$route' (val) {
      // console.log(val.path);
    },
    display(val) {
      const _this = this;
      setTimeout(function() {
        _this.display = false
      }, 5000)
    }
  },
  created() {
    this.path = this.$route.path;
  },
  mounted() {
    this.getUserInfo()
  },
  data() {
    return {
      BgImg: BgImg,
      navBgShow: true,
      path: '',
      userInfo: null,
      display: false
    }
  },
  methods: {
    // 获取用户状态
    getUserInfo() {
      const _this = this;
      _this.$http.get('../ossweb-img/mock/user.json').then(function(res) {
        if (res.data.success) {
          if (res.data.obj.status) {
            _this.userInfo = res.data.obj.userInfo;
          } else {
            _this.userInfo = null
          }
        }
      }).catch(function(err) {
        console.log(err)
      })
    },

    // 注销
    logout() {

    },

    // 登录
    login() {

    },

    // 显示提交成功
    subSuccess(e) {
      console.log('subSuccess');
      this.display = true;
    },

    undisSubmit() {
      this.display = false
    }
  }
}
</script>
<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/common.scss";
@media screen and (max-width:1300px) {
  .login {
    position: fixed;
    top: 82px;
  }
}

@media screen and (min-width: 1300px) {
  .login {
    position: absolute;
    top: 40px;
  }
}

.login {
  font-weight: bold;
  width: 155px;
  right: 19px;
  z-index: 99;
  color: #fff;
  text-align: right;
}

.action {
  cursor: pointer;
}
</style>
