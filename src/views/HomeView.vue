<template>
  <div>
    <x-header :left-options="{showBack: false}">VUE框架</x-header>
    <group title="Axios的例子">
      <cell title="ListViewDemo" :link="{path:'/listView'}" is-link></cell>
      <cell title="DetailViewDemo" :link="{name: 'DetailView', params: { id: 31415985 }}" is-link></cell>
    </group>

    <group title="Vux的例子">
      <cell title="TabbarView" :link="{path:'/tabbarView'}" is-link></cell>
    </group>

    <group title="其他例子">
      <cell title="科大讯飞" :link="{path:'/xunFeiTest'}" is-link></cell>
      <cell title="打开DataUrl文件" :link="{path:'/nativeFileView'}" is-link></cell>
      <cell title="上传图片" :link="{path:'/uploadImagesView'}" is-link></cell>
      <cell title="EvenBus测试例子" :value="evenBusData" :link="{path:'/evenBusTest'}" is-link></cell>
    </group>
    <group title="菜单例子">
      <cell title="下拉筛选菜单例子"  :link="{path:'/dropDownFilterList'}" is-link></cell>
    </group>
    <group title="mescroll+vue 案例">
      <cell title="list-news新闻列表" :link="{path:'/listNews'}" is-link><span class="tip">下拉刷新添加数据到列表顶部</span></cell>
      <cell title="list-products商品列表" :link="{path:'/listProducts'}" is-link><span class="tip">下拉刷新重置列表数据</span></cell>
      <cell title="mescroll-vue组件" :link="{path:'/mescrollComponent'}" is-link><span class="tip" style="color:red">强烈推荐以组件的方式使用</span>
      </cell>
      <cell title="mescroll-options所有配置" :link="{path:'/mescrollOptions'}" is-link><span
        class="tip">快速熟悉mescroll</span></cell>
    </group>
    <group title="element例子">
      <cell title="Tree例子" :link="{path:'/elementTreeDemo'}" is-link></cell>
    </group>
  </div>
</template>

<script>
  import {Group, Cell,XHeader, TransferDomDirective as TransferDom} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      XHeader
    },
    data() {
      return {
        evenBusData:''
      }
    },
    methods: {
      evenBusTest(params){
        this.evenBusData = params
        console.log(params)
      }
    },
    created () {
      this.$vux && this.$vux.bus && this.$vux.bus.$on('vux:evenBusTest',  this.evenBusTest)
    },
    beforeDestroy () {
      this.$vux && this.$vux.bus && this.$vux.bus.$off('vux:evenBusTest', this.evenBusTest)
    },
  }
</script>

<style scoped>
  .tip {
    float: right;
    margin-top: 2px;
    font-size: 12px;
    color: gray;
  }
</style>
