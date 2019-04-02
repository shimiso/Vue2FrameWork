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
  .mpvue-calendar .lunarStyle span{
      line-height: 1.6;
  }
  .mpvue-calendar .lunarStyle .mc-text {
    bottom: 8px;
}
</style>