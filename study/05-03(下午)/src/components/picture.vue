<template>
  <div class="picture">
			
			<!--<span>童年图片</span>
			<span>中年图片</span>
			<span>老年图片</span>-->
      <!---<router-link to="/picture/child" tag="span">童年图片</router-link>
      <router-link to="/picture/man" tag="span">中年图片</router-link>
      <router-link to="/picture/old" tag="span">老年图片</router-link>
      -->
      <router-link :to="{name:'Child'}" tag="span">童年图片</router-link>
      <router-link :to="{name:'Man'}" tag="span">中年图片</router-link>
      <router-link :to="{name:'Old'}" tag="span">老年图片</router-link>

      <hr/>
      <!--渲染当前使用这个组件的子路由-->
      <router-view></router-view>

		</div>
</template>
<script>
  export default {}
</script>