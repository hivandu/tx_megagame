<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="first-title">活动资讯</div>
      <div class="second-title blue-font">INFORMATION</div>
    </div>
    <div class="info scroll">
      <div class="nav-guide"><span @click="$router.back();">活动资讯</span><span> » </span> <span class="blue-font">资讯详情</span></div>
      <p v-for="(item, key) in info.infoFirst">{{item}}</p>
      <img :src="info.img" height="360" width="658" alt="">
      <p v-for="(item, key) in info.infoSec">{{item}}</p>
    </div>
  </div>
</template>
<script>
export default{
  name:'activity-info',
  data(){
    return{
      info: '',
      id:''
    }
  },
  created(){
    this.id = this.$route.query.id;
    this.getActivityInfo();
  },
  methods:{
    getActivityInfo(){
      const _this = this;
      _this.$http.get(PathUtil.getPath('getActivity'),{
        params:{
          id:_this.id
        }
      }).then(function(res){
        if (res.data.success) {
          _this.info = res.data.obj.result;
        }
      }).catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
