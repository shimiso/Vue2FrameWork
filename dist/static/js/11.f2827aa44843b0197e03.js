webpackJsonp([11],{

/***/ "4Sv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuxCalendar"},[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("mpvueCalendar")]),_vm._v(" "),_c('div',{staticClass:"calendar"},[_c('Calendar',{ref:"calendar",attrs:{"clean":_vm.clean,"lunar":_vm.lunar,"range":_vm.isrange,"multi":_vm.ismulti,"almanacs":_vm.almanacs,"tileContent":_vm.tileContent,"value":_vm.value,"disabled":_vm.disabledArray,"weekSwitch":_vm.weekSwitch,"events":_vm.events},on:{"select":_vm.select,"next":_vm.next,"prev":_vm.prev}})],1),_vm._v(" "),_c('div',{staticClass:"right"},[_c('div',{staticClass:"box-mode"},[_c('div',{class:[{'selectMode': _vm.isrange}, 'mode-btn'],on:{"click":_vm.rangeMode}},[_vm._v("范围模式")]),_vm._v(" "),_c('div',{class:[{'selectMode': _vm.ismulti}, 'mode-btn'],on:{"click":_vm.multiMode}},[_vm._v("多选模式")]),_vm._v(" "),_c('div',{class:[{'selectMode': !_vm.ismulti && !_vm.isrange}, 'mode-btn'],on:{"click":_vm.valueMode}},[_vm._v("单选模式")]),_vm._v(" "),_c('div',{class:[{'selectMode': !_vm.ismulti && !_vm.isrange}, 'mode-btn', 'mode-switch'],on:{"click":_vm.switchMode}},[_vm._v("按"+_vm._s(_vm.weekSwitch ? '月' : '周')+"切换")]),_vm._v(" "),_c('div',{staticClass:"data-info"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},_vm._l((_vm.renderValues),function(value,index){return _c('span',{key:index},[_vm._v(_vm._s(value))])}))])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"setToday",on:{"click":_vm.setToday}},[_vm._v("返回今日")]),_vm._v(" "),_c('div',{staticClass:"setToday",on:{"click":_vm.renderer}},[_vm._v("渲染月份(2018-8)")]),_vm._v(" "),_c('div',{staticClass:"setToday",on:{"click":_vm.dateInfo}},[_vm._v("打印信息(2018-8-23)")])]),_vm._v(" "),(!!_vm.dataInfo.cYear)?_c('div',{staticClass:"data-info"},[_c('p',[_c('span',[_vm._v("公历日期:")]),_vm._v(_vm._s(_vm.dataInfo.cYear)+"-"+_vm._s(_vm.dataInfo.cMonth)+"-"+_vm._s(_vm.dataInfo.cDay))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("星期:")]),_vm._v(_vm._s(_vm.dataInfo.ncWeek))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("星座:")]),_vm._v(_vm._s(_vm.dataInfo.astro))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("属相:")]),_vm._v(_vm._s(_vm.dataInfo.Animal))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("农历日期:")]),_vm._v(_vm._s(_vm.dataInfo.lYear)+"-"+_vm._s(_vm.dataInfo.lMonth)+"-"+_vm._s(_vm.dataInfo.lDay))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("农历写法:")]),_vm._v(_vm._s(_vm.dataInfo.IMonthCn)+_vm._s(_vm.dataInfo.IDayCn))]),_vm._v(" "),_c('p',[_c('span',[_vm._v("传统历法:")]),_vm._v(_vm._s(_vm.dataInfo.gzYear)+"年  "+_vm._s(_vm.dataInfo.gzMonth)+"月  "+_vm._s(_vm.dataInfo.gzDay)+"日")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("节气:")]),_vm._v(_vm._s(_vm.dataInfo.Term))])]):_vm._e()])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',[_vm._v("选中日期:")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KL4r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _mpvueCalendar = __webpack_require__("iV1n");

var _mpvueCalendar2 = _interopRequireDefault(_mpvueCalendar);

__webpack_require__("bPqC");

var _holiday = __webpack_require__("vmDG");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
exports.default = {
  data: function data() {
    return {
      value: [[year, month, 16], [year, month, 22]],
      isrange: true,
      weekSwitch: false,
      ismulti: false,
      dataInfo: {},
      monFirst: true,
      clean: false,
      lunar: true,
      events: { '2019-2-7': '今日备注', '2019-2-8': '一条很长的明日备注' },
      tileContent: _holiday.holiday,
      renderValues: [],
      disabledArray: ['2019-1-27', '2019-2-25'],
      almanacs: { '11-14': '学生日', '11-22': '感恩日' }
    };
  },

  components: { XHeader: _index2.default, Calendar: _mpvueCalendar2.default },
  mounted: function mounted() {
    this.handelRenderValues();
  },

  methods: {
    switchMode: function switchMode(data) {
      var _this = this;

      this.weekSwitch = !this.weekSwitch;
      setTimeout(function () {
        _this.$refs.calendar.renderer(2019, 1);
      }, 0);
    },
    handelRenderValues: function handelRenderValues(data) {
      if (this.ismulti) {
        this.renderValues = this.value.map(function (v) {
          return v.join('-');
        });
      } else if (this.isrange) {
        var values = [];
        var valueData = data || this.value;
        this.value.forEach(function (v, i) {
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
    multiMode: function multiMode(value) {
      this.ismulti = true;
      this.isrange = false;
      this.value = [[year, month, 16], [year, month, 18]];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    rangeMode: function rangeMode(value) {
      this.ismulti = false;
      this.isrange = true;
      this.value = [[year, month, 16], [year, month, 22]];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    valueMode: function valueMode(value) {
      this.ismulti = false;
      this.isrange = false;
      this.value = [year, month, 16];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    selectMonth: function selectMonth(month, year) {
      console.log(year, month);
    },
    prev: function prev(y, m, w) {
      console.log(y, m, w);
    },
    next: function next(year, month, week) {
      console.log(year, month, week);
    },
    selectYear: function selectYear(year) {
      console.log(year);
    },
    setToday: function setToday() {
      this.$refs.calendar.setToday();
    },
    dateInfo: function dateInfo() {
      var info = this.$refs.calendar.dateInfo(2018, 8, 23);
      this.dataInfo = info;
      console.log(info);
    },
    renderer: function renderer() {
      this.$refs.calendar.renderer(2018, 8);
    },
    select: function select(val, val2) {
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
};

/***/ }),

/***/ "b0qn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b3Jb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__("aA9S");

var _assign2 = _interopRequireDefault(_assign);

var _calendarinit = __webpack_require__("z/UX");

var _calendarinit2 = _interopRequireDefault(_calendarinit);

__webpack_require__("su0w");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = !!window;
var now = new Date();
var todayString = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
exports.default = {
  props: {
    multi: {
      type: Boolean,
      default: false
    },
    arrowLeft: {
      type: String,
      default: ''
    },
    arrowRight: {
      type: String,
      default: ''
    },
    clean: {
      type: Boolean,
      default: false
    },
    now: {
      type: [String, Boolean],
      default: true
    },
    range: {
      type: Boolean,
      default: false
    },
    completion: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    begin: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    end: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    zero: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    almanacs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tileContent: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    monFirst: {
      type: Boolean,
      default: false
    },
    weeks: {
      type: Array,
      default: function _default() {
        return this.monFirst ? ['一', '二', '三', '四', '五', '六', '日'] : ['日', '一', '二', '三', '四', '五', '六'];
      }
    },
    months: {
      type: Array,
      default: function _default() {
        return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      }
    },
    events: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekSwitch: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      years: [],
      yearsShow: false,
      year: 0,
      month: 0,
      monthPosition: 0,
      day: 0,
      days: [],
      multiDays: [],
      today: [],
      handleMultiDay: [],
      firstRender: true,
      isIos: true,
      showToday: {},
      monthText: '',
      festival: {
        lunar: {
          "1-1": "春节",
          "1-15": "元宵节",
          "2-2": "龙头节",
          "5-5": "端午节",
          "7-7": "七夕节",
          "7-15": "中元节",
          "8-15": "中秋节",
          "9-9": "重阳节",
          "10-1": "寒衣节",
          "10-15": "下元节",
          "12-8": "腊八节",
          "12-23": "小年"
        },
        gregorian: {
          "1-1": "元旦",
          "2-14": "情人节",
          "3-8": "妇女节",
          "3-12": "植树节",
          "5-1": "劳动节",
          "5-4": "青年节",
          "6-1": "儿童节",
          "7-1": "建党节",
          "8-1": "建军节",
          "9-10": "教师节",
          "10-1": "国庆节",
          "12-24": "平安夜",
          "12-25": "圣诞节"
        }
      },
      rangeBegin: [],
      rangeEnd: [],
      multiDaysData: [],
      monthsLoop: [],
      itemStyle: {},
      unit: isBrowser ? 'px' : 'rpx',
      positionH: isBrowser ? -24 : -40,
      monthIndex: 0,
      oversliding: false,
      rangeBgHide: false,
      monthDays: [],
      weekIndex: 0,
      startWeekIndex: 0,
      positionWeek: true
    };
  },

  watch: {
    events: function events() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'events');
    },
    disabled: function disabled() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'disabled');
    },
    value: function value() {
      this.render(this.year, this.month, '_WATCHRENDERVALUE_');
    },
    tileContent: function tileContent() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'tileContent');
    },
    almanacs: function almanacs() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'almanacs');
    }
  },
  created: function created() {
    var loopArray = this.months.concat();
    loopArray.unshift(this.months[this.months.length - 1]);
    loopArray.push(this.months[0]);
    this.monthsLoop = loopArray;
    this.monthsLoopCopy = this.monthsLoop.concat();
  },
  mounted: function mounted() {
    var self = this;
    var calendar = this.$refs.calendar;
    var itemWidth = (calendar.clientWidth / 7 - 4).toFixed(5);
    this.itemStyle = { width: itemWidth + 'px', height: itemWidth + 'px', lineHeight: itemWidth - 8 + 'px' };
    if (!isBrowser) {
      wx.getSystemInfo({
        success: function success(res) {
          self.isIos = (res.system.split(' ') || [])[0] === 'iOS';
        }
      });
    }
    this.oversliding = true;
    this.initRender = true;
    this.init();
  },

  methods: {
    init: function init() {
      var now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      this.monthIndex = this.month + 1;
      if (this.value.length || this.multi) {
        if (this.range) {
          this.year = parseInt(this.value[0][0]);
          this.month = parseInt(this.value[0][1]) - 1;
          this.day = parseInt(this.value[0][2]);
          var year2 = parseInt(this.value[1][0]);
          var month2 = parseInt(this.value[1][1]) - 1;
          var day2 = parseInt(this.value[1][2]);
          this.rangeBegin = [this.year, this.month, this.day];
          this.rangeEnd = [year2, month2, day2];
        } else if (this.multi) {
          this.multiDays = this.value;
          var handleMultiDay = this.handleMultiDay;
          if (this.firstRender) {
            this.firstRender = false;
            var thatYear = (this.value[0] || [])[0];
            var thatMonth = (this.value[0] || [])[1];
            if (isFinite(thatYear) && isFinite(thatMonth)) {
              this.month = parseInt(thatMonth) - 1;
              this.year = parseInt(thatYear);
            }
          } else if (this.handleMultiDay.length) {
            this.month = parseInt(handleMultiDay[handleMultiDay.length - 1][1]) - 1;
            this.year = parseInt(handleMultiDay[handleMultiDay.length - 1][0]);
            this.handleMultiDay = [];
          } else {
            this.month = parseInt(this.value[this.value.length - 1][1]) - 1;
            this.year = parseInt(this.value[this.value.length - 1][0]);
          }
          this.day = parseInt((this.value[0] || [])[2]);
        } else {
          this.year = parseInt(this.value[0]);
          this.month = parseInt(this.value[1]) - 1;
          this.day = parseInt(this.value[2]);
        }
      }
      this.updateHeadMonth();
      this.render(this.year, this.month);
    },
    renderOption: function renderOption(year, month, i, playload) {
      var weekSwitch = this.weekSwitch;
      var seletSplit = this.value;
      var isMonthModeCurrentMonth = !weekSwitch && !playload;
      var disabledFilter = function disabledFilter(disabled) {
        return disabled.find(function (v) {
          var dayArr = v.split('-');
          return year === Number(dayArr[0]) && month === dayArr[1] - 1 && i === Number(dayArr[2]);
        });
      };
      if (this.range) {
        var lastDay = new Date(year, month + 1, 0).getDate() === i ? { lastDay: true } : null;
        var options = (0, _assign2.default)({ day: i }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i), lastDay);
        var date = options.date,
            day = options.day;

        var copyRangeBegin = this.rangeBegin.concat();
        var copyRangeEnd = this.rangeEnd.concat();
        copyRangeBegin[1] = copyRangeBegin[1] + 1;
        copyRangeEnd[1] = copyRangeEnd[1] + 1;
        if (weekSwitch || isMonthModeCurrentMonth) {
          copyRangeEnd.join('-') === date && (options.rangeClassName = 'mc-range-end');
          copyRangeBegin.join('-') === date && (options.rangeClassName = 'mc-range-begin');
        }
        if (year === copyRangeEnd[0] && month + 1 === copyRangeEnd[1] && day === copyRangeEnd[2] - 1) {
          options.rangeClassName = options.rangeClassName ? ['mc-range-begin', 'mc-range-second-to-last'] : 'mc-range-second-to-last';
        }
        if (this.rangeBegin.length) {
          var beginTime = +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]);
          var endTime = +new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]);
          var stepTime = +new Date(year, month, i);
          if (beginTime <= stepTime && endTime >= stepTime) {
            options.selected = true;
          }
        }
        if (this.begin.length) {
          var _beginTime = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
          if (_beginTime > +new Date(year, month, i)) {
            options.disabled = true;
          }
        }
        if (this.end.length) {
          var _endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])));
          if (_endTime < Number(new Date(year, month, i))) {
            options.disabled = true;
          }
        }
        if (playload && !weekSwitch) {
          options.disabled = true;
        } else if (this.disabled.length && disabledFilter(this.disabled)) {
          options.disabled = true;
        }
        var monthFirstDay = year + '-' + (month + 1) + '-' + 1;
        var monthLastDay = year + '-' + (month + 1) + '-' + new Date(year, month + 1, 0).getDate();
        monthFirstDay === date && options.selected && !options.rangeClassName && (options.rangeClassName = 'mc-range-month-first');
        monthLastDay === date && options.selected && !options.rangeClassName && (options.rangeClassName = 'mc-range-month-last');
        this.isCurrentMonthToday(options) && (options.isToday = true);
        !weekSwitch && playload && (options.selected = false);
        return options;
      } else if (this.multi) {
        var _options = void 0;
        if (this.value.find(function (v) {
          return year === v[0] && month === v[1] - 1 && i === v[2];
        })) {
          _options = (0, _assign2.default)({ day: i, selected: true }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i));
        } else {
          _options = (0, _assign2.default)({ day: i, selected: false }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i));
          if (this.begin.length) {
            var _beginTime2 = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
            if (_beginTime2 > +new Date(year, month, i)) {
              _options.disabled = true;
            }
          }
          if (this.end.length) {
            var _endTime2 = +new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2]));
            if (_endTime2 < +new Date(year, month, i)) {
              _options.disabled = true;
            }
          }
          if (playload && !weekSwitch) {
            _options.disabled = true;
          } else if (this.disabled.length && disabledFilter(this.disabled)) {
            _options.disabled = true;
          }
        }
        if (_options.selected && this.multiDaysData.length !== this.value.length) {
          this.multiDaysData.push(_options);
        }
        this.isCurrentMonthToday(_options) && (_options.isToday = true);
        !weekSwitch && playload && (_options.selected = false);
        return _options;
      } else {
        var _options2 = {};
        var monthHuman = month + 1;
        if (seletSplit[0] === year && seletSplit[1] === monthHuman && seletSplit[2] === i) {
          (0, _assign2.default)(_options2, { day: i, selected: true }, this.getLunarInfo(year, monthHuman, i), this.getEvents(year, monthHuman, i));
        } else {
          (0, _assign2.default)(_options2, { day: i, selected: false }, this.getLunarInfo(year, monthHuman, i), this.getEvents(year, monthHuman, i));
          if (this.begin.length) {
            var _beginTime3 = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
            if (_beginTime3 > Number(new Date(year, month, i))) {
              _options2.disabled = true;
            }
          }
          if (this.end.length) {
            var _endTime3 = +new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2]));
            if (_endTime3 < +new Date(year, month, i)) {
              _options2.disabled = true;
            }
          }
          if (playload && !weekSwitch) {
            _options2.disabled = true;
          } else if (this.disabled.length && disabledFilter(this.disabled)) {
            _options2.disabled = true;
          }
        }
        this.isCurrentMonthToday(_options2) && (_options2.isToday = true);
        !weekSwitch && playload && (_options2.selected = false);
        return _options2;
      }
    },
    isCurrentMonthToday: function isCurrentMonthToday(options) {
      var isToday = todayString === options.date;
      if (!isToday) return false;
      return this.weekSwitch ? isToday : Number(todayString.split('-')[1]) === this.month + 1;
    },
    watchRender: function watchRender(type) {
      var weekSwitch = this.weekSwitch;
      var daysDeepCopy = JSON.parse((0, _stringify2.default)(this.monthDays));
      if (type === 'events') {
        var events = this.events || {};
        (0, _keys2.default)(events).forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value) {
                vv.eventName = events[value];
                return true;
              }
            });
          });
        });
        this.monthDays = daysDeepCopy;
      } else if (type === 'disabled') {
        var disabled = this.disabled || [];
        disabled.forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value) {
                vv.disabled = true;
                return true;
              }
            });
          });
        });
      } else if (type === 'almanacs') {
        var almanacs = this.almanacs || {};
        (0, _keys2.default)(almanacs).forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date.slice(5, 20) === value) {
                vv.lunar = almanacs[value];
                return true;
              }
            });
          });
        });
      } else if (type === 'tileContent') {
        var tileContent = this.tileContent || [];
        tileContent.forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value.date) {
                vv.className = value.className;
                vv.content = value.content;
                return true;
              }
            });
          });
        });
      }
      if (weekSwitch) {
        this.monthDays = daysDeepCopy;
        this.days = [daysDeepCopy[this.weekIndex]];
      } else {
        this.days = daysDeepCopy;
      }
    },
    render: function render(y, m, renderer, payload) {
      var _this = this;

      var weekSwitch = this.weekSwitch;
      var isCustomRender = renderer === 'CUSTOMRENDER';
      var isWatchRenderValue = renderer === '_WATCHRENDERVALUE_';
      if (renderer === '_WATCHRENDER_') return this.watchRender(payload);
      if (isWatchRenderValue && weekSwitch) {
        this.positionWeek = true;
      }
      if (isCustomRender) {
        this.year = y;
        this.month = m;
        this.positionWeek = true;
        if (weekSwitch && !payload) {
          this.startWeekIndex = 0;
          this.weekIndex = 0;
        }
        this.updateHeadMonth();
      }
      var firstDayOfMonth = new Date(y, m, 1).getDay();
      var lastDateOfMonth = new Date(y, m + 1, 0).getDate();
      var lastDayOfLastMonth = new Date(y, m, 0).getDate();
      this.year = y;
      var i = 1,
          line = 0,
          temp = [],
          nextMonthPushDays = 1;
      for (i; i <= lastDateOfMonth; i++) {
        var day = new Date(y, m, i).getDay();
        var k = void 0;
        if (day === 0) {
          temp[line] = [];
        } else if (i === 1) {
          temp[line] = [];
          k = lastDayOfLastMonth - firstDayOfMonth + 1;
          for (var j = 0; j < firstDayOfMonth; j++) {
            temp[line].push((0, _assign2.default)(this.renderOption(this.computedPrevYear(), this.computedPrevMonth(), k, 'prevMonth'), { lastMonth: true }));
            k++;
          }
        }

        temp[line].push(this.renderOption(this.year, this.month, i));

        if (day === 6 && i < lastDateOfMonth) {
          line++;
        } else if (i === lastDateOfMonth) {
          var _k = 1;
          var lastDateOfMonthLength = this.monFirst ? 7 : 6;
          for (var d = day; d < lastDateOfMonthLength; d++) {
            temp[line].push((0, _assign2.default)(this.renderOption(this.computedNextYear(), this.computedNextMonth(), _k, 'nextMonth'), { nextMonth: true }));
            _k++;
          }
          nextMonthPushDays = _k;
        }
      }
      var completion = this.completion;
      if (this.monFirst) {
        if (!firstDayOfMonth) {
          var lastMonthDay = lastDayOfLastMonth;
          var LastMonthItems = [];
          for (var _i = 1; _i <= 7; _i++) {
            LastMonthItems.unshift((0, _assign2.default)(this.renderOption(this.computedPrevYear(), this.computedPrevMonth(), lastMonthDay), { disabled: false, lastMonth: true }));
            lastMonthDay--;
          }
          temp.unshift(LastMonthItems);
        }
        temp.forEach(function (item, index) {
          if (!index) {
            return item.splice(0, 1);
          };
          temp[index - 1].length < 7 && temp[index - 1].push(item.splice(0, 1)[0]);
        });
        if (!completion && !weekSwitch) {
          var lastIndex = temp.length - 1;
          var secondToLastIndex = lastIndex - 1;
          var differentMonth = temp[lastIndex][0].date.split('-')[1] !== temp[secondToLastIndex][6].date.split('-')[1];
          differentMonth && temp.splice(lastIndex, 1);
        }
      }
      if (completion && !weekSwitch && temp.length <= 5 && nextMonthPushDays > 0) {
        for (var _i2 = temp.length; _i2 <= 5; _i2++) {
          temp[_i2] = [];
          var start = nextMonthPushDays + (_i2 - line - 1) * 7;
          for (var _d = start; _d <= start + 6; _d++) {
            temp[_i2].push((0, _assign2.default)({ day: _d, disabled: true, nextMonth: true }, this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), _d), this.getEvents(this.computedNextYear(), this.computedNextMonth(true), _d)));
          }
        }
      }
      if (this.tileContent.length) {
        temp.forEach(function (item, index) {
          item.forEach(function (v, i) {
            var contents = _this.tileContent.find(function (val) {
              return val.date === v.date;
            });
            if (contents) {
              var _ref = contents || {},
                  className = _ref.className,
                  content = _ref.content;

              v.className = className;
              v.content = content;
            }
          });
        });
      }
      this.monthDays = temp;
      if (weekSwitch) {
        if (this.positionWeek) {
          var payloadDay = '';
          var searchIndex = true;
          if (Array.isArray(payload)) {
            payloadDay = [payload[0], payload[1] + 1, payload[2]].join('-');
          } else if (this.multi || isWatchRenderValue) {
            payloadDay = this.thisTimeSelect;
          }
          if (payload === 'SETTODAY') {
            payloadDay = todayString;
          } else if (isCustomRender) {
            if (typeof payload === 'string') {
              payloadDay = [y, Number(m) + 1, payload].join('-');
              searchIndex = true;
            } else if (typeof payload === 'number') {
              var setIndex = payload > temp.length ? temp.length - 1 : payload;
              this.startWeekIndex = setIndex;
              this.weekIndex = setIndex;
              this.positionWeek = false;
              searchIndex = false;
            }
          }
          var positionDay = payloadDay || todayString;
          if (searchIndex) {
            temp.some(function (v, i) {
              var isWeekNow = v.find(function (vv) {
                return vv.date === positionDay;
              });
              if (isWeekNow) {
                _this.startWeekIndex = i;
                _this.weekIndex = i;
                return true;
              }
            });
          }
          this.positionWeek = false;
        }
        this.days = [temp[this.startWeekIndex]];
        if (this.initRender) {
          this.setMonthRangeofWeekSwitch();
          this.initRender = false;
        }
      } else {
        this.days = temp;
      }
      var todayText = '今';
      if (typeof this.now === 'boolean' && !this.now) {
        this.showToday = { show: false };
      } else if (typeof this.now === 'string') {
        this.showToday = {
          show: true,
          text: this.now || todayText
        };
      } else {
        this.showToday = {
          show: true,
          text: todayText
        };
      }
    },
    renderer: function renderer(y, m, w) {
      var renderY = y || this.year;
      var renderM = typeof parseInt(m) === 'number' ? m - 1 : this.month;
      this.initRender = true;
      this.render(renderY, renderM, 'CUSTOMRENDER', w);
      !this.weekSwitch && (this.monthsLoop = this.monthsLoopCopy.concat());
    },
    computedPrevYear: function computedPrevYear() {
      var value = this.year;
      if (this.month - 1 < 0) {
        value--;
      }
      return value;
    },
    computedPrevMonth: function computedPrevMonth(isString) {
      var value = this.month;
      if (this.month - 1 < 0) {
        value = 11;
      } else {
        value--;
      }
      if (isString) {
        return value + 1;
      }
      return value;
    },
    computedNextYear: function computedNextYear() {
      var value = this.year;
      if (this.month + 1 > 11) {
        value++;
      }
      return value;
    },
    computedNextMonth: function computedNextMonth(isString) {
      var value = this.month;
      if (this.month + 1 > 11) {
        value = 0;
      } else {
        value++;
      }
      if (isString) {
        return value + 1;
      }
      return value;
    },
    getLunarInfo: function getLunarInfo(y, m, d) {
      var lunarInfo = _calendarinit2.default.solar2lunar(y, m, d);
      var yearEve = '';
      if (lunarInfo.lMonth === 12 && lunarInfo.lDay === _calendarinit2.default.monthDays(lunarInfo.lYear, 12)) {
        yearEve = '除夕';
      }
      var lunarValue = lunarInfo.IDayCn;
      var Term = lunarInfo.Term;
      var isLunarFestival = false;
      var isGregorianFestival = false;
      if (this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay]) {
        lunarValue = this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay];
        isLunarFestival = true;
      } else if (this.festival.gregorian[m + "-" + d]) {
        lunarValue = this.festival.gregorian[m + "-" + d];
        isGregorianFestival = true;
      }
      var lunarInfoObj = {
        date: y + '-' + m + '-' + d,
        lunar: yearEve || Term || lunarValue,
        isLunarFestival: isLunarFestival,
        isGregorianFestival: isGregorianFestival,
        isTerm: !!yearEve || lunarInfo.isTerm
      };
      if ((0, _keys2.default)(this.almanacs).length) {
        (0, _assign2.default)(lunarInfoObj, {
          almanac: this.almanacs[m + "-" + d] || '',
          isAlmanac: !!this.almanacs[m + "-" + d]
        });
      }
      return lunarInfoObj;
    },
    getEvents: function getEvents(y, m, d) {
      if ((0, _keys2.default)(this.events).length == 0) return false;
      var eventName = this.events[y + "-" + m + "-" + d];
      var data = {};
      if (eventName != undefined) {
        data.eventName = eventName;
      }
      return data;
    },
    prev: function prev(e) {
      var _this2 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      var changeMonth = function changeMonth(changed) {
        if (_this2.monthIndex === 1) {
          _this2.oversliding = false;
          _this2.month = 11;
          _this2.year = parseInt(_this2.year) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        } else if (_this2.monthIndex === 0) {
          _this2.oversliding = true;
          _this2.monthIndex = 12;
          setTimeout(function () {
            return _this2.prev(e);
          }, 50);
          return _this2.updateHeadMonth('custom');
        } else if (_this2.monthIndex === 13) {
          _this2.month = 11;
          _this2.year = parseInt(_this2.year) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        } else {
          _this2.oversliding = false;
          _this2.month = parseInt(_this2.month) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        }
        _this2.updateHeadMonth('custom');
        _this2.render(_this2.year, _this2.month);
        typeof changed === 'function' && changed();
        var weekIndex = weekSwitch ? _this2.weekIndex : undefined;
        _this2.$emit('prev', _this2.year, _this2.month + 1, weekIndex);
      };
      if (!this.weekSwitch) return changeMonth();
      var changeWeek = function changeWeek() {
        _this2.weekIndex = _this2.weekIndex - 1;
        _this2.days = [_this2.monthDays[_this2.weekIndex]];
        _this2.setMonthRangeofWeekSwitch();
        _this2.$emit('prev', _this2.year, _this2.month + 1, _this2.weekIndex);
      };
      var currentWeek = (this.days[0] || [])[0] || {};
      if (currentWeek.lastMonth || currentWeek.day === 1) {
        var monthChenged = function monthChenged() {
          var lastMonthLength = _this2.monthDays.length;
          var startWeekIndex = currentWeek.lastMonth ? lastMonthLength - 1 : lastMonthLength;
          _this2.startWeekIndex = startWeekIndex;
          _this2.weekIndex = startWeekIndex;
          changeWeek();
        };
        changeMonth(monthChenged);
      } else {
        changeWeek();
      }
    },
    next: function next(e) {
      var _this3 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      var changeMonth = function changeMonth() {
        if (_this3.monthIndex === 12) {
          _this3.oversliding = false;
          _this3.month = 0;
          _this3.year = parseInt(_this3.year) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        } else if (_this3.monthIndex === 0 && _this3.month === 11) {
          _this3.oversliding = false;
          _this3.month = 0;
          _this3.year = parseInt(_this3.year) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        } else if (_this3.monthIndex === 13) {
          _this3.oversliding = true;
          _this3.monthIndex = 1;
          setTimeout(function () {
            return _this3.next(e);
          }, 50);
          return _this3.updateHeadMonth('custom');
        } else {
          _this3.oversliding = false;
          _this3.month = parseInt(_this3.month) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        }
        _this3.updateHeadMonth('custom');
        _this3.render(_this3.year, _this3.month);
        _this3.$emit('selectMonth', _this3.month + 1, _this3.year);
        var weekIndex = weekSwitch ? _this3.weekIndex : undefined;
        _this3.$emit('next', _this3.year, _this3.month + 1, weekIndex);
      };
      if (!this.weekSwitch) return changeMonth();
      var changeWeek = function changeWeek() {
        _this3.weekIndex = _this3.weekIndex + 1;
        _this3.days = [_this3.monthDays[_this3.weekIndex]];
        _this3.setMonthRangeofWeekSwitch();
        _this3.$emit('next', _this3.year, _this3.month + 1, _this3.weekIndex);
      };
      var currentWeek = (this.days[0] || [])[6] || {};
      if (currentWeek.nextMonth || currentWeek.day === new Date(this.year, this.month + 1, 0).getDate()) {
        var startWeekIndex = currentWeek.nextMonth ? 1 : 0;
        this.startWeekIndex = startWeekIndex;
        this.weekIndex = startWeekIndex;
        changeMonth();
      } else {
        changeWeek();
      }
    },
    select: function select(k1, k2, data, e) {
      var _this4 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      if (data.lastMonth && !weekSwitch) {
        return this.prev(e);
      } else if (data.nextMonth && !weekSwitch) {
        return this.next(e);
      }
      if (data.disabled) return;
      (data || {}).event = (this.events || {})[data.date] || '';
      var selected = data.selected,
          day = data.day,
          date = data.date;

      var selectedDates = date.split('-');
      var selectYear = Number(selectedDates[0]);
      var selectMonth = selectedDates[1] - 1;
      var selectMonthHuman = Number(selectedDates[1]);
      var selectDay = Number(selectedDates[2]);;
      if (this.range) {
        if (this.rangeBegin.length === 0 || this.rangeEndTemp !== 0) {
          this.rangeBegin = [selectYear, selectMonth, selectDay];
          this.rangeBeginTemp = this.rangeBegin;
          this.rangeEnd = [selectYear, selectMonth, selectDay];
          this.thisTimeSelect = this.rangeEnd;
          this.rangeEndTemp = 0;
        } else {
          this.rangeEnd = [selectYear, selectMonth, selectDay];
          this.thisTimeSelect = [selectYear, selectMonth, selectDay];
          if (this.rangeBegin.join('-') === this.rangeEnd.join('-')) {
            return this.rangeEndTemp = 0;
          }
          this.rangeEndTemp = 1;
          if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
            this.rangeBegin = this.rangeEnd;
            this.rangeEnd = this.rangeBeginTemp;
          }
          var rangeDate = function rangeDate(date) {
            return date.map(function (v, k) {
              var value = k === 1 ? v + 1 : v;
              return _this4.zero ? _this4.zeroPad(value) : value;
            });
          };
          var begin = rangeDate(this.rangeBegin);
          var end = rangeDate(this.rangeEnd);
          this.value.splice(0, 1, begin);
          this.value.splice(1, 1, end);
          this.$emit('select', begin, end);
        }
        this.rangeBgHide = !this.rangeEndTemp || this.rangeBegin.join('-') === this.rangeEnd.join('-');
        this.positionWeek = true;
        this.render(this.year, this.month, undefined, this.thisTimeSelect);
      } else if (this.multi) {
        var filterDayIndex = this.value.findIndex(function (v) {
          return v.join('-') === date;
        });
        if (~filterDayIndex) {
          this.handleMultiDay = this.value.splice(filterDayIndex, 1);
        } else {
          this.value.push([Number(Number(selectedDates[0])), Number(selectedDates[1]), day]);
        }
        this.days[k1][k2].selected = !selected;
        if (this.monthDays[k1][k2].selected) {
          this.multiDaysData.push(data);
        } else {
          this.multiDaysData = this.multiDaysData.filter(function (item) {
            return item.date !== date;
          });
        }
        this.thisTimeSelect = date;
        this.$emit('select', this.value, this.multiDaysData);
      } else {
        var currentSelected = this.value.join('-');
        this.monthDays.some(function (v) {
          return !!v.find(function (vv) {
            if (vv.date === currentSelected) {
              vv.selected = false;
              return true;
            }
          });
        });
        this.days[k1][k2].selected = true;
        this.day = day;
        var selectDate = [selectYear, selectMonthHuman, selectDay];
        this.value[0] = selectYear;
        this.value[1] = selectMonthHuman;
        this.value[2] = selectDay;
        this.today = [k1, k2];
        this.$emit('select', selectDate, data);
      }
    },
    changeYear: function changeYear() {
      if (this.yearsShow) {
        this.yearsShow = false;
        return false;
      }
      this.yearsShow = true;
      this.years = [];
      for (var i = this.year - 5; i < this.year + 7; i++) {
        this.years.push(i);
      }
    },
    changeMonth: function changeMonth(value) {
      this.oversliding && (this.oversliding = false);
      this.yearsShow = false;
      this.month = value;
      this.render(this.year, this.month, 'CUSTOMRENDER', 0);
      this.updateHeadMonth();
      this.weekSwitch && this.setMonthRangeofWeekSwitch();
      this.$emit('selectMonth', this.month + 1, this.year);
    },
    selectYear: function selectYear(value) {
      this.yearsShow = false;
      this.year = value;
      this.render(this.year, this.month);
      this.$emit('selectYear', value);
    },
    setToday: function setToday() {
      var now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      this.positionWeek = true;
      this.render(this.year, this.month, undefined, 'SETTODAY');
      this.updateHeadMonth();
    },
    setMonthRangeofWeekSwitch: function setMonthRangeofWeekSwitch() {
      var _this5 = this;

      this.monthsLoop = this.monthsLoopCopy.concat();
      this.days[0].reduce(function (prev, current) {
        if (!prev) return;
        var prveDate = ((prev || {}).date || '').split('-');
        var prevYear = prveDate[0];
        var prevMonth = prveDate[1];
        var currentMonth = ((current || {}).date || '').split('-')[1];
        if (prevMonth === currentMonth) {
          return current;
        } else {
          var prevMonthText = _this5.months[prevMonth - 1];
          var currentMonthText = _this5.months[currentMonth - 1];
          _this5.monthsLoop[_this5.monthIndex] = prevMonthText + '~' + currentMonthText;
        }
      });
    },
    dateInfo: function dateInfo(y, m, d) {
      return _calendarinit2.default.solar2lunar(y, m, d);
    },
    zeroPad: function zeroPad(n) {
      return String(n < 10 ? '0' + n : n);
    },
    updateHeadMonth: function updateHeadMonth(type) {
      if (!type) this.monthIndex = this.month + 1;
      this.monthPosition = this.monthIndex * this.positionH;
      this.monthText = this.months[this.month];
    }
  }
};

/***/ }),

/***/ "bPqC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bioE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__("aA9S");

var _assign2 = _interopRequireDefault(_assign);

var _calendarinit = __webpack_require__("z/UX");

var _calendarinit2 = _interopRequireDefault(_calendarinit);

__webpack_require__("su0w");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = !!window;
var now = new Date();
var todayString = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
exports.default = {
  props: {
    multi: {
      type: Boolean,
      default: false
    },
    arrowLeft: {
      type: String,
      default: ''
    },
    arrowRight: {
      type: String,
      default: ''
    },
    clean: {
      type: Boolean,
      default: false
    },
    now: {
      type: [String, Boolean],
      default: true
    },
    range: {
      type: Boolean,
      default: false
    },
    completion: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    begin: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    end: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    zero: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    almanacs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tileContent: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    monFirst: {
      type: Boolean,
      default: false
    },
    weeks: {
      type: Array,
      default: function _default() {
        return this.monFirst ? ['一', '二', '三', '四', '五', '六', '日'] : ['日', '一', '二', '三', '四', '五', '六'];
      }
    },
    months: {
      type: Array,
      default: function _default() {
        return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      }
    },
    events: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekSwitch: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      years: [],
      yearsShow: false,
      year: 0,
      month: 0,
      monthPosition: 0,
      day: 0,
      days: [],
      multiDays: [],
      today: [],
      handleMultiDay: [],
      firstRender: true,
      isIos: true,
      showToday: {},
      monthText: '',
      festival: {
        lunar: {
          "1-1": "春节",
          "1-15": "元宵节",
          "2-2": "龙头节",
          "5-5": "端午节",
          "7-7": "七夕节",
          "7-15": "中元节",
          "8-15": "中秋节",
          "9-9": "重阳节",
          "10-1": "寒衣节",
          "10-15": "下元节",
          "12-8": "腊八节",
          "12-23": "小年"
        },
        gregorian: {
          "1-1": "元旦",
          "2-14": "情人节",
          "3-8": "妇女节",
          "3-12": "植树节",
          "5-1": "劳动节",
          "5-4": "青年节",
          "6-1": "儿童节",
          "7-1": "建党节",
          "8-1": "建军节",
          "9-10": "教师节",
          "10-1": "国庆节",
          "12-24": "平安夜",
          "12-25": "圣诞节"
        }
      },
      rangeBegin: [],
      rangeEnd: [],
      multiDaysData: [],
      monthsLoop: [],
      itemStyle: {},
      unit: isBrowser ? 'px' : 'rpx',
      positionH: isBrowser ? -24 : -40,
      monthIndex: 0,
      oversliding: false,
      rangeBgHide: false,
      monthDays: [],
      weekIndex: 0,
      startWeekIndex: 0,
      positionWeek: true
    };
  },

  watch: {
    events: function events() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'events');
    },
    disabled: function disabled() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'disabled');
    },
    value: function value() {
      this.render(this.year, this.month, '_WATCHRENDERVALUE_');
    },
    tileContent: function tileContent() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'tileContent');
    },
    almanacs: function almanacs() {
      this.render(this.year, this.month, '_WATCHRENDER_', 'almanacs');
    }
  },
  created: function created() {
    var loopArray = this.months.concat();
    loopArray.unshift(this.months[this.months.length - 1]);
    loopArray.push(this.months[0]);
    this.monthsLoop = loopArray;
    this.monthsLoopCopy = this.monthsLoop.concat();
  },
  mounted: function mounted() {
    var self = this;
    var calendar = this.$refs.calendar;
    var itemWidth = (calendar.clientWidth / 7 - 4).toFixed(5);
    this.itemStyle = { width: itemWidth + 'px', height: itemWidth + 'px', lineHeight: itemWidth - 8 + 'px' };
    if (!isBrowser) {
      wx.getSystemInfo({
        success: function success(res) {
          self.isIos = (res.system.split(' ') || [])[0] === 'iOS';
        }
      });
    }
    this.oversliding = true;
    this.initRender = true;
    this.init();
  },

  methods: {
    init: function init() {
      var now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      this.monthIndex = this.month + 1;
      if (this.value.length || this.multi) {
        if (this.range) {
          this.year = parseInt(this.value[0][0]);
          this.month = parseInt(this.value[0][1]) - 1;
          this.day = parseInt(this.value[0][2]);
          var year2 = parseInt(this.value[1][0]);
          var month2 = parseInt(this.value[1][1]) - 1;
          var day2 = parseInt(this.value[1][2]);
          this.rangeBegin = [this.year, this.month, this.day];
          this.rangeEnd = [year2, month2, day2];
        } else if (this.multi) {
          this.multiDays = this.value;
          var handleMultiDay = this.handleMultiDay;
          if (this.firstRender) {
            this.firstRender = false;
            var thatYear = (this.value[0] || [])[0];
            var thatMonth = (this.value[0] || [])[1];
            if (isFinite(thatYear) && isFinite(thatMonth)) {
              this.month = parseInt(thatMonth) - 1;
              this.year = parseInt(thatYear);
            }
          } else if (this.handleMultiDay.length) {
            this.month = parseInt(handleMultiDay[handleMultiDay.length - 1][1]) - 1;
            this.year = parseInt(handleMultiDay[handleMultiDay.length - 1][0]);
            this.handleMultiDay = [];
          } else {
            this.month = parseInt(this.value[this.value.length - 1][1]) - 1;
            this.year = parseInt(this.value[this.value.length - 1][0]);
          }
          this.day = parseInt((this.value[0] || [])[2]);
        } else {
          this.year = parseInt(this.value[0]);
          this.month = parseInt(this.value[1]) - 1;
          this.day = parseInt(this.value[2]);
        }
      }
      this.updateHeadMonth();
      this.render(this.year, this.month);
    },
    renderOption: function renderOption(year, month, i, playload) {
      var weekSwitch = this.weekSwitch;
      var seletSplit = this.value;
      var isMonthModeCurrentMonth = !weekSwitch && !playload;
      var disabledFilter = function disabledFilter(disabled) {
        return disabled.find(function (v) {
          var dayArr = v.split('-');
          return year === Number(dayArr[0]) && month === dayArr[1] - 1 && i === Number(dayArr[2]);
        });
      };
      if (this.range) {
        var lastDay = new Date(year, month + 1, 0).getDate() === i ? { lastDay: true } : null;
        var options = (0, _assign2.default)({ day: i }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i), lastDay);
        var date = options.date,
            day = options.day;

        var copyRangeBegin = this.rangeBegin.concat();
        var copyRangeEnd = this.rangeEnd.concat();
        copyRangeBegin[1] = copyRangeBegin[1] + 1;
        copyRangeEnd[1] = copyRangeEnd[1] + 1;
        if (weekSwitch || isMonthModeCurrentMonth) {
          copyRangeEnd.join('-') === date && (options.rangeClassName = 'mc-range-end');
          copyRangeBegin.join('-') === date && (options.rangeClassName = 'mc-range-begin');
        }
        if (year === copyRangeEnd[0] && month + 1 === copyRangeEnd[1] && day === copyRangeEnd[2] - 1) {
          options.rangeClassName = options.rangeClassName ? ['mc-range-begin', 'mc-range-second-to-last'] : 'mc-range-second-to-last';
        }
        if (this.rangeBegin.length) {
          var beginTime = +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]);
          var endTime = +new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]);
          var stepTime = +new Date(year, month, i);
          if (beginTime <= stepTime && endTime >= stepTime) {
            options.selected = true;
          }
        }
        if (this.begin.length) {
          var _beginTime = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
          if (_beginTime > +new Date(year, month, i)) {
            options.disabled = true;
          }
        }
        if (this.end.length) {
          var _endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])));
          if (_endTime < Number(new Date(year, month, i))) {
            options.disabled = true;
          }
        }
        if (playload && !weekSwitch) {
          options.disabled = true;
        } else if (this.disabled.length && disabledFilter(this.disabled)) {
          options.disabled = true;
        }
        var monthFirstDay = year + '-' + (month + 1) + '-' + 1;
        var monthLastDay = year + '-' + (month + 1) + '-' + new Date(year, month + 1, 0).getDate();
        monthFirstDay === date && options.selected && !options.rangeClassName && (options.rangeClassName = 'mc-range-month-first');
        monthLastDay === date && options.selected && !options.rangeClassName && (options.rangeClassName = 'mc-range-month-last');
        this.isCurrentMonthToday(options) && (options.isToday = true);
        !weekSwitch && playload && (options.selected = false);
        return options;
      } else if (this.multi) {
        var _options = void 0;
        if (this.value.find(function (v) {
          return year === v[0] && month === v[1] - 1 && i === v[2];
        })) {
          _options = (0, _assign2.default)({ day: i, selected: true }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i));
        } else {
          _options = (0, _assign2.default)({ day: i, selected: false }, this.getLunarInfo(year, month + 1, i), this.getEvents(year, month + 1, i));
          if (this.begin.length) {
            var _beginTime2 = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
            if (_beginTime2 > +new Date(year, month, i)) {
              _options.disabled = true;
            }
          }
          if (this.end.length) {
            var _endTime2 = +new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2]));
            if (_endTime2 < +new Date(year, month, i)) {
              _options.disabled = true;
            }
          }
          if (playload && !weekSwitch) {
            _options.disabled = true;
          } else if (this.disabled.length && disabledFilter(this.disabled)) {
            _options.disabled = true;
          }
        }
        if (_options.selected && this.multiDaysData.length !== this.value.length) {
          this.multiDaysData.push(_options);
        }
        this.isCurrentMonthToday(_options) && (_options.isToday = true);
        !weekSwitch && playload && (_options.selected = false);
        return _options;
      } else {
        var _options2 = {};
        var monthHuman = month + 1;
        if (seletSplit[0] === year && seletSplit[1] === monthHuman && seletSplit[2] === i) {
          (0, _assign2.default)(_options2, { day: i, selected: true }, this.getLunarInfo(year, monthHuman, i), this.getEvents(year, monthHuman, i));
        } else {
          (0, _assign2.default)(_options2, { day: i, selected: false }, this.getLunarInfo(year, monthHuman, i), this.getEvents(year, monthHuman, i));
          if (this.begin.length) {
            var _beginTime3 = +new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2]));
            if (_beginTime3 > Number(new Date(year, month, i))) {
              _options2.disabled = true;
            }
          }
          if (this.end.length) {
            var _endTime3 = +new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2]));
            if (_endTime3 < +new Date(year, month, i)) {
              _options2.disabled = true;
            }
          }
          if (playload && !weekSwitch) {
            _options2.disabled = true;
          } else if (this.disabled.length && disabledFilter(this.disabled)) {
            _options2.disabled = true;
          }
        }
        this.isCurrentMonthToday(_options2) && (_options2.isToday = true);
        !weekSwitch && playload && (_options2.selected = false);
        return _options2;
      }
    },
    isCurrentMonthToday: function isCurrentMonthToday(options) {
      var isToday = todayString === options.date;
      if (!isToday) return false;
      return this.weekSwitch ? isToday : Number(todayString.split('-')[1]) === this.month + 1;
    },
    watchRender: function watchRender(type) {
      var weekSwitch = this.weekSwitch;
      var daysDeepCopy = JSON.parse((0, _stringify2.default)(this.monthDays));
      if (type === 'events') {
        var events = this.events || {};
        (0, _keys2.default)(events).forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value) {
                vv.eventName = events[value];
                return true;
              }
            });
          });
        });
        this.monthDays = daysDeepCopy;
      } else if (type === 'disabled') {
        var disabled = this.disabled || [];
        disabled.forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value) {
                vv.disabled = true;
                return true;
              }
            });
          });
        });
      } else if (type === 'almanacs') {
        var almanacs = this.almanacs || {};
        (0, _keys2.default)(almanacs).forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date.slice(5, 20) === value) {
                vv.lunar = almanacs[value];
                return true;
              }
            });
          });
        });
      } else if (type === 'tileContent') {
        var tileContent = this.tileContent || [];
        tileContent.forEach(function (value) {
          daysDeepCopy.some(function (v) {
            return v.some(function (vv) {
              if (vv.date === value.date) {
                vv.className = value.className;
                vv.content = value.content;
                return true;
              }
            });
          });
        });
      }
      if (weekSwitch) {
        this.monthDays = daysDeepCopy;
        this.days = [daysDeepCopy[this.weekIndex]];
      } else {
        this.days = daysDeepCopy;
      }
    },
    render: function render(y, m, renderer, payload) {
      var _this = this;

      var weekSwitch = this.weekSwitch;
      var isCustomRender = renderer === 'CUSTOMRENDER';
      var isWatchRenderValue = renderer === '_WATCHRENDERVALUE_';
      if (renderer === '_WATCHRENDER_') return this.watchRender(payload);
      if (isWatchRenderValue && weekSwitch) {
        this.positionWeek = true;
      }
      if (isCustomRender) {
        this.year = y;
        this.month = m;
        this.positionWeek = true;
        if (weekSwitch && !payload) {
          this.startWeekIndex = 0;
          this.weekIndex = 0;
        }
        this.updateHeadMonth();
      }
      var firstDayOfMonth = new Date(y, m, 1).getDay();
      var lastDateOfMonth = new Date(y, m + 1, 0).getDate();
      var lastDayOfLastMonth = new Date(y, m, 0).getDate();
      this.year = y;
      var i = 1,
          line = 0,
          temp = [],
          nextMonthPushDays = 1;
      for (i; i <= lastDateOfMonth; i++) {
        var day = new Date(y, m, i).getDay();
        var k = void 0;
        if (day === 0) {
          temp[line] = [];
        } else if (i === 1) {
          temp[line] = [];
          k = lastDayOfLastMonth - firstDayOfMonth + 1;
          for (var j = 0; j < firstDayOfMonth; j++) {
            temp[line].push((0, _assign2.default)(this.renderOption(this.computedPrevYear(), this.computedPrevMonth(), k, 'prevMonth'), { lastMonth: true }));
            k++;
          }
        }

        temp[line].push(this.renderOption(this.year, this.month, i));

        if (day === 6 && i < lastDateOfMonth) {
          line++;
        } else if (i === lastDateOfMonth) {
          var _k = 1;
          var lastDateOfMonthLength = this.monFirst ? 7 : 6;
          for (var d = day; d < lastDateOfMonthLength; d++) {
            temp[line].push((0, _assign2.default)(this.renderOption(this.computedNextYear(), this.computedNextMonth(), _k, 'nextMonth'), { nextMonth: true }));
            _k++;
          }
          nextMonthPushDays = _k;
        }
      }
      var completion = this.completion;
      if (this.monFirst) {
        if (!firstDayOfMonth) {
          var lastMonthDay = lastDayOfLastMonth;
          var LastMonthItems = [];
          for (var _i = 1; _i <= 7; _i++) {
            LastMonthItems.unshift((0, _assign2.default)(this.renderOption(this.computedPrevYear(), this.computedPrevMonth(), lastMonthDay), { disabled: false, lastMonth: true }));
            lastMonthDay--;
          }
          temp.unshift(LastMonthItems);
        }
        temp.forEach(function (item, index) {
          if (!index) {
            return item.splice(0, 1);
          };
          temp[index - 1].length < 7 && temp[index - 1].push(item.splice(0, 1)[0]);
        });
        if (!completion && !weekSwitch) {
          var lastIndex = temp.length - 1;
          var secondToLastIndex = lastIndex - 1;
          var differentMonth = temp[lastIndex][0].date.split('-')[1] !== temp[secondToLastIndex][6].date.split('-')[1];
          differentMonth && temp.splice(lastIndex, 1);
        }
      }
      if (completion && !weekSwitch && temp.length <= 5 && nextMonthPushDays > 0) {
        for (var _i2 = temp.length; _i2 <= 5; _i2++) {
          temp[_i2] = [];
          var start = nextMonthPushDays + (_i2 - line - 1) * 7;
          for (var _d = start; _d <= start + 6; _d++) {
            temp[_i2].push((0, _assign2.default)({ day: _d, disabled: true, nextMonth: true }, this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), _d), this.getEvents(this.computedNextYear(), this.computedNextMonth(true), _d)));
          }
        }
      }
      if (this.tileContent.length) {
        temp.forEach(function (item, index) {
          item.forEach(function (v, i) {
            var contents = _this.tileContent.find(function (val) {
              return val.date === v.date;
            });
            if (contents) {
              var _ref = contents || {},
                  className = _ref.className,
                  content = _ref.content;

              v.className = className;
              v.content = content;
            }
          });
        });
      }
      this.monthDays = temp;
      if (weekSwitch) {
        if (this.positionWeek) {
          var payloadDay = '';
          var searchIndex = true;
          if (Array.isArray(payload)) {
            payloadDay = [payload[0], payload[1] + 1, payload[2]].join('-');
          } else if (this.multi || isWatchRenderValue) {
            payloadDay = this.thisTimeSelect;
          }
          if (payload === 'SETTODAY') {
            payloadDay = todayString;
          } else if (isCustomRender) {
            if (typeof payload === 'string') {
              payloadDay = [y, Number(m) + 1, payload].join('-');
              searchIndex = true;
            } else if (typeof payload === 'number') {
              var setIndex = payload > temp.length ? temp.length - 1 : payload;
              this.startWeekIndex = setIndex;
              this.weekIndex = setIndex;
              this.positionWeek = false;
              searchIndex = false;
            }
          }
          var positionDay = payloadDay || todayString;
          if (searchIndex) {
            temp.some(function (v, i) {
              var isWeekNow = v.find(function (vv) {
                return vv.date === positionDay;
              });
              if (isWeekNow) {
                _this.startWeekIndex = i;
                _this.weekIndex = i;
                return true;
              }
            });
          }
          this.positionWeek = false;
        }
        this.days = [temp[this.startWeekIndex]];
        if (this.initRender) {
          this.setMonthRangeofWeekSwitch();
          this.initRender = false;
        }
      } else {
        this.days = temp;
      }
      var todayText = '今';
      if (typeof this.now === 'boolean' && !this.now) {
        this.showToday = { show: false };
      } else if (typeof this.now === 'string') {
        this.showToday = {
          show: true,
          text: this.now || todayText
        };
      } else {
        this.showToday = {
          show: true,
          text: todayText
        };
      }
    },
    renderer: function renderer(y, m, w) {
      var renderY = y || this.year;
      var renderM = typeof parseInt(m) === 'number' ? m - 1 : this.month;
      this.initRender = true;
      this.render(renderY, renderM, 'CUSTOMRENDER', w);
      !this.weekSwitch && (this.monthsLoop = this.monthsLoopCopy.concat());
    },
    computedPrevYear: function computedPrevYear() {
      var value = this.year;
      if (this.month - 1 < 0) {
        value--;
      }
      return value;
    },
    computedPrevMonth: function computedPrevMonth(isString) {
      var value = this.month;
      if (this.month - 1 < 0) {
        value = 11;
      } else {
        value--;
      }
      if (isString) {
        return value + 1;
      }
      return value;
    },
    computedNextYear: function computedNextYear() {
      var value = this.year;
      if (this.month + 1 > 11) {
        value++;
      }
      return value;
    },
    computedNextMonth: function computedNextMonth(isString) {
      var value = this.month;
      if (this.month + 1 > 11) {
        value = 0;
      } else {
        value++;
      }
      if (isString) {
        return value + 1;
      }
      return value;
    },
    getLunarInfo: function getLunarInfo(y, m, d) {
      var lunarInfo = _calendarinit2.default.solar2lunar(y, m, d);
      var yearEve = '';
      if (lunarInfo.lMonth === 12 && lunarInfo.lDay === _calendarinit2.default.monthDays(lunarInfo.lYear, 12)) {
        yearEve = '除夕';
      }
      var lunarValue = lunarInfo.IDayCn;
      var Term = lunarInfo.Term;
      var isLunarFestival = false;
      var isGregorianFestival = false;
      if (this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay]) {
        lunarValue = this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay];
        isLunarFestival = true;
      } else if (this.festival.gregorian[m + "-" + d]) {
        lunarValue = this.festival.gregorian[m + "-" + d];
        isGregorianFestival = true;
      }
      var lunarInfoObj = {
        date: y + '-' + m + '-' + d,
        lunar: yearEve || Term || lunarValue,
        isLunarFestival: isLunarFestival,
        isGregorianFestival: isGregorianFestival,
        isTerm: !!yearEve || lunarInfo.isTerm
      };
      if ((0, _keys2.default)(this.almanacs).length) {
        (0, _assign2.default)(lunarInfoObj, {
          almanac: this.almanacs[m + "-" + d] || '',
          isAlmanac: !!this.almanacs[m + "-" + d]
        });
      }
      return lunarInfoObj;
    },
    getEvents: function getEvents(y, m, d) {
      if ((0, _keys2.default)(this.events).length == 0) return false;
      var eventName = this.events[y + "-" + m + "-" + d];
      var data = {};
      if (eventName != undefined) {
        data.eventName = eventName;
      }
      return data;
    },
    prev: function prev(e) {
      var _this2 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      var changeMonth = function changeMonth(changed) {
        if (_this2.monthIndex === 1) {
          _this2.oversliding = false;
          _this2.month = 11;
          _this2.year = parseInt(_this2.year) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        } else if (_this2.monthIndex === 0) {
          _this2.oversliding = true;
          _this2.monthIndex = 12;
          setTimeout(function () {
            return _this2.prev(e);
          }, 50);
          return _this2.updateHeadMonth('custom');
        } else if (_this2.monthIndex === 13) {
          _this2.month = 11;
          _this2.year = parseInt(_this2.year) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        } else {
          _this2.oversliding = false;
          _this2.month = parseInt(_this2.month) - 1;
          _this2.monthIndex = _this2.monthIndex - 1;
        }
        _this2.updateHeadMonth('custom');
        _this2.render(_this2.year, _this2.month);
        typeof changed === 'function' && changed();
        var weekIndex = weekSwitch ? _this2.weekIndex : undefined;
        _this2.$emit('prev', _this2.year, _this2.month + 1, weekIndex);
      };
      if (!this.weekSwitch) return changeMonth();
      var changeWeek = function changeWeek() {
        _this2.weekIndex = _this2.weekIndex - 1;
        _this2.days = [_this2.monthDays[_this2.weekIndex]];
        _this2.setMonthRangeofWeekSwitch();
        _this2.$emit('prev', _this2.year, _this2.month + 1, _this2.weekIndex);
      };
      var currentWeek = (this.days[0] || [])[0] || {};
      if (currentWeek.lastMonth || currentWeek.day === 1) {
        var monthChenged = function monthChenged() {
          var lastMonthLength = _this2.monthDays.length;
          var startWeekIndex = currentWeek.lastMonth ? lastMonthLength - 1 : lastMonthLength;
          _this2.startWeekIndex = startWeekIndex;
          _this2.weekIndex = startWeekIndex;
          changeWeek();
        };
        changeMonth(monthChenged);
      } else {
        changeWeek();
      }
    },
    next: function next(e) {
      var _this3 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      var changeMonth = function changeMonth() {
        if (_this3.monthIndex === 12) {
          _this3.oversliding = false;
          _this3.month = 0;
          _this3.year = parseInt(_this3.year) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        } else if (_this3.monthIndex === 0 && _this3.month === 11) {
          _this3.oversliding = false;
          _this3.month = 0;
          _this3.year = parseInt(_this3.year) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        } else if (_this3.monthIndex === 13) {
          _this3.oversliding = true;
          _this3.monthIndex = 1;
          setTimeout(function () {
            return _this3.next(e);
          }, 50);
          return _this3.updateHeadMonth('custom');
        } else {
          _this3.oversliding = false;
          _this3.month = parseInt(_this3.month) + 1;
          _this3.monthIndex = _this3.monthIndex + 1;
        }
        _this3.updateHeadMonth('custom');
        _this3.render(_this3.year, _this3.month);
        _this3.$emit('selectMonth', _this3.month + 1, _this3.year);
        var weekIndex = weekSwitch ? _this3.weekIndex : undefined;
        _this3.$emit('next', _this3.year, _this3.month + 1, weekIndex);
      };
      if (!this.weekSwitch) return changeMonth();
      var changeWeek = function changeWeek() {
        _this3.weekIndex = _this3.weekIndex + 1;
        _this3.days = [_this3.monthDays[_this3.weekIndex]];
        _this3.setMonthRangeofWeekSwitch();
        _this3.$emit('next', _this3.year, _this3.month + 1, _this3.weekIndex);
      };
      var currentWeek = (this.days[0] || [])[6] || {};
      if (currentWeek.nextMonth || currentWeek.day === new Date(this.year, this.month + 1, 0).getDate()) {
        var startWeekIndex = currentWeek.nextMonth ? 1 : 0;
        this.startWeekIndex = startWeekIndex;
        this.weekIndex = startWeekIndex;
        changeMonth();
      } else {
        changeWeek();
      }
    },
    select: function select(k1, k2, data, e) {
      var _this4 = this;

      e && e.stopPropagation();
      var weekSwitch = this.weekSwitch;
      if (data.lastMonth && !weekSwitch) {
        return this.prev(e);
      } else if (data.nextMonth && !weekSwitch) {
        return this.next(e);
      }
      if (data.disabled) return;
      (data || {}).event = (this.events || {})[data.date] || '';
      var selected = data.selected,
          day = data.day,
          date = data.date;

      var selectedDates = date.split('-');
      var selectYear = Number(selectedDates[0]);
      var selectMonth = selectedDates[1] - 1;
      var selectMonthHuman = Number(selectedDates[1]);
      var selectDay = Number(selectedDates[2]);;
      if (this.range) {
        if (this.rangeBegin.length === 0 || this.rangeEndTemp !== 0) {
          this.rangeBegin = [selectYear, selectMonth, selectDay];
          this.rangeBeginTemp = this.rangeBegin;
          this.rangeEnd = [selectYear, selectMonth, selectDay];
          this.thisTimeSelect = this.rangeEnd;
          this.rangeEndTemp = 0;
        } else {
          this.rangeEnd = [selectYear, selectMonth, selectDay];
          this.thisTimeSelect = [selectYear, selectMonth, selectDay];
          if (this.rangeBegin.join('-') === this.rangeEnd.join('-')) {
            return this.rangeEndTemp = 0;
          }
          this.rangeEndTemp = 1;
          if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
            this.rangeBegin = this.rangeEnd;
            this.rangeEnd = this.rangeBeginTemp;
          }
          var rangeDate = function rangeDate(date) {
            return date.map(function (v, k) {
              var value = k === 1 ? v + 1 : v;
              return _this4.zero ? _this4.zeroPad(value) : value;
            });
          };
          var begin = rangeDate(this.rangeBegin);
          var end = rangeDate(this.rangeEnd);
          this.value.splice(0, 1, begin);
          this.value.splice(1, 1, end);
          this.$emit('select', begin, end);
        }
        this.rangeBgHide = !this.rangeEndTemp || this.rangeBegin.join('-') === this.rangeEnd.join('-');
        this.positionWeek = true;
        this.render(this.year, this.month, undefined, this.thisTimeSelect);
      } else if (this.multi) {
        var filterDayIndex = this.value.findIndex(function (v) {
          return v.join('-') === date;
        });
        if (~filterDayIndex) {
          this.handleMultiDay = this.value.splice(filterDayIndex, 1);
        } else {
          this.value.push([Number(Number(selectedDates[0])), Number(selectedDates[1]), day]);
        }
        this.days[k1][k2].selected = !selected;
        if (this.monthDays[k1][k2].selected) {
          this.multiDaysData.push(data);
        } else {
          this.multiDaysData = this.multiDaysData.filter(function (item) {
            return item.date !== date;
          });
        }
        this.thisTimeSelect = date;
        this.$emit('select', this.value, this.multiDaysData);
      } else {
        var currentSelected = this.value.join('-');
        this.monthDays.some(function (v) {
          return !!v.find(function (vv) {
            if (vv.date === currentSelected) {
              vv.selected = false;
              return true;
            }
          });
        });
        this.days[k1][k2].selected = true;
        this.day = day;
        var selectDate = [selectYear, selectMonthHuman, selectDay];
        this.value[0] = selectYear;
        this.value[1] = selectMonthHuman;
        this.value[2] = selectDay;
        this.today = [k1, k2];
        this.$emit('select', selectDate, data);
      }
    },
    changeYear: function changeYear() {
      if (this.yearsShow) {
        this.yearsShow = false;
        return false;
      }
      this.yearsShow = true;
      this.years = [];
      for (var i = this.year - 5; i < this.year + 7; i++) {
        this.years.push(i);
      }
    },
    changeMonth: function changeMonth(value) {
      this.oversliding && (this.oversliding = false);
      this.yearsShow = false;
      this.month = value;
      this.render(this.year, this.month, 'CUSTOMRENDER', 0);
      this.updateHeadMonth();
      this.weekSwitch && this.setMonthRangeofWeekSwitch();
      this.$emit('selectMonth', this.month + 1, this.year);
    },
    selectYear: function selectYear(value) {
      this.yearsShow = false;
      this.year = value;
      this.render(this.year, this.month);
      this.$emit('selectYear', value);
    },
    setToday: function setToday() {
      var now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      this.positionWeek = true;
      this.render(this.year, this.month, undefined, 'SETTODAY');
      this.updateHeadMonth();
    },
    setMonthRangeofWeekSwitch: function setMonthRangeofWeekSwitch() {
      var _this5 = this;

      this.monthsLoop = this.monthsLoopCopy.concat();
      this.days[0].reduce(function (prev, current) {
        if (!prev) return;
        var prveDate = ((prev || {}).date || '').split('-');
        var prevYear = prveDate[0];
        var prevMonth = prveDate[1];
        var currentMonth = ((current || {}).date || '').split('-')[1];
        if (prevMonth === currentMonth) {
          return current;
        } else {
          var prevMonthText = _this5.months[prevMonth - 1];
          var currentMonthText = _this5.months[currentMonth - 1];
          _this5.monthsLoop[_this5.monthIndex] = prevMonthText + '~' + currentMonthText;
        }
      });
    },
    dateInfo: function dateInfo(y, m, d) {
      return _calendarinit2.default.solar2lunar(y, m, d);
    },
    zeroPad: function zeroPad(n) {
      return String(n < 10 ? '0' + n : n);
    },
    updateHeadMonth: function updateHeadMonth(type) {
      if (!type) this.monthIndex = this.month + 1;
      this.monthPosition = this.monthIndex * this.positionH;
      this.monthText = this.months[this.month];
    }
  }
};

/***/ }),

/***/ "gb57":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"calendar",staticClass:"mpvue-calendar"},[_c('div',{staticClass:"calendar-tools"},[_c('div',{staticClass:"calendar-prev",on:{"click":_vm.prev}},[(!!_vm.arrowLeft)?_c('img',{attrs:{"src":_vm.arrowLeft}}):_c('i',{staticClass:"iconfont icon-arrow-left"})]),_vm._v(" "),_c('div',{staticClass:"calendar-next",on:{"click":_vm.next}},[(!!_vm.arrowRight)?_c('img',{attrs:{"src":_vm.arrowRight}}):_c('i',{staticClass:"iconfont icon-arrow-right"})]),_vm._v(" "),_c('div',{staticClass:"calendar-info",on:{"click":function($event){$event.stopPropagation();return _vm.changeYear($event)}}},[_c('div',{staticClass:"mc-month"},[(_vm.isIos)?_c('div',{class:['mc-month-inner', _vm.oversliding ? '' : 'month-transition'],style:({'top': _vm.monthPosition + _vm.unit})},_vm._l((_vm.monthsLoop),function(m,i){return _c('span',{key:i},[_vm._v(_vm._s(m))])})):_c('div',{staticClass:"mc-month-text"},[_vm._v(_vm._s(_vm.monthText))])]),_vm._v(" "),_c('div',{staticClass:"mc-year"},[_vm._v(_vm._s(_vm.year))])])]),_vm._v(" "),_c('table',{attrs:{"cellpadding":"5"}},[_c('div',{staticClass:"mc-head"},[_c('div',{staticClass:"mc-head-box"},_vm._l((_vm.weeks),function(week,index){return _c('div',{key:index,staticClass:"mc-week"},[_vm._v(_vm._s(week))])}))]),_vm._v(" "),_c('div',{class:['mc-body', {'mc-range-mode': _vm.range, 'week-switch': _vm.weekSwitch}]},_vm._l((_vm.days),function(day,k1){return _c('tr',{key:k1,class:{'gregorianStyle': !_vm.lunar}},_vm._l((day),function(child,k2){return _c('td',{key:k2,staticClass:"mc-day",class:[{'selected': child.selected, 'mc-today-element': child.isToday, 'disabled': child.disabled, 'mc-range-select-one': _vm.rangeBgHide && child.selected, 'lunarStyle': _vm.lunar, 'mc-range-row-first': k2 === 0 && child.selected, 'month-last-date': child.lastDay, 'month-first-date': 1 === child.day, 'mc-range-row-last': k2 === 6 && child.selected}, child.className, child.rangeClassName],style:(_vm.itemStyle),on:{"click":function($event){_vm.select(k1, k2, child, $event)}}},[(_vm.showToday.show && child.isToday && (_vm.weekSwitch || !child.disabled))?_c('span',{staticClass:"mc-today calendar-date"},[_vm._v(_vm._s(_vm.showToday.text))]):_c('span',{class:[{'mc-date-red': k2 === (_vm.monFirst ? 5 : 0) || k2 === 6}, 'calendar-date']},[_vm._v(_vm._s(child.day))]),_vm._v(" "),(!!child.content)?_c('div',{staticClass:"slot-element"},[_vm._v(_vm._s(child.content))]):_vm._e(),_vm._v(" "),(child.eventName && !_vm.clean)?_c('div',{staticClass:"mc-text remark-text"},[_vm._v(_vm._s(child.eventName))]):_vm._e(),_vm._v(" "),(child.eventName && _vm.clean)?_c('div',{staticClass:"mc-dot"}):_vm._e(),_vm._v(" "),(_vm.lunar && (!child.eventName || _vm.clean))?_c('div',{staticClass:"mc-text",class:{'isLunarFestival': child.isAlmanac || child.isLunarFestival,'isGregorianFestival': child.isGregorianFestival,'isTerm': child.isTerm}},[_vm._v(_vm._s(child.almanac || child.lunar))]):_vm._e(),_vm._v(" "),(_vm.range && child.selected)?_c('div',{staticClass:"mc-range-bg"}):_vm._e()])}))}))]),_vm._v(" "),_c('div',{staticClass:"mpvue-calendar-change",class:{'show': _vm.yearsShow}},[(!_vm.weekSwitch)?_c('div',{staticClass:"calendar-years"},_vm._l((_vm.years),function(y){return _c('span',{key:y,class:{'active': y === _vm.year},on:{"click":function($event){$event.stopPropagation();_vm.selectYear(y)}}},[_vm._v(_vm._s(y))])})):_vm._e(),_vm._v(" "),_c('div',{class:['calendar-months', {'calendar-week-switch-months': _vm.weekSwitch}]},_vm._l((_vm.months),function(m,i){return _c('span',{key:m,class:{'active': i === _vm.month},on:{"click":function($event){$event.stopPropagation();_vm.changeMonth(i)}}},[_vm._v(_vm._s(m))])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iV1n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__ = __webpack_require__("b3Jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__ = __webpack_require__("bioE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b959a1f6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mpvue_calendar_vue__ = __webpack_require__("gb57");
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mpvue_calendar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b959a1f6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mpvue_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sJhD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__ = __webpack_require__("KL4r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__ = __webpack_require__("xKIj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1e004998_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_MpvueCalendar_vue__ = __webpack_require__("4Sv3");
function injectStyle (ssrContext) {
  __webpack_require__("b0qn")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_MpvueCalendar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1e004998_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_MpvueCalendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "su0w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vmDG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var holiday = [{ date: '2017-12-30', className: 'xiu', content: '休' }, { date: '2017-12-31', className: 'xiu', content: '休' }, { date: '2018-1-1', className: 'xiu', content: '休' }, { date: '2018-2-15', className: 'xiu', content: '休' }, { date: '2018-2-16', className: 'xiu', content: '休' }, { date: '2018-2-17', className: 'xiu', content: '休' }, { date: '2018-2-18', className: 'xiu', content: '休' }, { date: '2018-2-19', className: 'xiu', content: '休' }, { date: '2018-2-20', className: 'xiu', content: '休' }, { date: '2018-2-21', className: 'xiu', content: '休' }, { date: '2018-2-22', className: 'xiu', content: '休' }, { date: '2018-4-5', className: 'xiu', content: '休' }, { date: '2018-4-6', className: 'xiu', content: '休' }, { date: '2018-4-7', className: 'xiu', content: '休' }, { date: '2018-4-29', className: 'xiu', content: '休' }, { date: '2018-4-30', className: 'xiu', content: '休' }, { date: '2018-5-1', className: 'xiu', content: '休' }, { date: '2018-6-16', className: 'xiu', content: '休' }, { date: '2018-6-17', className: 'xiu', content: '休' }, { date: '2018-6-18', className: 'xiu', content: '休' }, { date: '2018-9-22', className: 'xiu', content: '休' }, { date: '2018-9-23', className: 'xiu', content: '休' }, { date: '2018-9-24', className: 'xiu', content: '休' }, { date: '2018-10-1', className: 'xiu', content: '休' }, { date: '2018-10-2', className: 'xiu', content: '休' }, { date: '2018-10-3', className: 'xiu', content: '休' }, { date: '2018-10-4', className: 'xiu', content: '休' }, { date: '2018-10-5', className: 'xiu', content: '休' }, { date: '2018-10-6', className: 'xiu', content: '休' }, { date: '2018-10-7', className: 'xiu', content: '休' }, { date: '2018-9-29', className: 'ban', content: '班' }, { date: '2018-9-30', className: 'ban', content: '班' }, { date: '2018-2-11', className: 'ban', content: '班' }, { date: '2018-4-8', className: 'ban', content: '班' }, { date: '2018-4-28', className: 'ban', content: '班' }, { date: '2018-2-24', className: 'ban', content: '班' }, { date: '2018-12-30', className: 'xiu', content: '休' }, { date: '2018-12-31', className: 'xiu', content: '休' }, { date: '2019-1-1', className: 'xiu', content: '休' }, { date: '2019-2-4', className: 'xiu', content: '休' }, { date: '2019-2-5', className: 'xiu', content: '休' }, { date: '2019-2-6', className: 'xiu', content: '休' }, { date: '2019-2-7', className: 'xiu', content: '休' }, { date: '2019-2-8', className: 'xiu', content: '休' }, { date: '2019-2-9', className: 'xiu', content: '休' }, { date: '2019-2-10', className: 'xiu', content: '休' }, { date: '2019-4-5', className: 'xiu', content: '休' }, { date: '2019-4-6', className: 'xiu', content: '休' }, { date: '2019-4-7', className: 'xiu', content: '休' }, { date: '2019-4-29', className: 'xiu', content: '休' }, { date: '2019-4-30', className: 'xiu', content: '休' }, { date: '2019-5-1', className: 'xiu', content: '休' }, { date: '2019-6-7', className: 'xiu', content: '休' }, { date: '2019-6-8', className: 'xiu', content: '休' }, { date: '2019-6-9', className: 'xiu', content: '休' }, { date: '2019-9-13', className: 'xiu', content: '休' }, { date: '2019-9-14', className: 'xiu', content: '休' }, { date: '2019-9-15', className: 'xiu', content: '休' }, { date: '2019-10-1', className: 'xiu', content: '休' }, { date: '2019-10-2', className: 'xiu', content: '休' }, { date: '2019-10-3', className: 'xiu', content: '休' }, { date: '2019-10-4', className: 'xiu', content: '休' }, { date: '2019-10-5', className: 'xiu', content: '休' }, { date: '2019-10-6', className: 'xiu', content: '休' }, { date: '2019-10-7', className: 'xiu', content: '休' }, { date: '2018-12-29', className: 'ban', content: '班' }, { date: '2019-2-2', className: 'ban', content: '班' }, { date: '2019-2-3', className: 'ban', content: '班' }, { date: '2019-4-27', className: 'ban', content: '班' }, { date: '2019-4-28', className: 'ban', content: '班' }, { date: '2019-9-29', className: 'ban', content: '班' }, { date: '2019-10-12', className: 'ban', content: '班' }];
exports.holiday = holiday;

/***/ }),

/***/ "xKIj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _mpvueCalendar = __webpack_require__("iV1n");

var _mpvueCalendar2 = _interopRequireDefault(_mpvueCalendar);

__webpack_require__("bPqC");

var _holiday = __webpack_require__("vmDG");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
exports.default = {
  data: function data() {
    return {
      value: [[year, month, 16], [year, month, 22]],
      isrange: true,
      weekSwitch: false,
      ismulti: false,
      dataInfo: {},
      monFirst: true,
      clean: false,
      lunar: true,
      events: { '2019-2-7': '今日备注', '2019-2-8': '一条很长的明日备注' },
      tileContent: _holiday.holiday,
      renderValues: [],
      disabledArray: ['2019-1-27', '2019-2-25'],
      almanacs: { '11-14': '学生日', '11-22': '感恩日' }
    };
  },

  components: { XHeader: _index2.default, Calendar: _mpvueCalendar2.default },
  mounted: function mounted() {
    this.handelRenderValues();
  },

  methods: {
    switchMode: function switchMode(data) {
      var _this = this;

      this.weekSwitch = !this.weekSwitch;
      setTimeout(function () {
        _this.$refs.calendar.renderer(2019, 1);
      }, 0);
    },
    handelRenderValues: function handelRenderValues(data) {
      if (this.ismulti) {
        this.renderValues = this.value.map(function (v) {
          return v.join('-');
        });
      } else if (this.isrange) {
        var values = [];
        var valueData = data || this.value;
        this.value.forEach(function (v, i) {
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
    multiMode: function multiMode(value) {
      this.ismulti = true;
      this.isrange = false;
      this.value = [[year, month, 16], [year, month, 18]];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    rangeMode: function rangeMode(value) {
      this.ismulti = false;
      this.isrange = true;
      this.value = [[year, month, 16], [year, month, 22]];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    valueMode: function valueMode(value) {
      this.ismulti = false;
      this.isrange = false;
      this.value = [year, month, 16];
      this.handelRenderValues();
      this.$refs.calendar.renderer(year, month);
    },
    selectMonth: function selectMonth(month, year) {
      console.log(year, month);
    },
    prev: function prev(y, m, w) {
      console.log(y, m, w);
    },
    next: function next(year, month, week) {
      console.log(year, month, week);
    },
    selectYear: function selectYear(year) {
      console.log(year);
    },
    setToday: function setToday() {
      this.$refs.calendar.setToday();
    },
    dateInfo: function dateInfo() {
      var info = this.$refs.calendar.dateInfo(2018, 8, 23);
      this.dataInfo = info;
      console.log(info);
    },
    renderer: function renderer() {
      this.$refs.calendar.renderer(2018, 8);
    },
    select: function select(val, val2) {
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
};

/***/ }),

/***/ "z/UX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @1900-2100区间内的公历、农历互转
 * @charset UTF-8
 * @Author  Jea杨(JJonline@JJonline.Cn)
 * @Time    2014-7-21
 * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
 * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
 * @Version 1.0.2
 * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */
var calendar = {

  /**
   * 农历1900-2100的润大小信息表
   * @Array Of Property
   * @return Hex
   */
  lunarInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,//1900-1909
    0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,//1910-1919
    0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,//1920-1929
    0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,//1930-1939
    0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,//1940-1949
    0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,//1950-1959
    0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,//1960-1969
    0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,//1970-1979
    0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,//1980-1989
    0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,//1990-1999
    0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,//2000-2009
    0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,//2010-2019
    0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,//2020-2029
    0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,//2030-2039
    0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,//2040-2049
    /**Add By JJonline@JJonline.Cn**/
    0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50, 0x06b20,0x1a6c4,0x0aae0,//2050-2059
    0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,//2060-2069
    0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,//2070-2079
    0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,//2080-2089
    0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,//2090-2099
    0x0d520],//2100

  /**
   * 公历每个月份的天数普通表
   * @Array Of Property
   * @return Number
   */
  solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],

  /**
   * 天干地支之天干速查表
   * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
   * @return Cn string
   */
  Gan:["\u7532","\u4e59","\u4e19","\u4e01","\u620a","\u5df1","\u5e9a","\u8f9b","\u58ec","\u7678"],

  /**
   * 天干地支之地支速查表
   * @Array Of Property
   * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
   * @return Cn string
   */
  Zhi:["\u5b50","\u4e11","\u5bc5","\u536f","\u8fb0","\u5df3","\u5348","\u672a","\u7533","\u9149","\u620c","\u4ea5"],

  /**
   * 天干地支之地支速查表<=>生肖
   * @Array Of Property
   * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
   * @return Cn string
   */
  Animals:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],

  /**
   * 24节气速查表
   * @Array Of Property
   * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
   * @return Cn string
   */
  solarTerm:["\u5c0f\u5bd2","\u5927\u5bd2","\u7acb\u6625","\u96e8\u6c34","\u60ca\u86f0","\u6625\u5206","\u6e05\u660e","\u8c37\u96e8","\u7acb\u590f","\u5c0f\u6ee1","\u8292\u79cd","\u590f\u81f3","\u5c0f\u6691","\u5927\u6691","\u7acb\u79cb","\u5904\u6691","\u767d\u9732","\u79cb\u5206","\u5bd2\u9732","\u971c\u964d","\u7acb\u51ac","\u5c0f\u96ea","\u5927\u96ea","\u51ac\u81f3"],

  /**
   * 1900-2100各年的24节气日期速查表
   * @Array Of Property
   * @return 0x string For splice
   */
  sTermInfo:['9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f',
    '97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
    '97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35','665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35','665f67f0e37f1489801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
   * 数字转中文速查表
   * @Array Of Property
   * @trans ['日','一','二','三','四','五','六','七','八','九','十']
   * @return Cn string
   */
  nStr1:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],

  /**
   * 日期转农历称呼速查表
   * @Array Of Property
   * @trans ['初','十','廿','卅']
   * @return Cn string
   */
  nStr2:["\u521d","\u5341","\u5eff","\u5345"],

  /**
   * 月份转农历称呼速查表
   * @Array Of Property
   * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
   * @return Cn string
   */
  nStr3:["\u6b63","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u51ac","\u814a"],

  /**
   * 返回农历y年一整年的总天数
   * @param lunar Year
   * @return Number
   * @eg:var count = calendar.lYearDays(1987) ;//count=387
   */
  lYearDays:function(y) {
    var i, sum = 348;
    for(i=0x8000; i>0x8; i>>=1) { sum += (calendar.lunarInfo[y-1900] & i)? 1: 0; }
    return(sum+calendar.leapDays(y));
  },

  /**
   * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
   * @param lunar Year
   * @return Number (0-12)
   * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
   */
  leapMonth:function(y) { //闰字编码 \u95f0
    return(calendar.lunarInfo[y-1900] & 0xf);
  },

  /**
   * 返回农历y年闰月的天数 若该年没有闰月则返回0
   * @param lunar Year
   * @return Number (0、29、30)
   * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
   */
  leapDays:function(y) {
    if(calendar.leapMonth(y))  {
      return((calendar.lunarInfo[y-1900] & 0x10000)? 30: 29);
    }
    return(0);
  },

  /**
   * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
   * @param lunar Year
   * @return Number (-1、29、30)
   * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
   */
  monthDays:function(y,m) {
    if(m>12 || m<1) {return -1}//月份参数从1至12，参数错误返回-1
    return( (calendar.lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
  },

  /**
   * 返回公历(!)y年m月的天数
   * @param solar Year
   * @return Number (-1、28、29、30、31)
   * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
   */
  solarDays:function(y,m) {
    if(m>12 || m<1) {return -1} //若参数错误 返回-1
    var ms = m-1;
    if(ms==1) { //2月份的闰平规律测算后确认返回28或29
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
    }else {
      return(calendar.solarMonth[ms]);
    }
  },

  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  toGanZhiYear:function(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if(ganKey == 0) ganKey = 10;//如果余数为0则为最后一个天干
    if(zhiKey == 0) zhiKey = 12;//如果余数为0则为最后一个地支
    return calendar.Gan[ganKey-1] + calendar.Zhi[zhiKey-1];

  },

  /**
   * 公历月、日判断所属星座
   * @param  cMonth [description]
   * @param  cDay [description]
   * @return Cn string
   */
  toAstro:function(cMonth,cDay) {
    var s   = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
    var arr = [20,19,21,21,21,22,23,23,23,23,22,22];
    return s.substr(cMonth*2 - (cDay < arr[cMonth-1] ? 2 : 0),2) + "\u5ea7";//座
  },

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  toGanZhi:function(offset) {
    return calendar.Gan[offset%10] + calendar.Zhi[offset%12];
  },

  /**
   * 传入公历(!)y年获得该年第n个节气的公历日期
   * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @return day Number
   * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
   */
  getTerm:function(y,n) {
    if(y<1900 || y>2100) {return -1;}
    if(n<1 || n>24) {return -1;}
    var _table = calendar.sTermInfo[y-1900];
    var _info = [
      parseInt('0x'+_table.substr(0,5)).toString() ,
      parseInt('0x'+_table.substr(5,5)).toString(),
      parseInt('0x'+_table.substr(10,5)).toString(),
      parseInt('0x'+_table.substr(15,5)).toString(),
      parseInt('0x'+_table.substr(20,5)).toString(),
      parseInt('0x'+_table.substr(25,5)).toString()
    ];
    var _calday = [
      _info[0].substr(0,1),
      _info[0].substr(1,2),
      _info[0].substr(3,1),
      _info[0].substr(4,2),

      _info[1].substr(0,1),
      _info[1].substr(1,2),
      _info[1].substr(3,1),
      _info[1].substr(4,2),

      _info[2].substr(0,1),
      _info[2].substr(1,2),
      _info[2].substr(3,1),
      _info[2].substr(4,2),

      _info[3].substr(0,1),
      _info[3].substr(1,2),
      _info[3].substr(3,1),
      _info[3].substr(4,2),

      _info[4].substr(0,1),
      _info[4].substr(1,2),
      _info[4].substr(3,1),
      _info[4].substr(4,2),

      _info[5].substr(0,1),
      _info[5].substr(1,2),
      _info[5].substr(3,1),
      _info[5].substr(4,2),
    ];
    return parseInt(_calday[n-1]);
  },

  /**
   * 传入农历数字月份返回汉语通俗表示法
   * @param lunar month
   * @return Cn string
   * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
   */
  toChinaMonth:function(m) { // 月 => \u6708
    if(m>12 || m<1) {return -1} //若参数错误 返回-1
    var s = calendar.nStr3[m-1];
    s+= "\u6708";//加上月字
    return s;
  },

  /**
   * 传入农历日期数字返回汉字表示法
   * @param lunar day
   * @return Cn string
   * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
   */
  toChinaDay:function(d){ //日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = '\u521d\u5341'; break;
      case 20:
        s = '\u4e8c\u5341'; break;
        break;
      case 30:
        s = '\u4e09\u5341'; break;
        break;
      default :
        s = calendar.nStr2[Math.floor(d/10)];
        s += calendar.nStr1[d%10];
    }
    return(s);
  },

  /**
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
   * @param y year
   * @return Cn string
   * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
   */
  getAnimal: function(y) {
    return calendar.Animals[(y - 4) % 12]
  },

  /**
   * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
   * @param y  solar year
   * @param m  solar month
   * @param d  solar day
   * @return JSON object
   * @eg:console.log(calendar.solar2lunar(1987,11,01));
   */
  solar2lunar:function (y,m,d) { //参数区间1900.1.31~2100.12.31
    if(y<1900 || y>2100) {return -1;}//年份限定、上限
    if(y==1900&&m==1&&d<31) {return -1;}//下限
    if(!y) { //未传参  获得当天
      var objDate = new Date();
    }else {
      var objDate = new Date(y,parseInt(m)-1,d)
    }
    var i, leap=0, temp=0;
    //修正ymd参数
    var y = objDate.getFullYear(),m = objDate.getMonth()+1,d = objDate.getDate();
    var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
    for(i=1900; i<2101 && offset>0; i++) { temp=calendar.lYearDays(i); offset-=temp; }
    if(offset<0) { offset+=temp; i--; }

    //是否今天
    var isTodayObj = new Date(),isToday=false;
    if(isTodayObj.getFullYear()==y && isTodayObj.getMonth()+1==m && isTodayObj.getDate()==d) {
      isToday = true;
    }
    //星期几
    var nWeek = objDate.getDay(),cWeek = calendar.nStr1[nWeek];
    if(nWeek==0) {nWeek =7;}//数字表示周几顺应天朝周一开始的惯例
    //农历年
    var year = i;

    var leap = calendar.leapMonth(i); //闰哪个月
    var isLeap = false;

    //效验闰月
    for(i=1; i<13 && offset>0; i++) {
      //闰月
      if(leap>0 && i==(leap+1) && isLeap==false){
        --i;
        isLeap = true; temp = calendar.leapDays(year); //计算农历闰月天数
      }
      else{
        temp = calendar.monthDays(year, i);//计算农历普通月天数
      }
      //解除闰月
      if(isLeap==true && i==(leap+1)) { isLeap = false; }
      offset -= temp;
    }

    if(offset==0 && leap>0 && i==leap+1)
      if(isLeap){
        isLeap = false;
      }else{
        isLeap = true; --i;
      }
    if(offset<0){ offset += temp; --i; }
    //农历月
    var month   = i;
    //农历日
    var day     = offset + 1;

    //天干地支处理
    var sm      =   m-1;
    var gzY     =   calendar.toGanZhiYear(year);

    //月柱 1900年1月小寒以前为 丙子月(60进制12)
    var firstNode   = calendar.getTerm(year,(m*2-1));//返回当月「节」为几日开始
    var secondNode  = calendar.getTerm(year,(m*2));//返回当月「节」为几日开始

    //依据12节气修正干支月
    var gzM     =   calendar.toGanZhi((y-1900)*12+m+11);
    if(d>=firstNode) {
      gzM     =   calendar.toGanZhi((y-1900)*12+m+12);
    }

    //传入的日期的节气与否
    var isTerm = false;
    var Term   = null;
    if(firstNode==d) {
      isTerm  = true;
      Term    = calendar.solarTerm[m*2-2];
    }
    if(secondNode==d) {
      isTerm  = true;
      Term    = calendar.solarTerm[m*2-1];
    }
    //日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y,sm,1,0,0,0,0)/86400000+25567+10;
    var gzD = calendar.toGanZhi(dayCyclical+d-1);
    //该日期所属的星座
    var astro = calendar.toAstro(m,d);

    return {'lYear':year,'lMonth':month,'lDay':day,'Animal':calendar.getAnimal(year),'IMonthCn':(isLeap?"\u95f0":'')+calendar.toChinaMonth(month),'IDayCn':calendar.toChinaDay(day),'cYear':y,'cMonth':m,'cDay':d,'gzYear':gzY,'gzMonth':gzM,'gzDay':gzD,'isToday':isToday,'isLeap':isLeap,'nWeek':nWeek,'ncWeek':"\u661f\u671f"+cWeek,'isTerm':isTerm,'Term':Term,'astro':astro};
  },

  /**
   * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
   * @param y  lunar year
   * @param m  lunar month
   * @param d  lunar day
   * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
   * @return JSON object
   * @eg:console.log(calendar.lunar2solar(1987,9,10));
   */
  lunar2solar:function(y,m,d,isLeapMonth) {   //参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset  = 0;
    var leapMonth   = calendar.leapMonth(y);
    var leapDay     = calendar.leapDays(y);
    if(isLeapMonth&&(leapMonth!=m)) {return -1;}//传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if(y==2100&&m==12&&d>1 || y==1900&&m==1&&d<31) {return -1;}//超出了最大极限值
    var day  = calendar.monthDays(y,m);
    var _day = day;
    //bugFix 2016-9-25
    //if month is leap, _day use leapDays method
    if(isLeapMonth) {
      _day = calendar.leapDays(y,m);
    }
    if(y < 1900 || y > 2100 || d > _day) {return -1;}//参数合法性效验

    //计算农历的时间差
    var offset = 0;
    for(var i=1900;i<y;i++) {
      offset+=calendar.lYearDays(i);
    }
    var leap = 0,isAdd= false;
    for(var i=1;i<m;i++) {
      leap = calendar.leapMonth(y);
      if(!isAdd) {//处理闰月
        if(leap<=i && leap>0) {
          offset+=calendar.leapDays(y);isAdd = true;
        }
      }
      offset+=calendar.monthDays(y,i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if(isLeapMonth) {offset+=day;}
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap   =   Date.UTC(1900,1,30,0,0,0);
    var calObj  =   new Date((offset+d-31)*86400000+stmap);
    var cY      =   calObj.getUTCFullYear();
    var cM      =   calObj.getUTCMonth()+1;
    var cD      =   calObj.getUTCDate();

    return calendar.solar2lunar(cY,cM,cD);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calendar);


/***/ })

});