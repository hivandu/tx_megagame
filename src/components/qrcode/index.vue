<template>
  <div id="qrcode">
    <div class="qrcode">
      <div class="tab">
        <a href="javascript:;" :class="['tab',qrIndex == 1?'selected':'']" @click="tabClick('1')">快速组队</a><a href="javascript:;" class="tab" @click="tabClick('2')" :class="['tab',qrIndex == 2?'selected':'']">赛事资讯</a>
      </div>
      <div class="content" v-show="qrIndex == 1">
        <div class="qrcode-code">
          <img src="../../../ossweb-img/image/qrcode.jpg" alt="">
        </div>
        <div class="qr-info">
          如果你的团队还缺小伙伴？扫码进群快速加入战队报名参加比赛吧！
        </div>
      </div>
      <div class="content" v-show="qrIndex == 2">
        <div class="qrcode-code">
          <img src="../../../ossweb-img/image/qrcode-2.jpg" alt="">
        </div>
        <div class="qr-info">
          扫码关注“腾讯游戏学院公众号”了解更多赛程资讯，参赛期间如有疑问请在公众号下留言。
        </div>
      </div>
    </div>
    <div class="hoverBtn">
      <div class="qr-thum">
        <img src="../../../ossweb-img/image/qr-thum.png" alt="">
      </div>
      <div class="btnInfo">组队及资讯</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'qrcode',
  data() {
    return {
      qrcodeShow: false,
      qrIndex: 1
    }
  },
  methods: {
    tabClick(index) {
      this.qrIndex = index;
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
