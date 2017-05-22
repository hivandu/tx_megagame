<template>
  <div id="review" class="content">
    <div class="content-title">
      <div class="first-title">精彩回顾</div>
      <div class="second-title blue-font">HIGHLIGHTS</div>
    </div>
    <div class="review-items info scroll">
      <div class="nav-info second-title">2016年大赛优秀作品展</div>
      <ul>
        <li @click="gotoWorkInfo(item.vid)" v-for="(item, index) in workItems">
          <div class="review-main">
            <img :src="item.image" alt="">
          </div>
          <p class="review-name">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'review',
  mounted() {
    this.getWorkItems();
  },
  data() {
    return {
      workItems: Object
    }
  },
  methods: {

    // 获取作品列表
    getWorkItems() {
      const _this = this;
      _this.$http.get(PathUtil.getPath('getOldWork')).then(function(res) {
        if (res.data.success) {
          _this.workItems = res.data.obj;
        }
      }).catch(function(err) {
        console.log(err);
      })
    },

    gotoWorkInfo(vid) {
      this.$router.push({
        path: '/workinfo',
        query: {
          "vid": vid,
          "from": 'review'
        }
      });
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
