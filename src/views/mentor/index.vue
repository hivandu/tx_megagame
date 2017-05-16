<template>
  <div id="mentor" class="content">
    <div class="content-title">
      <div class="title-1">大赛评委</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-judges.png" alt="">
      </div>
    </div>
    <div class="info scroll">
      <div class="nav-info">
        决赛评委将由腾讯游戏学院、腾讯各工作室、及研发发行部门boss组成，同时也会邀请到 行业媒体及大牛参与。各大工作室导师联盟在赛事过程中对参赛者进行培养，为参赛学生 提供寻求问题解决的途径和相应的指导。
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, key) in mentorData">
            <ul v-for="(group, key) in slide.result">
              <li class="foto" v-for="(item, key) in group.result" :key="key">
                <div class="image"><img :src=item.image alt=""></div>
                <div class="person-info">
                  <div class="name">{{item.name}}</div>
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
export default {
  name: 'mentor',
  data() {
    return {

      mentorData: Array
    }
  },
  watch:{
    mentorData:{
      deep: true,
      handler:function(val, oldVal){
        this.setSlide();
      }
    }
  },
  created() {
    this.getMentor();
  },
  methods: {
    getMentor() {
      const _this = this;
      this.$http.get('../../../ossweb-img/mock/mentor.json').then(function(res) {
        if (res.data.success) {
          _this.mentorData = res.data.obj;
        }
      }).catch(function(err) {

      })
    },

    setSlide() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        watchSlidesProgress: true,

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
