<template>
  <div id="all-work" class="content">
    <div class="content-title">
      <div class="first-title">全部作品</div>
      <div class="second-title blue-font">ALL WORKS</div>
    </div>
    <div class="info scroll">
      <ul class="items">
        <li class="item" v-for="(item, index) in workItems" @click="gotoInfo(item)">
          <img :src=item.img alt="">
          <div class="link">
            <p>{{item.title}}</p>
            <br>
            <p>作者：{{item.author}}</p>
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
      this.getWorkItems();
    },
    data(){
      return{
        workItems: Array
      }
    },
    methods:{
      // 获取作品列表信息
      getWorkItems(){
        const _this = this;
        this.$http.get(PathUtil.getPath('getWorkItems')).then(function(res){
          console.log(res.data);
          if (res.data.success) {
            _this.workItems = res.data.obj.result;
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
        this.$router.push({path:'/workinfo', query:{"vid": item.vid,'from':'allWorks'}});

        // 正式环境替换为资讯详情页面路径
        // this.$router.push({path:item.link});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>
