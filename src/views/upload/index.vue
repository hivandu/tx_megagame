<template>
  <div id="upload-first" class="wrap-upload">
    <div class="content-title">
      <div class="first-title">上传作品及报名</div>
      <div class="second-title blue-font">UPLOAD WORKS AND SIGN UP</div>
    </div>
    <div class="info">
      <div class="nav-info">
        团队信息登记，队长录入信息后，其他队员登录对应QQ后可以直接查看（团队成员无法修改团队信息和上传作品）。
      </div>
      <form @submit.prevent="submitForm($event)" action="index_submit" method="get" accept-charset="utf-8">
        <div class="form-line">
          <label for="">队长QQ</label>
          <input type="text" v-model="formData.captainQQ" placeholder="请输入10位QQ号码">
        </div>
        <div class="form-line">
          <label for="">姓名</label>
          <input type="text" v-model="formData.name">
        </div>
        <div class="form-line">
          <label for="">高校名称</label>
          <input type="text" v-model="formData.colleges">
        </div>
        <div class="form-line">
          <label for="">年级</label>
          <input type="text" v-model="formData.grade">
        </div>
        <div class="form-line">
          <label for="">专业</label>
          <input type="text" v-model="formData.pro">
        </div>
        <div class="form-line">
          <label for="">手机</label>
          <input type="text" v-model="formData.phone" placeholder="请输入11位手机号码">
        </div>
        <div class="form-line">
          <label for="">验证码</label>
          <input type="text" placeholder="请先获取验证码" :disabled="!verificationDis" v-model="verification" class="verification">
          <input :value="authCodeInput" type="button" class="get" @click="getVerification">
        </div>
        <div class="form-line">
          <label for="">邮箱</label>
          <input type="text" v-model="formData.mail">
        </div>
        <div class="form-line">
          <label for="">团队名称</label>
          <input type="text" v-model="formData.teamName">
        </div>
        <div class="form-line">
          <label for="">团队成员</label>
          <input type="text" v-model="formData.members" placeholder="团队成员须先注册，之后输入成员QQ号即可，多个成员用:隔开">
        </div>
        <div class="form-line">
          <label for="">团队介绍</label>
          <textarea name="" id="" cols="30" rows="5" v-model="formData.teamInfo"></textarea>
        </div>
        <!-- 如果需要使用默认form表单提交，去掉@click的prevent属性 -->
        <div class="form-line submit">
          <label for=""></label>
          <input type="submit" class="next" value="提交" :disabled="!submitStatus">
          <a target="_blank" href="http://www.pdf995.com/samples/pdf.pdf" class="download">下载上传作品说明</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload-first',
  watch: {
    formData:{
      deep:true,
      handler:function(val, oldVal){
        this.submitStatus = true;
      }
    },
    // 监听验证码输入
    verification(val, oldVal) {
      const _this = this;
      const _len = 6; // 密码最大长度，到长度后请求验证码输入是否正确
      if (val.length == _len) {
        _this.validationVerification(val);
      } else if (val.length > _len) {
        _this.verification = oldVal;
      }
    }
  },
  data() {
    return {
      formData: {
        captainQQ: '',
        name: '',
        colleges: '',
        grade: '',
        pro: '',
        phone: '',
        mail: '',
        teamName: '',
        members: '',
        teamInfo: ''
      },
      verification: '',
      verificationDis: false, // 控制验证码是否可输入
      authCodeInput: '获取验证码',
      Interval: null,
      timer: 60,
      timeStatus: false,
      submitStatus: false

    }
  },
  methods: {

    // 提交表单事件
    submitForm() {
      const _this = this;
      this.$http.post(PathUtil.getPath('postSubmit'), _this.formData).then(function(res) {
        _this.submitStatus = false;
        _this.$emit('accSubmit'); // 显示提交成功
      }).catch(function(err) {
        alert('提交失败');
        console.log(err);
      });
    },

    //  获取验证码事件
    getVerification() {
      const _this = this;
      _this.$http.get(PathUtil.getPath('getVerification'), {
        params:{
          phone: _this.formData.phone
        }
      }).then(function(res) {
        if (res.data.success) {
          _this.submitStatus = true;
          _this.verificationDis = true;
          _this.Interval = setInterval(_this.authGet, 1000);
          $('.verification').val('').focus();
        } else {
          _this.authCodeInput = '重新获取'
        }
      }).catch(function(err) {
        _this.authCodeInput = '重新获取'
      })
    },

    // 验证码验证
    validationVerification(val) {
      const _this = this;
      _this.$http.get('../../../ossweb-img/mock/verification.json').then(function(res) {

      }).catch(function(err) {

      })
    },

    // 倒计时状态
    authGet: function() {
      console.log('authGet');
      var _this = this;
      if (_this.timer == 0) {
        _this.timer = 60;
        _this.verificationDis = false;
        _this.authCodeInput = '获取验证码';
        console.log(_this.timer);
        _this.disabled = false;
        clearInterval(_this.Interval);
      } else {
        _this.timer--;
        _this.authCodeInput = '已发送(' + _this.timer + ')';
      }
    },
  }
}
</script>
<style lang="scss">
.get,
.submit {
  cursor: pointer;
}

@import "./index.scss";
</style>
