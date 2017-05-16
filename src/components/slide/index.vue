<template>
  <div id="slide" class="pushdown">
    <div class="line"></div>
    <div :class="['point']"></div>
    <ul>
      <li v-for="(item, index) in items" @click="route(item,index)" :class="[item.link == path?'selected':'', index==1?'second':'']">
        <span></span>{{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
import Items from '../../../ossweb-img/mock/slide.json'
export default {
  name: 'slide',
  data() {
    return {
      items: Items,
      path: ''
    }
  },
  watch: {
    '$route' (val) {
      if (val.hash) {
        this.path = val.path + val.hash;
      } else {
        this.path = val.path;
      }
      console.log(this.path);
      if (this.$route.path == '/home') {
        $('#slide').addClass('pushdown');
      } else {
        $('#slide').removeClass('pushdown');
      }
    }
  },
  created() {
    this.path = this.$route.path + this.$route.hash;
  },
  mounted() {
    if (this.$route.path == '/home') {
      $('#slide').addClass('pushdown');
    } else {
      $('#slide').removeClass('pushdown');
    }
  },
  methods: {
    route(item, index) {
      this.$router.push({
        path: item.link
      });
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
