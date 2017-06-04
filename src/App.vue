<template>
  <div id="app">
    <index :user="userInfo">
      <t-slide class="slide" slot="slide" :path="path"></t-slide>
      <div slot="login" class="login">
        <div class="logged" id="logined">
          <span>欢迎您, </span><span id="login_nickname_span" v-model="userInfo.userName"></span><span @click="logout" class="action">【注销】</span>
        </div>
        <div class="unLogged" id="unlogin">
          <span class="action" @click="login">登录</span>
        </div>
      </div>
      <t-button :user="userInfo" :buttonText="'上传作品及报名'" :path="'/upload'" :class="['button upload', path=='/upload'?'changed':'']" slot="button-up"></t-button>
      <t-button :buttonText="'全部作品'" :path="'/allWorks'" :class="['button all', path=='/allWorks'?'changed':'']" slot="button-all"></t-button>
      <t-qrcode slot="qrcode" class="qr"></t-qrcode>
    </index>
  </div>
</template>
<script>
import Index from './views/index/'
import TButton from './components/button/'
import TSlide from './components/slide/'
import TQrcode from './components/qrcode/'
import TSubmit from './components/submit.vue'
export default {
  name: 'app',
  props:['userStatus'],
  components: {
    Index,
    TButton,
    TSlide,
    TQrcode,
    TSubmit
  },
  watch: {
    '$route' (val) {
      this.path = val.path;
    },
    display(val) {
      const _this = this;
      setTimeout(function() {
        _this.display = false
      }, 5000)
    }
  },
  mounted() {
    console.log(this.userStatus);
    this.path = this.$route.path;
    if (userName) {
      this.userInfo.userName = userName;
    }
  },
  data() {
    return {
      navBgShow: true,
      path: '',
      userInfo:{
        status: false,
        userName:''
      },
      display: false
    }
  },
  methods: {
    // 注销
    logout() {
      LoginManager.logout();
    },

    // 登录
    login() {
      let _l = LoginManager.login();
      console.log(_l);
    }
  }
}
</script>
<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/common.scss";
.login {
  position: fixed;
  top: 82px;
  font-size: 14px;
  font-weight: bold;
  width: 300px;
  right: 50px;
  z-index: 99;
  color: #fff;
  text-align: right;
}

.goto.changed {
  opacity: 1;
}

.action {
  cursor: pointer;
}
</style>
