<template>
  <div id="cooperation" class="content">
    <div id="sponsor">
      <div class="content-title">
        <div class="first-title">主办单位</div>
        <div class="second-title blue-font">SPONSOR</div>
      </div>
      <div class="info">
        <ul class="sponsor items">
          <li v-for="(item,key) in cooperationData.sponsor">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div id="partners">
      <div class="content-title">
        <div class="first-title">承办单位</div>
        <div class="second-title blue-font">ORGANIZER</div>
      </div>
      <div class="info">
        <ul class="partners items">
          <li v-for="(item,key) in cooperationData.organizer">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
      <div class="content-title">
        <div class="first-title">战略合作伙伴</div>
        <div class="second-title blue-font">STRATEGIC PARTNER</div>
      </div>
      <div class="info">
        <ul class="partners items">
          <li v-for="(item,key) in cooperationData.strategic">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
      <div class="content-title">
        <div class="first-title">合作媒体</div>
        <div class="second-title blue-font">MEDIA PARTNERS</div>
      </div>
      <div class="info">
        <ul class="partners items">
          <li v-for="(item,key) in cooperationData.media">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'cooperation',
    mounted(){
      this.getCooperation();
    },
    data(){
      return{
        cooperationData: ''
      }
    },
    methods:{
      getCooperation(){
        const _this = this;
       this.$http.get(PathUtil.getPath('getCooperation')).then(function(res){
        if (res.data.success) {
          _this.cooperationData = res.data.obj;
        }else{
          _this.cooperationData = [];
        }
       }).catch(function(err){
          _this.cooperationData = [];
          console.log(err);
       })
      }
    }
  }
</script>
<style lang="scss">
@import "./index.scss";
</style>
