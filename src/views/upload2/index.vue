<template>
  <div id="upload-sec" class="wrap-upload">
    <div class="content-title">
      <div class="title-1">上传作品</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-upload.png" alt="">
      </div>
    </div>
    <div class="info">
      <div class="title">
        作品信息录入
      </div>
      <form action="index_submit" @submit.prevent="gotoNext" method="get" accept-charset="utf-8">
        <div class="form-line">
          <label for="">标题</label>
          <input type="text" v-model="formData.title" placeholder="不超过20字">
        </div>
        <div class="form-line">
          <label for="">作品简介</label>
          <textarea v-model="formData.textarea" name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div class="form-line fileUp">
          <label for="">封面</label>
          <input class="image" type="file" name="file" v-on:change="selectImg" accept="image/png,image/gif,image/jpg">
          <div class="fileAdd">添加</div>
          <div class="cover"></div>
        </div>
        <div class="form-line fileUp">
          <label for="">PPT</label>
          <input type="file" name="file" accept="application/vnd.ms-powerpoint" v-on:change="selectPPT">
          <div class="fileAdd">添加</div>
          <p class="instructions">支持PDF格式 ，文件名称只支持英文和数字命名</p>
        </div>
        <div class="form-line fileUp">
          <label for="">视频</label>
          <input type="text" v-model="formData.video" placeholder="输入默认视频地址">
          <p class="instructions">复制腾讯视频分享</p>
        </div>
        <div class="form-line fileUp">
          <label for="">DEMO</label>
          <input type="file" name="file" accept="application/x-zip-compressed" v-on:change="selectFile">
          <div class="fileAdd">添加</div>
          <p class="instructions">上传格式zip压缩包</p>
        </div>
        <!-- 如果需要使用默认form表单提交，去掉@click的prevent属性 -->
        <div class="form-line submit">
          <input type="submit" class="next" value="下一步" @click="gotoNext">
          <input type="submit" class="submit" value="确认提交" @click="gotoHome">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import VueBase64FileUpload from 'vue-base64-file-upload';

export default {
  name: 'upload-second',
  watch: {
    ppt(val) {
      console.log(val)
    }
  },
  data() {
    return {
      ppt: null,
      formData: {
        title: '',
        textarea: '',
        image: '',
        file:'',
        ppt:'',
        video:''
      }
    }
  },
  methods: {
    // 下一页
    gotoNext(event) {
      this.$router.push({path:'/lookSec'})
    },

    gotoHome(){
      this.$router.push({path:'/home'});
    },

    submitForm(event) {
      const _this = this;
      const _formData = new FormData(event.target);
      this.$http.post('/path/to', {
        _formData
      }).then(function(res){
        alert('提交成功');
      }).catch(function(err) {
        alert('提交失败');
        console.log(err);
      });
    },

    selectImg(event) {
      this.formData.image = event.target.value;
      console.log(event.target.value);
    },

    selectPPT(event) {
      this.formData.ppt = event.target.value;
      console.log(event.target.value);
    },

    selectFile(event) {
      this.formData.file = event.target.value;
      console.log(event.target.value);
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
