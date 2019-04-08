<!--
    1）定义过滤器
        Vue.filter(filterName,function(value[arg1,arg2,...])){
            //进行一定的数组处理
            return newValue
        }
    2）使用过滤器
        <div>{{myData | filterName}}</div>
        <div>{{myData | filterName{arg}}}</div>
-->
<!--   需求：对当前时间进行指定格式显示     -->

<template>
  <div id="app">
    <x-header :left-options="{backText: ''}">EvenBus测试</x-header>
    <div id="test">
      <h2>显示格式化的日期时间</h2>
      <p>当前时间：{{date}}</p>
      <p>完整版：{{dateString | dateformat}}</p>
      <p>年月日：{{dateString | dateformat('YYYY-MM-DD')}}</p>
      <p>时分秒：{{dateString | dateformat('HH:mm:ss')}}</p>
    </div>
  </div>
</template>
<script>
  import {XButton, Box, XHeader} from 'vux'
  import moment from 'moment'
  export default {
    name: "MomentView",
    components: {
      XButton,
      Box,
      XHeader
    },
    filters: {
      dateformat(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dataStr).format(pattern)
      }
    },
    methods: {

    },
    computed: {
      date:function(){
        return new Date();
      },
      // 计算属性的 getter
      dateString: function () {
        return moment('2019-04-05T11:22:31+08:00').format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>

<style scoped>

</style>

