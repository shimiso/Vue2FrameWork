<!-- 详细使用文档 http://momentjs.cn/docs/
日期格式化
moment().format('MMMM Do YYYY, h:mm:ss a'); // 四月 8日 2019, 11:54:56 中午
moment().format('dddd');                    // 星期一
moment().format("MMM Do YY");               // 4月 8日 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();                          // 2019-04-08T11:54:56+08:00
相对时间
moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
moment("20120620", "YYYYMMDD").fromNow(); // 7 年前
moment().startOf('day').fromNow();        // 12 小时前
moment().endOf('day').fromNow();          // 12 小时内
moment().startOf('hour').fromNow();       // 1 小时前
日历时间
moment().subtract(10, 'days').calendar(); // 2019年3月29日
moment().subtract(6, 'days').calendar();  // 上周二中午11点55
moment().subtract(3, 'days').calendar();  // 上周五中午11点55
moment().subtract(1, 'days').calendar();  // 昨天中午11点55分
moment().calendar();                      // 今天中午11点55分
moment().add(1, 'days').calendar();       // 明天中午11点55分
moment().add(3, 'days').calendar();       // 本周四中午11点55
moment().add(10, 'days').calendar();      // 2019年4月18日
多语言支持
moment().format('L');    // 2019-04-08
moment().format('l');    // 2019-04-08
moment().format('LL');   // 2019年4月8日
moment().format('ll');   // 2019年4月8日
moment().format('LLL');  // 2019年4月8日中午11点55分
moment().format('lll');  // 2019年4月8日中午11点55分
moment().format('LLLL'); // 2019年4月8日星期一中午11点55分
moment().format('llll'); // 2019年4月8日星期一中午11点55分
-->
<template>
  <div id="app">
    <x-header :left-options="{backText: ''}">Moment日期处理工具</x-header>
    <div id="test">
      <h3>显示格式化的日期时间</h3>
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

