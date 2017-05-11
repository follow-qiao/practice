import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

import Main from '@/views/mian/main'
import Study from '@/views/mian/study'
import Foo from '@/views/mian/foo'
import Index from '@/views/mian/index'

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
    /*{
     // path: '/main/:abc?',  // 路由 /mian/随便写什么 都共享一个视图
      name: 'Main',
      component: Main
    }*/
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '', // 默认的子路
          name: 'Main',
          component: Index
        },
        {
          path: 'study', // /main/foo
          name: 'Study',
          component: Study
        },
        {
          path: 'foo',
          name: 'Foo',
          component: Foo
        }
      ]
    }

  ]
})