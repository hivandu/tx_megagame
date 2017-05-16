<template>
  <div class="goto" @click="route()">
    {{buttonText}}
  </div>
</template>
<script>
  export default{
    name:'goto',
    props:['buttonText', 'path'],
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