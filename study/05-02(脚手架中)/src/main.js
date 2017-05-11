// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  // 如果事引入一个文件夹的index.js，可以不写index.js


/*require("./assets/css/home.css")
require("./assets/css/doc.css")
require("./assets/css/project.css")*/

require("./assets/css/app.css")

//生产环境关闭提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,   // 注入在选项对象中
  template: '<App/>',
  components: { App }
})
