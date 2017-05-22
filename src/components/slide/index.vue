<template>
  <div id="slide" class="pushdown">
    <div class="line"></div>
    <div :class="['point', index]"></div>
    <ul>
      <li v-for="(item, index) in items" @click="route(item,index)" :class="['slide-'+index, item.link == path?'selected':'', index==1?'second':'', 'slide-item']">
        <span></span><a href="javascript:;">{{item.name}}</a>
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
      index: '',
      path: '',
      from: ''
    }
  },
  watch: {
    '$route' (val) {
      $('.slide-item').removeClass('selected');
      this.changeRouter(val);
    }
  },
  created() {
    this.path = this.$route.path + this.$route.hash;
  },
  mounted() {
    const _route = this.$route;
    this.changeRouter(_route);
  },
  methods: {
    route(item, index) {
      if (index != 0) {
        this.$router.push({
          path: item.link
        });
      } else {
        window.location.href = item.link;
      }
    },

    changeRouter(route) {
      const _this = this;
      const _path = route.path;
      const _query = route.query;
      switch (_path) {
        case '/home':
          this.index = 'index-1';
          break;
        case '/introduce':
          this.index = 'index-2';
          break;
        case '/award':
          this.index = 'index-3';
          break;
        case '/mentor':
          this.index = 'index-4';
          break;
        case '/review':
          this.index = 'index-5';
          break;
        case '/rule':
          this.index = 'index-6';
          break;
        case '/activityItems':
          this.index = 'index-7';
          break;
        case '/activityInfo':
          this.index = 'index-7';
          setTimeout(function() {
            $('.slide-7').addClass('selected');
          }, 100);
          break;
        case '/cooperation':
          this.index = 'index-8';
          break;
        case '/workinfo':
          if (this.$route.query.from == 'review') {
            this.index = 'index-5';
            setTimeout(function() {
              $('.slide-5').addClass('selected');
            }, 100);
          }
          break;
        default:
          this.index = 'index-0';
          break;
      }
      if (route.hash) {
        this.path = route.path + route.hash;
      } else {
        this.path = route.path;
      }
      if (route.path == '/home') {
        $('#slide').addClass('pushdown');
      } else {
        $('#slide').removeClass('pushdown');
      }
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
