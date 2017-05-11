<template>
  <div>
    <custom-header></custom-header>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
import customHeader from '@/components/header'

export default {
  name: 'Project',
  components: {
    "custom-header": customHeader
  }
}
</script>
<style>
</style>