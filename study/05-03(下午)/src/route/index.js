import Vue from 'vue'
import VueRoute from 'vue-router'

Vue.use(VueRoute)

import Home from '@/components/home'
import zuopin from '@/components/zuopin'
import User from '@/components/user'
import picture from '@/components/picture'

import child from '@/components/pictureChild/child'
import man from '@/components/pictureChild/man'
import old from '@/components/pictureChild/old'

let router = new VueRoute({
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/zuopin', component: zuopin
    },
    {
      path: '/user/:id?', component: User,name:"User"
    },
    {
      path: '/picture', 
      component: picture,
      children:[
        {
          path: '',
          component:child
        },
        {
          path: 'child',
          component:child,
          name:'Child'
        },
         {
          path: 'man',
          component:man,
          name:"Man"
        },
        {
          path: 'old',
          component:old,
          name:"Old"
        },
        {
          path:"*",
          //component: child
          //没有匹配到以上的路由，重定向到child
          redirect: 'child'
        }
      ]
    }
  ]
})

export default router