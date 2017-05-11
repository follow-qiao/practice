<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <a href="javascript:;" @click="handle">首页</a>\
      <router-link :to="{path:'/'}">首尔</router-link>
      /
      <span>{{flag}}</span>
    </div>
    <router-view class="pos"></router-view>
  </div>
</template>

<script>
  import Header from '@/components/header'

  let obj = {
    'doc': '文档',
    'project': '我的项目',
    'code': '工作台'
  }

  // 需要拿到路由

  // console.log('hello,layout')

  // 路由的信息对象 $route

 // console.log($route)

  export default {
    components: {
      'header-nav': Header
    },
    data(){
      return {
        flag: '我的项目'
      }
    },
    watch: {
      //观测路由对象的变化
      '$route'(){
        //console.log("改变了，路径为："+this.$route.path)
        let path = this.$route.path.slice(1);
        this.flag = obj[path];
      }
    },
    beforeRouteEnter(to, from, next){
      // 路由匹配到加载这个视图，先回执行这个函数
      console.log(to)  // 到哪里去
      console.log(from) // 从哪里来

      // 如果要渲染视图，加上next()
      let path = to.path.slice(1)

      next( (vm) =>{
        // 通过 `vm` 访问组件实例
        vm.flag = obj[path];
      } );
      
    },
    methods: {
      handle(){
        console.log(this.$route)
        console.log(this.$router)
        //点击a练级，跳转
        //调用一个函数跳转 push
        this.$router.push({path:'/'})
      }
    }
  }
</script>
<style>

.pos {
  position: relative;
  top: 70px;
}

</style>
