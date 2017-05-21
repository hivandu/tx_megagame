<template>
  <div class="goto" @click="route()">
    {{buttonText}}
  </div>
</template>
<script>
  export default{
    name:'goto',
    props:['buttonText', 'path'],
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
        this.$router.push({path: this.path});
      }
    }
  }
</script>
<style lang="scss">
  @import "./index.scss";
</style>