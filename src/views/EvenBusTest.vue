<template>
  <div id="app">
    <x-header :left-options="{backText: ''}">EvenBus测试</x-header>
    <box gap="10px 10px">
      <x-button @click.native="back">点击返回</x-button>
    </box>
  </div>
</template>

<script>
  import {XButton, Box, XHeader} from 'vux'

  export default {
    name: "EvenBus",
    components: {
      XButton,
      Box,
      XHeader
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    beforeDestroy() {
      //vue-router切换的时候，会先加载新的组件，当新的组件渲染好但是还没mount的时候，销毁旧组件，然后再挂载新组件，
      // 也就是说当B页面的生命周期进行到beforeMount的时候，下一步走到的就是A页面的beforeDestory方法和接下去的destroyed方法
      //当我们在create方法里面监听事件的时候on监听自定义事件，但是通过上面那段话我们知道，当我们在create方法里面监听事件的时候 emit事件已经发出去了，
      // 此时监听器还没有注册，那么要让on监听到A页面的on监听到A页面的emit发出的事件，可以在A页面的beforeDestory或destroyed去执行$emit
      this.$vux.bus.$emit('vux:evenBusTest', 'EvenBus返回数据')
    }
  }
</script>

<style scoped>

</style>
