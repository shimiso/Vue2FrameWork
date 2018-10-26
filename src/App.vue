<template>
  <div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

  body {
    background-color: #fbf9fe;
  }
  // Base setting and rest
  html, body {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #app {
    max-width: 41.2rem;
    margin: 0 auto;
  }
</style>
