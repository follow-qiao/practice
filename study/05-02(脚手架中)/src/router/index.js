import Vue from 'vue'
import Router from 'vue-router'

// 引入所需要的视图
import Home from '@/components/home'
import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Code from '@/views/backend/code'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/layout',
      component:Layout,
      children:[
        {
          path: '/project',
          component: Project
        },
        {
          path: '/doc',
          component: Doc
        },
        {
          path: '/code',
          component: Code
        }
      ]
    }
  ]
})