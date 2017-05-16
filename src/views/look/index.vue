<template>
  <div id="look-first" class="wrap-look">
    <div class="content-title">
      <div class="title-1">上传作品</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-upload.png" alt="">
      </div>
    </div>
    <div class="info">
      <div class="title">
        团队信息登记，队长录入信息后，其他队员登录对应QQ后可以直接查看（团队成员无法修改团队信息和上传作品）。
      </div>
      <form action="index_submit" method="get" accept-charset="utf-8">
        <div class="form-line"><label for="">队长QQ</label><input type="text" disabled :value="formData.captainQQ"></div>
        <div class="form-line"><label for="">姓名</label><input type="text" disabled :value="formData.name"></div>
        <div class="form-line"><label for="">高校名称</label><input type="text" disabled :value="formData.colleges"></div>
        <div class="form-line"><label for="">年级</label><input type="text" disabled :value="formData.grade"></div>
        <div class="form-line"><label for="">专业</label><input type="text" disabled :value="formData.pro"></div>
        <div class="form-line"><label for="">手机</label><input type="text" disabled :value="formData.phone" ></div>
        <div class="form-line"><label for="">邮箱</label><input type="text" disabled :value="formData.mail"></div>
        <div class="form-line"><label for="">团队名称</label><input type="text" disabled :value="formData.teamName"></div>
        <div class="form-line"><label for="">团队成员</label><input type="text" disabled :value="formData.members"></div>
        <div class="form-line"><label for="">团队介绍</label><textarea name="" id="" cols="30" rows="5" disabled :value="formData.teamInfo"></textarea></div>

        <!-- 如果需要使用默认form表单提交，去掉@click的prevent属性 -->
        <div class="form-line submit"><label for=""></label><input type="submit" class="next" value="提交" @click.prevent="gotoNext()"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default{
    name:'upload-first',
    mounted(){
      let _data = sessionStorage.formData;
      this.formData = JSON.parse(_data);
    },
    data(){
      return{
        formData:{}
      }
    },
    methods:{
      gotoNext(){
        this.$http.post('path/to', {
          formData: this.formData
        }).then(function(res){
          // success
        }).catch(function(err){
          // error
        })

        // 转到下一个上传组件
        this.$router.push({path:'/uploadSec'});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>