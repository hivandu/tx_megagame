// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// 导入视图组件定义文件
import Views from './views/'

// 导入路由设置
import routes from './libs/routes'

// 引入axios，替代vue-resoure和jQuery ajax
import axios from 'axios'

// 导入base64转换
import VueBase64FileUpload from 'vue-base64-file-upload'

import Swiper from 'swiper'

Vue.use(VueRouter)


let qs = require('querystring');

// 引入axios作为Vue原型链
Vue.prototype.$http = axios.create({
  // 默认设置
  params: {},
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  transformRequest: [function(data) {
    data = qs.stringify(data)
    return data
  }]
})

const mySwiper = new Swiper();

console.log(mySwiper);

const router = new VueRouter({
  mode: 'hash',
  template: '<App/>',
  components: { App },
  routes
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
