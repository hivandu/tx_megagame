<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="first-title">作品详情</div>
      <div class="second-title blue-font">DETAILS OF THE WORK</div>
    </div>
    <div class="info scroll">
      <div class="nav-guide"><span @click="$router.back();">{{fromReview?'精彩回顾':'全部作品'}}</span><span> » </span> <span class="blue-font">作品详情</span></div>
      <div class="nav-title second-title"><span class="name">{{workInfo.title}} </span> {{workInfo.subTitle}}</div>
      <div class="game-info">
        <p v-for="(item,key) in workInfo.infoFirst">{{item}}</p>
      </div>
      <div class="game-info">
        <p v-for="(item,key) in workInfo.infoSec">{{item}}</p>
      </div>
      <div class="team">
        <div class="team-name">
        </div>
        <div class="members">
          <p>团队介绍:</p>
          <table>
            <tr>
              <th>姓名</th>
              <th>所在高校</th>
            </tr>
            <tr v-for="(item, key) in workInfo.teamMembers">
              <td>{{item.name}}</td>
              <td>{{item.college}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="game-ppt">
        <object :data="workInfo.pdf" type="application/pdf" width="650" height="500">
          <a :href="workInfo.pdf">test.pdf</a>
        </object>
      </div>
      <div class="video-box">
        <div id="videoPop" class="video-pop">
          <div id="videoCon" class="video-con">
          </div>
        </div>
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
    if (this.$route.query.from == 'review') {
      this.fromReview = 1;
    } else {
      this.fromReview = 0;
    }
    this.getWorkInfo(_vid);
  },
  data() {
    return {
      workInfo: Object,
      fromReview: 0
    }
  },
  methods: {
    getWorkInfo(vid) {
      const _this = this;
      _this.$http.get(PathUtil.getPath('getWorkInfo'), {
        params: {
          vid: vid
        }
      }).then(function(res) {
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
      player.addParam('autoplay', false);
      player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");
      player.write("videoCon");
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
