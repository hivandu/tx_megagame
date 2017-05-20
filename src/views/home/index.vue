<template>
  <div id="home" class="content">
    <div class="logo">
      <img src="../../../ossweb-img/image/LOGO.png" alt="">
    </div>
    <img src="ossweb-img/image/console-boat.png" alt="" class="console-boat">
    <img src="ossweb-img/image/headset.png" alt="" class="headset">
    <img src="ossweb-img/image/riflemen.png" alt="" class="riflemen">
    <img src="ossweb-img/image/robot-2.png" alt="" class="robot-2">
    <img src="ossweb-img/image/tablets.png" alt="" class="tablets">
    <img src="ossweb-img/image/keyboard.png" alt="" class="keyboard">
    <img src="ossweb-img/image/plane.png" alt="" class="plane">
    <img src="ossweb-img/image/planet.png" alt="" class="planet">
    <img src="ossweb-img/image/robot.png" alt="" class="robot">
    <img src="ossweb-img/image/bg-nav.png" alt="" class="bg-front" v-show="navBgShow">
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
