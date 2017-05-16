<template>
  <div id="cooperation" class="content">
    <div id="sponsor">
      <div class="content-title">
        <div class="title-1">主办方</div>
        <div class="title-2">
          <img src="../../../ossweb-img/image/title-sponsor.png" alt="">
        </div>
      </div>
      <div class="info">
        <ul class="sponsor items">
          <li v-for="item in 8">
            <img src="../../../ossweb-img/image/ic-txyxxy.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div id="partners">
      <div class="content-title">
        <div class="title-1">合作媒体</div>
        <div class="title-2">
          <img src="../../../ossweb-img/image/title-partners.png" alt="">
        </div>
      </div>
      <div class="info">
        <div class="title">腾讯业务</div>
        <ul class="partners items">
          <li></li>
        </ul>
        <div class="title">外部伙伴</div>
        <ul class="partners items">
          <li v-for="item in 10">
            <img src="../../../ossweb-img/image/partners-item.png" alt="">
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
