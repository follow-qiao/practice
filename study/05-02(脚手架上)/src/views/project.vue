<template>
  <div>
    <hr>
    <div class="project">
      这是project
    </div>
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
  .project {
    width: 100%;
    height: 500px;
    background: #999;
  }
</style>