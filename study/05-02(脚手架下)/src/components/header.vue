<template>
  <ul class="el-menu menu-horizontal el-menu--horizontal el-menu--dark">
    <router-link to="/" class="el-menu-item logo" exact tag="li">
      <img src="../assets/miaov.png">
    </router-link>
    <router-link to="/project" class="el-menu-item" append tag="li">
      <i class="fa fa-home"></i>
      我的项目
    </router-link>
    <router-link to="/code" class="el-menu-item" tag="li">
      <i class="fa fa-code"></i>
      工作台
    </router-link>
    <router-link to="/doc" class="el-menu-item" tag="li">
      <i class="fa fa-book"></i>
      文档
    </router-link>
  </ul>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {}
    }
  }
</script>
<style>

</style>
