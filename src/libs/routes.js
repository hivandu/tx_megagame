import Views from '../views/'

export default [
  { path: "/", redirect: '/home' } //转到根
  , { path: "/", component: Views.Home } // 根文件
  , { path: '/index', component: Views.Index } // 根页面
  , { path: '/home', component: Views.Home } // 根页面
  , { path: '/introduce', component: Views.Introduce} // 大赛介绍
  , { path: '/activityInfo', component: Views.ActivityInfo } //
  , { path: '/activityItems', component: Views.ActivityItems } //
  , { path: '/allWorks', component: Views.AllWorks } //
  , { path: '/award', component: Views.Award } //
  , { path: '/mentor', component: Views.Mentor } //
  , { path: '/review', component: Views.Review } //
  , { path: '/rule', component: Views.Rule } //
  , { path: '/upload', component: Views.Upload }
  , { path: '/workInfo', component: Views.WorkInfo } //
  , { path: '/cooperation/', component: Views.Cooperation } //
]
