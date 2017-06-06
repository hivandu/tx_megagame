<template>
  <div id="upload-first" class="wrap-upload" ref="upload">
    <t-submit v-show="display" :text="successText" v-on:undisSubmit="undisSubmit"></t-submit>
    <div class="content-title">
      <div class="first-title">上传作品及报名</div>
      <div class="second-title blue-font">UPLOAD WORKS AND SIGN UP</div>
    </div>
    <div class="info">
      <div>报名须知：本届大赛支持团队报名，每个团队人数最多不能超过五人，个人信息可自行填写和修改，团队信息需队长填写和修改。</div>
      <form @submit.prevent="submitForm($event)" action="index_submit" method="get" accept-charset="utf-8">
        <div class="form-line judgment">
          <div class="title second-title blue-font" for="">个人信息</div><span>{{isToSigned}}</span>
        </div>
        <div class="form-line">
          <label for="">个人QQ</label>
          <input type="text" id="login_qq_span" v-model="personData.personQQ" readonly @click="changePersonQQ">
        </div>
        <div class="form-line">
          <label for="">姓名</label>
          <input id="name" type="text" v-model="personData.name" required :disabled="!inputCanChange">
        </div>
        <div class="form-line">
          <label for="">高校名称</label>
          <input id="college" type="text" v-model="personData.colleges" required :disabled="!inputCanChange">
        </div>
        <div class="form-line">
          <label for="">年级</label>
          <input id="grade" type="text" v-model="personData.grade" required :disabled="!inputCanChange">
        </div>
        <div class="form-line">
          <label for="">专业</label>
          <input id="special" type="text" v-model="personData.special" required :disabled="!inputCanChange">
        </div>
        <div class="form-line">
          <label for="">手机</label>
          <input id="mobile" @focus="delError('phone')" type="text" v-model="personData.phone" placeholder="请输入11位手机号码" required :readonly="verificationDis" :disabled="!inputCanChange">
        </div>
        <div class="form-line" v-if="!signed">
          <label for="">验证码</label>
          <input type="text" placeholder="请先获取验证码" v-model="verification" class="verification" :disabled="!verificationDis">
          <input :value="authCodeInput" type="button" class="get" @click="getVerificationFun" :disabled="!getVerification">
        </div>
        <div class="form-line">
          <label for="">邮箱</label>
          <input id="email" @focus="delError('mail')" @blur="checkemail(personData.mail)" type="text" v-model="personData.mail" required :disabled="!inputCanChange">
        </div>
        <div class="form-line judgment">
          <div class="title second-title blue-font" for="">团队信息</div>
          <div>{{uHaveTeamText}}</div>
          <div v-show="canChangeCaptale">
            <input type="radio" id="captain" value="true" v-model="picked" :disabled="!inputCanChange">
            <label for="captain">是</label>
            <input type="radio" id="uncaptain" value="false" v-model="picked" :disabled="!inputCanChange">
            <label for="uncaptain">否</label><span v-show="isCaptale" class="blue-font">以下为必填项</span>
          </div>
        </div>
        <div v-show="isHaveTeam || isCaptale">
          <div class="form-line">
            <label for="">队长QQ</label>
            <input id="captaleqq" type="text" :disabled="!teamInfoCanChange" v-model="teamData.captaleQQ" placeholder="请输入10位QQ号码" :required="picked == 'true'">
          </div>
          <div class="form-line">
            <label for="">团队名称</label>
            <input id="teamname" type="text" v-model="teamData.teamName" :disabled="!teamInfoCanChange" :required="picked == 'true'">
          </div>
          <div class="form-line">
            <label for="">团队成员</label>
            <input type="text" class="teammeber first" placeholder="输入成员QQ号" :disabled="!teamInfoCanChange" v-model="teamData.members[0]">
            <input type="text" class="teammeber" placeholder="输入成员QQ号" :disabled="!teamInfoCanChange" v-model="teamData.members[1]">
            <input type="text" class="teammeber" placeholder="输入成员QQ号" :disabled="!teamInfoCanChange" v-model="teamData.members[2]">
            <input type="text" class="teammeber" placeholder="输入成员QQ号" :disabled="!teamInfoCanChange" v-model="teamData.members[3]">
          </div>
          <div class="form-line">
            <label for="">团队介绍</label>
            <textarea id="teamabstract" name="" cols="30" rows="5" v-model="teamData.teamInfo" :disabled="!teamInfoCanChange" :required="picked == 'true'"></textarea>
          </div>
        </div>
        <!-- 如果需要使用默认form表单提交，去掉@click的prevent属性 -->
        <div class="form-line submit">
          <label for=""></label>
          <input type="submit" class="next" :value="submitText" :disabled="!submitStatus">
          <a target="_blank" href="http://down.qq.com/yxgw/DescriptionFile.7z" class="download">下载上传作品说明</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import tSubmit from '../../components/submit'

export default {
  name: 'upload',
  components: {
    tSubmit
  },
  watch: {
    teamData: {
      deep: true,
      handler: function(val) {
        const _this = this;
        let _m = val.members; // 赋值团队成员
        let _q = val.captaleQQ;
        for (var i = 0; i < _m.length; i++) {

          // 判断成员QQ是否与队长Q一样
          if (_m[i] == val.captaleQQ) {
            _this.membersHaveCaptale = true;
            _m[i] = '';
          }

          // 判断团队成员QQ是否为数字
          if (_m[i] != null && _m[i] != '') {
            if (!isNaN(_m[i])) {} else {
              alert('请输入数字');
              _m[i] = '';
            }
          }
          // 循环判断是否重复QQ
          for (var j = 0; j < _m.length; j++) {
            if (i != j && _m[i] != '') {
              if (_m[i] == _m[j]) {
                alert('重复QQ' + _m[i]);
                _m[j] = '';
              }
            }
          }
        };
        if (_q != null && _q != '') {
          if (!isNaN(_q)) {} else {
            alert('请输入数字');
            val.captaleQQ = '';
          }
        }
        console.log(_m);
        _this.haveChange = true;
      }
    },
    personData: {
      deep: true,
      handler: function(val) {
        const _this = this;
        _this.haveChange = true;
      }
    },
    membersHaveCaptale(val) {
      if (val) {
        alert('团队成员不需要包含队长QQ');
        val = false;
        console.log(this.membersHaveCaptale);
      } else {

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
    },
    picked(val) {
      if (val == 'true') {
        this.isCaptale = 1;
        this.setTeamInfoCanChange();
        this.setCanChangeCaptale();
      } else {
        this.isCaptale = 0;
        this.setTeamInfoCanChange();
        this.setCanChangeCaptale();
      }
    },
    inputCanChange(val) {
      this.setTeamInfoCanChange();
      this.setCanChangeCaptale();
    }
  },
  mounted() {
    this.miloReady();
  },
  data() {
    return {
      personData: {
        personQQ: '',
        name: '',
        colleges: '',
        grade: '',
        special: '',
        phone: '',
        mail: ''
      },

      teamData: {
        captaleQQ: '',
        members: [],
        teamName: '',
        teamInfo: ''

      },

      userStatus: false,
      verification: '',
      getVerification: true, // 是否可以获取验证码
      verificationDis: false, // 控制验证码是否可输入
      authCodeInput: '获取验证码',
      Interval: null,
      timer: 60,
      timeStatus: false,

      signed: false,
      isToSigned: '以下为必填项',
      submitStatus: false,
      picked: 'false',
      submitText: '提交',
      inputCanChange: true,
      isCaptale: 0,
      isHaveTeam: 0,
      canChangeCaptale: true,
      teamInfoCanChange: true,
      display: false,
      successText: '报名信息提交成功',

      membersHaveCaptale: false,
      memberHaveFour: true,

      haveChange: false,

      haveTeam: false,
      haveTeamName: '',
      haveTeamInfo: '',
      uHaveTeamText: '团队信息只能由队长填写 , 您是否为队长',

      path: '',

      isInOtherTeam: false
    }
  },
  methods: {
    miloReady() {
      const _this = this;
      _this.path = _this.$route.path;
      console.log(_this.path);
      milo.ready(function() {

        need("biz.login-min", function(LoginManager) {
          LoginManager.checkLogin(function() {
            _this.personData.personQQ = LoginManager.getUserUin(); //获取QQ号
            _this.teamData.captaleQQ = _this.personData.personQQ;
            console.log(_this.personData.personQQ);
            LoginManager.getNickName(function(loginInfo) {
              if (loginInfo.isLogin) {
                _this.userStatus = true;
                g("login_nickname_span").innerHTML = loginInfo.nickName;
                _this.getPlayerInfo();
              } else {
                _this.$router.back();
                _this.userStatus = false;
              }
              key = 1;
            });
          });
        });
      });
    },

    // 提交表单事件
    submitForm() {
      const _this = this;
      console.log(this.picked);

      // 先判断邮箱是否正确
      var _mail = _this.checkemail(_this.personData.mail);
      if (_mail) {
        if (_this.inputCanChange) {
          if (_this.haveChange) {
            _this.addPlayerInfo();
          } else {
            alert('您未做任何修改！');
          }
        } else {
          _this.inputCanChange = true;
          _this.submitText = '提交修改信息';
          _this.successText = '修改信息提交成功';
        }
      }
    },

    // 显示提交成功失败
    subSuccess(e) {
      console.log('subSuccess');
      this.display = true;
    },

    // 隐藏显示成功按钮
    undisSubmit() {
      this.display = false
    },

    //  获取验证码事件
    getVerificationFun() {
      const _this = this;

      if (this.checkPhone()) {
        _this.$http.get('http://apps.game.qq.com/qqgame/act/charlieben/tfol_sendSMSVerityCode.php', {
          params: {
            uin: _this.personData.personQQ,
            phone: _this.personData.phone
          }
        }).then(function(res) {
          const adder = new Function(res.data + '; return adCGIRet;')
          const _obj = adder();
          console.log(_obj);
          if (_obj.retCode == 0) {
            _this.verificationDis = true;
            _this.getVerification = false;
            _this.Interval = setInterval(_this.authGet, 1000);
          } else {
            let _info = decodeURIComponent(_obj.retInfo)
            alert(_info);
            _this.authCodeInput = '重新获取'
          }
        }).catch(function(err) {
          _this.authCodeInput = '重新获取'
          console.log(err);
        })
      } else {
        $('#mobile').addClass('input-error');
      }
    },

    // 验证码验证
    validationVerification(val) {
      const _this = this;
      _this.$http.get('http://apps.game.qq.com/qqgame/act/charlieben/tfol_checkSMSVerifyCode.php', {
        params: {
          uin: _this.personData.personQQ,
          phone: _this.personData.phone,
          code: val
        }
      }).then(function(res) {
        const adder = new Function(res.data + '; return adCGIRet;')
        const _obj = adder();
        console.log(_obj);
        _this.submitStatus = false;
        if (_obj.retCode == 0) {
          _this.verificationDis = false;
          _this.submitStatus = true;
        } else {
          let _info = decodeURIComponent(_obj.retInfo)
          alert(_info);
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
        _this.getVerification = true;
        _this.authCodeInput = '获取验证码';
        console.log(_this.timer);
        _this.disabled = false;
        clearInterval(_this.Interval);
      } else {
        _this.timer--;
        _this.authCodeInput = '已发送(' + _this.timer + ')';
      }
    },

    // 验证手机号
    checkPhone() {
      const _this = this;
      let _phone = _this.personData.phone;
      if (!(/^1[34578]\d{9}$/.test(_phone))) {
        return false;
      } else {
        return true;
      }
    },

    // 删除错误提示
    delError(type) {
      if (type == "phone") {
        $('#mobile').removeClass('input-error');
      } else if (type = "mail") {
        $('#email').removeClass('input-error');
      }
    },

    // 判断邮箱
    checkemail(mail) {
      const _this = this;
      console.log(mail);
      if (mail != "") {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        let isok = reg.test(mail);
        if (!isok) {
          $('#email').addClass('input-error');
          return false;
        } else {
          return true;
        }
      }
    },

    // 提交用户信息
    addPlayerInfo() {
      const _this = this;
      _this.$http.post('http://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/playerImfInsert', {
        qq: encodeURIComponent(_this.personData.personQQ),
        name: encodeURIComponent(_this.personData.name),
        tel: encodeURIComponent(_this.personData.phone),
        school: encodeURIComponent(_this.personData.colleges),
        grade: encodeURIComponent(_this.personData.grade),
        special: encodeURIComponent(_this.personData.special),
        email: encodeURIComponent(_this.personData.mail)
      }).then(function(res) {
        if (res.data.iRet == 0) {
          if (res.data.jData.changeNum >= 1) {
            if (_this.isCaptale) {

              // 先进行判断是否能够提交团队信息
              _this.judgeTeamInfo();
            } else {
              _this.subSuccess();
              setTimeout(function() {
                _this.$router.push({
                  path: '/home'
                })
              }, 5000);
            }
          } else {
            alert(decodeURIComponent(res.data.sMsg));
          }
        } else {
          alert(decodeURIComponent(res.data.sMsg));
        }
      }).catch(function(err) {
        console.log(err);
      })
    },

    // 提交团队信息
    addTeamInfo(val) {
      const _this = this;
      _this.$http.post('http://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/teamImfInsert', {
        captaleqq: encodeURIComponent(_this.teamData.captaleQQ),
        teamname: encodeURIComponent(_this.teamData.teamName),
        teammember: val,
        teamabstract: encodeURIComponent(_this.teamData.teamInfo)
      }).then(function(res) {
        if (res.data.iRet == 0) {
          if (res.data.jData.changeNum >= 1) {
            _this.subSuccess();
            setTimeout(function() {
              _this.$router.push({
                path: '/home'
              })
            }, 5000);
          } else {
            alert(decodeURIComponent(res.data.sMsg));
          }
        } else {
          alert(decodeURIComponent(res.data.sMsg));
        }
      }).catch(function(err) {
        console.log(err);
      })
    },

    // 判断是否能提交团队信息
    judgeTeamInfo() {
      const _this = this;

      // 去除数组中的空值
      let _m = _this.teamData.members.filter(function(n) {
        return n
      });
      console.log(_m);

      // 转化成字串
      let _members = _m.join(';');
      console.log(_members)

      _this.$http.post('http://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/isInOtherTeam', {
        qq: encodeURIComponent(_this.teamData.captaleQQ),
        teammember: _members
      }).then(function(res) {
        if (res.data.iRet == 0) {

          // 判断是否能够对团队信息进行修改
          if (res.data.jData.isInOtherTeam != 1) {
            // 执行团队信息提交
            _this.addTeamInfo(_members);
          } else {
            alert(res.data.sMsg);
            return false;
          }
        }
      }).catch(function(err) {
        console.log(err);
        alert('未知错误，请重试！');
      })
    },

    // 获取用户信息
    getPlayerInfo() {
      const _this = this;
      _this.$http.get('http://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/getPlayerImf', {
        params: {
          qq: _this.personData.personQQ
        }
      }).then(function(res) {
        if (res.data.iRet == 0) {
          let _data = (res.data.jData);
          let _res = decodeURIComponent(_data.userImfList);
          console.log(_res);
          if (_res != 0) {
            _this.signed = true;
            _this.submitStatus = true;
            _this.inputCanChange = false;
            _this.submitText = '修改信息';
            _this.isToSigned = '您已报名成功';
            if (_data.isCaptale == 1) {
              _this.picked = 'true';
              _this.isCaptale = 1;
              _this.teamData.captaleQQ = _this.personData.personQQ;
            } else {
              _this.picked = 'false'
            }
          }
          if (_data.isHaveTeam == 1) {
            debugger;
            _this.isHaveTeam = 1;
            _this.getTeamInfo();
          }
          _this.setTeamInfoCanChange();
          _this.setCanChangeCaptale();
          _res = _res.split('|');
          _this.personData.name = _res[1];
          _this.personData.colleges = _res[2];
          _this.personData.grade = _res[3];
          _this.personData.special = _res[4];
          _this.personData.phone = _res[5];
          _this.personData.mail = _res[6];
          if (!_this.personData.colleges) {
            _this.submitText = '提交';
            _this.signed = false;
            _this.inputCanChange = true;
            _this.submitStatus = false;
          }
          setTimeout(function() {
            _this.haveChange = false;
          }, 2000);
          console.log(_res);
        } else {
          alert(decodeURIComponent(res.data.sMsg))
        }
      }).catch(function(err) {
        console.log(err);
      })
    },


    // 获取团队信息
    getTeamInfo() {
      const _this = this;
      _this.$http.get('http://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/getTeamImf', {
        params: {
          qq: _this.personData.personQQ
        }
      }).then(function(res) {
        debugger;
        if (res.data.iRet == 0) {
          if (res.data.jData.teamImfList != 0) {
            _this.haveTeam = true;
            if (_this.isCaptale) {
              _this.uHaveTeamText = '您已成为该团队队长';
            } else {
              _this.uHaveTeamText = '您已成员该团队的一员';
            }
          }
          let _res = decodeURIComponent(res.data.jData.teamImfList)
          console.log(_res);
          _res = _res.split('|');
          _this.teamData.captaleQQ = _res[0];
          _this.teamData.teamName = _res[1];
          _this.haveTeamName = _res[1];
          _this.teamData.members = _res[2];
          _this.teamData.teamInfo = _res[3];
          _this.haveTeamInfo = _res[3];
          _this.teamData.members = _this.teamData.members.split(';');
          console.log(_this.teamData.members);
          console.log(_res);
          setTimeout(function() {
            _this.haveChange = false;
          }, 2000);
        } else {
          alert(decodeURIComponent(res.data.sMsg))
        }
      }).catch(function(err) {
        console.log(err);
      })
    },

    // 判断能否修改团队信息
    setTeamInfoCanChange() {
      if (this.isCaptale && this.inputCanChange == true) {
        debugger;
        this.teamInfoCanChange = 1;
      } else {
        this.teamInfoCanChange = 0;
      }
    },

    // 判断是否可以选择是否为队长
    setCanChangeCaptale() {
      if (this.isHaveTeam) {
        this.canChangeCaptale = 0;
      } else {
        this.canChangeCaptale = 1;
      }
    },

    // 用户想要修改个人QQ号
    changePersonQQ() {
      if (this.userStatus) {
        alert('个人QQ不能修改');
      } else {
        LoginManager.login();
      }
    },

    // 判断是否含有一样的字符串
    // ifSame(item) {
    //   const _this = this;
    //   const _items = _this.teamData.members;
    //   debugger;
    //   for (var i = 0; i < _items.length; i++) {
    //     if (i != item) {
    //       if (_items[item] == _items[i]) {
    //         _this.teamData.members[item] = '';
    //         alert(item);
    //         alert('重复QQ:'+_this.teamData.members[item]);
    //       }
    //     }
    //   }
    // }
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
