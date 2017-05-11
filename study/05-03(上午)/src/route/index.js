import Vue from 'vue'
import VueRoute from 'vue-router'	//引入vue-router

Vue.use(VueRoute)	//安装路由这个插件

import Home from '@/components/home'
import zuopin from '@/components/zuopin'
import User from '@/components/user'

let router = new VueRoute({	
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/zuopin', component: zuopin
    },
    {
      path: '/user/:id?', component: User
    }
  ]
})

export default router