<template>
  <div id="mentor" class="content">
    <div class="content-title">
      <div class="first-title">大赛评委</div>
      <div class="second-title blue-font">JUDGES</div>
    </div>
    <div class="info scroll">
      <div class="nav-info">
        决赛评委将由腾讯游戏学院、腾讯各工作室、及研发发行部门boss组成，同时也会邀请到行业媒体及大牛参与。各大工作室导师联盟在赛事过程中对参赛者进行培养，为参赛学生提供寻求问题解决的途径和相应的指导。
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, key) in mentorData">
            <ul>
              <li class="foto" v-for="(item, key) in slide.result" :key="key">
                <div class="image"><img :src=item.image alt=""></div>
                <div class="person-info">
                  <div class="name second-title">{{item.name}}</div>
                  <div class="info">{{item.info}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"><img src="../../../ossweb-img/image/swiper-btn.png" alt="" class="forward"></div>
        <div class="swiper-button-next"><img src="../../../ossweb-img/image/swiper-btn.png" alt="" class="next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'

export default {
  name: 'mentor',
  data() {
    return {
      Swiper: Swiper,
      mentorData: Array
    }
  },
  watch: {
    mentorData: {
      deep: true,
      handler: function(val, oldVal) {
        this.setSwiper();
        $('.swiper-button-next').removeClass('class name')
      }
    }
  },
  created() {
    this.getMentor();
  },
  methods: {
    getMentor() {
      const _this = this;
      this.$http.get(PathUtil.getPath('getMentor')).then(function(res) {
        if (res.data.success) {
          _this.mentorData = res.data.obj;
        }
      }).catch(function(err) {

      })
    },

    setSwiper() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay : 5000,
        autoplayDisableOnInteraction : true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        observer:true,
        // 关闭拖动
        onlyExternal: true,
      });
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
