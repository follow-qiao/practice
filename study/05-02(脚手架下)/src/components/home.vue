<template>
  <div class="main">
      <div class="btns">
        <div class='trans'>我的项目</div>
        <div class='trans'>文档</div>
        <router-link to="/project" tag='div' class='trans'>我的项目</router-link>
        <router-link to="/doc" tag='div' class='trans'>文档</router-link>
      </div>
    </div>
</template>
 
<script>
  export default {
    name: 'home',
    data () {
      return {}
    }
  }
</script>
