<template>
  <div id="submit" class="success">
    <div class="close" @click="undis"></div>
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/submit-success.jpg" alt="">
    <div class="submit-mask"></div>
  </div>
</template>
<script>

export default{
  name:'submit',
  data(){
    return{

    }
  },
  methods:{
    undis(){
      this.$emit('undisSubmit');
    }
  }
}
</script>
<style lang="scss">
  #submit{
    width:690px;
    height:480px;
    position: fixed;
    top:50%;
    left:50%;
    margin-top: -240px;
    margin-left: -345px;
    z-index:999;
    img{
      width:100%;
      height:100%;
    }
    .submit-mask{
      background-color: #000;
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index: -1;
      opacity: 0.75;
    }
    .close{
      width: 40px;
      height: 40px;
      background-color: #0D1A46;
      position: absolute;
      top: -45px;
      right: -45px;
      &:before{
        content: "";
        display: block;
        position: absolute;
        width: 80%;
        height:2px;
        background-color: #fff;
        transform: rotateZ(45deg);
        top:19px;
        left:4px;
      }
      &:after{
        content: "";
        display: block;
        position: absolute;
        width: 80%;
        height:2px;
        background-color: #fff;
        transform: rotateZ(-45deg);
        top:19px;
        left:4px;
      }
    }
  }
</style>