<template>
  <div id="submit-success" class="success">
    <div class="close" @click="undis"></div>
    <div class="success-text">{{text}}</div>
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/submit-success.jpg" alt="">
    <div class="submit-mask"></div>
  </div>
</template>
<script>

export default{
  name:'submit',
  props:['text'],
  data(){
    return{

    }
  },
  methods:{
    undis(){
      this.$emit('undisSubmit');
      this.$router.push({path:'/home'})
    }
  }
}
</script>
<style lang="scss">
  #submit-success{
    width:520px;
    height:350px;
    position: fixed;
    top:50%;
    left:50%;
    // transform: translate(-50%, -50%);
    margin-top: -175px;
    margin-left: -260px;
    z-index:9999999;
    img{
      width:100%;
      height:100%;
    }
    .success-text{
      position: absolute;
      top:65%;
      left:50%;
      transform: translateX(-50%);
      font-size: 24px;
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