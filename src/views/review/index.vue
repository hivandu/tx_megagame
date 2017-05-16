<template>
  <div id="review" class="content">
    <div class="content-title">
      <div class="title-1">精彩回顾</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-highlights.png" alt="">
      </div>
    </div>
    <div class="review-items info scroll">
    <div class="nav-info">历届大赛优秀作品展</div>
      <ul>
        <li @click="loadVideo('m0356wqb2h2')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-gdld.jpg" alt="">
          </div>
          <p class="review-name">优秀奖《果冻老爹》</p>
        </li>
        <li @click="loadVideo('f0356vrj9fz')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-zubbles.jpg" alt="">
          </div>
          <p class="review-name">优秀奖《Zubbles》</p>
        </li>
        <li @click="loadVideo('z0356qheb1z')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-pker.jpg" alt="">
          </div>
          <p class="review-name">优秀奖《Pker》</p>
        </li>
        <li @click="loadVideo('y0356f9i55k')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-loh.jpg" alt="">
          </div>
          <p class="review-name">优秀奖《L-O-H》</p>
        </li>
        <li @click="loadVideo('i0356wc5kbg')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-bzgd.jpg" alt="">
          </div>
          <p class="review-name">一等奖《不再孤单》</p>
        </li>
        <li @click="loadVideo('i0356lkydu4')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-sct.jpg" alt="">
          </div>
          <p class="review-name">二等奖《蔬菜兔》</p>
        </li>
        <li @click="loadVideo('f0356s08y9j')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-wzmg.jpg" alt="">
          </div>
          <p class="review-name">三等奖《王子玫瑰》</p>
        </li>
        <li @click="loadVideo('h0356wpiw14')">
          <div class="review-main">
            <img src="../../../ossweb-img/image/review-inverted.jpg" alt="">
          </div>
          <p class="review-name">优秀奖《Inverted》</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'review',
  data() {
    return {

    }
  },
  methods: {
    TGDialogS(e) {
      need("biz.dialog-min", function(Dialog) {
        Dialog.show({
          id: e,
          bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
          opacity: 80 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
      });
    },

    closeDialog() {
      need("biz.dialog-min", function(Dialog) {
        Dialog.hide();
      });
    },

    closeDialog() {
      need("biz.dialog-min", function(Dialog) {
        Dialog.hide();
      });
    },

    videoPlayer(vid) {
      var video = new tvp.VideoInfo();
      video.setVid(vid);
      var player = new tvp.Player(800, 450);
      player.setCurVideo(video);
      player.addParam("adplay", "0");
      player.addParam("wmode", "opaque");
      player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");
      player.write("videoCon");
    },

    loadVideo(vid) {
      this.TGDialogS(document.getElementById("videoPop"));
      this.videoPlayer(vid);
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
