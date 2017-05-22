<template>
  <div id="activity-items" class="content">
    <div class="content-title">
      <div class="first-title">活动资讯</div>
      <div class="second-title blue-font">INFORMATION</div>
    </div>
    <div class="info scroll">
      <ul class="items">
        <li class="item" v-for="(item, index) in activityItems" @click="gotoInfo(item)">
          <img :src=item.img alt="">
          <div class="link">
            <a href="javascript:;">{{item.title}}</a>
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
        const _this = this;
        this.$http.get(PathUtil.getPath('getActivityItems')).then(function(res){
          console.log(res.data);
          if (res.data.success) {
            _this.activityItems = res.data.obj.result;
          }else{
            alert('error');
          }
        }).catch(function(err){
          console.log(err);
        })
      },

      // 转到详情页
      gotoInfo(item){
        console.log('goto click');
        this.$router.push({path:'/activityInfo', query:{"id": item.id}});
        // 正式环境替换为资讯详情页面路径
        // this.$router.push({path:item.link});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>
