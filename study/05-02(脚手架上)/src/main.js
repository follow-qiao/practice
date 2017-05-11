// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 引入所需要的文件
// import 变量 from 文件

import Vue from 'vue'
import App from './App'
import router from './router'  // 如果是引入一个文件夹的index.js，可以不写index.js

//生产环境关闭提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,   // 注入在选项对象中
  template: '<App/>',
  components: { App }
})
