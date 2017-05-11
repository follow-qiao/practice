<template>
  <div class="doc">
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link :to="{path:'#base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#start'}">开始</router-link>
            </li>
            <li>
              <router-link :to="{path:'#dongtai'}">动态路由</router-link>
            </li>
            <li>
              <router-link :to="{path:'#qiantaoluyou'}">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{path:'#jinjie'}">进阶</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#jinjie1'}">进阶1</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie2'}">进阶2</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie3'}">进阶3</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="doc-view">
      <!--<p>search值为：{{ $route.query }}</p>
      <p>参数值：{{ $route.params.block }}</p>
      <p>has值为：{{ $route.hash }}</p>
      <p>路有名字：{{ $route.name }}</p>-->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Doc'
  }
</script>
<style>

</style>
