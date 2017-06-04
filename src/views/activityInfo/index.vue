<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="first-title">活动资讯</div>
      <div class="second-title blue-font">INFORMATION</div>
    </div>
    <div class="info scroll">
      <div class="nav-guide"><span @click="$router.back();">活动资讯</span><span> » </span> <span class="blue-font">资讯详情</span></div>
      <img :src="info.infoImg" height="360" width="658" alt="">
      <p v-html="info.inforContent"></p>
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
    this.getActivityInfo(this.id);
  },
  methods:{
    getActivityInfo(id){
      const _this = this;
      console.log(id)
      let _id = id+'';
      let _last = _id.charAt(_id.length-1);
      console.log(_last);
      $.ajax({
        type:'get',
        async: false,
        url: 'http://itea-cdn.qq.com/file/tglStatic/details/434/'+_last+'/art'+_id+'.js',
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback:'json'+_id+'callback',
        success: function(res){
          console.log(res);
          _this.info = res;
        },
        error: function(err){
          console.log(err);
        }
      })
      // _this.$http.get(PathUtil.getPath('getActivity'),{
      //   params:{
      //     id:_this.id
      //   }
      // }).then(function(res){
      //   console.log(res.data);

      //   let _fun = new Function('var _obj ='+res.data+'; return _obj');
      //   console.log(_fun());
      // }).catch(function(err){
      //   console.log(err);
      // })
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
