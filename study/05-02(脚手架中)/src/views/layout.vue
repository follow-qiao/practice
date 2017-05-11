<template>
  <div>
    <header-nav></header-nav>
    <router-view class="pos"></router-view>
  </div>
</template>

<script>
  import Header from '@/components/header'
  export default {
    components: {
      'header-nav': Header
    }
  }
</script>
<style>

.pos {
  position: relative;
  top: 70px;
}

</style>
