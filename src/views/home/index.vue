<template>
  <div id="home" class="content">
    <div class="logo">
      <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/LOGO.png" alt="">
    </div>
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/console-boat.png" alt="" class="console-boat">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/headset.png" alt="" class="headset">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/riflemen.png" alt="" class="riflemen">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/robot-2.png" alt="" class="robot-2">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/tablets.png" alt="" class="tablets">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/keyboard.png" alt="" class="keyboard">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/plane.png" alt="" class="plane">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/planet.png" alt="" class="planet">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/robot.png" alt="" class="robot">
    <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/bg-nav.png" alt="" class="bg-front" v-show="navBgShow">
    <!-- <div class="bg-front" v-show="navBgShow"></div> -->
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      navBgShow: true
    }
  }
}
</script>
<style lang="scss">
@import './index.scss'
</style>
