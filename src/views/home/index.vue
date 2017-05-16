<template>
  <div id="home" class="content">
    <div class="logo">
      <img src="../../../ossweb-img/image/LOGO.png" alt="">
    </div>
    <div class="bg-front" v-show="navBgShow"></div>
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
