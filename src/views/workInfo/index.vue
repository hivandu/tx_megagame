<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="title-1">作品详情</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-workdetail.png" alt="">
      </div>
    </div>
    <div class="info scroll">
      <div class="nav-title"><span class="name">{{workInfo.title}} </span> {{workInfo.subTitle}}</div>
      <img :src="workInfo.navImage" alt="" class="work-figure">
      <div class="team">
        <div class="team-name">
          <span>团队名称：</span><span>{{workInfo.teamName}}</span>
        </div>
        <div class="members">
          <p>团队介绍:</p>
          <table>
            <tr>
              <th>姓名</th>
              <th>现就读学校</th>
              <th>团队角色</th>
            </tr>
            <tr v-for="(item, key) in workInfo.teamMembers">
              <td>{{item.name}}</td>
              <td>{{item.college}}</td>
              <td>{{item.professional}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="game-info">
        {{workInfo.infoFirst}}
      </div>
      <div class="video-box">
        <div id="videoPop" class="video-pop">
          <div id="videoCon" class="video-con">
            
          </div>
        </div>
      </div>
      <div class="game-info">
        {{workInfo.infoSec}}
      </div>
      <div class="game-ppt">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'work-info',
  watch: {
    workInfo: {
      deep: true,
      handler: function(val, oldVal) {
        this.videoPlayer(val.vid);
      }
    }
  },
  mounted() {
    let _vid = this.$route.query.vid;
    console.log(_vid);
    this.getWorkInfo(_vid);
  },
  data() {
    return {
      workInfo: Object
    }
  },
  methods: {
    getWorkInfo(vid) {
      const _this = this;
      _this.$http.get('../../../ossweb-img/mock/workInfo.json').then(function(res) {
        console.log(res);
        if (res.data.success) {
          _this.workInfo = res.data.obj[vid];
        } else {
          alert('获取失败');
        }
      }).catch(function(err) {
        console.log(err);
      })
    },

    // init 播放器并播放
    videoPlayer(vid) {
      var video = new tvp.VideoInfo();
      video.setVid(vid);
      var player = new tvp.Player(800, 450);
      player.setCurVideo(video);
      player.addParam("adplay", "0");
      player.addParam("wmode", "opaque");
    player.addParam('autoplay',false);
      player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");
      player.write("videoCon");
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
