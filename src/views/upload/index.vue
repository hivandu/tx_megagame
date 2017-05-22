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
          <label for="">个人QQ</label>
          <input type="text" v-model="formData.personQQ" placeholder="请输入QQ号码" required>
        </div>
        <div class="form-line">
          <label for="">姓名</label>
          <input type="text" v-model="formData.name" required>
        </div>
        <div class="form-line">
          <label for="">高校名称</label>
          <input type="text" v-model="formData.colleges" required>
        </div>
        <div class="form-line">
          <label for="">年级</label>
          <input type="text" v-model="formData.grade" required>
        </div>
        <div class="form-line">
          <label for="">专业</label>
          <input type="text" v-model="formData.pro" required>
        </div>
        <div class="form-line">
          <label for="">手机</label>
          <input type="text" v-model="formData.phone" placeholder="请输入11位手机号码" required>
        </div>
        <div class="form-line">
          <label for="">验证码</label>
          <input type="text" placeholder="请先获取验证码" :disabled="!verificationDis" v-model="verification" class="verification">
          <input :value="authCodeInput" type="button" class="get" @click="getVerificationFun" :disabled="!getVerification">
        </div>
        <div class="form-line">
          <label for="">邮箱</label>
          <input type="text" v-model="formData.mail" required>
        </div>
        <div class="form-line judgment">
          <div class="title second-title blue-font" for="">团队信息</div>
          <div>团队信息只能由队长填写，你是否为队长？</div>
          <input type="radio" id="captain" value="true" v-model="picked">
          <label for="captain">是</label>
          <input type="radio" id="uncaptain" value="false" v-model="picked">
          <label for="uncaptain">否</label><span v-show="picked=='true'" class="blue-font">以下为必填项</span>
        </div>
        <div v-show="picked=='true'">
          <div class="form-line">
            <label for="">队长QQ</label>
            <input type="text" :disabled="picked != 'true'" v-model="formData.captainQQ" placeholder="请输入10位QQ号码" :required="picked == 'true'">
          </div>
          <div class="form-line">
            <label for="">团队名称</label>
            <input type="text" v-model="formData.teamName" :disabled="picked != 'true'" :required="picked == 'true'">
          </div>
          <div class="form-line">
            <label for="">团队成员</label>
            <input type="text" v-model="formData.members" placeholder="团队成员须先注册，之后输入成员QQ号即可，多个成员用:隔开" :disabled="picked != 'true'" :required="picked == 'true'">
          </div>
          <div class="form-line">
            <label for="">团队介绍</label>
            <textarea name="" id="" cols="30" rows="5" v-model="formData.teamInfo" :disabled="picked != 'true'" :required="picked == 'true'"></textarea>
          </div>
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
  props: ['user'],
  watch: {
    formData: {
      deep: true,
      handler: function(val, oldVal) {
        const _this = this;
        if(val.phone){
          console.log(val.phone);
          _this.getVerification = true;
        }
      }
    },
    picked(val){
      if (val == 'false') {
        this.formData.captainQQ = '',
        this.formData.teamName = '',
        this.formData.members = '',
        this.formData.teamInfo = ''
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
  mounted(){
    if (!userStatus) {
      this.$router.back();
    }
  },
  data() {
    return {
      formData: {
        personQQ: '',
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
      submitStatus: false,
      getVerification: false,
      picked: 'false',

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
    getVerificationFun() {
      const _this = this;
      _this.$http.get(PathUtil.getPath('getVerification'), {
        params: {
          phone: _this.formData.phone
        }
      }).then(function(res) {
        if (res.data.success) {
          // _this.submitStatus = true;
          _this.verificationDis = true;
          _this.Interval = setInterval(_this.authGet, 1000);
          $('.verification').val('').focus();
        } else {
          _this.authCodeInput = '重新获取'
        }
      }).catch(function(err) {
        _this.authCodeInput = '重新获取'
        console.log(err);
      })
    },

    // 验证码验证
    validationVerification(val) {
      const _this = this;
      _this.$http.get(PathUtil.getPath('getVerification')).then(function(res) {
        if (res.data.success) {
          _this.submitStatus = true;
        }else{
          _this.submitStatus = false;
        }
      }).catch(function(err) {
        _this.submitStatus = false;
        console.log(err);
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
