// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from '@/route/index'	//把写好的路由文件引过来

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,		//把引过来的路由添加到vue实例上
  template: '<App/>',
  components: { App }
})
