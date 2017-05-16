<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="title-1">作品详情</div>
      <div class="title-2">
        <img src="../../../ossweb-img/image/title-workdetail.png" alt="">
      </div>
    </div>
    <div class="info scroll">
      <div class="work-title"><span class="name">《第五大发明》</span>2016年故宫游戏创意大赛金奖</div>
      <img src="../../../ossweb-img/image/work-1.png" alt="" class="work-figure">
      <div class="team">
        <div class="team-name">
          <span>团队名称：</span><span>第一团队</span>
        </div>
        <div class="members">
          <p>团队介绍:</p>
          <table>
            <tr>
              <th>姓名</th>
              <th>现就读学校</th>
              <th>团队角色</th>
            </tr>
            <tr v-for="item in 2">
              <td>天海波</td>
              <td>已毕业</td>
              <td>设计</td>
            </tr>
          </table>
        </div>
      </div>
      <p>腾讯移动游戏16款新品深化精品布局 极光计划正式亮相</p>
      <p>由腾讯游戏学院主办，旨在通过游戏创意制作过程及作品产出发掘高校优秀的游戏研发人才和创意作品，给学生一个展示自己的舞台，打造属于高校游戏人自己的赛事。2017年赛事主题围绕“游戏的力量”来展开，包含三个方向：用游戏保护传统文化回顾过去；用游戏改变、解决社会问题——着手当下；用游戏探索未来 未来科技；参赛者可以自主发挥创作，也可以围绕赛事主题进行创作。</p>
      <img src="../../../ossweb-img/image/u629.jpg" height="360" width="658" alt="">
      <p v-for="item in 4">由腾讯游戏学院主办，旨在通过游戏创意制作过程及作品产出发掘高校优秀的游戏研发人才和创意作品，给学生一个展示自己的舞台，打造属于高校游戏人自己的赛事。2017年赛事主题围绕“游戏的力量”来展开，包含三个方向：用游戏保护传统文化回顾过去；用游戏改变、解决社会问题——着手当下；用游戏探索未来</p>
      <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=c0197y4qkr7&auto=0" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import "./index.scss";
</style>
