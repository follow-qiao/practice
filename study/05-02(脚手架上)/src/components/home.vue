<template>
  <div>
    <!-- <p>
      <a href="#/project">我的项目</a>
      <router-link to='/project' tag="span">我的项目</router-link>
    </p> -->

    <router-link to='/project' tag="p">
      <a>我的项目</a>
    </router-link>

    <p>
      <a href="#/doc">文档</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>