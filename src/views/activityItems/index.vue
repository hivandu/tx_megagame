<template>
  <div id="activity-items" class="content">
    <div class="content-title">
      <div class="first-title">活动资讯</div>
      <div class="second-title blue-font">INFORMATION</div>
    </div>
    <div class="info scroll">
      <ul class="items">
        <li class="item" v-for="(item, index) in activityItems" @click="gotoInfo(item)">
          <img :src=item.iInfoImg alt="">
          <div class="link">
            <a href="javascript:;">{{item.sInfoTitle}}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:"activity-items",
    mounted(){
      this.getActivityItems();
    },
    data(){
      return{
        activityItems: Array
      }
    },
    methods:{
      // 获取资讯信息
      getActivityItems(){
        console.log('getActivityItems');
        const _this = this;
        this.$http.get('http://tgl.qq.com/api/tglStatic/list/search.js',{
          params:{
            gid: 434,
            artType: 1,
            from: 'pweb',
            cid: 'all',
            pagesize:20,
            page: 1
          }
        }).then(function(res){
          let _fun = new Function('var _res ='+res.data+'; return _res');
          let _res = _fun();
          if (_res.status == 0) {
            _this.activityItems = _res.msg.result;
          }else{
            console.log('error');
          }
        }).catch(function(err){
          console.log(err);
        })
      },

      // 转到详情页
      gotoInfo(item){
        console.log(item);
        this.$router.push({path:'/activityInfo', query:{"id":item.iInfoId}});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>
