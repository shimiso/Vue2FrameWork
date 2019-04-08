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
UTC
moment.utc();
moment.utc(Number);
moment.utc(Number[]);
moment.utc(String);
moment.utc(String, String);
moment.utc(String, String[]);
moment.utc(String, String, String);
moment.utc(Moment);
moment.utc(Date);

什么是UTC时间？
UTC是协调世界时(Universal Time Coordinated)英文缩写，是由国际无线电咨询委员会规定和推荐,
并由国际时间局(BIH)负责保持的以秒为基础的时间标度。UTC相当于本初子午线(即经度0度)上的平均太阳时
UTC + 时区差 ＝ 本地时间     中国的时间与UTC的时差均为+8，也就是UTC+8。
Date: Fri, 08 Nov 2002 09:42:22 +0800


什么是GMT时间？
由于地球轨道并非圆形，其运行速度又随着地球与太阳的距离改变而出现变化，因此视太阳时欠缺均匀性。
视太阳日的长度同时亦受到地球自转轴相对轨道面的倾斜度所影响。
为着要纠正上述的不均匀性，天文学家计算地球非圆形轨迹与极轴倾斜对视太阳时的效应。
平太阳时就是指经修订后的视太阳时。在格林尼治子午线上的平太阳时称为世界时(UT0)，又叫格林尼治平时(GMT)或者格林威治平时。
Date: Wed, 25 Jul 2018 19:19:42 GMT-0400 (AST)

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
      <p>UTC格式：{{UTCDate }}</p>
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
      UTCDate:function(){
        //moment.utc([2010, 1, 14, 15, 25, 50, 125]);
        return moment.utc('2019-04-05 11:22:31');
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

