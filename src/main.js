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
import VueBase64FileUpload from 'vue-base64-file-upload';

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

const router = new VueRouter({
  mode: 'hash',
  template: '<App/>',
  components: { App },
  routes
})

Vue.config.productionTip = false

// 判断IE版本
var isIE = function(ver) {
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}
if (isIE(6)) {
  // IE 6
}
// ...
if (isIE(9)) {
  // IE 9
}
var ie = isIE()
if (isIE(6)||isIE(7)||isIE(8)) {
  console.log('更换浏览器');
}
// alert('ie6:' + isIE(6) + '\n' + 'ie7:' + isIE(7) + '\n' + 'ie8:' + isIE(8) + '\n' + 'ie9:' + isIE(9) + '\n' + 'ie:' + isIE())


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
