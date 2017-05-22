<template>
  <div class="goto" @click="route()">
    {{buttonText}}
  </div>
</template>
<script>
  export default{
    name:'goto',
    props:['buttonText', 'path', 'user'],
    watch:{
      $route(val){
        if (val.query.from == 'allWorks') {
          $('.button.all').addClass('changed');
        }else if (val.path == '/allWorks'){
          $('.button.all').addClass('changed');
        }else {
          $('.button.all').removeClass('changed');
        }
      }
    },
    mounted(){
      if (this.$route.query.from == 'allWork') {

      }
    },
    data(){
      return{
      }
    },
    methods:{
      route(){
        const _this = this;
        if (_this.path == '/allWorks') {
          _this.$router.push({path: this.path});
        }else{
          console.log(_this.user);
          if (userStatus) {
            this.$router.push({path: this.path});
          }else{
            alert('请先登录');
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>