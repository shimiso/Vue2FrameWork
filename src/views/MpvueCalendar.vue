<template>
  <div class="vuxCalendar">
    <x-header :left-options="{backText: ''}">mpvueCalendar</x-header>
    <div class="calendar">
      <Calendar
        :clean="clean"
        :lunar="lunar"
        ref="calendar"
        :range="isrange"
        :multi="ismulti"
        :almanacs="almanacs"
        :tileContent="tileContent"
        @select="select"
        @next="next"
        @prev="prev"
        :value="value"
        :disabled="disabledArray"
        :weekSwitch="weekSwitch"
        :events="events"
      />
    </div>
    <div class="right">
      <div class="box-mode">
        <div :class="[{'selectMode': isrange}, 'mode-btn']" @click="rangeMode">范围模式</div>
        <div :class="[{'selectMode': ismulti}, 'mode-btn']" @click="multiMode">多选模式</div>
        <div :class="[{'selectMode': !ismulti && !isrange}, 'mode-btn']" @click="valueMode">单选模式</div>
        <div :class="[{'selectMode': !ismulti && !isrange}, 'mode-btn', 'mode-switch']" @click="switchMode">按{{weekSwitch ? '月' : '周'}}切换</div>
        <div class="data-info" >
          <p><span>选中日期:</span></p>
          <div class="content">
            <span v-for="(value, index) in renderValues" :key="index">{{value}}</span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="setToday" @click="setToday">返回今日</div>
        <div class="setToday" @click="renderer">渲染月份(2018-8)</div>
        <div class="setToday" @click="dateInfo">打印信息(2018-8-23)</div>
      </div>
      <div class="data-info" v-if="!!dataInfo.cYear">
        <p><span>公历日期:</span>{{dataInfo.cYear}}-{{dataInfo.cMonth}}-{{dataInfo.cDay}}</p>
        <p><span>星期:</span>{{dataInfo.ncWeek}}</p>
        <p><span>星座:</span>{{dataInfo.astro}}</p>
        <p><span>属相:</span>{{dataInfo.Animal}}</p>
        <p><span>农历日期:</span>{{dataInfo.lYear}}-{{dataInfo.lMonth}}-{{dataInfo.lDay}}</p>
        <p><span>农历写法:</span>{{dataInfo.IMonthCn}}{{dataInfo.IDayCn}}</p>
        <p><span>传统历法:</span>{{dataInfo.gzYear}}年  {{dataInfo.gzMonth}}月  {{dataInfo.gzDay}}日</p>
        <p><span>节气:</span>{{dataInfo.Term}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/browser-style.css'
  import {holiday} from '../libs/holiday'

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  export default {
    data () {
      return {
        value: [[year, month, 16], [year, month, 22]],
        isrange: true,
        weekSwitch: false,
        ismulti: false,
        dataInfo: {},
        monFirst: true,
        clean: false, //简洁模式
        lunar: true, //显示农历
        events: {'2019-2-7':'今日备注', '2019-2-8':'一条很长的明日备注'},
        tileContent: holiday,
        renderValues: [],
        disabledArray: ['2019-1-27','2019-2-25'],
        almanacs: {'11-14': '学生日', '11-22': '感恩日'}
      }
    },
    components: {XHeader,Calendar},
    mounted(){
      this.handelRenderValues();
    },
    methods: {
      switchMode(data){
        this.weekSwitch = !this.weekSwitch;
        setTimeout(() => {
          this.$refs.calendar.renderer(2019, 1); //渲染2018年8月份
        }, 0)
      },
      handelRenderValues(data){
        if (this.ismulti) {
          this.renderValues = this.value.map(v => v.join('-'))
        } else if (this.isrange) {
          const values = [];
          const valueData = data || this.value;
          this.value.forEach((v, i) => {
            values.push(v.join('-'));
            if (!i) {
              values.push('~');
            }
          });
          this.renderValues = values;
        } else {
          this.renderValues = [this.value.join('-')];
        }
      },
      multiMode(value){
        this.ismulti = true;
        this.isrange = false;
        this.value = [[year, month, 16], [year, month, 18]];
        this.handelRenderValues();
        this.$refs.calendar.renderer(year, month);
      },
      rangeMode(value){
        this.ismulti = false;
        this.isrange = true;
        this.value = [[year, month, 16], [year, month, 22]];
        this.handelRenderValues();
        this.$refs.calendar.renderer(year, month);
      },
      valueMode(value){
        this.ismulti = false;
        this.isrange = false;
        this.value = [year, month, 16];
        this.handelRenderValues();
        this.$refs.calendar.renderer(year, month);
      },
      selectMonth(month,year){
        console.log(year,month)
      },
      prev(y, m, w){
        console.log(y, m, w)
      },
      next(year, month, week){
        console.log(year, month, week)
      },
      selectYear(year){
        console.log(year)
      },
      setToday() {
        this.$refs.calendar.setToday();
      },
      dateInfo() {
        const info = this.$refs.calendar.dateInfo(2018, 8, 23);
        this.dataInfo = info;
        console.log(info);
      },
      renderer() {
        this.$refs.calendar.renderer(2018, 8); //渲染2018年8月份
      },
      select(val, val2) {
        if (this.isrange) {
          this.handelRenderValues([val, val2]);
        } else if (this.ismulti) {
          this.handelRenderValues(val);
        } else {
          this.handelRenderValues([val]);
        }
        console.log(val);
        console.log(val2);
      }
    }
  }
</script>

<style scope>
  .mpvue-calendar .lunarStyle span{
      line-height: 1.2;
  }
  .mpvue-calendar .lunarStyle .mc-text {
    bottom: 8px;
  }
  .calendar-wrapper{
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    position: relative;
  }
  .calendar{
    width: 100%;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.05);
    border-radius: 5px;
  }
  .calendar-next, .calendar-prev{
    cursor: pointer;
  }
  .box{
    margin-top: 10px;
  }
  .setToday{
    padding: 4px 6px;
    background-color: #00a2d4;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .calendar-years>span{
    cursor: pointer;
  }
  .xiu{
    background-color: #fff0f0;
  }
  .xiu span{
    color: red;
  }
  .xiu .slot-element{
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 0.7em;
    background-color: #ff4433;
    color: #fff;
    padding: 0px 2px;
    border-radius: 3px;
    display: inline-block;
  }
  .ban{
    background-color: #f5f5f5;
  }
  .ban span{
    color: #333 !important;
  }
  .ban .slot-element{
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 0.7em;
    background-color: #969799;
    color: #fff;
    padding: 0px 2px;
    border-radius: 3px;
    display: inline-block;
  }
  .mpvue-calendar td{
    padding: 4px;
    box-sizing: border-box;
  }
  .selected{
    background-color: rgba(0,0,0,0) !important;
  }
  .data-info{
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .data-info p span{
    width: 100px;
    display: inline-block;
    margin-right: 10px;
  }

  .box-mode .data-info p{
    margin-bottom: 14px;
  }
  .box-mode .data-info .content{
    overflow: auto;
    margin: 1em 0;
  }
  .box-mode .data-info span{
    margin: 0px 2px;
    display: inline-block;
  }
  .box-mode .selectMode{
    background-color: #3b75fb;
  }
  .box-mode .mode-btn{
    padding: 4px 6px;
    background-color: #00a2d4;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .box-mode .mode-switch{
    background-color: #E74C3C !important;
  }
  .mc-range-begin .mc-text, .mc-range-end .mc-text{
    display: none !important;
  }
  .mc-range-begin:after{
    content: '开始';
    display: block;
    box-sizing: border-box;
    height: 0.7em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.7em;
    line-height: 0.7em;
    z-index: 4;
    color: #fff;
  }
  .mc-range-end:after {
    content: '结束';
    display: block;
    box-sizing: border-box;
    height: 0.7em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.7em;
    line-height: 0.7em;
    z-index: 4;
    color: #fff;
  }
  .disabled .calendar-date{
    color: #ccc !important;
  }
  .selected .calendar-date{
    color: #fff !important;
  }
  @media screen and (min-width: 1200px) {
    .right{
      width: 430px;
      position: absolute;
      left: calc(100% + 1em);
      top: 0px;
      padding-top: 10px;
    }
  }
</style>
