<template>
  <div id="all-work" class="content">
    <div class="content-title">
      <div class="title-1">全部作品</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-work.png" alt="">
      </div>
    </div>
    <div class="info scroll">
      <ul class="items">
        <li class="item" v-for="(item, index) in workItems" @click="gotoInfo(item)">
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
        this.$http.get('../../../ossweb-img/mock/work.json').then(function(res){
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
        this.$router.push({path:'/workinfo'});

        // 正式环境替换为资讯详情页面路径
        // this.$router.push({path:item.link});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>
