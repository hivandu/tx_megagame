<template>
  <div id="activity-info">
    <div class="content-title">
      <div class="first-title">活动资讯</div>
      <div class="second-title blue-font">INFORMATION</div>
    </div>
    <div class="info scroll">
      <div class="nav-guide"><span @click="$router.back();">活动资讯</span><span> » </span> <span class="blue-font">资讯详情</span></div>
      <p>腾讯移动游戏16款新品深化精品布局 极光计划正式亮相</p>
      <p>由腾讯游戏学院主办，旨在通过游戏创意制作过程及作品产出发掘高校优秀的游戏研发人才和创意作品，给学生一个展示自己的舞台，打造属于高校游戏人自己的赛事。2017年赛事主题围绕“游戏的力量”来展开，包含三个方向：用游戏保护传统文化回顾过去；用游戏改变、解决社会问题——着手当下；用游戏探索未来 未来科技；参赛者可以自主发挥创作，也可以围绕赛事主题进行创作。</p>
      <img src="../../../ossweb-img/image/u629.jpg" height="360" width="658" alt="">
      <p v-for="item in 4">由腾讯游戏学院主办，旨在通过游戏创意制作过程及作品产出发掘高校优秀的游戏研发人才和创意作品，给学生一个展示自己的舞台，打造属于高校游戏人自己的赛事。2017年赛事主题围绕“游戏的力量”来展开，包含三个方向：用游戏保护传统文化回顾过去；用游戏改变、解决社会问题——着手当下；用游戏探索未来</p>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import "./index.scss";
</style>
