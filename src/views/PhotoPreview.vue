<template>
  <div>
    <x-header :left-options="{backText: ''}">图片预览</x-header>
    <!--单个-->
    <p>单个</p>
    <div class="item">
      <img   src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="1" preview-text="描述文字">
    </div>
    <!--分组-->
    <p>分组</p>
    <div class="item2">
      <img src="https://826327700.github.io/vue-photo-preview/demo/1.jpg" preview="2" preview-text="描述文字">
      <img src="https://826327700.github.io/vue-photo-preview/demo/3.jpg" preview="2" preview-text="描述文字2">
    </div>

    <p>大图</p>
    <div class="item2">
      <img src="https://826327700.github.io/vue-photo-preview/demo/xxx.jpg" large="https://826327700.github.io/vue-photo-preview/demo/xxx_3x.jpg" preview="2" preview-text="描述文字">
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
    export default {
      name: "PhotoPreview",
      components: {
        XHeader
      }
    }
</script>

<style scoped>
  .item img{
    width: 100%;
  }
  .item2 img{
    width: 44%;
    margin: 2%;
  }
</style>
