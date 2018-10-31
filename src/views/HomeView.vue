<template>
  <div>
    <group title="Axios的例子">
      <cell title="ListViewDemo" :link="{path:'/ListView'}" is-link></cell>
    </group>

    <group title="Vux的例子">
      <cell title="TabbarView" :link="{path:'/TabbarView'}" is-link></cell>
    </group>

    <group title="科大讯飞的例子">
      <cell title="科大讯飞" :link="{path:'/XunFeiTest'}" is-link></cell>
    </group>

    <group title="mescroll + vue 案例">
      <cell title="list-news 新闻列表" :link="{path:'/listNews'}" is-link><span class="tip">下拉刷新添加数据到列表顶部</span></cell>
      <cell title="list-products 商品列表" :link="{path:'/listProducts'}" is-link><span class="tip">下拉刷新重置列表数据</span></cell>
      <cell title="mescroll-vue 组件" :link="{path:'/mescrollComponent'}" is-link><span class="tip" style="color:red">强烈推荐以组件的方式使用</span>
      </cell>
      <cell title="mescroll-options 所有配置项" :link="{path:'/mescrollOptions'}" is-link><span
        class="tip">快速熟悉mescroll</span></cell>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, TransferDomDirective as TransferDom} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    },
    beforeDestroy() {
    }
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
