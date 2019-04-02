<template>
  <div class="vuxCalendar">
    <x-header :left-options="{backText: ''}">mpvueCalendar</x-header>
    <Calendar
        :lunar = "true"
        :completion = "true"
        :now = "true"
        @select="select"
        ref="calendar"
        :monFirst = "true"
     />
    <!--响应区域-->
    <div class="xyList">
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li><li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li><li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li><li>dsfdsfasdf</li>
        <li>dsfdsfasdf</li>
    </div>
    <!--响应区域 end-->
  </div>
</template>

<script>
//   import MescrollVue from '../mescroll.js/mescroll.vue'
  import {XHeader} from 'vux'
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/browser-style.css'
  export default {
    name: 'vuxCalendar',
    components: {XHeader,Calendar},
    props: [],
    data() {
      return {
        data:""
      }
    },
    mounted () {
   
   },
  
  methods: {
    select(ev){
        console.log(JSON.stringify(ev));
    },
  }

  }
</script>

<style scope>
  /*以fixed的方式固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 500px;
    bottom: 0;
    height: auto;
  }

  .header {
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #eee;
    background-color: white;
  }

  .header .btn-left {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
    line-height: 22px;
  }

  .header .btn-right {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 12px;
  }

  .mescroll .notice {
    font-size: 14px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    text-align: center;
    color: #555;
  }

  .news-list li {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .news-list .new-content {
    font-size: 14px;
    margin-top: 6px;
    margin-left: 10px;
    color: #666;
  }
  .mpvue-calendar .lunarStyle span{
      line-height: 1.6;
  }
  .mpvue-calendar .lunarStyle .mc-text {
    bottom: 8px;
}
</style>