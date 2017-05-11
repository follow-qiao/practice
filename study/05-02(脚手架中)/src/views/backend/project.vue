<template>
  <div>
    <custom-header></custom-header>
    <div class="project">
      <div class="add-project-box">
        <i class='fa fa-plus-square'></i>
        <span>创建项目</span>
      </div>
      <div class="content-box">
        <div class="block-content">
            这是我的项目页面
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import customHeader from '@/components/header'
  export default {
    name: 'Project',
    components: {
      customHeader
    }
  }
</script>
<style>

</style>
