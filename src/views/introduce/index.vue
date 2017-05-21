<template>
  <div id="introduce" class="content">
    <div class="content-title">
      <div class="first-title">大赛简介</div>
      <div class="second-title blue-font">OVERVIEW</div>
    </div>
    <div class="scroll info">
      <div class="nav-info" style="text-align:justify">
        游戏，就真造一次！为了给高校学生一个展示自我的舞台，打造属于高校游戏人自己的赛事，由腾讯游戏学院主办的腾讯NEXT IDEA高校游戏创意制作大赛再度扬帆起航！对于高校生力军来说，赛事不但提供游戏创意展示的平台，更为大家提供进入腾讯的绿色通道。游戏达人们，一起来做一款属于你的游戏吧！
      </div>
      <div class="timeline navigation">
        <img class="line" src="../../../ossweb-img/image/timeLine.png" height="85" width="732" alt="">
        <ul>
          <li class="time-1">
            <img src="../../../ossweb-img/image/time-line-point.png" alt="" class="point">
            <div class="info">
              <p class="date">2017.6.6-7.21</p>
              <p class="link"><span class="blue-font">初赛报名及作品提交</span></p>
            </div>
          </li>
          <li class="time-2">
            <img src="../../../ossweb-img/image/time-line-point.png" alt="" class="point">
            <div class="info">
              <p class="date">2017.7.24-8.4</p>
              <p class="link"><span class="blue-font">初赛评审</span></p>
            </div>
          </li>
          <li class="time-3">
            <img src="../../../ossweb-img/image/time-line-point.png" alt="" class="point">
            <div class="info">
              <p class="date">2017.8.7-9.15</p>
              <p class="link">
                <span class="blue-font">导师团介入指导<br>复赛作品优化及作品提交</span>
              </p>
            </div>
          </li>
          <li class="time-4">
            <img src="../../../ossweb-img/image/time-line-point.png" alt="" class="point">
            <div class="info">
              <p class="date">2017.9.18-9.29</p>
              <p class="link"><span class="blue-font">复赛评审</span></p>
            </div>
          </li>
          <li class="time-5">
            <img src="../../../ossweb-img/image/time-line-point.png" alt="" class="point">
            <div class="info">
              <p class="date">2017.10.16-10.20</p>
              <p class="link"><span class="blue-font">总决赛评审及现场点评</span></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab">
          <span @click="showTab('1')" :class="tabShow == 1?'selected':''">作品设计方向</span><span @click="showTab('2')" :class="tabShow == 2?'selected':''">评选标准</span>
        </div>
        <div class="info">
          <div class="info-1" v-show="tabShow == 1">
            <p>游戏除了是休闲娱乐产品，你可曾想过，游戏还能拥有改变世界的力量——在游戏中探索未知的太空，用游戏让非物质文化遗产焕然新生，在游戏里解决找不到男/女朋友、堵车等社会问题……你觉得在游戏世界中，我们可以做些什么呢？</p>
            <p>2017年赛事主题围绕“游戏的力量”来展开，包含三个方向：</p>
            <ul>
              <li>1. 用游戏保护传统文化</li>
              <li>2. 用游戏改变、解决社会问题</li>
              <li>3. 用游戏探索未来</li>
            </ul>
            <p>参赛者可以围绕赛事主题进行创作，也可以自主发挥，契合主题的作品将获得额外加分。</p>
          </div>
          <div class="info-2" v-show="tabShow == 2">
            <div class="left">
              <p>一：评审方式</p>
              <ul>
                <li>1. 评委将由腾讯公司专家组成，以游戏创意为主要出发点，对作品进行专业纬度打分，经过初赛筛选，复赛评审，决赛共三轮评审；</li>
                <li>2. 经过初赛评审并进入复赛的作品会分配导师团，参赛团队可就自己的作品寻求专业辅导；</li>
                <li>3. 复赛选出10个作品进入决赛；</li>
                <li>4. 邀请进入决赛的团队代表参与决赛现场陈述演示及决赛评选。</li>
              </ul>
            </div>
            <div class="right">
              <p>二：作品要求</p>
              <p>参赛团队可以选择今年的赛事年度主题“游戏的力量”作为自己作品的创意方向来获得更多的加分；也可以不限主题及玩法，自主选择作品方向，以求精品呈现，作品形式需要包含ppt，视频及可运行demo。</p>
            </div>
          </div>
          <div class="bg-nav"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'introduce',
  data() {
    return {
      tabShow: 1,
    }
  },
  methods: {
    showTab(num) {
      this.tabShow = num;
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
