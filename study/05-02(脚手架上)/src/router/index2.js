import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

import Project from '@/views/project'
import Work from '@/views/work'
import Doc from '@/views/doc'

// 使用插件的语法 Vue.use()

// 使用路由这个插件
Vue.use(Router)

// 一个路由对应一个视图
// 配置对应的规则

export default new Router({
  routes: [
    {
      path: '/',      // 路由路径
      name: 'Home',  // 给这个路由起名字
      component: Home // 匹配到的路径展示的视图
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    }
  ]
})