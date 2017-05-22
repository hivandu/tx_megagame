<template>
  <div id="app">
    <index v-on:accSubmit="subSuccess" :user="userInfo">
      <t-submit slot="submit" v-on:undisSubmit="undisSubmit" v-show="display"></t-submit>
      <t-slide class="slide" slot="slide" :path="path"></t-slide>
      <div slot="login" class="login">
        <div class="logged" id="logined">
          <span>欢迎您, </span><span>{{userInfo.nickName}}</span><span @click="logout" class="action">【注销】</span>
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
    this.path = this.$route.path;
    this.getUserInfo();
  },
  data() {
    return {
      navBgShow: true,
      path: '',
      userInfo:{
        userName:''
      },
      display: false
    }
  },
  methods: {
    // 获取用户状态
    getUserInfo() {
      const _this = this;
      //检查是否已登录，已登录则获取QQ号显示已登录状态
      milo.ready(function() {
        need("biz.login-min", function(LoginManager) {
          LoginManager.checkLogin(function() {
            console.log('login');
            g("login_qq_span").innerHTML = LoginManager.getUserUin(); //获取QQ号
            LoginManager.getNickName(function(loginInfo) {
              if (loginInfo.isLogin) {
                _this.userInfo.nickName = loginInfo.nickName;
              }else{
                _this.userInfo = null;
              }
              key = 1;
            });
          });
        });
      });
    },

    // 注销
    logout() {
      LoginManager.logout();
      this.getUserInfo();
    },

    // 登录
    login() {
      LoginManager.login();
      this.getUserInfo();
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
