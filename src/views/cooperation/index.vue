<template>
  <div id="cooperation" class="content">
    <div id="sponsor">
      <div class="content-title">
        <div class="first-title">主办方</div>
        <div class="second-title blue-font">SPONSOR</div>
      </div>
      <div class="info">
        <ul class="sponsor items">
          <li v-for="item in 8">
            <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/ic-txyxxy.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div id="partners">
      <div class="content-title">
        <div class="first-title">合作方</div>
        <div class="second-title blue-font">PARTNERS</div>
      </div>
      <div class="info">
        <div class="second-title mt10">腾讯业务</div>
        <ul class="partners items">
          <li></li>
        </ul>
        <div class="second-title mt10">外部伙伴</div>
        <ul class="partners items">
          <li v-for="item in 10">
            <img src="//game.gtimg.cn/images/gameinstitute/act/a20170522nextidea/partners-item.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss">
@import "./index.scss";
</style>
