<template>
  <div>
    这是我的名片信息，里面包含这我的联系方式
    {{ $route.params.id }}
    <!--<a href="#/user/1">1</a>
    <a href="2">2</a>
    <a href="3">3</a>-->
    <!--
        to="路径" 相对于当前访问的路径 #/user/路径
        to="/路径" 相对于根目录  #/路径
    -->
    <router-link to="1">1</router-link>
    <router-link to="2">2</router-link>
    <router-link to="3">3</router-link>

    <div>
      <p>姓名：{{users.name}}</p>
      <p>性别：{{users.sex}}</p>
    </div>
  </div>
</template>
<script>
  let usersInfo = [
    {
      id:1,
      name:"leo",
      sex:"男"
    },
    {
      id:2,
      name:"momo",
      sex:"男"
    },
    {
      id:3,
      name:"duoduo",
      sex:"男"
    }
  ]

  export default {
    data(){
      return {
        mes:"hello",
        users:{
          name:"wang",
          sex:"男"
        }
      }
    },
    //匹配到路由之后，即将要展示这个视图之前调用这个钩子函数
    beforeRouteEnter(to, from, next){
      // to 到哪里去   目标路由信息对象
      // from 从哪里来 离开的路由信息对象
      // next()　决定要不要展示这个视图
      // 不！能！获取组件实例 `this`
     // 因为当钩子执行前，组件实例还没被创建
      console.log("我执行了")
      let id = to.params.id;

        // 通过id改变的是组件实例上的users这个数据
        //必须要拿到组件实例才可以
      next(function(vm){
        //next的参数是一个函数，函数的参数就是组件的实例

         vm.routeChange(id)
      })
    },
    //路由更新的时候调用 /user/1 => /user/2 会调用这个函数
    beforeRouteUpdate(to, from, next){
      console.log("我更新了")
      console.log(to.params.id)
      let id = to.params.id;
      this.routeChange(id)

      next(); //不能使用回调函数,控制视图是否更新
    },

    /*watch: {
      '$route'(){
        console.log("路由发生了变化")
        console.log(this.$route.params.id)
        let id = this.$route.params.id;
        var userInfo = usersInfo.filter(function(item){
            return item.id == id
          });
          if(userInfo.length){
            this.users = userInfo[0]
          }else{
            this.users = {
              name:"XXXX",
              sex:"XXXX"
            }
          }
      }
    },*/
    methods: {
      routeChange(id){
        var userInfo = usersInfo.filter(function(item){
          return item.id == id
        });
        if(userInfo.length){
          this.users = userInfo[0]
        }else{
          this.users = {
            name:"XXXX",
            sex:"XXXX"
          }
        }
      }
    }
  }
</script>