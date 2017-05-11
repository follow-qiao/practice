<template>
  <div>
    这是我的名片信息，里面包含这我的联系方式
    {{ $route.params.id }}
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

         var userInfo = usersInfo.filter(function(item){
            return item.id == id
          });
          if(userInfo.length){
            vm.users = userInfo[0]
          }else{
            vm.users = {
              name:"XXXX",
              sex:"XXXX"
            }
          }
      })
    },
    methods: {
      lookRouteObj(){
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
    }
  }
</script>