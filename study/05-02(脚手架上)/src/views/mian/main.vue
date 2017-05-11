<template>
  <div>
    <p>这是Main</p>
    <a href="#/study">学习</a>
    <a href="#/foo">foo</a>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Main'
}
</script>