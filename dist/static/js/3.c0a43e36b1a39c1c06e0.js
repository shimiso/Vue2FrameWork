webpackJsonp([3],{

/***/ "+MhQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[_c('div',{staticClass:"weui-cell__bd"},[_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:(_vm.labelStyle),domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],staticClass:"weui-switch",attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":Array.isArray(_vm.currentValue)?_vm._i(_vm.currentValue,null)>-1:(_vm.currentValue)},on:{"change":function($event){var $$a=_vm.currentValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.currentValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.currentValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.currentValue=$$c}}}}),_vm._v(" "),(_vm.preventDefault)?_c('div',{staticClass:"vux-x-switch-overlay",on:{"click":_vm.onClick}}):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "/d2u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _cleanStyle = __webpack_require__("n9nh");

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-switch',
  components: {
    InlineDesc: _inlineDesc2.default
  },
  computed: {
    labelStyle: function labelStyle() {
      var isHTML = /<\/?[^>]*>/.test(this.title);
      var width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + 'em';
      return (0, _cleanStyle2.default)({
        display: 'block',
        width: this.$parent.labelWidth || width,
        textAlign: this.$parent.labelAlign
      });
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent && this.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-click', !this.currentValue, this.currentValue);
    },
    toBoolean: function toBoolean(val) {
      if (!this.valueMap) {
        return val;
      } else {
        var index = this.valueMap.indexOf(val);
        return index === 1;
      }
    },
    toRaw: function toRaw(val) {
      if (!this.valueMap) {
        return val;
      } else {
        return this.valueMap[val ? 1 : 0];
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    inlineDesc: [String, Boolean, Number],
    preventDefault: Boolean,
    valueMap: {
      type: Array,
      default: function _default() {
        return [false, true];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.toBoolean(this.value)
    };
  },

  watch: {
    currentValue: function currentValue(val) {
      var rawValue = this.toRaw(val);
      this.$emit('input', rawValue);
      this.$emit('on-change', rawValue);
    },
    value: function value(val) {
      this.currentValue = this.toBoolean(val);
    }
  }
};

/***/ }),

/***/ "1F3u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isLeapYear(year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0;
}

function getMaxDay(year, month) {
  year = parseFloat(year);
  month = parseFloat(month);
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
}

function getYears(startDate, endDate) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var rs = [];
  while (startYear <= endYear) {
    rs.push(startYear);
    startYear++;
  }
  return {
    minYear: rs[0],
    maxYear: rs[rs.length - 1]
  };
}

function getMonths(startDate, endDate, year) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var startMonth = startDate.getMonth() + 1;
  var endMonth = endDate.getMonth() + 1;
  var start = 1;
  var end = 12;
  if (year === startYear) {
    start = startMonth;
  }
  if (year === endYear) {
    end = endMonth;
  }
  return {
    minMonth: start,
    maxMonth: end
  };
}

function getDays(startDate, endDate, year, month) {
  var startYear = startDate.getFullYear();
  var endYear = endDate.getFullYear();
  var startMonth = startDate.getMonth() + 1;
  var endMonth = endDate.getMonth() + 1;
  var startDay = startDate.getDate();
  var endDay = endDate.getDate();

  var start = 1;
  var end = getMaxDay(year, month);

  if (year === startYear && month === startMonth) {
    start = startDay;
  }
  if (year === endYear && month === endMonth) {
    end = endDay;
  }
  return {
    minDay: start,
    maxDay: end
  };
}

exports.getYears = getYears;
exports.getMonths = getMonths;
exports.getDays = getDays;

/***/ }),

/***/ "1m2e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__("bBgq");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _lodash2.default;

/***/ }),

/***/ "1xA6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("OnoB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("uZcP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_14898276_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("i/Hp");
function injectStyle (ssrContext) {
  __webpack_require__("WuUI")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_14898276_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "2lvs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2vBl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _icon = __webpack_require__("hArn");

var _icon2 = _interopRequireDefault(_icon);

var _datetimepicker = __webpack_require__("5KR3");

var _datetimepicker2 = _interopRequireDefault(_datetimepicker);

var _group = __webpack_require__("CKVb");

var _group2 = _interopRequireDefault(_group);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _uuid = __webpack_require__("fqpJ");

var _uuid2 = _interopRequireDefault(_uuid);

var _format2 = __webpack_require__("Hpey");

var _format3 = _interopRequireDefault(_format2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'datetime',
  mixins: [_uuid2.default],
  components: {
    Group: _group2.default,
    InlineDesc: _inlineDesc2.default,
    Icon: _icon2.default
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
      validator: function validator(val) {
        if (false) {
          return console.error('[VUX] Datetime prop:format 使用 A 时只允许的值为： YYYY-MM-DD A');
        }
        return true;
      }
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: {
      type: String,
      validator: function validator(val) {
        if (false) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    endDate: {
      type: String,
      validator: function validator(val) {
        if (false) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function,
    orderMap: Object
  },
  created: function created() {
    this.isFirstSetValue = false;
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {}
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    var uuid = this.uuid;
    this.$el.setAttribute('id', 'vux-datetime-' + uuid);
    if (!this.readonly) {
      this.$nextTick(function () {
        _this2.render();

        if (_this2.show) {
          _this2.$nextTick(function () {
            _this2.picker && _this2.picker.show(_this2.currentValue);
          });
        }
      });
    }
  },

  computed: {
    styles: function styles() {
      if (!this.$parent) {
        return {};
      }
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    pickerOptions: function pickerOptions() {
      var _this = this;
      var options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        orderMap: this.orderMap || {},
        onSelect: function onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue);
            _this.$emit('on-change', wholeValue);
          }
        },
        onConfirm: function onConfirm(value) {
          _this.currentValue = value;
        },
        onClear: function onClear(value) {
          _this.$emit('on-clear', value);
        },
        onHide: function onHide(type) {
          _this.currentShow = false;
          _this.$emit('update:show', false);
          _this.validate();
          _this.$emit('on-hide', type);
          if (type === 'cancel') {
            _this.$emit('on-cancel');
          }
          if (type === 'confirm') {
            setTimeout(function () {
              _this.$nextTick(function () {
                _this.$emit('on-confirm', _this.value);
              });
            });
          }
        },
        onShow: function onShow() {
          _this.currentShow = true;
          _this.$emit('update:show', true);
          _this.$emit('on-show');
        }
      };
      if (this.minYear) {
        options.minYear = this.minYear;
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear;
      }
      return options;
    },
    firstError: function firstError() {
      var key = (0, _keys2.default)(this.errors)[0];
      return this.errors[key];
    },
    labelClass: function labelClass() {
      if (!this.$parent) {
        return {};
      }
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    getButtonText: function getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText;
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText;
      }
      return this.$el.getAttribute('data-' + type + '-text');
    },
    render: function render() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.picker && _this3.picker.destroy();
        _this3.picker = new _datetimepicker2.default(_this3.pickerOptions);
      });
    },
    validate: function validate() {
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填';
        return;
      }
      this.valid = true;
      this.errors = {};
    }
  },
  watch: {
    readonly: function readonly(val) {
      if (val) {
        this.picker && this.picker.destroy();
      } else {
        this.render();
      }
    },
    show: function show(val) {
      if (val === this.currentShow) return;
      if (val) {
        this.picker && this.picker.show(this.currentValue);
      } else {
        this.picker && this.picker.hide(this.currentValue);
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true;
        oldVal && this.$emit('on-change', val);
      } else {
        this.$emit('on-change', val);
      }
      this.validate();
    },
    startDate: function startDate() {
      this.render();
    },
    endDate: function endDate() {
      this.render();
    },
    format: function format(val) {
      if (this.currentValue) {
        this.currentValue = (0, _format3.default)(this.currentValue, val);
      }
      this.render();
    },
    value: function value(val) {
      if (this.readonly || this.picker && this.picker.config.renderInline) {
        this.currentValue = val;
        return;
      }
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.render();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.picker && this.picker.destroy();
  }
};

/***/ }),

/***/ "3Nc+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _name2value = __webpack_require__("QGPF");

var _name2value2 = _interopRequireDefault(_name2value);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _popupPicker = __webpack_require__("o+C2");

var _popupPicker2 = _interopRequireDefault(_popupPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-address',
  components: {
    PopupPicker: _popupPicker2.default
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rawValue: Boolean,
    list: {
      type: Array,
      required: true
    },
    labelWidth: String,
    inlineDesc: String,
    placeholder: String,
    hideDistrict: Boolean,
    valueTextAlign: String,
    confirmText: String,
    cancelText: String,
    displayFormat: {
      type: Function,
      default: function _default(val, names) {
        return names;
      }
    },
    popupStyle: Object,
    popupTitle: String,
    show: Boolean,
    disabled: Boolean
  },
  created: function created() {
    if (this.currentValue.length && this.rawValue) {
      var parsedVal = (0, _name2value2.default)(this.currentValue, this.list);
      if (/__/.test(parsedVal)) {
        console.error('[VUX] Wrong address value', this.currentValue);
        this.currentValue = [];
      } else {
        this.currentValue = parsedVal.split(' ');
      }
    }
    if (this.show) {
      this.showValue = true;
    }
  },

  methods: {
    emitHide: function emitHide(val) {
      this.$emit('on-hide', val);
    },
    getAddressName: function getAddressName() {
      return (0, _value2name2.default)(this.value, this.list);
    },
    onShadowChange: function onShadowChange(ids, names) {
      this.$emit('on-shadow-change', ids, names);
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      showValue: false
    };
  },

  computed: {
    nameValue: function nameValue() {
      return (0, _value2name2.default)(this.currentValue, this.list);
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (val.length && !/\d+/.test(val[0])) {
        var id = (0, _name2value2.default)(val, this.list).split(' ');
        if (id[0] !== '__' && id[1] !== '__') {
          this.currentValue = id;
          return;
        }
      }
      this.currentValue = val;
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  }
};

/***/ }),

/***/ "3a/0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _base = __webpack_require__("qWCq");

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__("hArn");

var _icon2 = _interopRequireDefault(_icon);

var _toast = __webpack_require__("f4gh");

var _toast2 = _interopRequireDefault(_toast);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _isEmail = __webpack_require__("Bv05");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isMobilePhone = __webpack_require__("BzUK");

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _debounce = __webpack_require__("1m2e");

var _debounce2 = _interopRequireDefault(_debounce);

var _vanillaMasker = __webpack_require__("IFIB");

var _vanillaMasker2 = _interopRequireDefault(_vanillaMasker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  'email': {
    fn: _isEmail2.default,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn: function fn(str) {
      return (0, _isMobilePhone2.default)(str, 'zh-CN');
    },

    msg: '手机号码'
  },
  'china-name': {
    fn: function fn(str) {
      return str.length >= 2 && str.length <= 6;
    },

    msg: '中文姓名'
  }
};
exports.default = {
  name: 'x-input',
  created: function created() {
    var _this = this;

    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;

    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = (0, _debounce2.default)(function () {
        _this.$emit('on-change', _this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },

  mixins: [_base2.default],
  components: {
    Icon: _icon2.default,
    InlineDesc: _inlineDesc2.default,
    Toast: _toast2.default
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,

    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern: function pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed: function labelWidthComputed() {
      var width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors: function hasErrors() {
      return (0, _keys2.default)(this.errors).length > 0;
    },
    inputStyle: function inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn: function showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },

  methods: {
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (/iphone/i.test(navigator.userAgent)) {}
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        setTimeout(function () {
          _this2.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon: function onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue: function maskValue(val) {
      var val1 = this.mask ? _vanillaMasker2.default.toPattern(val, this.mask) : val;
      return val1;
    },
    reset: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear: function clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focusHandler: function focusHandler($event) {
      var _this3 = this;

      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;

      setTimeout(function () {
        _this3.$refs.input.scrollIntoViewIfNeeded(false);
      }, 1000);
    },
    onBlur: function onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError: function getError() {
      var key = (0, _keys2.default)(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate: function validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        var validator = validators[this.isType];
        if (validator) {
          var value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        var validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = '\u6700\u5C11\u5E94\u8BE5\u8F93\u5165' + this.min + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = '\u6700\u591A\u53EF\u4EE5\u8F93\u5165' + this.max + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual: function validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      var willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;

      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    _getInputMaskSelection: function _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        var maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data: function data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },

  watch: {
    mask: function mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid: function valid() {
      this.getError();
    },
    value: function value(val) {
      this.currentValue = val;
    },
    equalWith: function equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue: function currentValue(newVal, oldVal) {
      var _this4 = this;

      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      var selection = this.$refs.input.selectionStart;
      var direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));

      this.$nextTick(function () {
        if (_this4.$refs.input.selectionStart !== selection) {
          _this4.$refs.input.selectionStart = selection;
          _this4.$refs.input.selectionEnd = selection;
        }
        if (_this4.currentValue !== _this4.maskValue(newVal)) {
          _this4.currentValue = _this4.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
};

/***/ }),

/***/ "4s6/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("/d2u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("KJvo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42d88eff_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("+MhQ");
function injectStyle (ssrContext) {
  __webpack_require__("K1sU")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42d88eff_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5KR3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

var _scroller = __webpack_require__("qu0v");

var _scroller2 = _interopRequireDefault(_scroller);

var _util = __webpack_require__("7ngA");

var _makeData2 = __webpack_require__("1F3u");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object';

var MASK_TEMPLATE = '<div class="dp-mask"></div>';

var TEMPLATE = '<div class="dp-container">\n  <div class="dp-header">\n    <div class="dp-item dp-left vux-datetime-cancel" data-role="cancel">cancel</div>\n    <div class="dp-item vux-datetime-clear" data-role="clear"></div>\n    <div class="dp-item dp-right vux-datetime-confirm" data-role="confirm">done</div>\n  </div>\n  <div class="dp-content">\n    <div class="dp-item" data-role="year"></div>\n    <div class="dp-item" data-role="month"></div>\n    <div class="dp-item" data-role="day"></div>\n    <div class="dp-item" data-role="noon"></div>\n    <div class="dp-item" data-role="hour"></div>\n    <div class="dp-item" data-role="minute"></div>\n  </div>\n</div>';

var SHOW_ANIMATION_TIME = 200;
var SHOW_CONTAINER_TIME = 300;

var TYPE_MAP = {
  year: ['YYYY'],
  month: ['MM', 'M'],
  day: ['DD', 'D'],
  hour: ['HH', 'H'],
  minute: ['mm', 'm'],
  noon: ['A']
};

var MASK = null;

var CURRENT_PICKER = void 0;

var NOW = new Date();

var DEFAULT_CONFIG = {
  template: TEMPLATE,
  trigger: null,
  output: null,
  currentYear: NOW.getFullYear(),
  currentMonth: NOW.getMonth() + 1,
  minYear: 2000,
  maxYear: 2030,
  minHour: 0,
  maxHour: 23,
  hourList: null,
  minuteList: null,
  startDate: null,
  endDate: null,
  yearRow: '{value}',
  monthRow: '{value}',
  dayRow: '{value}',
  noonRow: '{value}',
  hourRow: '{value}',
  minuteRow: '{value}',
  format: 'YYYY-MM-DD',
  value: NOW.getFullYear() + '-' + (NOW.getMonth() + 1) + '-' + NOW.getDate(),
  onSelect: function onSelect() {},
  onConfirm: function onConfirm() {},
  onClear: function onClear() {},
  onShow: function onShow() {},
  onHide: function onHide() {},

  confirmText: 'ok',
  clearText: '',
  cancelText: 'cancel',
  destroyOnHide: false,
  renderInline: false,
  computeHoursFunction: null,
  computeDaysFunction: null,
  isOneInstance: false,
  orderMap: {}
};

function renderScroller(el, data, value, fn) {
  data = data.map(function (one) {
    one.value = one.value + '';
    return one;
  });
  return new _scroller2.default(el, {
    data: data,
    defaultValue: value + '',
    onSelect: fn
  });
}

function showMask() {
  if (!isBrowser) {
    return;
  }

  if (!MASK) {
    MASK = (0, _util.toElement)(MASK_TEMPLATE);
    document.body.appendChild(MASK);

    MASK.addEventListener('click', function () {
      CURRENT_PICKER && CURRENT_PICKER.hide('cancel');
    }, false);
    MASK.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, false);
  }

  MASK.style.display = 'block';

  setTimeout(function () {
    MASK && (MASK.style.opacity = 0.5);
  }, 0);
}

function hideMask() {
  if (!MASK) {
    return;
  }

  MASK.style.opacity = 0;

  setTimeout(function () {
    MASK && (MASK.style.display = 'none');
  }, SHOW_ANIMATION_TIME);
}

function DatetimePicker(config) {
  var self = this;
  self.config = {};
  self.value = config.value || '';
  (0, _util.each)(DEFAULT_CONFIG, function (key, val) {
    self.config[key] = config[key] || val;
  });

  this.renderInline = self.config.renderInline;

  if (config.defaultSelectedValue && !config.value) {
    self.config.value = config.defaultSelectedValue;
  }

  if (typeof this.config.startDate === 'string') {
    this.config.startDate = new Date(this.config.startDate.replace(/-/g, '/'));
  }

  if (typeof this.config.endDate === 'string') {
    this.config.endDate = new Date(this.config.endDate.replace(/-/g, '/'));
  }

  if (this.config.startDate && !this.config.endDate) {
    this.config.endDate = new Date('2030/12/31');
  }

  if (!this.config.startDate && this.config.endDate) {
    this.config.startDate = new Date(this.config.minYear + '/01/01');
  }

  this.reMakeData = !!this.config.startDate && !!this.config.endDate;

  if (!this.renderInline) {
    var trigger = self.config.trigger;

    this.triggerHandler = function (e) {
      e.preventDefault();
      self.show(self.value);
    };
    if (trigger && isBrowser) {
      trigger = self.trigger = (0, _util.getElement)(trigger);
      this.trigger = trigger;
      this.trigger && this.trigger.addEventListener('click', this.triggerHandler, false);
    }
  }
}

DatetimePicker.prototype = {
  _show: function _show(newValueMap) {
    var self = this;
    self._setText();
    self.container.style.display = 'block';

    if (this.renderInline) {
      self.container.classList.add('vux-datetime-view');
    }

    (0, _util.each)(TYPE_MAP, function (type) {
      self[type + 'Scroller'] && self[type + 'Scroller'].select(type === 'noon' ? newValueMap[type] : (0, _util.trimZero)(newValueMap[type]), false);
    });

    setTimeout(function () {
      self.container.style['-webkit-transform'] = 'translateY(0)';
      self.container.style.transform = 'translateY(0)';
    }, 0);
  },
  show: function show(value) {
    if (!isBrowser) {
      return;
    }

    var self = this;
    var config = self.config;
    if (config.isOneInstance) {
      if (document.querySelector('#vux-datetime-instance')) {
        return;
      }
      self.willShow = true;
    }

    CURRENT_PICKER = self;
    var valueMap = self.valueMap = (0, _util.parseDate)(config.format, value || config.value);
    var newValueMap = {};

    (0, _util.each)(TYPE_MAP, function (type, list) {
      newValueMap[type] = list.length === 1 ? valueMap[list[0]] : valueMap[list[0]] || valueMap[list[1]];
    });

    if (self.container) {
      self._show(newValueMap);
    } else {
      var template = config.template;
      for (var i in config.orderMap) {
        template = template.replace('data-role="' + i + '"', 'data-role="' + i + '" style="order:' + config.orderMap[i] + '"');
      }

      var container = self.container = (0, _util.toElement)(template);
      if (config.isOneInstance) {
        container.id = 'vux-datetime-instance';
      }
      if (!self.renderInline) {
        document.body.appendChild(container);

        self.container.style.display = 'block';
      } else {
        document.querySelector(self.config.trigger).appendChild(container);
      }

      (0, _util.each)(TYPE_MAP, function (type) {
        var div = self.find('[data-role=' + type + ']');
        if (newValueMap[type] === undefined) {
          (0, _util.removeElement)(div);
          return;
        }
        var data = void 0;
        if (type === 'day') {
          data = self._makeData(type, (0, _util.trimZero)(newValueMap.year), (0, _util.trimZero)(newValueMap.month));
        } else if (type === 'hour') {
          data = self._makeData(type, (0, _util.trimZero)(newValueMap.year), (0, _util.trimZero)(newValueMap.month), (0, _util.trimZero)(newValueMap.day));
        } else {
          data = self._makeData(type);
        }

        self[type + 'Scroller'] = renderScroller(div, data, (0, _util.trimZero)(newValueMap[type]), function (currentValue) {
          setTimeout(function () {
            config.onSelect.call(self, type, currentValue, self.getValue());
          }, 0);
          if (type === 'year' || type === 'month' || type === 'day') {
            self.hourScroller && self._setHourScroller(self.yearScroller.value, self.monthScroller.value, self.dayScroller.value, self.hourScroller.value);
          }
          var currentDay = void 0;
          if (type === 'year') {
            var currentMonth = self.monthScroller ? self.monthScroller.value : config.currentMonth;
            self._setMonthScroller(currentValue, currentMonth);
            if (self.dayScroller) {
              currentDay = self.dayScroller.value;
              self._setDayScroller(currentValue, currentMonth, currentDay);
            }
          } else if (type === 'month') {
            var currentYear = self.yearScroller ? self.yearScroller.value : config.currentYear;
            if (self.dayScroller) {
              currentDay = self.dayScroller.value;
              self._setDayScroller(currentYear, currentValue, currentDay);
            }
          }
        });
      });

      if (!self.renderText && !self.renderInline) {
        if (self.config.confirmText) {
          self.find('[data-role=confirm]').innerText = self.config.confirmText;
        }

        if (self.config.cancelText) {
          self.find('[data-role=cancel]').innerText = self.config.cancelText;
        }
        if (self.config.clearText) {
          self.find('[data-role=clear]').innerText = self.config.clearText;
        }
        self.renderText = true;
      }

      this._show(newValueMap);

      self.find('[data-role=cancel]').addEventListener('click', function (e) {
        e.preventDefault();
        self.hide('cancel');
      }, false);

      self.find('[data-role=confirm]').addEventListener('click', function (e) {
        e.preventDefault();
        self.confirm();
      }, false);

      if (self.config.clearText) {
        self.find('[data-role=clear]').addEventListener('click', function (e) {
          e.preventDefault();
          self.clear();
        }, false);
      }
    }

    if (!this.renderInline) {
      showMask();
      config.onShow.call(self);
    }
  },
  _setText: function _setText() {
    if (false) {
      var trigger = this.trigger;
      if (trigger) {
        var confirmText = trigger.getAttribute('data-confirm-text');
        var cancelText = trigger.getAttribute('data-cancel-text');
        this.find('[data-role=confirm]').innerText = confirmText;
        this.find('[data-role=cancel]').innerText = cancelText;
      }
    }
  },
  _makeData: function _makeData(type, year, month, day) {
    var config = this.config;
    var valueMap = this.valueMap;
    var list = TYPE_MAP[type];
    var data = [];
    var min = void 0;
    var max = void 0;

    if (type === 'year') {
      min = config.minYear;
      max = config.maxYear;
      if (this.reMakeData) {
        var _getYears = (0, _makeData2.getYears)(this.config.startDate, this.config.endDate),
            minYear = _getYears.minYear,
            maxYear = _getYears.maxYear;

        min = minYear;
        max = maxYear;
      }
    } else if (type === 'month') {
      min = 1;
      max = 12;
      if (this.reMakeData) {
        var _getMonths = (0, _makeData2.getMonths)(this.config.startDate, this.config.endDate, this.yearScroller.value * 1),
            minMonth = _getMonths.minMonth,
            maxMonth = _getMonths.maxMonth;

        min = Math.max(min, minMonth);
        max = Math.min(max, maxMonth);
      }
    } else if (type === 'day') {
      min = 1;
      max = (0, _util.getMaxDay)(year, month);
      if (this.reMakeData) {
        var _getDays = (0, _makeData2.getDays)(this.config.startDate, this.config.endDate, this.yearScroller.value * 1, this.monthScroller.value * 1),
            minDay = _getDays.minDay,
            maxDay = _getDays.maxDay;

        min = Math.max(min, minDay);
        max = Math.min(max, maxDay);
      }
    } else if (type === 'hour') {
      min = this.config.minHour;
      max = this.config.maxHour;
    } else if (type === 'minute') {
      min = 0;
      max = 59;
    }
    for (var i = min; i <= max; i++) {
      var name = void 0;
      if (type === 'year') {
        name = (0, _util.parseRow)(config.yearRow, i);
      } else {
        var val = valueMap[list[0]] ? (0, _util.addZero)(i) : i;
        name = (0, _util.parseRow)(config[type + 'Row'], val);
      }
      data.push({
        name: name,
        value: i
      });
    }

    if (type === 'noon') {
      data.push({
        name: '上午',
        value: 'AM'
      });
      data.push({
        name: '下午',
        value: 'PM'
      });
    }

    if (type === 'hour' && this.config.hourList) {
      data = this.config.hourList.map(function (hour) {
        return {
          name: (0, _util.parseRow)(config['hourRow'], hour),
          value: Number(hour)
        };
      });
    }

    if (type === 'day' && this.config.computeDaysFunction) {
      var rs = this.config.computeDaysFunction({
        year: year,
        month: month,
        min: min,
        max: max
      }, _util.generateRange);
      if (rs) {
        data = rs.map(function (day) {
          return {
            name: (0, _util.parseRow)(config['dayRow'], (0, _util.addZero)(day)),
            value: Number(day)
          };
        });
      }
    }

    if (type === 'hour' && this.config.computeHoursFunction) {
      var isTodayVal = (0, _util.isToday)(new Date(year + '/' + month + '/' + day), new Date());
      var _rs = this.config.computeHoursFunction(year + '-' + month + '-' + day, isTodayVal, _util.generateRange);
      data = _rs.map(function (hour) {
        return {
          name: (0, _util.parseRow)(config['hourRow'], hour),
          value: Number(hour)
        };
      });
    }

    if (type === 'minute' && this.config.minuteList) {
      data = this.config.minuteList.map(function (minute) {
        return {
          name: (0, _util.parseRow)(config['minuteRow'], minute),
          value: Number(minute)
        };
      });
    }
    return data;
  },
  _setMonthScroller: function _setMonthScroller(currentValue, month) {
    if (!this.monthScroller) {
      return;
    }
    var self = this;
    this.monthScroller.destroy();
    var div = self.find('[data-role=month]');
    self.monthScroller = renderScroller(div, self._makeData('month'), month, function (currentValue) {
      self.config.onSelect.call(self, 'month', currentValue, self.getValue());
      var currentYear = self.yearScroller ? self.yearScroller.value : self.config.currentYear;
      if (self.dayScroller) {
        var currentDay = self.dayScroller.value;
        self._setDayScroller(currentYear, currentValue, currentDay);
      }
      if (self.yearScroller && self.monthScroller && self.hourScroller) {
        self._setHourScroller(currentYear, currentValue, self.dayScroller.value, self.hourScroller.value);
      }
    });
  },
  _setDayScroller: function _setDayScroller(year, month, day) {
    if (!this.dayScroller) {
      return;
    }
    var self = this;
    var maxDay = (0, _util.getMaxDay)(year, month);
    if (day > maxDay) {
      day = maxDay;
    }
    self.dayScroller.destroy();
    var div = self.find('[data-role=day]');
    self.dayScroller = renderScroller(div, self._makeData('day', year, month), day, function (currentValue) {
      self.config.onSelect.call(self, 'day', currentValue, self.getValue());
      self.hourScroller && self._setHourScroller(year, month, currentValue, self.hourScroller.value);
    });
  },
  _setHourScroller: function _setHourScroller(year, month, day, hour) {
    if (!this.hourScroller) {
      return;
    }
    var self = this;
    self.hourScroller.destroy();
    var div = self.find('[data-role=hour]');
    self.hourScroller = renderScroller(div, self._makeData('hour', year, month, day), hour || '', function (currentValue) {
      self.config.onSelect.call(self, 'hour', currentValue, self.getValue());
    });
  },
  find: function find(selector) {
    return this.container.querySelector(selector);
  },
  hide: function hide(type) {
    if (!this.container) {
      return;
    }
    var self = this;
    self.container.style.removeProperty('transform');
    self.container.style.removeProperty('-webkit-transform');

    setTimeout(function () {
      self.container && (self.container.style.display = 'none');
    }, SHOW_CONTAINER_TIME);

    hideMask();

    self.config.onHide.call(self, type);
    if (self.config.destroyOnHide) {
      setTimeout(function () {
        self.destroy();
      }, 500);
    }
  },
  select: function select(type, value) {
    this[type + 'Scroller'].select(value, false);
  },
  destroy: function destroy() {
    var self = this;
    this.trigger && this.trigger.removeEventListener('click', this.triggerHandler, false);
    if (!self.config.isOneInstance && !self.willShow) {
      (0, _util.removeElement)(MASK);
      MASK = null;
    }
    (0, _util.removeElement)(self.container);
    self.container = null;
  },
  getValue: function getValue() {
    var self = this;
    var config = self.config;

    var value = config.format;

    function formatValue(scroller, expr1, expr2) {
      if (scroller) {
        var val = scroller.value;
        if (expr1) {
          value = value.replace(new RegExp(expr1, 'g'), (0, _util.addZero)(val));
        }
        if (expr2) {
          value = value.replace(new RegExp(expr2, 'g'), (0, _util.trimZero)(val));
        }
      }
    }

    (0, _util.each)(TYPE_MAP, function (key, list) {
      formatValue(self[key + 'Scroller'], list[0], list[1]);
    });

    return value;
  },
  confirm: function confirm() {
    var value = this.getValue();
    this.value = value;

    if (this.config.onConfirm.call(this, value) === false) {
      return;
    }

    this.hide('confirm');
  },
  clear: function clear() {
    var value = this.getValue();

    if (this.config.onClear.call(this, value) === false) {
      return;
    }

    this.hide('clear');
  }
};

exports.default = DatetimePicker;

/***/ }),

/***/ "5MPz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5a07":
/***/ (function(module, exports) {


/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),

/***/ "5lwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passiveSupported = __webpack_require__("KTwD");
var isBrowser = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object';

if (isBrowser) {
  window.__$vuxPopups = window.__$vuxPopups || {};
}

var popupDialog = function popupDialog(option) {
  var _this = this;

  if (!isBrowser) {
    return;
  }
  this.uuid = Math.random().toString(36).substring(3, 8);
  this.params = {};
  if (Object.prototype.toString.call(option) === '[object Object]') {
    this.params = {
      hideOnBlur: option.hideOnBlur,
      onOpen: option.onOpen || function () {},
      onClose: option.onClose || function () {},
      showMask: option.showMask
    };
  }
  if (!!document.querySelectorAll('.vux-popup-mask').length <= 0) {
    this.divMask = document.createElement('a');
    this.divMask.className = 'vux-popup-mask';
    this.divMask.dataset.uuid = '';
    this.divMask.href = 'javascript:void(0)';
    document.body.appendChild(this.divMask);
  }
  var div = void 0;
  if (!option.container) {
    div = document.createElement('div');
  } else {
    div = option.container;
  }

  div.className += ' vux-popup-dialog vux-popup-dialog-' + this.uuid;
  if (!this.params.hideOnBlur) {
    div.className += ' vux-popup-mask-disabled';
  }

  this.div = div;

  if (!option.container) {
    document.body.appendChild(div);
  }
  this.container = document.querySelector('.vux-popup-dialog-' + this.uuid);
  this.mask = document.querySelector('.vux-popup-mask');
  this.mask.dataset.uuid += ',' + this.uuid;
  this._bindEvents();
  option = null;
  this.containerHandler = function () {
    _this.mask && !/show/.test(_this.mask.className) && setTimeout(function () {
      !/show/.test(_this.mask.className) && (_this.mask.style['zIndex'] = -1);
    }, 200);
  };

  this.container && this.container.addEventListener('webkitTransitionEnd', this.containerHandler);
  this.container && this.container.addEventListener('transitionend', this.containerHandler);
};

popupDialog.prototype.onClickMask = function () {
  this.params.hideOnBlur && this.params.onClose();
};

popupDialog.prototype._bindEvents = function () {
  if (this.params.hideOnBlur) {
    this.mask.addEventListener('click', this.onClickMask.bind(this), false);
    this.mask.addEventListener('touchmove', function (e) {
      return e.preventDefault();
    }, passiveSupported ? { passive: false } : false);
  }
};

popupDialog.prototype.show = function () {
  if (this.params.showMask) {
    this.mask.classList.add('vux-popup-show');
    this.mask.style['zIndex'] = 500;
  }
  this.container.classList.add('vux-popup-show');
  this.params.onOpen && this.params.onOpen(this);
  if (isBrowser) {
    window.__$vuxPopups[this.uuid] = 1;
  }
};

popupDialog.prototype.hide = function () {
  var _this2 = this;

  var shouldCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  this.container.classList.remove('vux-popup-show');
  if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
    this.mask.classList.remove('vux-popup-show');
    setTimeout(function () {
      _this2.mask && !/show/.test(_this2.mask.className) && (_this2.mask.style['zIndex'] = -1);
    }, 400);
  }
  shouldCallback === false && this.params.onClose && this.params.hideOnBlur && this.params.onClose(this);
  this.isShow = false;
  if (isBrowser) {
    delete window.__$vuxPopups[this.uuid];
  }
};

popupDialog.prototype.destroy = function () {
  this.mask.dataset.uuid = this.mask.dataset.uuid.replace(new RegExp(',' + this.uuid, 'g'), '');
  if (!this.mask.dataset.uuid) {
    this.mask.removeEventListener('click', this.onClickMask.bind(this), false);
    this.mask && this.mask.parentNode && this.mask.parentNode.removeChild(this.mask);
  } else {
    this.hide();
  }
  this.container.removeEventListener('webkitTransitionEnd', this.containerHandler);
  this.container.removeEventListener('transitionend', this.containerHandler);
  if (isBrowser) {
    delete window.__$vuxPopups[this.uuid];
  }
};

exports.default = popupDialog;

/***/ }),

/***/ "7ngA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.each = each;
exports.trimZero = trimZero;
exports.generateRange = generateRange;
exports.isToday = isToday;
exports.addZero = addZero;
exports.isLeapYear = isLeapYear;
exports.getMaxDay = getMaxDay;
exports.parseRow = parseRow;
exports.parseDate = parseDate;
exports.getElement = getElement;
exports.toElement = toElement;
exports.removeElement = removeElement;

var _format = __webpack_require__("cHJ+");

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function each(obj, fn) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (fn.call(obj[key], key, obj[key]) === false) {
        break;
      }
    }
  }
}

function trimZero(val) {
  val = String(val);
  val = val ? parseFloat(val.replace(/^0+/g, '')) : '';
  val = val || 0;
  val = val + '';
  return val;
}

function generateRange() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end = arguments[1];

  var results = [];
  for (var i = start; i <= end; i++) {
    results.push(addZero(i));
  }
  return results;
}

function isToday(val1, val2) {
  return val1.getFullYear() === val2.getFullYear() && val1.getMonth() === val2.getMonth() && val1.getDate() === val2.getDate();
}

function addZero(val) {
  val = String(val);
  return val.length < 2 ? '0' + val : val;
}

function isLeapYear(year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0;
}

function getMaxDay(year, month) {
  year = parseFloat(year);
  month = parseFloat(month);
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
}

function parseRow(tmpl, value) {
  return tmpl.replace(/\{value\}/g, value);
}

function parseDate(format, value) {
  var formatParts = format.split(/[^A-Za-z]+/);
  var valueParts = value.replace(/\s/g, '-').replace(/:/g, '-').replace(/\//g, '-').split('-');
  if (formatParts.length !== valueParts.length) {
    var date = (0, _format2.default)(new Date(), format);
    valueParts = date.split(/\D+/);
  }

  var result = {};

  for (var i = 0; i < formatParts.length; i++) {
    if (formatParts[i]) {
      result[formatParts[i]] = valueParts[i];
    }
  }
  return result;
}

function getElement(expr) {
  return typeof expr === 'string' ? document.querySelector(expr) : expr;
}

function toElement(html) {
  var tempContainer = document.createElement('div');
  tempContainer.innerHTML = html;
  return tempContainer.firstElementChild;
}

function removeElement(el) {
  el && el.parentNode.removeChild(el);
}

/***/ }),

/***/ "80lz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":("vux-popup-animate-" + _vm.position)}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show && !_vm.initialShow),expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:[("vux-popup-" + _vm.position), _vm.show ? 'vux-popup-show' : ''],style:(_vm.styles)},[(_vm.shouldRenderBody)?_vm._t("default"):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "97wD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "A/CE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("1xA6");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("CKVb");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("gpPJ");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("fvyU");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("CGiF");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("o+C2");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("S9nr");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("EcBO");

var _index18 = _interopRequireDefault(_index17);

var _china_address = __webpack_require__("dyEy");

var _china_address2 = _interopRequireDefault(_china_address);

var _index19 = __webpack_require__("vxcK");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("RAwi");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("4s6/");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("i46f");

var _index26 = _interopRequireDefault(_index25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "EvenBus测试",
  components: {
    XHeader: _index2.default,
    Group: _index6.default,
    GroupTitle: _index4.default,
    Cell: _index8.default,
    XInput: _index10.default,
    Selector: _index12.default,
    PopupPicker: _index14.default,
    XAddress: _index20.default,
    Datetime: _index16.default,
    XNumber: _index18.default,
    XTextarea: _index22.default,
    XSwitch: _index24.default,
    ViewBox: _index26.default
  },
  data: function data() {
    return {
      addressValue: ["广东省", "深圳市", "南山区"],
      value1: "张三",
      value2: "工艺技术",
      value3: "",
      value7: "",
      value8: "",
      value4: "",
      time1: "2017-06-01",
      value5: ["A"],
      value6: [],
      list: [["A", "B", "C"]],
      numberValue: 0
    };
  },

  methods: {}
};

/***/ }),

/***/ "AA3o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Acs2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__("LW84");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ "B7K5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__("AA3o");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("xSur");

var _createClass3 = _interopRequireDefault(_createClass2);

var _arrayFilter = __webpack_require__("5a07");

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manager = function () {
  function Manager(data, count, fixedColumns) {
    (0, _classCallCheck3.default)(this, Manager);

    if (false) {
      var notStringList = data.filter(function (item) {
        return item.parent && item.parent !== 0 && item.parent !== '0' && (typeof item.parent === 'number' || typeof item.value === 'number');
      });
      if (notStringList.length) {
        console.warn('[VUX] picker data\'s value and parent should be string:\n' + (0, _stringify2.default)(notStringList, null, 2));
      }
    }
    this.data = data;
    this.count = count;
    if (fixedColumns) {
      this.fixedColumns = fixedColumns;
    }
  }

  (0, _createClass3.default)(Manager, [{
    key: 'getChildren',
    value: function getChildren(value) {
      return (0, _arrayFilter2.default)(this.data, function (one) {
        return one.parent === value;
      });
    }
  }, {
    key: 'getFirstColumn',
    value: function getFirstColumn() {
      return (0, _arrayFilter2.default)(this.data, function (one) {
        return !one.parent || one.parent === 0 || one.parent === '0';
      });
    }
  }, {
    key: 'getPure',
    value: function getPure(obj) {
      return JSON.parse((0, _stringify2.default)(obj));
    }
  }, {
    key: 'getColumns',
    value: function getColumns(value) {
      var _this = this;

      if (value.length > 0) {
        var matchCount = this.getPure(this.data).filter(function (item) {
          return _this.getPure(value).indexOf(item.value) > -1;
        }).length;
        if (matchCount < this.getPure(value).length) {
          value = [];
        }
      }
      var datas = [];
      var max = this.fixedColumns || 8;
      for (var i = 0; i < max; i++) {
        if (i === 0) {
          datas.push(this.getFirstColumn());
        } else {
          if (!value[i]) {
            if (typeof datas[i - 1][0] === 'undefined') {
              break;
            } else {
              var topValue = datas[i - 1][0].value;
              datas.push(this.getChildren(topValue));
            }
          } else {
            datas.push(this.getChildren(value[i - 1]));
          }
        }
      }
      var list = datas.filter(function (item) {
        return item.length > 0;
      });

      this.count = list.length;
      return list;
    }
  }]);
  return Manager;
}();

exports.default = Manager;

/***/ }),

/***/ "BRVP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bv05":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__("LW84");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__("rWoo");

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__("Acs2");

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__("UGaa");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "BzUK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__("LW84");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[3456789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString2.default)(str);
  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ "C7GH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-selector weui-cell",class:{
    'weui-cell_select': !_vm.readonly,
    'weui-cell_select-after': _vm.title
  }},[(_vm.title)?_c('div',{staticClass:"weui-cell__hd"},[_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:(_vm.cleanStyle({
        width: _vm.$parent.labelWidth,
        textAlign: _vm.$parent.labelAlign,
        marginRight: _vm.$parent.labelMarginRight
      })),attrs:{"for":("vux-selector-" + _vm.uuid)},domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),_vm._v(" "),(!_vm.readonly)?_c('div',{staticClass:"weui-cell__bd"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],staticClass:"weui-select",style:(_vm.cleanStyle({
        direction: _vm.direction,
        color: _vm.color
      })),attrs:{"id":("vux-selector-" + _vm.uuid),"name":_vm.name},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currentValue=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[(_vm.showPlaceholder)?_c('option',{domProps:{"value":_vm.value === null ? 'null' : '',"selected":_vm.isEmptyValue(_vm.value) && !!_vm.placeholder}},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e(),_vm._v(" "),(_vm.fixIos)?_c('option',{attrs:{"disabled":""}}):_vm._e(),_vm._v(" "),_vm._l((_vm.processOptions),function(one){return _c('option',{domProps:{"value":one.key}},[_vm._v(_vm._s(one.value))])})],2)]):_c('div',{staticClass:"weui-cell__ft vux-selector-readonly"},[_vm._v("\n    "+_vm._s(_vm._f("findByKey")(_vm.value,_vm.processOptions))+"\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CGiF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("EgGI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Raok");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_78178ee8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("C7GH");
function injectStyle (ssrContext) {
  __webpack_require__("5MPz")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_78178ee8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "CZ5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, list, delimiter) {
  if (value && !list.length) {
    return '';
  }
  if (!delimiter) {
    delimiter = ' ';
  }

  var rs = (0, _arrayMap2.default)(value, function (one, index) {
    if (list.length && Object.prototype.toString.call(list[0]) === '[object Array]') {
      return (0, _arrayFind2.default)(list[index], function (item) {
        return item.value === one;
      });
    } else {
      return (0, _arrayFind2.default)(list, function (item) {
        return item.value === one;
      });
    }
  });
  rs = rs.filter(function (one) {
    return typeof one !== 'undefined';
  });
  return (0, _arrayMap2.default)(rs, function (one) {
    return one.name;
  }).join(delimiter).replace('--', '');
};

var _arrayMap = __webpack_require__("JRhT");

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _arrayFind = __webpack_require__("qZvt");

var _arrayFind2 = _interopRequireDefault(_arrayFind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "CuDe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EUJi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

var _scroller = __webpack_require__("qu0v");

var _scroller2 = _interopRequireDefault(_scroller);

var _flexbox = __webpack_require__("QgQO");

var _chain = __webpack_require__("B7K5");

var _chain2 = _interopRequireDefault(_chain);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _isArray = __webpack_require__("SNYt");

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'picker',
  components: {
    Flexbox: _flexbox.Flexbox,
    FlexboxItem: _flexbox.FlexboxItem
  },
  created: function created() {
    if (this.columns !== 0) {
      var length = this.columns;
      this.store = new _chain2.default(this.data, length, this.fixedColumns || this.columns);
      this.currentData = this.store.getColumns(this.value);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(function () {
      _this2.render(_this2.currentData, _this2.currentValue);
    });
  },

  props: {
    data: Array,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues: function getNameValues() {
      return (0, _value2name2.default)(this.currentValue, this.data);
    },
    getId: function getId(i) {
      return '#vux-picker-' + this.uuid + '-' + i;
    },
    render: function render(data, value) {
      this.count = this.currentData.length;
      var _this = this;
      if (!data || !data.length) {
        return;
      }
      var count = this.currentData.length;

      if (value.length < count) {
        for (var i = 0; i < count; i++) {
          if (false) {
            console.error('[VUX error] 渲染出错，如果为联动模式，需要指定 columns(列数)');
          }
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0]);
        }
      }

      var _loop = function _loop(_i) {
        if (!document.querySelector(_this.getId(_i))) {
          return {
            v: void 0
          };
        }

        _this.scroller[_i] && _this.scroller[_i].destroy();
        _this.scroller[_i] = new _scroller2.default(_this.getId(_i), {
          data: data[_i],
          defaultValue: value[_i] || data[_i][0].value,
          itemClass: _this.itemClass,
          onSelect: function onSelect(value) {
            _this.$set(_this.currentValue, _i, value);
            if (!this.columns || this.columns && _this.getValue().length === _this.store.count) {
              _this.$nextTick(function () {
                _this.$emit('on-change', _this.getValue());
              });
            }
            if (_this.columns !== 0) {
              _this.renderChain(_i + 1);
            }
          }
        });
        if (_this.currentValue) {
          _this.scroller[_i].select(value[_i]);
        }
      };

      for (var _i = 0; _i < data.length; _i++) {
        var _ret = _loop(_i);

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }
    },
    renderChain: function renderChain(i) {
      if (!this.columns) {
        return;
      }

      if (i > this.count - 1) {
        return;
      }

      var _this = this;
      var ID = this.getId(i);

      this.scroller[i].destroy();
      var list = this.store.getChildren(_this.getValue()[i - 1]);
      this.scroller[i] = new _scroller2.default(ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect: function onSelect(value) {
          _this.$set(_this.currentValue, i, value);
          _this.$nextTick(function () {
            _this.$emit('on-change', _this.getValue());
          });
          _this.renderChain(i + 1);
        }
      });

      if (list.length) {
        this.$set(this.currentValue, i, list[0].value);
        this.renderChain(i + 1);
      } else {
        this.$set(this.currentValue, i, null);
      }
    },
    getValue: function getValue() {
      var data = [];
      for (var i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value);
        } else {
          return [];
        }
      }
      return data;
    },
    emitValueChange: function emitValueChange(val) {
      if (!this.columns || this.columns && val.length === this.store.count) {
        this.$emit('on-change', val);
      }
    }
  },
  data: function data() {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.currentValue)) {
        this.currentValue = val;
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);

      if (this.columns !== 0) {
        if (val.length > 0) {
          if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(oldVal)) {
            this.currentData = this.store.getColumns(val);
            this.$nextTick(function () {
              this.render(this.currentData, val);
            });
          }
        }
      } else {
        if (val.length) {
          for (var i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i]);
            }
          }
        } else {
          this.render(this.currentData, []);
        }
      }
    },
    data: function data(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.currentData)) {
        this.currentData = val;
      }
    },
    currentData: function currentData(newData) {
      var _this3 = this;

      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(function () {
          _this3.render(newData, _this3.currentValue);

          _this3.$nextTick(function () {
            _this3.emitValueChange(_this3.getValue());

            if ((0, _stringify2.default)(_this3.getValue()) !== (0, _stringify2.default)(_this3.currentValue)) {
              if (!_this3.columns || _this3.columns && _this3.getValue().length === _this3.store.count) {
                _this3.currentValue = _this3.getValue();
              }
            }
          });
        });
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return;
          }
          var length = this.columns;
          this.store = new _chain2.default(newData, length, this.fixedColumns || this.columns);
          this.currentData = this.store.getColumns(this.currentValue);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy();
      this.scroller[i] = null;
    }
  }
};

/***/ }),

/***/ "EaEK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _picker = __webpack_require__("UdYw");

var _picker2 = _interopRequireDefault(_picker);

var _cell = __webpack_require__("gpPJ");

var _cell2 = _interopRequireDefault(_cell);

var _popup = __webpack_require__("cTn1");

var _popup2 = _interopRequireDefault(_popup);

var _popupHeader = __webpack_require__("lN2D");

var _popupHeader2 = _interopRequireDefault(_popupHeader);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _flexbox = __webpack_require__("QgQO");

var _array2String = __webpack_require__("ytj0");

var _array2String2 = _interopRequireDefault(_array2String);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _mixin_uuid = __webpack_require__("ONqH");

var _mixin_uuid2 = _interopRequireDefault(_mixin_uuid);

var _transferDom = __webpack_require__("Jp5S");

var _transferDom2 = _interopRequireDefault(_transferDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getObject = function getObject(obj) {
  return JSON.parse((0, _stringify2.default)(obj));
};

exports.default = {
  name: 'popup-picker',
  directives: {
    TransferDom: _transferDom2.default
  },
  created: function created() {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show;
    }
  },

  mixins: [_mixin_uuid2.default],
  components: {
    Picker: _picker2.default,
    Cell: _cell2.default,
    Popup: _popup2.default,
    PopupHeader: _popupHeader2.default,
    Flexbox: _flexbox.Flexbox,
    FlexboxItem: _flexbox.FlexboxItem,
    InlineDesc: _inlineDesc2.default
  },
  filters: {
    array2string: _array2String2.default,
    value2name: _value2name2.default
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String,
    disabled: Boolean
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    value2name: _value2name2.default,
    getNameValues: function getNameValues() {
      return (0, _value2name2.default)(this.currentValue, this.data);
    },
    onClick: function onClick() {
      if (!this.disabled) {
        this.showValue = true;
      }
    },
    onHide: function onHide(type) {
      this.showValue = false;
      if (type) {
        this.closeType = true;
        this.currentValue = getObject(this.tempValue);
      }
      if (!type) {
        this.closeType = false;
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue);
        }
      }
    },
    onPopupShow: function onPopupShow() {
      this.closeType = false;
      this.$emit('on-show');
    },
    onPopupHide: function onPopupHide(val) {
      if (this.value.length > 0) {
        this.tempValue = getObject(this.currentValue);
      }
      this.$emit('on-hide', this.closeType);
    },
    onPickerChange: function onPickerChange(val) {
      if ((0, _stringify2.default)(this.currentValue) !== (0, _stringify2.default)(val)) {
        if (this.value.length) {
          var nowData = (0, _stringify2.default)(this.data);
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val);
          }
          this.currentData = nowData;
        } else {}
      }
      var _val = getObject(val);
      this.$emit('on-shadow-change', _val, (0, _value2name2.default)(_val, this.data).split(' '));
    }
  },
  watch: {
    value: function value(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.tempValue)) {
        this.tempValue = getObject(val);
        this.currentValue = getObject(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', getObject(val));
      this.$emit('on-change', getObject(val));
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  },
  data: function data() {
    return {
      onShowProcess: false,
      tempValue: getObject(this.value),
      closeType: false,
      currentData: (0, _stringify2.default)(this.data),
      showValue: false,
      currentValue: this.value
    };
  }
};

/***/ }),

/***/ "EcBO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("pWBi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Wz8g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_de1df9e4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("K07r");
function injectStyle (ssrContext) {
  __webpack_require__("brzN")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_de1df9e4_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "EgGI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

var _arrayFind = __webpack_require__("qZvt");

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _uuid = __webpack_require__("fqpJ");

var _uuid2 = _interopRequireDefault(_uuid);

var _cleanStyle = __webpack_require__("n9nh");

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findByKey = function findByKey(key, options) {
  var _rs = (0, _arrayFind2.default)(options, function (item) {
    return item.key === key;
  });
  return _rs ? _rs.value : key;
};

exports.default = {
  name: 'selector',
  mixins: [_uuid2.default],
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value;
    }
  },
  beforeMount: function beforeMount() {
    this.isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
  },

  computed: {
    fixIos: function fixIos() {
      return !this.placeholder && this.isEmptyValue(this.value) && this.isIOS && this.title;
    },
    color: function color() {
      return this.showPlaceholder ? '#A9A9A9' : '';
    },
    processOptions: function processOptions() {
      var _this = this;

      if (!this.options.length) {
        return [];
      }

      var isObject = (0, _typeof3.default)(this.options[0]) === 'object';

      if (isObject && !this.valueMap) {
        return this.options;
      }

      if (isObject && this.valueMap) {
        return this.options.map(function (item) {
          return {
            key: item[_this.valueMap[0]],
            value: item[_this.valueMap[1]]
          };
        });
      }

      return this.options.map(function (item) {
        return {
          key: item,
          value: item
        };
      });
    },
    showPlaceholder: function showPlaceholder() {
      if (this.isEmptyValue(this.value) && this.placeholder) {
        return true;
      }
      return false;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    isEmptyValue: function isEmptyValue(val) {
      return typeof val === 'undefined' || val === '' || val === null;
    },

    cleanStyle: _cleanStyle2.default,
    getFullValue: function getFullValue() {
      var _this2 = this;

      if (!this.value) {
        return null;
      }
      if (!this.options.length) {
        return null;
      }
      if ((0, _typeof3.default)(this.options[0]) !== 'object') {
        return this.value;
      } else {
        if (!this.valueMap) {
          return this.options.filter(function (one) {
            return one.key === _this2.value;
          });
        } else {
          return this.options.filter(function (one) {
            return one[_this2.valueMap[0]] === _this2.value;
          });
        }
      }
    }
  },
  filters: {
    findByKey: findByKey
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    }
  },
  props: {
    title: String,
    direction: String,
    options: {
      type: Array,
      required: true
    },
    name: String,
    placeholder: String,
    readonly: Boolean,
    value: [String, Number, Object, Boolean],
    valueMap: {
      type: Array,
      validator: function validator(val) {
        if (!val.length || val.length !== 2) {
          if (false) {
            console.error('[VUX error] selector prop:valueMap\'s length should be 2');
          }
          return false;
        }
        return true;
      }
    }
  },
  data: function data() {
    return {
      currentValue: '',
      isIOS: false
    };
  }
};

/***/ }),

/***/ "EijJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "F+W+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HJlr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"FixedLayout"}},[_c('ViewBox',[_c('div',{staticStyle:{"width":"100%","height":"100%"}},[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("IOS inputFix")]),_vm._v(" "),_c('group',{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"right"}},[_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('datetime',{attrs:{"title":"时&emsp;&emsp;&nbsp;间","value-text-align":"left"},model:{value:(_vm.time1),callback:function ($$v) {_vm.time1=$$v},expression:"time1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"隐患部位","placeholder":"必填"},model:{value:(_vm.value3),callback:function ($$v) {_vm.value3=$$v},expression:"value3"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"密码","type":"password","placeholder":"必填"},model:{value:(_vm.value4),callback:function ($$v) {_vm.value4=$$v},expression:"value4"}}),_vm._v(" "),_c('popup-picker',{attrs:{"title":"请选择","data":_vm.list,"value-text-align":"left"},model:{value:(_vm.value5),callback:function ($$v) {_vm.value5=$$v},expression:"value5"}})],1),_vm._v(" "),_c('group',{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"right"}},[_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('datetime',{attrs:{"title":"时&emsp;&emsp;&nbsp;间","value-text-align":"left"},model:{value:(_vm.time1),callback:function ($$v) {_vm.time1=$$v},expression:"time1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"隐患部位","placeholder":"必填"},model:{value:(_vm.value3),callback:function ($$v) {_vm.value3=$$v},expression:"value3"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"密码","type":"password","placeholder":"必填"},model:{value:(_vm.value4),callback:function ($$v) {_vm.value4=$$v},expression:"value4"}}),_vm._v(" "),_c('popup-picker',{attrs:{"title":"请选择","data":_vm.list,"value-text-align":"left"},model:{value:(_vm.value5),callback:function ($$v) {_vm.value5=$$v},expression:"value5"}})],1),_vm._v(" "),_c('group',{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"right"}},[_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上报人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}}),_vm._v(" "),_c('datetime',{attrs:{"title":"时&emsp;&emsp;&nbsp;间","value-text-align":"left"},model:{value:(_vm.time1),callback:function ($$v) {_vm.time1=$$v},expression:"time1"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"隐患部位","placeholder":"必填"},model:{value:(_vm.value3),callback:function ($$v) {_vm.value3=$$v},expression:"value3"}}),_vm._v(" "),_c('x-input',{attrs:{"title":"密码","type":"password","placeholder":"必填"},model:{value:(_vm.value4),callback:function ($$v) {_vm.value4=$$v},expression:"value4"}}),_vm._v(" "),_c('popup-picker',{attrs:{"title":"请选择","data":_vm.list,"value-text-align":"left"},model:{value:(_vm.value5),callback:function ($$v) {_vm.value5=$$v},expression:"value5"}})],1)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HNz7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__ = __webpack_require__("A/CE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__ = __webpack_require__("ZcFQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_17132a6f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_FixedLayoutFix_vue__ = __webpack_require__("HJlr");
function injectStyle (ssrContext) {
  __webpack_require__("ZE3Z")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17132a6f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_FixedLayoutFix_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_17132a6f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_FixedLayoutFix_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Hpey":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (date) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  };
  var week = {
    '0': '\u65E5',
    '1': '\u4E00',
    '2': '\u4E8C',
    '3': '\u4E09',
    '4': '\u56DB',
    '5': '\u4E94',
    '6': '\u516D'
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '\u661F\u671F' : '\u5468' : '') + week[date.getDay() + '']);
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};

/***/ }),

/***/ "IFIB":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.VMasker = factory();
  }
}(this, function() {
  var DIGIT = "9",
      ALPHA = "A",
      ALPHANUM = "S",
      BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
      isAllowedKeyCode = function(keyCode) {
        for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
          if (keyCode == BY_PASS_KEYS[i]) {
            return false;
          }
        }
        return true;
      },
      mergeMoneyOptions = function(opts) {
        opts = opts || {};
        opts = {
          delimiter: opts.delimiter || ".",
          lastOutput: opts.lastOutput,
          precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
          separator: opts.separator || ",",
          showSignal: opts.showSignal,
          suffixUnit: opts.suffixUnit && (" " + opts.suffixUnit.replace(/[\s]/g,'')) || "",
          unit: opts.unit && (opts.unit.replace(/[\s]/g,'') + " ") || "",
          zeroCents: opts.zeroCents
        };
        opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
        return opts;
      },
      // Fill wildcards past index in output with placeholder
      addPlaceholdersToOutput = function(output, index, placeholder) {
        for (; index < output.length; index++) {
          if(output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
            output[index] = placeholder;
          }
        }
        return output;
      }
  ;

  var VanillaMasker = function(elements) {
    this.elements = elements;
  };

  VanillaMasker.prototype.unbindElementToMask = function() {
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = false;
      this.elements[i].onkeydown = false;

      if (this.elements[i].value.length) {
        this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
      }
    }
  };

  VanillaMasker.prototype.bindElementToMask = function(maskFunction) {
    var that = this,
        onType = function(e) {
          e = e || window.event;
          var source = e.target || e.srcElement;

          if (isAllowedKeyCode(e.keyCode)) {
            setTimeout(function() {
              that.opts.lastOutput = source.lastOutput;
              source.value = VMasker[maskFunction](source.value, that.opts);
              source.lastOutput = source.value;
              if (source.setSelectionRange && that.opts.suffixUnit) {
                source.setSelectionRange(source.value.length, (source.value.length - that.opts.suffixUnit.length));
              }
            }, 0);
          }
        }
    ;
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = onType;
      if (this.elements[i].value.length) {
        this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
      }
    }
  };

  VanillaMasker.prototype.maskMoney = function(opts) {
    this.opts = mergeMoneyOptions(opts);
    this.bindElementToMask("toMoney");
  };

  VanillaMasker.prototype.maskNumber = function() {
    this.opts = {};
    this.bindElementToMask("toNumber");
  };
  
  VanillaMasker.prototype.maskAlphaNum = function() {
    this.opts = {};
    this.bindElementToMask("toAlphaNumeric");
  };

  VanillaMasker.prototype.maskPattern = function(pattern) {
    this.opts = {pattern: pattern};
    this.bindElementToMask("toPattern");
  };

  VanillaMasker.prototype.unMask = function() {
    this.unbindElementToMask();
  };

  var VMasker = function(el) {
    if (!el) {
      throw new Error("VanillaMasker: There is no element to bind.");
    }
    var elements = ("length" in el) ? (el.length ? el : []) : [el];
    return new VanillaMasker(elements);
  };

  VMasker.toMoney = function(value, opts) {
    opts = mergeMoneyOptions(opts);
    if (opts.zeroCents) {
      opts.lastOutput = opts.lastOutput || "";
      var zeroMatcher = ("("+ opts.separator +"[0]{0,"+ opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          digitsLength = value.toString().replace(/[\D]/g, "").length || 0,
          lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, "").length || 0
      ;
      value = value.toString().replace(zeroRegExp, "");
      if (digitsLength < lastDigitLength) {
        value = value.slice(0, value.length - 1);
      }
    }
    var number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ opts.separator +")$"),
        money = number.substr(0, number.length - opts.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    var signal = "";
    if(opts.showSignal === true) {
      signal = value < 0 || (value.startsWith && value.startsWith('-')) ? "-" :  "";
    }
    if (!opts.zeroCents) {
      var beginCents = number.length - opts.precision,
          centsValue = number.substr(beginCents, opts.precision),
          centsLength = centsValue.length,
          centsSliced = (opts.precision > centsLength) ? opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = opts.unit + signal + masked + opts.separator + cents;
    return output.replace(clearSeparator, "") + opts.suffixUnit;
  };

  VMasker.toPattern = function(value, opts) {
    var pattern = (typeof opts === 'object' ? opts.pattern : opts),
        patternChars = pattern.replace(/\W/g, ''),
        output = pattern.split(""),
        values = value.toString().replace(/\W/g, ""),
        charsValues = values.replace(/\W/g, ''),
        index = 0,
        i,
        outputLength = output.length,
        placeholder = (typeof opts === 'object' ? opts.placeholder : undefined)
    ;
    
    for (i = 0; i < outputLength; i++) {
      // Reached the end of input
      if (index >= values.length) {
        if (patternChars.length == charsValues.length) {
          return output.join("");
        }
        else if ((placeholder !== undefined) && (patternChars.length > charsValues.length)) {
          return addPlaceholdersToOutput(output, i, placeholder).join("");
        }
        else {
          break;
        }
      }
      // Remaining chars in input
      else{
        if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
            (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
            (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
          output[i] = values[index++];
        } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
          if(placeholder !== undefined){
            return addPlaceholdersToOutput(output, i, placeholder).join("");
          }
          else{
            return output.slice(0, i).join("");
          }
        }
      }
    }
    return output.join("").substr(0, i);
  };

  VMasker.toNumber = function(value) {
    return value.toString().replace(/(?!^-)[^0-9]/g, "");
  };
  
  VMasker.toAlphaNumeric = function(value) {
    return value.toString().replace(/[^a-z0-9 ]+/i, "");
  };

  return VMasker;
}));


/***/ }),

/***/ "JCi3":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* big.js v3.1.3 https://github.com/MikeMcl/big.js/LICENCE */
;(function (global) {
    'use strict';

/*
  big.js v3.1.3
  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
  https://github.com/MikeMcl/big.js/
  Copyright (c) 2014 Michael Mclaughlin <M8ch88l@gmail.com>
  MIT Expat Licence
*/

/***************************** EDITABLE DEFAULTS ******************************/

    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places of the results of operations
     * involving division: div and sqrt, and pow with negative exponents.
     */
    var DP = 20,                           // 0 to MAX_DP

        /*
         * The rounding mode used when rounding to the above decimal places.
         *
         * 0 Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
         * 1 To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
         * 2 To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
         * 3 Away from zero.                                  (ROUND_UP)
         */
        RM = 1,                            // 0, 1, 2 or 3

        // The maximum value of DP and Big.DP.
        MAX_DP = 1E6,                      // 0 to 1000000

        // The maximum magnitude of the exponent argument to the pow method.
        MAX_POWER = 1E6,                   // 1 to 1000000

        /*
         * The exponent value at and beneath which toString returns exponential
         * notation.
         * JavaScript's Number type: -7
         * -1000000 is the minimum recommended exponent value of a Big.
         */
        E_NEG = -7,                   // 0 to -1000000

        /*
         * The exponent value at and above which toString returns exponential
         * notation.
         * JavaScript's Number type: 21
         * 1000000 is the maximum recommended exponent value of a Big.
         * (This limit is not enforced or checked.)
         */
        E_POS = 21,                   // 0 to 1000000

/******************************************************************************/

        // The shared prototype object.
        P = {},
        isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Big;


    /*
     * Create and return a Big constructor.
     *
     */
    function bigFactory() {

        /*
         * The Big constructor and exported function.
         * Create and return a new instance of a Big number object.
         *
         * n {number|string|Big} A numeric value.
         */
        function Big(n) {
            var x = this;

            // Enable constructor usage without new.
            if (!(x instanceof Big)) {
                return n === void 0 ? bigFactory() : new Big(n);
            }

            // Duplicate.
            if (n instanceof Big) {
                x.s = n.s;
                x.e = n.e;
                x.c = n.c.slice();
            } else {
                parse(x, n);
            }

            /*
             * Retain a reference to this Big constructor, and shadow
             * Big.prototype.constructor which points to Object.
             */
            x.constructor = Big;
        }

        Big.prototype = P;
        Big.DP = DP;
        Big.RM = RM;
        Big.E_NEG = E_NEG;
        Big.E_POS = E_POS;

        return Big;
    }


    // Private functions


    /*
     * Return a string representing the value of Big x in normal or exponential
     * notation to dp fixed decimal places or significant digits.
     *
     * x {Big} The Big to format.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * toE {number} 1 (toExponential), 2 (toPrecision) or undefined (toFixed).
     */
    function format(x, dp, toE) {
        var Big = x.constructor,

            // The index (normal notation) of the digit that may be rounded up.
            i = dp - (x = new Big(x)).e,
            c = x.c;

        // Round?
        if (c.length > ++dp) {
            rnd(x, i, Big.RM);
        }

        if (!c[0]) {
            ++i;
        } else if (toE) {
            i = dp;

        // toFixed
        } else {
            c = x.c;

            // Recalculate i as x.e may have changed if value rounded up.
            i = x.e + i + 1;
        }

        // Append zeros?
        for (; c.length < i; c.push(0)) {
        }
        i = x.e;

        /*
         * toPrecision returns exponential notation if the number of
         * significant digits specified is less than the number of digits
         * necessary to represent the integer part of the value in normal
         * notation.
         */
        return toE === 1 || toE && (dp <= i || i <= Big.E_NEG) ?

          // Exponential notation.
          (x.s < 0 && c[0] ? '-' : '') +
            (c.length > 1 ? c[0] + '.' + c.join('').slice(1) : c[0]) +
              (i < 0 ? 'e' : 'e+') + i

          // Normal notation.
          : x.toString();
    }


    /*
     * Parse the number or string value passed to a Big constructor.
     *
     * x {Big} A Big number instance.
     * n {number|string} A numeric value.
     */
    function parse(x, n) {
        var e, i, nL;

        // Minus zero?
        if (n === 0 && 1 / n < 0) {
            n = '-0';

        // Ensure n is string and check validity.
        } else if (!isValid.test(n += '')) {
            throwErr(NaN);
        }

        // Determine sign.
        x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

        // Decimal point?
        if ((e = n.indexOf('.')) > -1) {
            n = n.replace('.', '');
        }

        // Exponential form?
        if ((i = n.search(/e/i)) > 0) {

            // Determine exponent.
            if (e < 0) {
                e = i;
            }
            e += +n.slice(i + 1);
            n = n.substring(0, i);

        } else if (e < 0) {

            // Integer.
            e = n.length;
        }

        nL = n.length;

        // Determine leading zeros.
        for (i = 0; i < nL && n.charAt(i) == '0'; i++) {
        }

        if (i == nL) {

            // Zero.
            x.c = [ x.e = 0 ];
        } else {

            // Determine trailing zeros.
            for (; nL > 0 && n.charAt(--nL) == '0';) {
            }

            x.e = e - i - 1;
            x.c = [];

            // Convert string to array of digits without leading/trailing zeros.
            //for (e = 0; i <= nL; x.c[e++] = +n.charAt(i++)) {
            for (; i <= nL; x.c.push(+n.charAt(i++))) {
            }
        }

        return x;
    }


    /*
     * Round Big x to a maximum of dp decimal places using rounding mode rm.
     * Called by div, sqrt and round.
     *
     * x {Big} The Big to round.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
     * [more] {boolean} Whether the result of division was truncated.
     */
    function rnd(x, dp, rm, more) {
        var u,
            xc = x.c,
            i = x.e + dp + 1;

        if (rm === 1) {

            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        } else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
              (more || i < 0 || xc[i + 1] !== u || xc[i - 1] & 1);
        } else if (rm === 3) {
            more = more || xc[i] !== u || i < 0;
        } else {
            more = false;

            if (rm !== 0) {
                throwErr('!Big.RM!');
            }
        }

        if (i < 1 || !xc[0]) {

            if (more) {

                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                x.c = [1];
            } else {

                // Zero.
                x.c = [x.e = 0];
            }
        } else {

            // Remove any digits after the required decimal places.
            xc.length = i--;

            // Round up?
            if (more) {

                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;

                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }

            // Remove trailing zeros.
            for (i = xc.length; !xc[--i]; xc.pop()) {
            }
        }

        return x;
    }


    /*
     * Throw a BigError.
     *
     * message {string} The error message.
     */
    function throwErr(message) {
        var err = new Error(message);
        err.name = 'BigError';

        throw err;
    }


    // Prototype/instance methods


    /*
     * Return a new Big whose value is the absolute value of this Big.
     */
    P.abs = function () {
        var x = new this.constructor(this);
        x.s = 1;

        return x;
    };


    /*
     * Return
     * 1 if the value of this Big is greater than the value of Big y,
     * -1 if the value of this Big is less than the value of Big y, or
     * 0 if they have the same value.
    */
    P.cmp = function (y) {
        var xNeg,
            x = this,
            xc = x.c,
            yc = (y = new x.constructor(y)).c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {
            return !xc[0] ? !yc[0] ? 0 : -j : i;
        }

        // Signs differ?
        if (i != j) {
            return i;
        }
        xNeg = i < 0;

        // Compare exponents.
        if (k != l) {
            return k > l ^ xNeg ? 1 : -1;
        }

        i = -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (; ++i < j;) {

            if (xc[i] != yc[i]) {
                return xc[i] > yc[i] ^ xNeg ? 1 : -1;
            }
        }

        // Compare lengths.
        return k == l ? 0 : k > l ^ xNeg ? 1 : -1;
    };


    /*
     * Return a new Big whose value is the value of this Big divided by the
     * value of Big y, rounded, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     */
    P.div = function (y) {
        var x = this,
            Big = x.constructor,
            // dividend
            dvd = x.c,
            //divisor
            dvs = (y = new Big(y)).c,
            s = x.s == y.s ? 1 : -1,
            dp = Big.DP;

        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!Big.DP!');
        }

        // Either 0?
        if (!dvd[0] || !dvs[0]) {

            // If both are 0, throw NaN
            if (dvd[0] == dvs[0]) {
                throwErr(NaN);
            }

            // If dvs is 0, throw +-Infinity.
            if (!dvs[0]) {
                throwErr(s / 0);
            }

            // dvd is 0, return +-0.
            return new Big(s * 0);
        }

        var dvsL, dvsT, next, cmp, remI, u,
            dvsZ = dvs.slice(),
            dvdI = dvsL = dvs.length,
            dvdL = dvd.length,
            // remainder
            rem = dvd.slice(0, dvsL),
            remL = rem.length,
            // quotient
            q = y,
            qc = q.c = [],
            qi = 0,
            digits = dp + (q.e = x.e - y.e) + 1;

        q.s = s;
        s = digits < 0 ? 0 : digits;

        // Create version of divisor with leading zero.
        dvsZ.unshift(0);

        // Add zeros to make remainder as long as divisor.
        for (; remL++ < dvsL; rem.push(0)) {
        }

        do {

            // 'next' is how many times the divisor goes into current remainder.
            for (next = 0; next < 10; next++) {

                // Compare divisor and remainder.
                if (dvsL != (remL = rem.length)) {
                    cmp = dvsL > remL ? 1 : -1;
                } else {

                    for (remI = -1, cmp = 0; ++remI < dvsL;) {

                        if (dvs[remI] != rem[remI]) {
                            cmp = dvs[remI] > rem[remI] ? 1 : -1;
                            break;
                        }
                    }
                }

                // If divisor < remainder, subtract divisor from remainder.
                if (cmp < 0) {

                    // Remainder can't be more than 1 digit longer than divisor.
                    // Equalise lengths using divisor with extra leading zero?
                    for (dvsT = remL == dvsL ? dvs : dvsZ; remL;) {

                        if (rem[--remL] < dvsT[remL]) {
                            remI = remL;

                            for (; remI && !rem[--remI]; rem[remI] = 9) {
                            }
                            --rem[remI];
                            rem[remL] += 10;
                        }
                        rem[remL] -= dvsT[remL];
                    }
                    for (; !rem[0]; rem.shift()) {
                    }
                } else {
                    break;
                }
            }

            // Add the 'next' digit to the result array.
            qc[qi++] = cmp ? next : ++next;

            // Update the remainder.
            if (rem[0] && cmp) {
                rem[remL] = dvd[dvdI] || 0;
            } else {
                rem = [ dvd[dvdI] ];
            }

        } while ((dvdI++ < dvdL || rem[0] !== u) && s--);

        // Leading zero? Do not remove if result is simply zero (qi == 1).
        if (!qc[0] && qi != 1) {

            // There can't be more than one zero.
            qc.shift();
            q.e--;
        }

        // Round?
        if (qi > digits) {
            rnd(q, dp, Big.RM, rem[0] !== u);
        }

        return q;
    };


    /*
     * Return true if the value of this Big is equal to the value of Big y,
     * otherwise returns false.
     */
    P.eq = function (y) {
        return !this.cmp(y);
    };


    /*
     * Return true if the value of this Big is greater than the value of Big y,
     * otherwise returns false.
     */
    P.gt = function (y) {
        return this.cmp(y) > 0;
    };


    /*
     * Return true if the value of this Big is greater than or equal to the
     * value of Big y, otherwise returns false.
     */
    P.gte = function (y) {
        return this.cmp(y) > -1;
    };


    /*
     * Return true if the value of this Big is less than the value of Big y,
     * otherwise returns false.
     */
    P.lt = function (y) {
        return this.cmp(y) < 0;
    };


    /*
     * Return true if the value of this Big is less than or equal to the value
     * of Big y, otherwise returns false.
     */
    P.lte = function (y) {
         return this.cmp(y) < 1;
    };


    /*
     * Return a new Big whose value is the value of this Big minus the value
     * of Big y.
     */
    P.sub = P.minus = function (y) {
        var i, j, t, xLTy,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.plus(y);
        }

        var xc = x.c.slice(),
            xe = x.e,
            yc = y.c,
            ye = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
        }

        // Determine which is the bigger number.
        // Prepend zeros to equalise exponents.
        if (a = xe - ye) {

            if (xLTy = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }

            t.reverse();
            for (b = a; b--; t.push(0)) {
            }
            t.reverse();
        } else {

            // Exponents equal. Check digit by digit.
            j = ((xLTy = xc.length < yc.length) ? xc : yc).length;

            for (a = b = 0; b < j; b++) {

                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
        }

        // x < y? Point xc to the array of the bigger number.
        if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
        }

        /*
         * Append zeros to xc if shorter. No need to add zeros to yc if shorter
         * as subtraction only needs to start at yc.length.
         */
        if (( b = (j = yc.length) - (i = xc.length) ) > 0) {

            for (; b--; xc[i++] = 0) {
            }
        }

        // Subtract yc from xc.
        for (b = i; j > a;){

            if (xc[--j] < yc[j]) {

                for (i = j; i && !xc[--i]; xc[i] = 9) {
                }
                --xc[i];
                xc[j] += 10;
            }
            xc[j] -= yc[j];
        }

        // Remove trailing zeros.
        for (; xc[--b] === 0; xc.pop()) {
        }

        // Remove leading zeros and adjust exponent accordingly.
        for (; xc[0] === 0;) {
            xc.shift();
            --ye;
        }

        if (!xc[0]) {

            // n - n = +0
            y.s = 1;

            // Result must be zero.
            xc = [ye = 0];
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a new Big whose value is the value of this Big modulo the
     * value of Big y.
     */
    P.mod = function (y) {
        var yGTx,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        if (!y.c[0]) {
            throwErr(NaN);
        }

        x.s = y.s = 1;
        yGTx = y.cmp(x) == 1;
        x.s = a;
        y.s = b;

        if (yGTx) {
            return new Big(x);
        }

        a = Big.DP;
        b = Big.RM;
        Big.DP = Big.RM = 0;
        x = x.div(y);
        Big.DP = a;
        Big.RM = b;

        return this.minus( x.times(y) );
    };


    /*
     * Return a new Big whose value is the value of this Big plus the value
     * of Big y.
     */
    P.add = P.plus = function (y) {
        var t,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.minus(y);
        }

        var xe = x.e,
            xc = x.c,
            ye = y.e,
            yc = y.c;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? y : new Big(xc[0] ? x : a * 0);
        }
        xc = xc.slice();

        // Prepend zeros to equalise exponents.
        // Note: Faster to use reverse then do unshifts.
        if (a = xe - ye) {

            if (a > 0) {
                ye = xe;
                t = yc;
            } else {
                a = -a;
                t = xc;
            }

            t.reverse();
            for (; a--; t.push(0)) {
            }
            t.reverse();
        }

        // Point xc to the longer array.
        if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
        }
        a = yc.length;

        /*
         * Only start adding at yc.length - 1 as the further digits of xc can be
         * left as they are.
         */
        for (b = 0; a;) {
            b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
            xc[a] %= 10;
        }

        // No need to check for zero, as +x + +y != 0 && -x + -y != 0

        if (b) {
            xc.unshift(b);
            ++ye;
        }

         // Remove trailing zeros.
        for (a = xc.length; xc[--a] === 0; xc.pop()) {
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a Big whose value is the value of this Big raised to the power n.
     * If n is negative, round, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     *
     * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
     */
    P.pow = function (n) {
        var x = this,
            one = new x.constructor(1),
            y = one,
            isNeg = n < 0;

        if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
            throwErr('!pow!');
        }

        n = isNeg ? -n : n;

        for (;;) {

            if (n & 1) {
                y = y.times(x);
            }
            n >>= 1;

            if (!n) {
                break;
            }
            x = x.times(x);
        }

        return isNeg ? one.div(y) : y;
    };


    /*
     * Return a new Big whose value is the value of this Big rounded to a
     * maximum of dp decimal places using rounding mode rm.
     * If dp is not specified, round to 0 decimal places.
     * If rm is not specified, use Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     * [rm] 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
     */
    P.round = function (dp, rm) {
        var x = this,
            Big = x.constructor;

        if (dp == null) {
            dp = 0;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!round!');
        }
        rnd(x = new Big(x), dp, rm == null ? Big.RM : rm);

        return x;
    };


    /*
     * Return a new Big whose value is the square root of the value of this Big,
     * rounded, if necessary, to a maximum of Big.DP decimal places using
     * rounding mode Big.RM.
     */
    P.sqrt = function () {
        var estimate, r, approx,
            x = this,
            Big = x.constructor,
            xc = x.c,
            i = x.s,
            e = x.e,
            half = new Big('0.5');

        // Zero?
        if (!xc[0]) {
            return new Big(x);
        }

        // If negative, throw NaN.
        if (i < 0) {
            throwErr(NaN);
        }

        // Estimate.
        i = Math.sqrt(x.toString());

        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the result exponent.
        if (i === 0 || i === 1 / 0) {
            estimate = xc.join('');

            if (!(estimate.length + e & 1)) {
                estimate += '0';
            }

            r = new Big( Math.sqrt(estimate).toString() );
            r.e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        } else {
            r = new Big(i.toString());
        }

        i = r.e + (Big.DP += 4);

        // Newton-Raphson iteration.
        do {
            approx = r;
            r = half.times( approx.plus( x.div(approx) ) );
        } while ( approx.c.slice(0, i).join('') !==
                       r.c.slice(0, i).join('') );

        rnd(r, Big.DP -= 4, Big.RM);

        return r;
    };


    /*
     * Return a new Big whose value is the value of this Big times the value of
     * Big y.
     */
    P.mul = P.times = function (y) {
        var c,
            x = this,
            Big = x.constructor,
            xc = x.c,
            yc = (y = new Big(y)).c,
            a = xc.length,
            b = yc.length,
            i = x.e,
            j = y.e;

        // Determine sign of result.
        y.s = x.s == y.s ? 1 : -1;

        // Return signed 0 if either 0.
        if (!xc[0] || !yc[0]) {
            return new Big(y.s * 0);
        }

        // Initialise exponent of result as x.e + y.e.
        y.e = i + j;

        // If array xc has fewer digits than yc, swap xc and yc, and lengths.
        if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
        }

        // Initialise coefficient array of result with zeros.
        for (c = new Array(j = a + b); j--; c[j] = 0) {
        }

        // Multiply.

        // i is initially xc.length.
        for (i = b; i--;) {
            b = 0;

            // a is yc.length.
            for (j = a + i; j > i;) {

                // Current sum of products at this digit position, plus carry.
                b = c[j] + yc[i] * xc[j - i - 1] + b;
                c[j--] = b % 10;

                // carry
                b = b / 10 | 0;
            }
            c[j] = (c[j] + b) % 10;
        }

        // Increment result exponent if there is a final carry.
        if (b) {
            ++y.e;
        }

        // Remove any leading zero.
        if (!c[0]) {
            c.shift();
        }

        // Remove trailing zeros.
        for (i = c.length; !c[--i]; c.pop()) {
        }
        y.c = c;

        return y;
    };


    /*
     * Return a string representing the value of this Big.
     * Return exponential notation if this Big has a positive exponent equal to
     * or greater than Big.E_POS, or a negative exponent equal to or less than
     * Big.E_NEG.
     */
    P.toString = P.valueOf = P.toJSON = function () {
        var x = this,
            Big = x.constructor,
            e = x.e,
            str = x.c.join(''),
            strL = str.length;

        // Exponential notation?
        if (e <= Big.E_NEG || e >= Big.E_POS) {
            str = str.charAt(0) + (strL > 1 ? '.' + str.slice(1) : '') +
              (e < 0 ? 'e' : 'e+') + e;

        // Negative exponent?
        } else if (e < 0) {

            // Prepend zeros.
            for (; ++e; str = '0' + str) {
            }
            str = '0.' + str;

        // Positive exponent?
        } else if (e > 0) {

            if (++e > strL) {

                // Append zeros.
                for (e -= strL; e-- ; str += '0') {
                }
            } else if (e < strL) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }

        // Exponent zero.
        } else if (strL > 1) {
            str = str.charAt(0) + '.' + str.slice(1);
        }

        // Avoid '-0'
        return x.s < 0 && x.c[0] ? '-' + str : str;
    };


    /*
     ***************************************************************************
     * If toExponential, toFixed, toPrecision and format are not required they
     * can safely be commented-out or deleted. No redundant code will be left.
     * format is used only by toExponential, toFixed and toPrecision.
     ***************************************************************************
     */


    /*
     * Return a string representing the value of this Big in exponential
     * notation to dp fixed decimal places and rounded, if necessary, using
     * Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toExponential = function (dp) {

        if (dp == null) {
            dp = this.c.length - 1;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!toExp!');
        }

        return format(this, dp, 1);
    };


    /*
     * Return a string representing the value of this Big in normal notation
     * to dp fixed decimal places and rounded, if necessary, using Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toFixed = function (dp) {
        var str,
            x = this,
            Big = x.constructor,
            neg = Big.E_NEG,
            pos = Big.E_POS;

        // Prevent the possibility of exponential notation.
        Big.E_NEG = -(Big.E_POS = 1 / 0);

        if (dp == null) {
            str = x.toString();
        } else if (dp === ~~dp && dp >= 0 && dp <= MAX_DP) {
            str = format(x, x.e + dp);

            // (-0).toFixed() is '0', but (-0.1).toFixed() is '-0'.
            // (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
            if (x.s < 0 && x.c[0] && str.indexOf('-') < 0) {
        //E.g. -0.5 if rounded to -0 will cause toString to omit the minus sign.
                str = '-' + str;
            }
        }
        Big.E_NEG = neg;
        Big.E_POS = pos;

        if (!str) {
            throwErr('!toFix!');
        }

        return str;
    };


    /*
     * Return a string representing the value of this Big rounded to sd
     * significant digits using Big.RM. Use exponential notation if sd is less
     * than the number of digits necessary to represent the integer part of the
     * value in normal notation.
     *
     * sd {number} Integer, 1 to MAX_DP inclusive.
     */
    P.toPrecision = function (sd) {

        if (sd == null) {
            return this.toString();
        } else if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throwErr('!toPre!');
        }

        return format(this, sd - 1, 2);
    };


    // Export


    Big = bigFactory();

    //AMD.
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return Big;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // Node and other CommonJS-like environments that support module.exports.
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Big;
        module.exports.Big = Big;

    //Browser.
    } else {
        global.Big = Big;
    }
})(this);


/***/ }),

/***/ "JKfI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _icon = __webpack_require__("hArn");

var _icon2 = _interopRequireDefault(_icon);

var _datetimepicker = __webpack_require__("5KR3");

var _datetimepicker2 = _interopRequireDefault(_datetimepicker);

var _group = __webpack_require__("CKVb");

var _group2 = _interopRequireDefault(_group);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _uuid = __webpack_require__("fqpJ");

var _uuid2 = _interopRequireDefault(_uuid);

var _format2 = __webpack_require__("Hpey");

var _format3 = _interopRequireDefault(_format2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'datetime',
  mixins: [_uuid2.default],
  components: {
    Group: _group2.default,
    InlineDesc: _inlineDesc2.default,
    Icon: _icon2.default
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
      validator: function validator(val) {
        if (false) {
          return console.error('[VUX] Datetime prop:format 使用 A 时只允许的值为： YYYY-MM-DD A');
        }
        return true;
      }
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: {
      type: String,
      validator: function validator(val) {
        if (false) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    endDate: {
      type: String,
      validator: function validator(val) {
        if (false) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式');
        }
        return val ? val.length === 10 : true;
      }
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function,
    orderMap: Object
  },
  created: function created() {
    this.isFirstSetValue = false;
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {}
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    var uuid = this.uuid;
    this.$el.setAttribute('id', 'vux-datetime-' + uuid);
    if (!this.readonly) {
      this.$nextTick(function () {
        _this2.render();

        if (_this2.show) {
          _this2.$nextTick(function () {
            _this2.picker && _this2.picker.show(_this2.currentValue);
          });
        }
      });
    }
  },

  computed: {
    styles: function styles() {
      if (!this.$parent) {
        return {};
      }
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    pickerOptions: function pickerOptions() {
      var _this = this;
      var options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        orderMap: this.orderMap || {},
        onSelect: function onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue);
            _this.$emit('on-change', wholeValue);
          }
        },
        onConfirm: function onConfirm(value) {
          _this.currentValue = value;
        },
        onClear: function onClear(value) {
          _this.$emit('on-clear', value);
        },
        onHide: function onHide(type) {
          _this.currentShow = false;
          _this.$emit('update:show', false);
          _this.validate();
          _this.$emit('on-hide', type);
          if (type === 'cancel') {
            _this.$emit('on-cancel');
          }
          if (type === 'confirm') {
            setTimeout(function () {
              _this.$nextTick(function () {
                _this.$emit('on-confirm', _this.value);
              });
            });
          }
        },
        onShow: function onShow() {
          _this.currentShow = true;
          _this.$emit('update:show', true);
          _this.$emit('on-show');
        }
      };
      if (this.minYear) {
        options.minYear = this.minYear;
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear;
      }
      return options;
    },
    firstError: function firstError() {
      var key = (0, _keys2.default)(this.errors)[0];
      return this.errors[key];
    },
    labelClass: function labelClass() {
      if (!this.$parent) {
        return {};
      }
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    getButtonText: function getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText;
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText;
      }
      return this.$el.getAttribute('data-' + type + '-text');
    },
    render: function render() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.picker && _this3.picker.destroy();
        _this3.picker = new _datetimepicker2.default(_this3.pickerOptions);
      });
    },
    validate: function validate() {
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填';
        return;
      }
      this.valid = true;
      this.errors = {};
    }
  },
  watch: {
    readonly: function readonly(val) {
      if (val) {
        this.picker && this.picker.destroy();
      } else {
        this.render();
      }
    },
    show: function show(val) {
      if (val === this.currentShow) return;
      if (val) {
        this.picker && this.picker.show(this.currentValue);
      } else {
        this.picker && this.picker.hide(this.currentValue);
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true;
        oldVal && this.$emit('on-change', val);
      } else {
        this.$emit('on-change', val);
      }
      this.validate();
    },
    startDate: function startDate() {
      this.render();
    },
    endDate: function endDate() {
      this.render();
    },
    format: function format(val) {
      if (this.currentValue) {
        this.currentValue = (0, _format3.default)(this.currentValue, val);
      }
      this.render();
    },
    value: function value(val) {
      if (this.readonly || this.picker && this.picker.config.renderInline) {
        this.currentValue = val;
        return;
      }
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.render();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.picker && this.picker.destroy();
  }
};

/***/ }),

/***/ "JRhT":
/***/ (function(module, exports) {

module.exports = function (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = xs[i];
        if (hasOwn.call(xs, i)) res.push(f(x, i, xs));
    }
    return res;
};

var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),

/***/ "K07r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell"},[_c('div',[_c('p',{class:_vm.labelClass,style:({width: _vm.$parent.labelWidth, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),domProps:{"innerHTML":_vm._s(_vm.title)}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.readonly),expression:"!readonly"}],staticClass:"weui-cell__ft vux-cell-primary",class:{'vux-number-round': _vm.buttonStyle === 'round'},staticStyle:{"font-size":"0"}},[_c('div',{style:({float:_vm.align})},[_c('a',{staticClass:"vux-number-selector vux-number-selector-sub",class:{'vux-number-disabled':_vm.disabledMin},on:{"click":_vm.sub}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18"}},[_c('defs'),_c('path',{attrs:{"d":"M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"}})])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentValue),expression:"currentValue",modifiers:{"number":true}}],staticClass:"vux-number-input",style:({width: _vm.width}),attrs:{"name":_vm.name,"readonly":!_vm.fillable,"pattern":"[0-9]*","type":"number"},domProps:{"value":(_vm.currentValue)},on:{"blur":[_vm.blur,function($event){_vm.$forceUpdate()}],"input":function($event){if($event.target.composing){ return; }_vm.currentValue=_vm._n($event.target.value)}}}),_vm._v(" "),_c('a',{staticClass:"vux-number-selector vux-number-selector-plus",class:{'vux-number-disabled':_vm.disabledMax},on:{"click":_vm.add}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"20","height":"20"}},[_c('defs'),_c('path',{attrs:{"d":"M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"}})])])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.readonly),expression:"readonly"}],staticClass:"weui-cell__ft vux-cell-primary"},[_vm._v("\n    "+_vm._s(_vm.value)+"\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "K1sU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KJvo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _cleanStyle = __webpack_require__("n9nh");

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-switch',
  components: {
    InlineDesc: _inlineDesc2.default
  },
  computed: {
    labelStyle: function labelStyle() {
      var isHTML = /<\/?[^>]*>/.test(this.title);
      var width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + 'em';
      return (0, _cleanStyle2.default)({
        display: 'block',
        width: this.$parent.labelWidth || width,
        textAlign: this.$parent.labelAlign
      });
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent && this.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('on-click', !this.currentValue, this.currentValue);
    },
    toBoolean: function toBoolean(val) {
      if (!this.valueMap) {
        return val;
      } else {
        var index = this.valueMap.indexOf(val);
        return index === 1;
      }
    },
    toRaw: function toRaw(val) {
      if (!this.valueMap) {
        return val;
      } else {
        return this.valueMap[val ? 1 : 0];
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean,
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    inlineDesc: [String, Boolean, Number],
    preventDefault: Boolean,
    valueMap: {
      type: Array,
      default: function _default() {
        return [false, true];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.toBoolean(this.value)
    };
  },

  watch: {
    currentValue: function currentValue(val) {
      var rawValue = this.toRaw(val);
      this.$emit('input', rawValue);
      this.$emit('on-change', rawValue);
    },
    value: function value(val) {
      this.currentValue = this.toBoolean(val);
    }
  }
};

/***/ }),

/***/ "KTwD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passiveSupported = false;

try {
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveSupported = true;
    }
  });
  window.addEventListener('test', null, options);
} catch (err) {}

module.exports = passiveSupported;

/***/ }),

/***/ "LW84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "NVmo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"vux-datetime weui-cell",class:{'weui-cell_access': !_vm.readonly},attrs:{"data-cancel-text":'取消',"data-confirm-text":'确定',"href":"javascript:"}},[_vm._t("default",[_c('div',[_vm._t("title",[_c('p',{class:_vm.labelClass,style:(_vm.styles),domProps:{"innerHTML":_vm._s(_vm.title)}})]),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft vux-cell-primary vux-datetime-value",style:({
        textAlign: _vm.valueTextAlign
      })},[(!_vm.currentValue && _vm.placeholder)?_c('span',{staticClass:"vux-cell-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e(),_vm._v(" "),(_vm.currentValue)?_c('span',{staticClass:"vux-cell-value"},[_vm._v(_vm._s(_vm.displayFormat ? _vm.displayFormat(_vm.currentValue) : _vm.currentValue))]):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.valid),expression:"!valid"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":_vm.firstError}})],1)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "OnoB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'group-title'
};

/***/ }),

/***/ "Q80G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _name2value = __webpack_require__("QGPF");

var _name2value2 = _interopRequireDefault(_name2value);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _popupPicker = __webpack_require__("o+C2");

var _popupPicker2 = _interopRequireDefault(_popupPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-address',
  components: {
    PopupPicker: _popupPicker2.default
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rawValue: Boolean,
    list: {
      type: Array,
      required: true
    },
    labelWidth: String,
    inlineDesc: String,
    placeholder: String,
    hideDistrict: Boolean,
    valueTextAlign: String,
    confirmText: String,
    cancelText: String,
    displayFormat: {
      type: Function,
      default: function _default(val, names) {
        return names;
      }
    },
    popupStyle: Object,
    popupTitle: String,
    show: Boolean,
    disabled: Boolean
  },
  created: function created() {
    if (this.currentValue.length && this.rawValue) {
      var parsedVal = (0, _name2value2.default)(this.currentValue, this.list);
      if (/__/.test(parsedVal)) {
        console.error('[VUX] Wrong address value', this.currentValue);
        this.currentValue = [];
      } else {
        this.currentValue = parsedVal.split(' ');
      }
    }
    if (this.show) {
      this.showValue = true;
    }
  },

  methods: {
    emitHide: function emitHide(val) {
      this.$emit('on-hide', val);
    },
    getAddressName: function getAddressName() {
      return (0, _value2name2.default)(this.value, this.list);
    },
    onShadowChange: function onShadowChange(ids, names) {
      this.$emit('on-shadow-change', ids, names);
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      showValue: false
    };
  },

  computed: {
    nameValue: function nameValue() {
      return (0, _value2name2.default)(this.currentValue, this.list);
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (val.length && !/\d+/.test(val[0])) {
        var id = (0, _name2value2.default)(val, this.list).split(' ');
        if (id[0] !== '__' && id[1] !== '__') {
          this.currentValue = id;
          return;
        }
      }
      this.currentValue = val;
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  }
};

/***/ }),

/***/ "QGPF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, list) {
  var rs = (0, _arrayMap2.default)(name, function (one, index) {
    var parent = '';
    if (index === 2) {
      parent = (0, _arrayFind2.default)(list, function (item) {
        return item.name === name[1];
      }) || { value: '__' };

      if (specialMap[name[0]]) {
        parent = {
          value: specialMap[name[0]]
        };
      }
      return (0, _arrayFind2.default)(list, function (item) {
        return item.name === one && item.parent === parent.value;
      });
    } else {
      if (index === 1 && specialMap[name[0]]) {
        return {
          value: specialMap[name[0]]
        };
      }
      return (0, _arrayFind2.default)(list, function (item) {
        return item.name === one;
      });
    }
  });

  return (0, _arrayMap2.default)(rs, function (one) {
    return one ? one.value : '__';
  }).join(' ');
};

var _arrayMap = __webpack_require__("JRhT");

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _arrayFind = __webpack_require__("qZvt");

var _arrayFind2 = _interopRequireDefault(_arrayFind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var specialMap = {
  '北京市': '110100',
  '天津市': '120100',
  '上海市': '310100',
  '重庆市': '500100'
};

/***/ }),

/***/ "QgQO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexboxItem = exports.Flexbox = undefined;

var _flexbox = __webpack_require__("5CvF");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _flexboxItem = __webpack_require__("4rfY");

var _flexboxItem2 = _interopRequireDefault(_flexboxItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Flexbox = _flexbox2.default;
exports.FlexboxItem = _flexboxItem2.default;

/***/ }),

/***/ "R7kJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var time = Date.now || function () {
  return +new Date();
};

var running = {};
var counter = 1;
var desiredFrames = 60;
var millisecondsPerSecond = 1000;

if (typeof window !== 'undefined') {
  ;(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
  })();
}

module.exports = {
  requestAnimationFrame: function () {
    if (typeof window !== 'undefined') {
      var requestFrame = window.requestAnimationFrame;
      return function (callback, root) {
        requestFrame(callback, root);
      };
    }
  }(),

  stop: function stop(id) {
    var cleared = running[id] != null;
    if (cleared) {
      running[id] = null;
    }
    return cleared;
  },
  isRunning: function isRunning(id) {
    return running[id] != null;
  },
  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
    var _this = this;
    var start = time();
    var lastFrame = start;
    var percent = 0;
    var dropCounter = 0;
    var id = counter++;

    if (!root) {
      root = document.body;
    }

    if (id % 20 === 0) {
      var newRunning = {};
      for (var usedId in running) {
        newRunning[usedId] = true;
      }
      running = newRunning;
    }

    var step = function step(virtual) {
      var render = virtual !== true;

      var now = time();

      if (!running[id] || verifyCallback && !verifyCallback(id)) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
        return;
      }

      if (render) {
        var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true);
          dropCounter++;
        }
      }

      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      var value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
      } else if (render) {
        lastFrame = now;
        _this.requestAnimationFrame(step, root);
      }
    };

    running[id] = true;

    _this.requestAnimationFrame(step, root);

    return id;
  }
};

/***/ }),

/***/ "Raok":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

var _arrayFind = __webpack_require__("qZvt");

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _uuid = __webpack_require__("fqpJ");

var _uuid2 = _interopRequireDefault(_uuid);

var _cleanStyle = __webpack_require__("n9nh");

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findByKey = function findByKey(key, options) {
  var _rs = (0, _arrayFind2.default)(options, function (item) {
    return item.key === key;
  });
  return _rs ? _rs.value : key;
};

exports.default = {
  name: 'selector',
  mixins: [_uuid2.default],
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value;
    }
  },
  beforeMount: function beforeMount() {
    this.isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
  },

  computed: {
    fixIos: function fixIos() {
      return !this.placeholder && this.isEmptyValue(this.value) && this.isIOS && this.title;
    },
    color: function color() {
      return this.showPlaceholder ? '#A9A9A9' : '';
    },
    processOptions: function processOptions() {
      var _this = this;

      if (!this.options.length) {
        return [];
      }

      var isObject = (0, _typeof3.default)(this.options[0]) === 'object';

      if (isObject && !this.valueMap) {
        return this.options;
      }

      if (isObject && this.valueMap) {
        return this.options.map(function (item) {
          return {
            key: item[_this.valueMap[0]],
            value: item[_this.valueMap[1]]
          };
        });
      }

      return this.options.map(function (item) {
        return {
          key: item,
          value: item
        };
      });
    },
    showPlaceholder: function showPlaceholder() {
      if (this.isEmptyValue(this.value) && this.placeholder) {
        return true;
      }
      return false;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    isEmptyValue: function isEmptyValue(val) {
      return typeof val === 'undefined' || val === '' || val === null;
    },

    cleanStyle: _cleanStyle2.default,
    getFullValue: function getFullValue() {
      var _this2 = this;

      if (!this.value) {
        return null;
      }
      if (!this.options.length) {
        return null;
      }
      if ((0, _typeof3.default)(this.options[0]) !== 'object') {
        return this.value;
      } else {
        if (!this.valueMap) {
          return this.options.filter(function (one) {
            return one.key === _this2.value;
          });
        } else {
          return this.options.filter(function (one) {
            return one[_this2.valueMap[0]] === _this2.value;
          });
        }
      }
    }
  },
  filters: {
    findByKey: findByKey
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    }
  },
  props: {
    title: String,
    direction: String,
    options: {
      type: Array,
      required: true
    },
    name: String,
    placeholder: String,
    readonly: Boolean,
    value: [String, Number, Object, Boolean],
    valueMap: {
      type: Array,
      validator: function validator(val) {
        if (!val.length || val.length !== 2) {
          if (false) {
            console.error('[VUX error] selector prop:valueMap\'s length should be 2');
          }
          return false;
        }
        return true;
      }
    }
  },
  data: function data() {
    return {
      currentValue: '',
      isIOS: false
    };
  }
};

/***/ }),

/***/ "S9nr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("JKfI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("2vBl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_01c14866_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("NVmo");
function injectStyle (ssrContext) {
  __webpack_require__("BRVP")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_01c14866_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SNYt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (!value) {
    return false;
  }
  return Object.prototype.toString.call(value) === '[object Array]';
};

/***/ }),

/***/ "TlQ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-cell-box"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCell),expression:"showCell"}],staticClass:"weui-cell vux-tap-active",class:{'weui-cell_access': !_vm.disabled},on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("title",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:(_vm.labelStyles),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e()],{labelClass:"weui-label",labelStyle:_vm.labelStyles,labelTitle:_vm.title}),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-primary vux-popup-picker-select-box"},[_c('div',{staticClass:"vux-popup-picker-select",style:({textAlign: _vm.valueTextAlign})},[(!_vm.displayFormat && !_vm.showName && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm._f("array2string")(_vm.value)))]):_vm._e(),_vm._v(" "),(!_vm.displayFormat && _vm.showName && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm._f("value2name")(_vm.value,_vm.data)))]):_vm._e(),_vm._v(" "),(_vm.displayFormat && _vm.value.length)?_c('span',{staticClass:"vux-popup-picker-value vux-cell-value"},[_vm._v(_vm._s(_vm.displayFormat(_vm.value, _vm.value2name(_vm.value, _vm.data))))]):_vm._e(),_vm._v(" "),(!_vm.value.length && _vm.placeholder)?_c('span',{staticClass:"vux-popup-picker-placeholder vux-cell-placeholder",domProps:{"textContent":_vm._s(_vm.placeholder)}}):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"})]),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:(_vm.isTransferDom),expression:"isTransferDom"}]},[_c('popup',{staticClass:"vux-popup-picker",attrs:{"id":("vux-popup-picker-" + _vm.uuid),"popup-style":_vm.popupStyle},on:{"on-hide":_vm.onPopupHide,"on-show":_vm.onPopupShow},model:{value:(_vm.showValue),callback:function ($$v) {_vm.showValue=$$v},expression:"showValue"}},[_c('div',{staticClass:"vux-popup-picker-container"},[_c('popup-header',{attrs:{"left-text":_vm.cancelText || '取消',"right-text":_vm.confirmText || '完成',"title":_vm.popupTitle},on:{"on-click-left":function($event){_vm.onHide(false)},"on-click-right":function($event){_vm.onHide(true)}}}),_vm._v(" "),_c('picker',{attrs:{"data":_vm.data,"columns":_vm.columns,"fixed-columns":_vm.fixedColumns,"container":'#vux-popup-picker-'+_vm.uuid,"column-width":_vm.columnWidth},on:{"on-change":_vm.onPickerChange},model:{value:(_vm.tempValue),callback:function ($$v) {_vm.tempValue=$$v},expression:"tempValue"}})],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UGaa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__("LW84");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__("rWoo");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "UdYw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("eu68");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("EUJi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_53ddc194_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("dSiS");
function injectStyle (ssrContext) {
  __webpack_require__("EijJ")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_53ddc194_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "WSuk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _base = __webpack_require__("qWCq");

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__("hArn");

var _icon2 = _interopRequireDefault(_icon);

var _toast = __webpack_require__("f4gh");

var _toast2 = _interopRequireDefault(_toast);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _isEmail = __webpack_require__("Bv05");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isMobilePhone = __webpack_require__("BzUK");

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _debounce = __webpack_require__("1m2e");

var _debounce2 = _interopRequireDefault(_debounce);

var _vanillaMasker = __webpack_require__("IFIB");

var _vanillaMasker2 = _interopRequireDefault(_vanillaMasker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  'email': {
    fn: _isEmail2.default,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn: function fn(str) {
      return (0, _isMobilePhone2.default)(str, 'zh-CN');
    },

    msg: '手机号码'
  },
  'china-name': {
    fn: function fn(str) {
      return str.length >= 2 && str.length <= 6;
    },

    msg: '中文姓名'
  }
};
exports.default = {
  name: 'x-input',
  created: function created() {
    var _this = this;

    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;

    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = (0, _debounce2.default)(function () {
        _this.$emit('on-change', _this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },

  mixins: [_base2.default],
  components: {
    Icon: _icon2.default,
    InlineDesc: _inlineDesc2.default,
    Toast: _toast2.default
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,

    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern: function pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed: function labelWidthComputed() {
      var width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors: function hasErrors() {
      return (0, _keys2.default)(this.errors).length > 0;
    },
    inputStyle: function inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn: function showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },

  methods: {
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (/iphone/i.test(navigator.userAgent)) {}
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        setTimeout(function () {
          _this2.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon: function onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue: function maskValue(val) {
      var val1 = this.mask ? _vanillaMasker2.default.toPattern(val, this.mask) : val;
      return val1;
    },
    reset: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear: function clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focusHandler: function focusHandler($event) {
      var _this3 = this;

      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;

      setTimeout(function () {
        _this3.$refs.input.scrollIntoViewIfNeeded(false);
      }, 1000);
    },
    onBlur: function onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError: function getError() {
      var key = (0, _keys2.default)(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate: function validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        var validator = validators[this.isType];
        if (validator) {
          var value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        var validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = '\u6700\u5C11\u5E94\u8BE5\u8F93\u5165' + this.min + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = '\u6700\u591A\u53EF\u4EE5\u8F93\u5165' + this.max + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual: function validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      var willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;

      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    _getInputMaskSelection: function _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        var maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data: function data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },

  watch: {
    mask: function mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid: function valid() {
      this.getError();
    },
    value: function value(val) {
      this.currentValue = val;
    },
    equalWith: function equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue: function currentValue(newVal, oldVal) {
      var _this4 = this;

      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      var selection = this.$refs.input.selectionStart;
      var direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));

      this.$nextTick(function () {
        if (_this4.$refs.input.selectionStart !== selection) {
          _this4.$refs.input.selectionStart = selection;
          _this4.$refs.input.selectionEnd = selection;
        }
        if (_this4.currentValue !== _this4.maskValue(newVal)) {
          _this4.currentValue = _this4.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
};

/***/ }),

/***/ "WuUI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wz8g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var Big = __webpack_require__("JCi3");
exports.default = {
  name: 'x-number',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator: function validator(value) {
        if (typeof value === 'number') {
          return true;
        } else if (typeof value === 'string') {
          return value === '';
        }
        return false;
      },

      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created: function created() {
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentValue: 0
    };
  },

  computed: {
    disabledMin: function disabledMin() {
      return typeof this.min === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue <= this.min;
    },
    disabledMax: function disabledMax() {
      return typeof this.max === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue >= this.max;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(newValue, old) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min;
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max;
        }
      }
      this.$emit('input', this.currentValue);
    },
    value: function value(newValue) {
      this.currentValue = newValue;
      this.$emit('on-change', newValue);
    }
  },
  methods: {
    add: function add() {
      if (!this.disabledMax) {
        var x = new Big(this.currentValue);
        this.currentValue = x.plus(this.step) * 1;
      }
    },
    sub: function sub() {
      if (!this.disabledMin) {
        var x = new Big(this.currentValue);
        this.currentValue = x.minus(this.step) * 1;
      }
    },
    blur: function blur() {
      if (this.currentValue === '') {
        this.currentValue = 0;
      }
    }
  }
};

/***/ }),

/***/ "XvmL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className: function className() {
      return 'weui-icon weui_icon_' + this.type + ' weui-icon-' + this.type.replace(/_/g, '-');
    }
  }
};

/***/ }),

/***/ "ZE3Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZcFQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("1xA6");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("CKVb");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("gpPJ");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("fvyU");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("CGiF");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("o+C2");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("S9nr");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("EcBO");

var _index18 = _interopRequireDefault(_index17);

var _china_address = __webpack_require__("dyEy");

var _china_address2 = _interopRequireDefault(_china_address);

var _index19 = __webpack_require__("vxcK");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("RAwi");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("4s6/");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("i46f");

var _index26 = _interopRequireDefault(_index25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "EvenBus测试",
  components: {
    XHeader: _index2.default,
    Group: _index6.default,
    GroupTitle: _index4.default,
    Cell: _index8.default,
    XInput: _index10.default,
    Selector: _index12.default,
    PopupPicker: _index14.default,
    XAddress: _index20.default,
    Datetime: _index16.default,
    XNumber: _index18.default,
    XTextarea: _index22.default,
    XSwitch: _index24.default,
    ViewBox: _index26.default
  },
  data: function data() {
    return {
      addressValue: ["广东省", "深圳市", "南山区"],
      value1: "张三",
      value2: "工艺技术",
      value3: "",
      value7: "",
      value8: "",
      value4: "",
      time1: "2017-06-01",
      value5: ["A"],
      value6: [],
      list: [["A", "B", "C"]],
      numberValue: 0
    };
  },

  methods: {}
};

/***/ }),

/***/ "bBgq":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("9AUj")))

/***/ }),

/***/ "brzN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bwqk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'view-box',
  props: ['bodyPaddingTop', 'bodyPaddingBottom'],
  methods: {
    scrollTo: function scrollTo(top) {
      this.$refs.viewBoxBody.scrollTop = top;
    },
    getScrollTop: function getScrollTop() {
      return this.$refs.viewBoxBody.scrollTop;
    },
    getScrollBody: function getScrollBody() {
      return this.$refs.viewBoxBody;
    }
  }
};

/***/ }),

/***/ "cTn1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("thvO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("soxc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c341cd64_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("80lz");
function injectStyle (ssrContext) {
  __webpack_require__("vDCO")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c341cd64_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dSiS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-picker"},[_c('flexbox',{attrs:{"gutter":0}},_vm._l((_vm.currentData),function(one,index){return _c('flexbox-item',{key:index,staticStyle:{"margin-left":"0"},attrs:{"span":_vm.columnWidth && _vm.columnWidth[index]}},[_c('div',{staticClass:"vux-picker-item",attrs:{"id":("vux-picker-" + _vm.uuid + "-" + index)}})])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dvdu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dyEy":
/***/ (function(module, exports) {

module.exports = [{"name":"北京市","value":"110000"},{"name":"天津市","value":"120000"},{"name":"河北省","value":"130000"},{"name":"山西省","value":"140000"},{"name":"内蒙古自治区","value":"150000"},{"name":"辽宁省","value":"210000"},{"name":"吉林省","value":"220000"},{"name":"黑龙江省","value":"230000"},{"name":"上海市","value":"310000"},{"name":"江苏省","value":"320000"},{"name":"浙江省","value":"330000"},{"name":"安徽省","value":"340000"},{"name":"福建省","value":"350000"},{"name":"江西省","value":"360000"},{"name":"山东省","value":"370000"},{"name":"河南省","value":"410000"},{"name":"湖北省","value":"420000"},{"name":"湖南省","value":"430000"},{"name":"广东省","value":"440000"},{"name":"广西壮族自治区","value":"450000"},{"name":"海南省","value":"460000"},{"name":"重庆市","value":"500000"},{"name":"四川省","value":"510000"},{"name":"贵州省","value":"520000"},{"name":"云南省","value":"530000"},{"name":"西藏自治区","value":"540000"},{"name":"陕西省","value":"610000"},{"name":"甘肃省","value":"620000"},{"name":"青海省","value":"630000"},{"name":"宁夏回族自治区","value":"640000"},{"name":"新疆维吾尔自治区","value":"650000"},{"name":"市辖区","value":"110100","parent":"110000"},{"name":"东城区","value":"110101","parent":"110100"},{"name":"西城区","value":"110102","parent":"110100"},{"name":"朝阳区","value":"110105","parent":"110100"},{"name":"丰台区","value":"110106","parent":"110100"},{"name":"石景山区","value":"110107","parent":"110100"},{"name":"海淀区","value":"110108","parent":"110100"},{"name":"门头沟区","value":"110109","parent":"110100"},{"name":"房山区","value":"110111","parent":"110100"},{"name":"通州区","value":"110112","parent":"110100"},{"name":"顺义区","value":"110113","parent":"110100"},{"name":"昌平区","value":"110114","parent":"110100"},{"name":"大兴区","value":"110115","parent":"110100"},{"name":"怀柔区","value":"110116","parent":"110100"},{"name":"平谷区","value":"110117","parent":"110100"},{"name":"密云县","value":"110228","parent":"110100"},{"name":"延庆县","value":"110229","parent":"110100"},{"name":"市辖区","value":"120100","parent":"120000"},{"name":"和平区","value":"120101","parent":"120100"},{"name":"河东区","value":"120102","parent":"120100"},{"name":"河西区","value":"120103","parent":"120100"},{"name":"南开区","value":"120104","parent":"120100"},{"name":"河北区","value":"120105","parent":"120100"},{"name":"红桥区","value":"120106","parent":"120100"},{"name":"东丽区","value":"120110","parent":"120100"},{"name":"西青区","value":"120111","parent":"120100"},{"name":"津南区","value":"120112","parent":"120100"},{"name":"北辰区","value":"120113","parent":"120100"},{"name":"武清区","value":"120114","parent":"120100"},{"name":"宝坻区","value":"120115","parent":"120100"},{"name":"滨海新区","value":"120116","parent":"120100"},{"name":"宁河区","value":"120117","parent":"120100"},{"name":"静海区","value":"120118","parent":"120100"},{"name":"蓟县","value":"120225","parent":"120100"},{"name":"石家庄市","value":"130100","parent":"130000"},{"name":"唐山市","value":"130200","parent":"130000"},{"name":"秦皇岛市","value":"130300","parent":"130000"},{"name":"邯郸市","value":"130400","parent":"130000"},{"name":"邢台市","value":"130500","parent":"130000"},{"name":"保定市","value":"130600","parent":"130000"},{"name":"张家口市","value":"130700","parent":"130000"},{"name":"承德市","value":"130800","parent":"130000"},{"name":"沧州市","value":"130900","parent":"130000"},{"name":"廊坊市","value":"131000","parent":"130000"},{"name":"衡水市","value":"131100","parent":"130000"},{"name":"定州市","value":"139001","parent":"130000"},{"name":"辛集市","value":"139002","parent":"130000"},{"name":"长安区","value":"130102","parent":"130100"},{"name":"桥西区","value":"130104","parent":"130100"},{"name":"新华区","value":"130105","parent":"130100"},{"name":"井陉矿区","value":"130107","parent":"130100"},{"name":"裕华区","value":"130108","parent":"130100"},{"name":"藁城区","value":"130109","parent":"130100"},{"name":"鹿泉区","value":"130110","parent":"130100"},{"name":"栾城区","value":"130111","parent":"130100"},{"name":"井陉县","value":"130121","parent":"130100"},{"name":"正定县","value":"130123","parent":"130100"},{"name":"行唐县","value":"130125","parent":"130100"},{"name":"灵寿县","value":"130126","parent":"130100"},{"name":"高邑县","value":"130127","parent":"130100"},{"name":"深泽县","value":"130128","parent":"130100"},{"name":"赞皇县","value":"130129","parent":"130100"},{"name":"无极县","value":"130130","parent":"130100"},{"name":"平山县","value":"130131","parent":"130100"},{"name":"元氏县","value":"130132","parent":"130100"},{"name":"赵县","value":"130133","parent":"130100"},{"name":"晋州市","value":"130183","parent":"130100"},{"name":"新乐市","value":"130184","parent":"130100"},{"name":"路南区","value":"130202","parent":"130200"},{"name":"路北区","value":"130203","parent":"130200"},{"name":"古冶区","value":"130204","parent":"130200"},{"name":"开平区","value":"130205","parent":"130200"},{"name":"丰南区","value":"130207","parent":"130200"},{"name":"丰润区","value":"130208","parent":"130200"},{"name":"曹妃甸区","value":"130209","parent":"130200"},{"name":"滦县","value":"130223","parent":"130200"},{"name":"滦南县","value":"130224","parent":"130200"},{"name":"乐亭县","value":"130225","parent":"130200"},{"name":"迁西县","value":"130227","parent":"130200"},{"name":"玉田县","value":"130229","parent":"130200"},{"name":"遵化市","value":"130281","parent":"130200"},{"name":"迁安市","value":"130283","parent":"130200"},{"name":"海港区","value":"130302","parent":"130300"},{"name":"山海关区","value":"130303","parent":"130300"},{"name":"北戴河区","value":"130304","parent":"130300"},{"name":"抚宁区","value":"130306","parent":"130300"},{"name":"青龙满族自治县","value":"130321","parent":"130300"},{"name":"昌黎县","value":"130322","parent":"130300"},{"name":"卢龙县","value":"130324","parent":"130300"},{"name":"邯山区","value":"130402","parent":"130400"},{"name":"丛台区","value":"130403","parent":"130400"},{"name":"复兴区","value":"130404","parent":"130400"},{"name":"峰峰矿区","value":"130406","parent":"130400"},{"name":"邯郸县","value":"130421","parent":"130400"},{"name":"临漳县","value":"130423","parent":"130400"},{"name":"成安县","value":"130424","parent":"130400"},{"name":"大名县","value":"130425","parent":"130400"},{"name":"涉县","value":"130426","parent":"130400"},{"name":"磁县","value":"130427","parent":"130400"},{"name":"肥乡县","value":"130428","parent":"130400"},{"name":"永年县","value":"130429","parent":"130400"},{"name":"邱县","value":"130430","parent":"130400"},{"name":"鸡泽县","value":"130431","parent":"130400"},{"name":"广平县","value":"130432","parent":"130400"},{"name":"馆陶县","value":"130433","parent":"130400"},{"name":"魏县","value":"130434","parent":"130400"},{"name":"曲周县","value":"130435","parent":"130400"},{"name":"武安市","value":"130481","parent":"130400"},{"name":"桥东区","value":"130502","parent":"130500"},{"name":"桥西区","value":"130503","parent":"130500"},{"name":"邢台县","value":"130521","parent":"130500"},{"name":"临城县","value":"130522","parent":"130500"},{"name":"内丘县","value":"130523","parent":"130500"},{"name":"柏乡县","value":"130524","parent":"130500"},{"name":"隆尧县","value":"130525","parent":"130500"},{"name":"任县","value":"130526","parent":"130500"},{"name":"南和县","value":"130527","parent":"130500"},{"name":"宁晋县","value":"130528","parent":"130500"},{"name":"巨鹿县","value":"130529","parent":"130500"},{"name":"新河县","value":"130530","parent":"130500"},{"name":"广宗县","value":"130531","parent":"130500"},{"name":"平乡县","value":"130532","parent":"130500"},{"name":"威县","value":"130533","parent":"130500"},{"name":"清河县","value":"130534","parent":"130500"},{"name":"临西县","value":"130535","parent":"130500"},{"name":"南宫市","value":"130581","parent":"130500"},{"name":"沙河市","value":"130582","parent":"130500"},{"name":"竞秀区","value":"130602","parent":"130600"},{"name":"莲池区","value":"130606","parent":"130600"},{"name":"满城区","value":"130607","parent":"130600"},{"name":"清苑区","value":"130608","parent":"130600"},{"name":"徐水区","value":"130609","parent":"130600"},{"name":"涞水县","value":"130623","parent":"130600"},{"name":"阜平县","value":"130624","parent":"130600"},{"name":"定兴县","value":"130626","parent":"130600"},{"name":"唐县","value":"130627","parent":"130600"},{"name":"高阳县","value":"130628","parent":"130600"},{"name":"容城县","value":"130629","parent":"130600"},{"name":"涞源县","value":"130630","parent":"130600"},{"name":"望都县","value":"130631","parent":"130600"},{"name":"安新县","value":"130632","parent":"130600"},{"name":"易县","value":"130633","parent":"130600"},{"name":"曲阳县","value":"130634","parent":"130600"},{"name":"蠡县","value":"130635","parent":"130600"},{"name":"顺平县","value":"130636","parent":"130600"},{"name":"博野县","value":"130637","parent":"130600"},{"name":"雄县","value":"130638","parent":"130600"},{"name":"涿州市","value":"130681","parent":"130600"},{"name":"安国市","value":"130683","parent":"130600"},{"name":"高碑店市","value":"130684","parent":"130600"},{"name":"桥东区","value":"130702","parent":"130700"},{"name":"桥西区","value":"130703","parent":"130700"},{"name":"宣化区","value":"130705","parent":"130700"},{"name":"下花园区","value":"130706","parent":"130700"},{"name":"宣化县","value":"130721","parent":"130700"},{"name":"张北县","value":"130722","parent":"130700"},{"name":"康保县","value":"130723","parent":"130700"},{"name":"沽源县","value":"130724","parent":"130700"},{"name":"尚义县","value":"130725","parent":"130700"},{"name":"蔚县","value":"130726","parent":"130700"},{"name":"阳原县","value":"130727","parent":"130700"},{"name":"怀安县","value":"130728","parent":"130700"},{"name":"万全县","value":"130729","parent":"130700"},{"name":"怀来县","value":"130730","parent":"130700"},{"name":"涿鹿县","value":"130731","parent":"130700"},{"name":"赤城县","value":"130732","parent":"130700"},{"name":"崇礼县","value":"130733","parent":"130700"},{"name":"双桥区","value":"130802","parent":"130800"},{"name":"双滦区","value":"130803","parent":"130800"},{"name":"鹰手营子矿区","value":"130804","parent":"130800"},{"name":"承德县","value":"130821","parent":"130800"},{"name":"兴隆县","value":"130822","parent":"130800"},{"name":"平泉县","value":"130823","parent":"130800"},{"name":"滦平县","value":"130824","parent":"130800"},{"name":"隆化县","value":"130825","parent":"130800"},{"name":"丰宁满族自治县","value":"130826","parent":"130800"},{"name":"宽城满族自治县","value":"130827","parent":"130800"},{"name":"围场满族蒙古族自治县","value":"130828","parent":"130800"},{"name":"新华区","value":"130902","parent":"130900"},{"name":"运河区","value":"130903","parent":"130900"},{"name":"沧县","value":"130921","parent":"130900"},{"name":"青县","value":"130922","parent":"130900"},{"name":"东光县","value":"130923","parent":"130900"},{"name":"海兴县","value":"130924","parent":"130900"},{"name":"盐山县","value":"130925","parent":"130900"},{"name":"肃宁县","value":"130926","parent":"130900"},{"name":"南皮县","value":"130927","parent":"130900"},{"name":"吴桥县","value":"130928","parent":"130900"},{"name":"献县","value":"130929","parent":"130900"},{"name":"孟村回族自治县","value":"130930","parent":"130900"},{"name":"泊头市","value":"130981","parent":"130900"},{"name":"任丘市","value":"130982","parent":"130900"},{"name":"黄骅市","value":"130983","parent":"130900"},{"name":"河间市","value":"130984","parent":"130900"},{"name":"安次区","value":"131002","parent":"131000"},{"name":"广阳区","value":"131003","parent":"131000"},{"name":"固安县","value":"131022","parent":"131000"},{"name":"永清县","value":"131023","parent":"131000"},{"name":"香河县","value":"131024","parent":"131000"},{"name":"大城县","value":"131025","parent":"131000"},{"name":"文安县","value":"131026","parent":"131000"},{"name":"大厂回族自治县","value":"131028","parent":"131000"},{"name":"霸州市","value":"131081","parent":"131000"},{"name":"三河市","value":"131082","parent":"131000"},{"name":"桃城区","value":"131102","parent":"131100"},{"name":"枣强县","value":"131121","parent":"131100"},{"name":"武邑县","value":"131122","parent":"131100"},{"name":"武强县","value":"131123","parent":"131100"},{"name":"饶阳县","value":"131124","parent":"131100"},{"name":"安平县","value":"131125","parent":"131100"},{"name":"故城县","value":"131126","parent":"131100"},{"name":"景县","value":"131127","parent":"131100"},{"name":"阜城县","value":"131128","parent":"131100"},{"name":"冀州市","value":"131181","parent":"131100"},{"name":"深州市","value":"131182","parent":"131100"},{"name":"太原市","value":"140100","parent":"140000"},{"name":"大同市","value":"140200","parent":"140000"},{"name":"阳泉市","value":"140300","parent":"140000"},{"name":"长治市","value":"140400","parent":"140000"},{"name":"晋城市","value":"140500","parent":"140000"},{"name":"朔州市","value":"140600","parent":"140000"},{"name":"晋中市","value":"140700","parent":"140000"},{"name":"运城市","value":"140800","parent":"140000"},{"name":"忻州市","value":"140900","parent":"140000"},{"name":"临汾市","value":"141000","parent":"140000"},{"name":"吕梁市","value":"141100","parent":"140000"},{"name":"小店区","value":"140105","parent":"140100"},{"name":"迎泽区","value":"140106","parent":"140100"},{"name":"杏花岭区","value":"140107","parent":"140100"},{"name":"尖草坪区","value":"140108","parent":"140100"},{"name":"万柏林区","value":"140109","parent":"140100"},{"name":"晋源区","value":"140110","parent":"140100"},{"name":"清徐县","value":"140121","parent":"140100"},{"name":"阳曲县","value":"140122","parent":"140100"},{"name":"娄烦县","value":"140123","parent":"140100"},{"name":"古交市","value":"140181","parent":"140100"},{"name":"城区","value":"140202","parent":"140200"},{"name":"矿区","value":"140203","parent":"140200"},{"name":"南郊区","value":"140211","parent":"140200"},{"name":"新荣区","value":"140212","parent":"140200"},{"name":"阳高县","value":"140221","parent":"140200"},{"name":"天镇县","value":"140222","parent":"140200"},{"name":"广灵县","value":"140223","parent":"140200"},{"name":"灵丘县","value":"140224","parent":"140200"},{"name":"浑源县","value":"140225","parent":"140200"},{"name":"左云县","value":"140226","parent":"140200"},{"name":"大同县","value":"140227","parent":"140200"},{"name":"城区","value":"140302","parent":"140300"},{"name":"矿区","value":"140303","parent":"140300"},{"name":"郊区","value":"140311","parent":"140300"},{"name":"平定县","value":"140321","parent":"140300"},{"name":"盂县","value":"140322","parent":"140300"},{"name":"城区","value":"140402","parent":"140400"},{"name":"郊区","value":"140411","parent":"140400"},{"name":"长治县","value":"140421","parent":"140400"},{"name":"襄垣县","value":"140423","parent":"140400"},{"name":"屯留县","value":"140424","parent":"140400"},{"name":"平顺县","value":"140425","parent":"140400"},{"name":"黎城县","value":"140426","parent":"140400"},{"name":"壶关县","value":"140427","parent":"140400"},{"name":"长子县","value":"140428","parent":"140400"},{"name":"武乡县","value":"140429","parent":"140400"},{"name":"沁县","value":"140430","parent":"140400"},{"name":"沁源县","value":"140431","parent":"140400"},{"name":"潞城市","value":"140481","parent":"140400"},{"name":"城区","value":"140502","parent":"140500"},{"name":"沁水县","value":"140521","parent":"140500"},{"name":"阳城县","value":"140522","parent":"140500"},{"name":"陵川县","value":"140524","parent":"140500"},{"name":"泽州县","value":"140525","parent":"140500"},{"name":"高平市","value":"140581","parent":"140500"},{"name":"朔城区","value":"140602","parent":"140600"},{"name":"平鲁区","value":"140603","parent":"140600"},{"name":"山阴县","value":"140621","parent":"140600"},{"name":"应县","value":"140622","parent":"140600"},{"name":"右玉县","value":"140623","parent":"140600"},{"name":"怀仁县","value":"140624","parent":"140600"},{"name":"榆次区","value":"140702","parent":"140700"},{"name":"榆社县","value":"140721","parent":"140700"},{"name":"左权县","value":"140722","parent":"140700"},{"name":"和顺县","value":"140723","parent":"140700"},{"name":"昔阳县","value":"140724","parent":"140700"},{"name":"寿阳县","value":"140725","parent":"140700"},{"name":"太谷县","value":"140726","parent":"140700"},{"name":"祁县","value":"140727","parent":"140700"},{"name":"平遥县","value":"140728","parent":"140700"},{"name":"灵石县","value":"140729","parent":"140700"},{"name":"介休市","value":"140781","parent":"140700"},{"name":"盐湖区","value":"140802","parent":"140800"},{"name":"临猗县","value":"140821","parent":"140800"},{"name":"万荣县","value":"140822","parent":"140800"},{"name":"闻喜县","value":"140823","parent":"140800"},{"name":"稷山县","value":"140824","parent":"140800"},{"name":"新绛县","value":"140825","parent":"140800"},{"name":"绛县","value":"140826","parent":"140800"},{"name":"垣曲县","value":"140827","parent":"140800"},{"name":"夏县","value":"140828","parent":"140800"},{"name":"平陆县","value":"140829","parent":"140800"},{"name":"芮城县","value":"140830","parent":"140800"},{"name":"永济市","value":"140881","parent":"140800"},{"name":"河津市","value":"140882","parent":"140800"},{"name":"忻府区","value":"140902","parent":"140900"},{"name":"定襄县","value":"140921","parent":"140900"},{"name":"五台县","value":"140922","parent":"140900"},{"name":"代县","value":"140923","parent":"140900"},{"name":"繁峙县","value":"140924","parent":"140900"},{"name":"宁武县","value":"140925","parent":"140900"},{"name":"静乐县","value":"140926","parent":"140900"},{"name":"神池县","value":"140927","parent":"140900"},{"name":"五寨县","value":"140928","parent":"140900"},{"name":"岢岚县","value":"140929","parent":"140900"},{"name":"河曲县","value":"140930","parent":"140900"},{"name":"保德县","value":"140931","parent":"140900"},{"name":"偏关县","value":"140932","parent":"140900"},{"name":"原平市","value":"140981","parent":"140900"},{"name":"尧都区","value":"141002","parent":"141000"},{"name":"曲沃县","value":"141021","parent":"141000"},{"name":"翼城县","value":"141022","parent":"141000"},{"name":"襄汾县","value":"141023","parent":"141000"},{"name":"洪洞县","value":"141024","parent":"141000"},{"name":"古县","value":"141025","parent":"141000"},{"name":"安泽县","value":"141026","parent":"141000"},{"name":"浮山县","value":"141027","parent":"141000"},{"name":"吉县","value":"141028","parent":"141000"},{"name":"乡宁县","value":"141029","parent":"141000"},{"name":"大宁县","value":"141030","parent":"141000"},{"name":"隰县","value":"141031","parent":"141000"},{"name":"永和县","value":"141032","parent":"141000"},{"name":"蒲县","value":"141033","parent":"141000"},{"name":"汾西县","value":"141034","parent":"141000"},{"name":"侯马市","value":"141081","parent":"141000"},{"name":"霍州市","value":"141082","parent":"141000"},{"name":"离石区","value":"141102","parent":"141100"},{"name":"文水县","value":"141121","parent":"141100"},{"name":"交城县","value":"141122","parent":"141100"},{"name":"兴县","value":"141123","parent":"141100"},{"name":"临县","value":"141124","parent":"141100"},{"name":"柳林县","value":"141125","parent":"141100"},{"name":"石楼县","value":"141126","parent":"141100"},{"name":"岚县","value":"141127","parent":"141100"},{"name":"方山县","value":"141128","parent":"141100"},{"name":"中阳县","value":"141129","parent":"141100"},{"name":"交口县","value":"141130","parent":"141100"},{"name":"孝义市","value":"141181","parent":"141100"},{"name":"汾阳市","value":"141182","parent":"141100"},{"name":"呼和浩特市","value":"150100","parent":"150000"},{"name":"包头市","value":"150200","parent":"150000"},{"name":"乌海市","value":"150300","parent":"150000"},{"name":"赤峰市","value":"150400","parent":"150000"},{"name":"通辽市","value":"150500","parent":"150000"},{"name":"鄂尔多斯市","value":"150600","parent":"150000"},{"name":"呼伦贝尔市","value":"150700","parent":"150000"},{"name":"巴彦淖尔市","value":"150800","parent":"150000"},{"name":"乌兰察布市","value":"150900","parent":"150000"},{"name":"兴安盟","value":"152200","parent":"150000"},{"name":"锡林郭勒盟","value":"152500","parent":"150000"},{"name":"阿拉善盟","value":"152900","parent":"150000"},{"name":"新城区","value":"150102","parent":"150100"},{"name":"回民区","value":"150103","parent":"150100"},{"name":"玉泉区","value":"150104","parent":"150100"},{"name":"赛罕区","value":"150105","parent":"150100"},{"name":"土默特左旗","value":"150121","parent":"150100"},{"name":"托克托县","value":"150122","parent":"150100"},{"name":"和林格尔县","value":"150123","parent":"150100"},{"name":"清水河县","value":"150124","parent":"150100"},{"name":"武川县","value":"150125","parent":"150100"},{"name":"东河区","value":"150202","parent":"150200"},{"name":"昆都仑区","value":"150203","parent":"150200"},{"name":"青山区","value":"150204","parent":"150200"},{"name":"石拐区","value":"150205","parent":"150200"},{"name":"白云鄂博矿区","value":"150206","parent":"150200"},{"name":"九原区","value":"150207","parent":"150200"},{"name":"土默特右旗","value":"150221","parent":"150200"},{"name":"固阳县","value":"150222","parent":"150200"},{"name":"达尔罕茂明安联合旗","value":"150223","parent":"150200"},{"name":"海勃湾区","value":"150302","parent":"150300"},{"name":"海南区","value":"150303","parent":"150300"},{"name":"乌达区","value":"150304","parent":"150300"},{"name":"红山区","value":"150402","parent":"150400"},{"name":"元宝山区","value":"150403","parent":"150400"},{"name":"松山区","value":"150404","parent":"150400"},{"name":"阿鲁科尔沁旗","value":"150421","parent":"150400"},{"name":"巴林左旗","value":"150422","parent":"150400"},{"name":"巴林右旗","value":"150423","parent":"150400"},{"name":"林西县","value":"150424","parent":"150400"},{"name":"克什克腾旗","value":"150425","parent":"150400"},{"name":"翁牛特旗","value":"150426","parent":"150400"},{"name":"喀喇沁旗","value":"150428","parent":"150400"},{"name":"宁城县","value":"150429","parent":"150400"},{"name":"敖汉旗","value":"150430","parent":"150400"},{"name":"科尔沁区","value":"150502","parent":"150500"},{"name":"科尔沁左翼中旗","value":"150521","parent":"150500"},{"name":"科尔沁左翼后旗","value":"150522","parent":"150500"},{"name":"开鲁县","value":"150523","parent":"150500"},{"name":"库伦旗","value":"150524","parent":"150500"},{"name":"奈曼旗","value":"150525","parent":"150500"},{"name":"扎鲁特旗","value":"150526","parent":"150500"},{"name":"霍林郭勒市","value":"150581","parent":"150500"},{"name":"东胜区","value":"150602","parent":"150600"},{"name":"达拉特旗","value":"150621","parent":"150600"},{"name":"准格尔旗","value":"150622","parent":"150600"},{"name":"鄂托克前旗","value":"150623","parent":"150600"},{"name":"鄂托克旗","value":"150624","parent":"150600"},{"name":"杭锦旗","value":"150625","parent":"150600"},{"name":"乌审旗","value":"150626","parent":"150600"},{"name":"伊金霍洛旗","value":"150627","parent":"150600"},{"name":"海拉尔区","value":"150702","parent":"150700"},{"name":"扎赉诺尔区","value":"150703","parent":"150700"},{"name":"阿荣旗","value":"150721","parent":"150700"},{"name":"莫力达瓦达斡尔族自治旗","value":"150722","parent":"150700"},{"name":"鄂伦春自治旗","value":"150723","parent":"150700"},{"name":"鄂温克族自治旗","value":"150724","parent":"150700"},{"name":"陈巴尔虎旗","value":"150725","parent":"150700"},{"name":"新巴尔虎左旗","value":"150726","parent":"150700"},{"name":"新巴尔虎右旗","value":"150727","parent":"150700"},{"name":"满洲里市","value":"150781","parent":"150700"},{"name":"牙克石市","value":"150782","parent":"150700"},{"name":"扎兰屯市","value":"150783","parent":"150700"},{"name":"额尔古纳市","value":"150784","parent":"150700"},{"name":"根河市","value":"150785","parent":"150700"},{"name":"临河区","value":"150802","parent":"150800"},{"name":"五原县","value":"150821","parent":"150800"},{"name":"磴口县","value":"150822","parent":"150800"},{"name":"乌拉特前旗","value":"150823","parent":"150800"},{"name":"乌拉特中旗","value":"150824","parent":"150800"},{"name":"乌拉特后旗","value":"150825","parent":"150800"},{"name":"杭锦后旗","value":"150826","parent":"150800"},{"name":"集宁区","value":"150902","parent":"150900"},{"name":"卓资县","value":"150921","parent":"150900"},{"name":"化德县","value":"150922","parent":"150900"},{"name":"商都县","value":"150923","parent":"150900"},{"name":"兴和县","value":"150924","parent":"150900"},{"name":"凉城县","value":"150925","parent":"150900"},{"name":"察哈尔右翼前旗","value":"150926","parent":"150900"},{"name":"察哈尔右翼中旗","value":"150927","parent":"150900"},{"name":"察哈尔右翼后旗","value":"150928","parent":"150900"},{"name":"四子王旗","value":"150929","parent":"150900"},{"name":"丰镇市","value":"150981","parent":"150900"},{"name":"乌兰浩特市","value":"152201","parent":"152200"},{"name":"阿尔山市","value":"152202","parent":"152200"},{"name":"科尔沁右翼前旗","value":"152221","parent":"152200"},{"name":"科尔沁右翼中旗","value":"152222","parent":"152200"},{"name":"扎赉特旗","value":"152223","parent":"152200"},{"name":"突泉县","value":"152224","parent":"152200"},{"name":"二连浩特市","value":"152501","parent":"152500"},{"name":"锡林浩特市","value":"152502","parent":"152500"},{"name":"阿巴嘎旗","value":"152522","parent":"152500"},{"name":"苏尼特左旗","value":"152523","parent":"152500"},{"name":"苏尼特右旗","value":"152524","parent":"152500"},{"name":"东乌珠穆沁旗","value":"152525","parent":"152500"},{"name":"西乌珠穆沁旗","value":"152526","parent":"152500"},{"name":"太仆寺旗","value":"152527","parent":"152500"},{"name":"镶黄旗","value":"152528","parent":"152500"},{"name":"正镶白旗","value":"152529","parent":"152500"},{"name":"正蓝旗","value":"152530","parent":"152500"},{"name":"多伦县","value":"152531","parent":"152500"},{"name":"阿拉善左旗","value":"152921","parent":"152900"},{"name":"阿拉善右旗","value":"152922","parent":"152900"},{"name":"额济纳旗","value":"152923","parent":"152900"},{"name":"沈阳市","value":"210100","parent":"210000"},{"name":"大连市","value":"210200","parent":"210000"},{"name":"鞍山市","value":"210300","parent":"210000"},{"name":"抚顺市","value":"210400","parent":"210000"},{"name":"本溪市","value":"210500","parent":"210000"},{"name":"丹东市","value":"210600","parent":"210000"},{"name":"锦州市","value":"210700","parent":"210000"},{"name":"营口市","value":"210800","parent":"210000"},{"name":"阜新市","value":"210900","parent":"210000"},{"name":"辽阳市","value":"211000","parent":"210000"},{"name":"盘锦市","value":"211100","parent":"210000"},{"name":"铁岭市","value":"211200","parent":"210000"},{"name":"朝阳市","value":"211300","parent":"210000"},{"name":"葫芦岛市","value":"211400","parent":"210000"},{"name":"和平区","value":"210102","parent":"210100"},{"name":"沈河区","value":"210103","parent":"210100"},{"name":"大东区","value":"210104","parent":"210100"},{"name":"皇姑区","value":"210105","parent":"210100"},{"name":"铁西区","value":"210106","parent":"210100"},{"name":"苏家屯区","value":"210111","parent":"210100"},{"name":"浑南区","value":"210112","parent":"210100"},{"name":"沈北新区","value":"210113","parent":"210100"},{"name":"于洪区","value":"210114","parent":"210100"},{"name":"辽中县","value":"210122","parent":"210100"},{"name":"康平县","value":"210123","parent":"210100"},{"name":"法库县","value":"210124","parent":"210100"},{"name":"新民市","value":"210181","parent":"210100"},{"name":"中山区","value":"210202","parent":"210200"},{"name":"西岗区","value":"210203","parent":"210200"},{"name":"沙河口区","value":"210204","parent":"210200"},{"name":"甘井子区","value":"210211","parent":"210200"},{"name":"旅顺口区","value":"210212","parent":"210200"},{"name":"金州区","value":"210213","parent":"210200"},{"name":"长海县","value":"210224","parent":"210200"},{"name":"瓦房店市","value":"210281","parent":"210200"},{"name":"普兰店市","value":"210282","parent":"210200"},{"name":"庄河市","value":"210283","parent":"210200"},{"name":"铁东区","value":"210302","parent":"210300"},{"name":"铁西区","value":"210303","parent":"210300"},{"name":"立山区","value":"210304","parent":"210300"},{"name":"千山区","value":"210311","parent":"210300"},{"name":"台安县","value":"210321","parent":"210300"},{"name":"岫岩满族自治县","value":"210323","parent":"210300"},{"name":"海城市","value":"210381","parent":"210300"},{"name":"新抚区","value":"210402","parent":"210400"},{"name":"东洲区","value":"210403","parent":"210400"},{"name":"望花区","value":"210404","parent":"210400"},{"name":"顺城区","value":"210411","parent":"210400"},{"name":"抚顺县","value":"210421","parent":"210400"},{"name":"新宾满族自治县","value":"210422","parent":"210400"},{"name":"清原满族自治县","value":"210423","parent":"210400"},{"name":"平山区","value":"210502","parent":"210500"},{"name":"溪湖区","value":"210503","parent":"210500"},{"name":"明山区","value":"210504","parent":"210500"},{"name":"南芬区","value":"210505","parent":"210500"},{"name":"本溪满族自治县","value":"210521","parent":"210500"},{"name":"桓仁满族自治县","value":"210522","parent":"210500"},{"name":"元宝区","value":"210602","parent":"210600"},{"name":"振兴区","value":"210603","parent":"210600"},{"name":"振安区","value":"210604","parent":"210600"},{"name":"宽甸满族自治县","value":"210624","parent":"210600"},{"name":"东港市","value":"210681","parent":"210600"},{"name":"凤城市","value":"210682","parent":"210600"},{"name":"古塔区","value":"210702","parent":"210700"},{"name":"凌河区","value":"210703","parent":"210700"},{"name":"太和区","value":"210711","parent":"210700"},{"name":"黑山县","value":"210726","parent":"210700"},{"name":"义县","value":"210727","parent":"210700"},{"name":"凌海市","value":"210781","parent":"210700"},{"name":"北镇市","value":"210782","parent":"210700"},{"name":"站前区","value":"210802","parent":"210800"},{"name":"西市区","value":"210803","parent":"210800"},{"name":"鲅鱼圈区","value":"210804","parent":"210800"},{"name":"老边区","value":"210811","parent":"210800"},{"name":"盖州市","value":"210881","parent":"210800"},{"name":"大石桥市","value":"210882","parent":"210800"},{"name":"海州区","value":"210902","parent":"210900"},{"name":"新邱区","value":"210903","parent":"210900"},{"name":"太平区","value":"210904","parent":"210900"},{"name":"清河门区","value":"210905","parent":"210900"},{"name":"细河区","value":"210911","parent":"210900"},{"name":"阜新蒙古族自治县","value":"210921","parent":"210900"},{"name":"彰武县","value":"210922","parent":"210900"},{"name":"白塔区","value":"211002","parent":"211000"},{"name":"文圣区","value":"211003","parent":"211000"},{"name":"宏伟区","value":"211004","parent":"211000"},{"name":"弓长岭区","value":"211005","parent":"211000"},{"name":"太子河区","value":"211011","parent":"211000"},{"name":"辽阳县","value":"211021","parent":"211000"},{"name":"灯塔市","value":"211081","parent":"211000"},{"name":"双台子区","value":"211102","parent":"211100"},{"name":"兴隆台区","value":"211103","parent":"211100"},{"name":"大洼县","value":"211121","parent":"211100"},{"name":"盘山县","value":"211122","parent":"211100"},{"name":"银州区","value":"211202","parent":"211200"},{"name":"清河区","value":"211204","parent":"211200"},{"name":"铁岭县","value":"211221","parent":"211200"},{"name":"西丰县","value":"211223","parent":"211200"},{"name":"昌图县","value":"211224","parent":"211200"},{"name":"调兵山市","value":"211281","parent":"211200"},{"name":"开原市","value":"211282","parent":"211200"},{"name":"双塔区","value":"211302","parent":"211300"},{"name":"龙城区","value":"211303","parent":"211300"},{"name":"朝阳县","value":"211321","parent":"211300"},{"name":"建平县","value":"211322","parent":"211300"},{"name":"喀喇沁左翼蒙古族自治县","value":"211324","parent":"211300"},{"name":"北票市","value":"211381","parent":"211300"},{"name":"凌源市","value":"211382","parent":"211300"},{"name":"连山区","value":"211402","parent":"211400"},{"name":"龙港区","value":"211403","parent":"211400"},{"name":"南票区","value":"211404","parent":"211400"},{"name":"绥中县","value":"211421","parent":"211400"},{"name":"建昌县","value":"211422","parent":"211400"},{"name":"兴城市","value":"211481","parent":"211400"},{"name":"长春市","value":"220100","parent":"220000"},{"name":"吉林市","value":"220200","parent":"220000"},{"name":"四平市","value":"220300","parent":"220000"},{"name":"辽源市","value":"220400","parent":"220000"},{"name":"通化市","value":"220500","parent":"220000"},{"name":"白山市","value":"220600","parent":"220000"},{"name":"松原市","value":"220700","parent":"220000"},{"name":"白城市","value":"220800","parent":"220000"},{"name":"延边朝鲜族自治州","value":"222400","parent":"220000"},{"name":"南关区","value":"220102","parent":"220100"},{"name":"宽城区","value":"220103","parent":"220100"},{"name":"朝阳区","value":"220104","parent":"220100"},{"name":"二道区","value":"220105","parent":"220100"},{"name":"绿园区","value":"220106","parent":"220100"},{"name":"双阳区","value":"220112","parent":"220100"},{"name":"九台区","value":"220113","parent":"220100"},{"name":"农安县","value":"220122","parent":"220100"},{"name":"榆树市","value":"220182","parent":"220100"},{"name":"德惠市","value":"220183","parent":"220100"},{"name":"昌邑区","value":"220202","parent":"220200"},{"name":"龙潭区","value":"220203","parent":"220200"},{"name":"船营区","value":"220204","parent":"220200"},{"name":"丰满区","value":"220211","parent":"220200"},{"name":"永吉县","value":"220221","parent":"220200"},{"name":"蛟河市","value":"220281","parent":"220200"},{"name":"桦甸市","value":"220282","parent":"220200"},{"name":"舒兰市","value":"220283","parent":"220200"},{"name":"磐石市","value":"220284","parent":"220200"},{"name":"铁西区","value":"220302","parent":"220300"},{"name":"铁东区","value":"220303","parent":"220300"},{"name":"梨树县","value":"220322","parent":"220300"},{"name":"伊通满族自治县","value":"220323","parent":"220300"},{"name":"公主岭市","value":"220381","parent":"220300"},{"name":"双辽市","value":"220382","parent":"220300"},{"name":"龙山区","value":"220402","parent":"220400"},{"name":"西安区","value":"220403","parent":"220400"},{"name":"东丰县","value":"220421","parent":"220400"},{"name":"东辽县","value":"220422","parent":"220400"},{"name":"东昌区","value":"220502","parent":"220500"},{"name":"二道江区","value":"220503","parent":"220500"},{"name":"通化县","value":"220521","parent":"220500"},{"name":"辉南县","value":"220523","parent":"220500"},{"name":"柳河县","value":"220524","parent":"220500"},{"name":"梅河口市","value":"220581","parent":"220500"},{"name":"集安市","value":"220582","parent":"220500"},{"name":"浑江区","value":"220602","parent":"220600"},{"name":"江源区","value":"220605","parent":"220600"},{"name":"抚松县","value":"220621","parent":"220600"},{"name":"靖宇县","value":"220622","parent":"220600"},{"name":"长白朝鲜族自治县","value":"220623","parent":"220600"},{"name":"临江市","value":"220681","parent":"220600"},{"name":"宁江区","value":"220702","parent":"220700"},{"name":"前郭尔罗斯蒙古族自治县","value":"220721","parent":"220700"},{"name":"长岭县","value":"220722","parent":"220700"},{"name":"乾安县","value":"220723","parent":"220700"},{"name":"扶余市","value":"220781","parent":"220700"},{"name":"洮北区","value":"220802","parent":"220800"},{"name":"镇赉县","value":"220821","parent":"220800"},{"name":"通榆县","value":"220822","parent":"220800"},{"name":"洮南市","value":"220881","parent":"220800"},{"name":"大安市","value":"220882","parent":"220800"},{"name":"延吉市","value":"222401","parent":"222400"},{"name":"图们市","value":"222402","parent":"222400"},{"name":"敦化市","value":"222403","parent":"222400"},{"name":"珲春市","value":"222404","parent":"222400"},{"name":"龙井市","value":"222405","parent":"222400"},{"name":"和龙市","value":"222406","parent":"222400"},{"name":"汪清县","value":"222424","parent":"222400"},{"name":"安图县","value":"222426","parent":"222400"},{"name":"哈尔滨市","value":"230100","parent":"230000"},{"name":"齐齐哈尔市","value":"230200","parent":"230000"},{"name":"鸡西市","value":"230300","parent":"230000"},{"name":"鹤岗市","value":"230400","parent":"230000"},{"name":"双鸭山市","value":"230500","parent":"230000"},{"name":"大庆市","value":"230600","parent":"230000"},{"name":"伊春市","value":"230700","parent":"230000"},{"name":"佳木斯市","value":"230800","parent":"230000"},{"name":"七台河市","value":"230900","parent":"230000"},{"name":"牡丹江市","value":"231000","parent":"230000"},{"name":"黑河市","value":"231100","parent":"230000"},{"name":"绥化市","value":"231200","parent":"230000"},{"name":"大兴安岭地区","value":"232700","parent":"230000"},{"name":"道里区","value":"230102","parent":"230100"},{"name":"南岗区","value":"230103","parent":"230100"},{"name":"道外区","value":"230104","parent":"230100"},{"name":"平房区","value":"230108","parent":"230100"},{"name":"松北区","value":"230109","parent":"230100"},{"name":"香坊区","value":"230110","parent":"230100"},{"name":"呼兰区","value":"230111","parent":"230100"},{"name":"阿城区","value":"230112","parent":"230100"},{"name":"双城区","value":"230113","parent":"230100"},{"name":"依兰县","value":"230123","parent":"230100"},{"name":"方正县","value":"230124","parent":"230100"},{"name":"宾县","value":"230125","parent":"230100"},{"name":"巴彦县","value":"230126","parent":"230100"},{"name":"木兰县","value":"230127","parent":"230100"},{"name":"通河县","value":"230128","parent":"230100"},{"name":"延寿县","value":"230129","parent":"230100"},{"name":"尚志市","value":"230183","parent":"230100"},{"name":"五常市","value":"230184","parent":"230100"},{"name":"龙沙区","value":"230202","parent":"230200"},{"name":"建华区","value":"230203","parent":"230200"},{"name":"铁锋区","value":"230204","parent":"230200"},{"name":"昂昂溪区","value":"230205","parent":"230200"},{"name":"富拉尔基区","value":"230206","parent":"230200"},{"name":"碾子山区","value":"230207","parent":"230200"},{"name":"梅里斯达斡尔族区","value":"230208","parent":"230200"},{"name":"龙江县","value":"230221","parent":"230200"},{"name":"依安县","value":"230223","parent":"230200"},{"name":"泰来县","value":"230224","parent":"230200"},{"name":"甘南县","value":"230225","parent":"230200"},{"name":"富裕县","value":"230227","parent":"230200"},{"name":"克山县","value":"230229","parent":"230200"},{"name":"克东县","value":"230230","parent":"230200"},{"name":"拜泉县","value":"230231","parent":"230200"},{"name":"讷河市","value":"230281","parent":"230200"},{"name":"鸡冠区","value":"230302","parent":"230300"},{"name":"恒山区","value":"230303","parent":"230300"},{"name":"滴道区","value":"230304","parent":"230300"},{"name":"梨树区","value":"230305","parent":"230300"},{"name":"城子河区","value":"230306","parent":"230300"},{"name":"麻山区","value":"230307","parent":"230300"},{"name":"鸡东县","value":"230321","parent":"230300"},{"name":"虎林市","value":"230381","parent":"230300"},{"name":"密山市","value":"230382","parent":"230300"},{"name":"向阳区","value":"230402","parent":"230400"},{"name":"工农区","value":"230403","parent":"230400"},{"name":"南山区","value":"230404","parent":"230400"},{"name":"兴安区","value":"230405","parent":"230400"},{"name":"东山区","value":"230406","parent":"230400"},{"name":"兴山区","value":"230407","parent":"230400"},{"name":"萝北县","value":"230421","parent":"230400"},{"name":"绥滨县","value":"230422","parent":"230400"},{"name":"尖山区","value":"230502","parent":"230500"},{"name":"岭东区","value":"230503","parent":"230500"},{"name":"四方台区","value":"230505","parent":"230500"},{"name":"宝山区","value":"230506","parent":"230500"},{"name":"集贤县","value":"230521","parent":"230500"},{"name":"友谊县","value":"230522","parent":"230500"},{"name":"宝清县","value":"230523","parent":"230500"},{"name":"饶河县","value":"230524","parent":"230500"},{"name":"萨尔图区","value":"230602","parent":"230600"},{"name":"龙凤区","value":"230603","parent":"230600"},{"name":"让胡路区","value":"230604","parent":"230600"},{"name":"红岗区","value":"230605","parent":"230600"},{"name":"大同区","value":"230606","parent":"230600"},{"name":"肇州县","value":"230621","parent":"230600"},{"name":"肇源县","value":"230622","parent":"230600"},{"name":"林甸县","value":"230623","parent":"230600"},{"name":"杜尔伯特蒙古族自治县","value":"230624","parent":"230600"},{"name":"伊春区","value":"230702","parent":"230700"},{"name":"南岔区","value":"230703","parent":"230700"},{"name":"友好区","value":"230704","parent":"230700"},{"name":"西林区","value":"230705","parent":"230700"},{"name":"翠峦区","value":"230706","parent":"230700"},{"name":"新青区","value":"230707","parent":"230700"},{"name":"美溪区","value":"230708","parent":"230700"},{"name":"金山屯区","value":"230709","parent":"230700"},{"name":"五营区","value":"230710","parent":"230700"},{"name":"乌马河区","value":"230711","parent":"230700"},{"name":"汤旺河区","value":"230712","parent":"230700"},{"name":"带岭区","value":"230713","parent":"230700"},{"name":"乌伊岭区","value":"230714","parent":"230700"},{"name":"红星区","value":"230715","parent":"230700"},{"name":"上甘岭区","value":"230716","parent":"230700"},{"name":"嘉荫县","value":"230722","parent":"230700"},{"name":"铁力市","value":"230781","parent":"230700"},{"name":"向阳区","value":"230803","parent":"230800"},{"name":"前进区","value":"230804","parent":"230800"},{"name":"东风区","value":"230805","parent":"230800"},{"name":"郊区","value":"230811","parent":"230800"},{"name":"桦南县","value":"230822","parent":"230800"},{"name":"桦川县","value":"230826","parent":"230800"},{"name":"汤原县","value":"230828","parent":"230800"},{"name":"抚远县","value":"230833","parent":"230800"},{"name":"同江市","value":"230881","parent":"230800"},{"name":"富锦市","value":"230882","parent":"230800"},{"name":"新兴区","value":"230902","parent":"230900"},{"name":"桃山区","value":"230903","parent":"230900"},{"name":"茄子河区","value":"230904","parent":"230900"},{"name":"勃利县","value":"230921","parent":"230900"},{"name":"东安区","value":"231002","parent":"231000"},{"name":"阳明区","value":"231003","parent":"231000"},{"name":"爱民区","value":"231004","parent":"231000"},{"name":"西安区","value":"231005","parent":"231000"},{"name":"东宁县","value":"231024","parent":"231000"},{"name":"林口县","value":"231025","parent":"231000"},{"name":"绥芬河市","value":"231081","parent":"231000"},{"name":"海林市","value":"231083","parent":"231000"},{"name":"宁安市","value":"231084","parent":"231000"},{"name":"穆棱市","value":"231085","parent":"231000"},{"name":"爱辉区","value":"231102","parent":"231100"},{"name":"嫩江县","value":"231121","parent":"231100"},{"name":"逊克县","value":"231123","parent":"231100"},{"name":"孙吴县","value":"231124","parent":"231100"},{"name":"北安市","value":"231181","parent":"231100"},{"name":"五大连池市","value":"231182","parent":"231100"},{"name":"北林区","value":"231202","parent":"231200"},{"name":"望奎县","value":"231221","parent":"231200"},{"name":"兰西县","value":"231222","parent":"231200"},{"name":"青冈县","value":"231223","parent":"231200"},{"name":"庆安县","value":"231224","parent":"231200"},{"name":"明水县","value":"231225","parent":"231200"},{"name":"绥棱县","value":"231226","parent":"231200"},{"name":"安达市","value":"231281","parent":"231200"},{"name":"肇东市","value":"231282","parent":"231200"},{"name":"海伦市","value":"231283","parent":"231200"},{"name":"呼玛县","value":"232721","parent":"232700"},{"name":"塔河县","value":"232722","parent":"232700"},{"name":"漠河县","value":"232723","parent":"232700"},{"name":"市辖区","value":"310100","parent":"310000"},{"name":"黄浦区","value":"310101","parent":"310100"},{"name":"徐汇区","value":"310104","parent":"310100"},{"name":"长宁区","value":"310105","parent":"310100"},{"name":"静安区","value":"310106","parent":"310100"},{"name":"普陀区","value":"310107","parent":"310100"},{"name":"闸北区","value":"310108","parent":"310100"},{"name":"虹口区","value":"310109","parent":"310100"},{"name":"杨浦区","value":"310110","parent":"310100"},{"name":"闵行区","value":"310112","parent":"310100"},{"name":"宝山区","value":"310113","parent":"310100"},{"name":"嘉定区","value":"310114","parent":"310100"},{"name":"浦东新区","value":"310115","parent":"310100"},{"name":"金山区","value":"310116","parent":"310100"},{"name":"松江区","value":"310117","parent":"310100"},{"name":"青浦区","value":"310118","parent":"310100"},{"name":"奉贤区","value":"310120","parent":"310100"},{"name":"崇明县","value":"310230","parent":"310100"},{"name":"南京市","value":"320100","parent":"320000"},{"name":"无锡市","value":"320200","parent":"320000"},{"name":"徐州市","value":"320300","parent":"320000"},{"name":"常州市","value":"320400","parent":"320000"},{"name":"苏州市","value":"320500","parent":"320000"},{"name":"南通市","value":"320600","parent":"320000"},{"name":"连云港市","value":"320700","parent":"320000"},{"name":"淮安市","value":"320800","parent":"320000"},{"name":"盐城市","value":"320900","parent":"320000"},{"name":"扬州市","value":"321000","parent":"320000"},{"name":"镇江市","value":"321100","parent":"320000"},{"name":"泰州市","value":"321200","parent":"320000"},{"name":"宿迁市","value":"321300","parent":"320000"},{"name":"玄武区","value":"320102","parent":"320100"},{"name":"秦淮区","value":"320104","parent":"320100"},{"name":"建邺区","value":"320105","parent":"320100"},{"name":"鼓楼区","value":"320106","parent":"320100"},{"name":"浦口区","value":"320111","parent":"320100"},{"name":"栖霞区","value":"320113","parent":"320100"},{"name":"雨花台区","value":"320114","parent":"320100"},{"name":"江宁区","value":"320115","parent":"320100"},{"name":"六合区","value":"320116","parent":"320100"},{"name":"溧水区","value":"320117","parent":"320100"},{"name":"高淳区","value":"320118","parent":"320100"},{"name":"崇安区","value":"320202","parent":"320200"},{"name":"南长区","value":"320203","parent":"320200"},{"name":"北塘区","value":"320204","parent":"320200"},{"name":"锡山区","value":"320205","parent":"320200"},{"name":"惠山区","value":"320206","parent":"320200"},{"name":"滨湖区","value":"320211","parent":"320200"},{"name":"江阴市","value":"320281","parent":"320200"},{"name":"宜兴市","value":"320282","parent":"320200"},{"name":"鼓楼区","value":"320302","parent":"320300"},{"name":"云龙区","value":"320303","parent":"320300"},{"name":"贾汪区","value":"320305","parent":"320300"},{"name":"泉山区","value":"320311","parent":"320300"},{"name":"铜山区","value":"320312","parent":"320300"},{"name":"丰县","value":"320321","parent":"320300"},{"name":"沛县","value":"320322","parent":"320300"},{"name":"睢宁县","value":"320324","parent":"320300"},{"name":"新沂市","value":"320381","parent":"320300"},{"name":"邳州市","value":"320382","parent":"320300"},{"name":"天宁区","value":"320402","parent":"320400"},{"name":"钟楼区","value":"320404","parent":"320400"},{"name":"新北区","value":"320411","parent":"320400"},{"name":"武进区","value":"320412","parent":"320400"},{"name":"金坛区","value":"320413","parent":"320400"},{"name":"溧阳市","value":"320481","parent":"320400"},{"name":"虎丘区","value":"320505","parent":"320500"},{"name":"吴中区","value":"320506","parent":"320500"},{"name":"相城区","value":"320507","parent":"320500"},{"name":"姑苏区","value":"320508","parent":"320500"},{"name":"吴江区","value":"320509","parent":"320500"},{"name":"常熟市","value":"320581","parent":"320500"},{"name":"张家港市","value":"320582","parent":"320500"},{"name":"昆山市","value":"320583","parent":"320500"},{"name":"太仓市","value":"320585","parent":"320500"},{"name":"崇川区","value":"320602","parent":"320600"},{"name":"港闸区","value":"320611","parent":"320600"},{"name":"通州区","value":"320612","parent":"320600"},{"name":"海安县","value":"320621","parent":"320600"},{"name":"如东县","value":"320623","parent":"320600"},{"name":"启东市","value":"320681","parent":"320600"},{"name":"如皋市","value":"320682","parent":"320600"},{"name":"海门市","value":"320684","parent":"320600"},{"name":"连云区","value":"320703","parent":"320700"},{"name":"海州区","value":"320706","parent":"320700"},{"name":"赣榆区","value":"320707","parent":"320700"},{"name":"东海县","value":"320722","parent":"320700"},{"name":"灌云县","value":"320723","parent":"320700"},{"name":"灌南县","value":"320724","parent":"320700"},{"name":"清河区","value":"320802","parent":"320800"},{"name":"淮安区","value":"320803","parent":"320800"},{"name":"淮阴区","value":"320804","parent":"320800"},{"name":"清浦区","value":"320811","parent":"320800"},{"name":"涟水县","value":"320826","parent":"320800"},{"name":"洪泽县","value":"320829","parent":"320800"},{"name":"盱眙县","value":"320830","parent":"320800"},{"name":"金湖县","value":"320831","parent":"320800"},{"name":"亭湖区","value":"320902","parent":"320900"},{"name":"盐都区","value":"320903","parent":"320900"},{"name":"大丰区","value":"320904","parent":"320900"},{"name":"响水县","value":"320921","parent":"320900"},{"name":"滨海县","value":"320922","parent":"320900"},{"name":"阜宁县","value":"320923","parent":"320900"},{"name":"射阳县","value":"320924","parent":"320900"},{"name":"建湖县","value":"320925","parent":"320900"},{"name":"东台市","value":"320981","parent":"320900"},{"name":"广陵区","value":"321002","parent":"321000"},{"name":"邗江区","value":"321003","parent":"321000"},{"name":"江都区","value":"321012","parent":"321000"},{"name":"宝应县","value":"321023","parent":"321000"},{"name":"仪征市","value":"321081","parent":"321000"},{"name":"高邮市","value":"321084","parent":"321000"},{"name":"京口区","value":"321102","parent":"321100"},{"name":"润州区","value":"321111","parent":"321100"},{"name":"丹徒区","value":"321112","parent":"321100"},{"name":"丹阳市","value":"321181","parent":"321100"},{"name":"扬中市","value":"321182","parent":"321100"},{"name":"句容市","value":"321183","parent":"321100"},{"name":"海陵区","value":"321202","parent":"321200"},{"name":"高港区","value":"321203","parent":"321200"},{"name":"姜堰区","value":"321204","parent":"321200"},{"name":"兴化市","value":"321281","parent":"321200"},{"name":"靖江市","value":"321282","parent":"321200"},{"name":"泰兴市","value":"321283","parent":"321200"},{"name":"宿城区","value":"321302","parent":"321300"},{"name":"宿豫区","value":"321311","parent":"321300"},{"name":"沭阳县","value":"321322","parent":"321300"},{"name":"泗阳县","value":"321323","parent":"321300"},{"name":"泗洪县","value":"321324","parent":"321300"},{"name":"杭州市","value":"330100","parent":"330000"},{"name":"宁波市","value":"330200","parent":"330000"},{"name":"温州市","value":"330300","parent":"330000"},{"name":"嘉兴市","value":"330400","parent":"330000"},{"name":"湖州市","value":"330500","parent":"330000"},{"name":"绍兴市","value":"330600","parent":"330000"},{"name":"金华市","value":"330700","parent":"330000"},{"name":"衢州市","value":"330800","parent":"330000"},{"name":"舟山市","value":"330900","parent":"330000"},{"name":"台州市","value":"331000","parent":"330000"},{"name":"丽水市","value":"331100","parent":"330000"},{"name":"上城区","value":"330102","parent":"330100"},{"name":"下城区","value":"330103","parent":"330100"},{"name":"江干区","value":"330104","parent":"330100"},{"name":"拱墅区","value":"330105","parent":"330100"},{"name":"西湖区","value":"330106","parent":"330100"},{"name":"滨江区","value":"330108","parent":"330100"},{"name":"萧山区","value":"330109","parent":"330100"},{"name":"余杭区","value":"330110","parent":"330100"},{"name":"富阳区","value":"330111","parent":"330100"},{"name":"桐庐县","value":"330122","parent":"330100"},{"name":"淳安县","value":"330127","parent":"330100"},{"name":"建德市","value":"330182","parent":"330100"},{"name":"临安市","value":"330185","parent":"330100"},{"name":"海曙区","value":"330203","parent":"330200"},{"name":"江东区","value":"330204","parent":"330200"},{"name":"江北区","value":"330205","parent":"330200"},{"name":"北仑区","value":"330206","parent":"330200"},{"name":"镇海区","value":"330211","parent":"330200"},{"name":"鄞州区","value":"330212","parent":"330200"},{"name":"象山县","value":"330225","parent":"330200"},{"name":"宁海县","value":"330226","parent":"330200"},{"name":"余姚市","value":"330281","parent":"330200"},{"name":"慈溪市","value":"330282","parent":"330200"},{"name":"奉化市","value":"330283","parent":"330200"},{"name":"鹿城区","value":"330302","parent":"330300"},{"name":"龙湾区","value":"330303","parent":"330300"},{"name":"瓯海区","value":"330304","parent":"330300"},{"name":"洞头区","value":"330305","parent":"330300"},{"name":"永嘉县","value":"330324","parent":"330300"},{"name":"平阳县","value":"330326","parent":"330300"},{"name":"苍南县","value":"330327","parent":"330300"},{"name":"文成县","value":"330328","parent":"330300"},{"name":"泰顺县","value":"330329","parent":"330300"},{"name":"瑞安市","value":"330381","parent":"330300"},{"name":"乐清市","value":"330382","parent":"330300"},{"name":"南湖区","value":"330402","parent":"330400"},{"name":"秀洲区","value":"330411","parent":"330400"},{"name":"嘉善县","value":"330421","parent":"330400"},{"name":"海盐县","value":"330424","parent":"330400"},{"name":"海宁市","value":"330481","parent":"330400"},{"name":"平湖市","value":"330482","parent":"330400"},{"name":"桐乡市","value":"330483","parent":"330400"},{"name":"吴兴区","value":"330502","parent":"330500"},{"name":"南浔区","value":"330503","parent":"330500"},{"name":"德清县","value":"330521","parent":"330500"},{"name":"长兴县","value":"330522","parent":"330500"},{"name":"安吉县","value":"330523","parent":"330500"},{"name":"越城区","value":"330602","parent":"330600"},{"name":"柯桥区","value":"330603","parent":"330600"},{"name":"上虞区","value":"330604","parent":"330600"},{"name":"新昌县","value":"330624","parent":"330600"},{"name":"诸暨市","value":"330681","parent":"330600"},{"name":"嵊州市","value":"330683","parent":"330600"},{"name":"婺城区","value":"330702","parent":"330700"},{"name":"金东区","value":"330703","parent":"330700"},{"name":"武义县","value":"330723","parent":"330700"},{"name":"浦江县","value":"330726","parent":"330700"},{"name":"磐安县","value":"330727","parent":"330700"},{"name":"兰溪市","value":"330781","parent":"330700"},{"name":"义乌市","value":"330782","parent":"330700"},{"name":"东阳市","value":"330783","parent":"330700"},{"name":"永康市","value":"330784","parent":"330700"},{"name":"柯城区","value":"330802","parent":"330800"},{"name":"衢江区","value":"330803","parent":"330800"},{"name":"常山县","value":"330822","parent":"330800"},{"name":"开化县","value":"330824","parent":"330800"},{"name":"龙游县","value":"330825","parent":"330800"},{"name":"江山市","value":"330881","parent":"330800"},{"name":"定海区","value":"330902","parent":"330900"},{"name":"普陀区","value":"330903","parent":"330900"},{"name":"岱山县","value":"330921","parent":"330900"},{"name":"嵊泗县","value":"330922","parent":"330900"},{"name":"椒江区","value":"331002","parent":"331000"},{"name":"黄岩区","value":"331003","parent":"331000"},{"name":"路桥区","value":"331004","parent":"331000"},{"name":"玉环县","value":"331021","parent":"331000"},{"name":"三门县","value":"331022","parent":"331000"},{"name":"天台县","value":"331023","parent":"331000"},{"name":"仙居县","value":"331024","parent":"331000"},{"name":"温岭市","value":"331081","parent":"331000"},{"name":"临海市","value":"331082","parent":"331000"},{"name":"莲都区","value":"331102","parent":"331100"},{"name":"青田县","value":"331121","parent":"331100"},{"name":"缙云县","value":"331122","parent":"331100"},{"name":"遂昌县","value":"331123","parent":"331100"},{"name":"松阳县","value":"331124","parent":"331100"},{"name":"云和县","value":"331125","parent":"331100"},{"name":"庆元县","value":"331126","parent":"331100"},{"name":"景宁畲族自治县","value":"331127","parent":"331100"},{"name":"龙泉市","value":"331181","parent":"331100"},{"name":"合肥市","value":"340100","parent":"340000"},{"name":"芜湖市","value":"340200","parent":"340000"},{"name":"蚌埠市","value":"340300","parent":"340000"},{"name":"淮南市","value":"340400","parent":"340000"},{"name":"马鞍山市","value":"340500","parent":"340000"},{"name":"淮北市","value":"340600","parent":"340000"},{"name":"铜陵市","value":"340700","parent":"340000"},{"name":"安庆市","value":"340800","parent":"340000"},{"name":"黄山市","value":"341000","parent":"340000"},{"name":"滁州市","value":"341100","parent":"340000"},{"name":"阜阳市","value":"341200","parent":"340000"},{"name":"宿州市","value":"341300","parent":"340000"},{"name":"六安市","value":"341500","parent":"340000"},{"name":"亳州市","value":"341600","parent":"340000"},{"name":"池州市","value":"341700","parent":"340000"},{"name":"宣城市","value":"341800","parent":"340000"},{"name":"瑶海区","value":"340102","parent":"340100"},{"name":"庐阳区","value":"340103","parent":"340100"},{"name":"蜀山区","value":"340104","parent":"340100"},{"name":"包河区","value":"340111","parent":"340100"},{"name":"长丰县","value":"340121","parent":"340100"},{"name":"肥东县","value":"340122","parent":"340100"},{"name":"肥西县","value":"340123","parent":"340100"},{"name":"庐江县","value":"340124","parent":"340100"},{"name":"巢湖市","value":"340181","parent":"340100"},{"name":"镜湖区","value":"340202","parent":"340200"},{"name":"弋江区","value":"340203","parent":"340200"},{"name":"鸠江区","value":"340207","parent":"340200"},{"name":"三山区","value":"340208","parent":"340200"},{"name":"芜湖县","value":"340221","parent":"340200"},{"name":"繁昌县","value":"340222","parent":"340200"},{"name":"南陵县","value":"340223","parent":"340200"},{"name":"无为县","value":"340225","parent":"340200"},{"name":"龙子湖区","value":"340302","parent":"340300"},{"name":"蚌山区","value":"340303","parent":"340300"},{"name":"禹会区","value":"340304","parent":"340300"},{"name":"淮上区","value":"340311","parent":"340300"},{"name":"怀远县","value":"340321","parent":"340300"},{"name":"五河县","value":"340322","parent":"340300"},{"name":"固镇县","value":"340323","parent":"340300"},{"name":"大通区","value":"340402","parent":"340400"},{"name":"田家庵区","value":"340403","parent":"340400"},{"name":"谢家集区","value":"340404","parent":"340400"},{"name":"八公山区","value":"340405","parent":"340400"},{"name":"潘集区","value":"340406","parent":"340400"},{"name":"凤台县","value":"340421","parent":"340400"},{"name":"花山区","value":"340503","parent":"340500"},{"name":"雨山区","value":"340504","parent":"340500"},{"name":"博望区","value":"340506","parent":"340500"},{"name":"当涂县","value":"340521","parent":"340500"},{"name":"含山县","value":"340522","parent":"340500"},{"name":"和县","value":"340523","parent":"340500"},{"name":"杜集区","value":"340602","parent":"340600"},{"name":"相山区","value":"340603","parent":"340600"},{"name":"烈山区","value":"340604","parent":"340600"},{"name":"濉溪县","value":"340621","parent":"340600"},{"name":"铜官山区","value":"340702","parent":"340700"},{"name":"狮子山区","value":"340703","parent":"340700"},{"name":"郊区","value":"340711","parent":"340700"},{"name":"铜陵县","value":"340721","parent":"340700"},{"name":"迎江区","value":"340802","parent":"340800"},{"name":"大观区","value":"340803","parent":"340800"},{"name":"宜秀区","value":"340811","parent":"340800"},{"name":"怀宁县","value":"340822","parent":"340800"},{"name":"枞阳县","value":"340823","parent":"340800"},{"name":"潜山县","value":"340824","parent":"340800"},{"name":"太湖县","value":"340825","parent":"340800"},{"name":"宿松县","value":"340826","parent":"340800"},{"name":"望江县","value":"340827","parent":"340800"},{"name":"岳西县","value":"340828","parent":"340800"},{"name":"桐城市","value":"340881","parent":"340800"},{"name":"屯溪区","value":"341002","parent":"341000"},{"name":"黄山区","value":"341003","parent":"341000"},{"name":"徽州区","value":"341004","parent":"341000"},{"name":"歙县","value":"341021","parent":"341000"},{"name":"休宁县","value":"341022","parent":"341000"},{"name":"黟县","value":"341023","parent":"341000"},{"name":"祁门县","value":"341024","parent":"341000"},{"name":"琅琊区","value":"341102","parent":"341100"},{"name":"南谯区","value":"341103","parent":"341100"},{"name":"来安县","value":"341122","parent":"341100"},{"name":"全椒县","value":"341124","parent":"341100"},{"name":"定远县","value":"341125","parent":"341100"},{"name":"凤阳县","value":"341126","parent":"341100"},{"name":"天长市","value":"341181","parent":"341100"},{"name":"明光市","value":"341182","parent":"341100"},{"name":"颍州区","value":"341202","parent":"341200"},{"name":"颍东区","value":"341203","parent":"341200"},{"name":"颍泉区","value":"341204","parent":"341200"},{"name":"临泉县","value":"341221","parent":"341200"},{"name":"太和县","value":"341222","parent":"341200"},{"name":"阜南县","value":"341225","parent":"341200"},{"name":"颍上县","value":"341226","parent":"341200"},{"name":"界首市","value":"341282","parent":"341200"},{"name":"埇桥区","value":"341302","parent":"341300"},{"name":"砀山县","value":"341321","parent":"341300"},{"name":"萧县","value":"341322","parent":"341300"},{"name":"灵璧县","value":"341323","parent":"341300"},{"name":"泗县","value":"341324","parent":"341300"},{"name":"金安区","value":"341502","parent":"341500"},{"name":"裕安区","value":"341503","parent":"341500"},{"name":"寿县","value":"341521","parent":"341500"},{"name":"霍邱县","value":"341522","parent":"341500"},{"name":"舒城县","value":"341523","parent":"341500"},{"name":"金寨县","value":"341524","parent":"341500"},{"name":"霍山县","value":"341525","parent":"341500"},{"name":"谯城区","value":"341602","parent":"341600"},{"name":"涡阳县","value":"341621","parent":"341600"},{"name":"蒙城县","value":"341622","parent":"341600"},{"name":"利辛县","value":"341623","parent":"341600"},{"name":"贵池区","value":"341702","parent":"341700"},{"name":"东至县","value":"341721","parent":"341700"},{"name":"石台县","value":"341722","parent":"341700"},{"name":"青阳县","value":"341723","parent":"341700"},{"name":"宣州区","value":"341802","parent":"341800"},{"name":"郎溪县","value":"341821","parent":"341800"},{"name":"广德县","value":"341822","parent":"341800"},{"name":"泾县","value":"341823","parent":"341800"},{"name":"绩溪县","value":"341824","parent":"341800"},{"name":"旌德县","value":"341825","parent":"341800"},{"name":"宁国市","value":"341881","parent":"341800"},{"name":"福州市","value":"350100","parent":"350000"},{"name":"厦门市","value":"350200","parent":"350000"},{"name":"莆田市","value":"350300","parent":"350000"},{"name":"三明市","value":"350400","parent":"350000"},{"name":"泉州市","value":"350500","parent":"350000"},{"name":"漳州市","value":"350600","parent":"350000"},{"name":"南平市","value":"350700","parent":"350000"},{"name":"龙岩市","value":"350800","parent":"350000"},{"name":"宁德市","value":"350900","parent":"350000"},{"name":"鼓楼区","value":"350102","parent":"350100"},{"name":"台江区","value":"350103","parent":"350100"},{"name":"仓山区","value":"350104","parent":"350100"},{"name":"马尾区","value":"350105","parent":"350100"},{"name":"晋安区","value":"350111","parent":"350100"},{"name":"闽侯县","value":"350121","parent":"350100"},{"name":"连江县","value":"350122","parent":"350100"},{"name":"罗源县","value":"350123","parent":"350100"},{"name":"闽清县","value":"350124","parent":"350100"},{"name":"永泰县","value":"350125","parent":"350100"},{"name":"平潭县","value":"350128","parent":"350100"},{"name":"福清市","value":"350181","parent":"350100"},{"name":"长乐市","value":"350182","parent":"350100"},{"name":"思明区","value":"350203","parent":"350200"},{"name":"海沧区","value":"350205","parent":"350200"},{"name":"湖里区","value":"350206","parent":"350200"},{"name":"集美区","value":"350211","parent":"350200"},{"name":"同安区","value":"350212","parent":"350200"},{"name":"翔安区","value":"350213","parent":"350200"},{"name":"城厢区","value":"350302","parent":"350300"},{"name":"涵江区","value":"350303","parent":"350300"},{"name":"荔城区","value":"350304","parent":"350300"},{"name":"秀屿区","value":"350305","parent":"350300"},{"name":"仙游县","value":"350322","parent":"350300"},{"name":"梅列区","value":"350402","parent":"350400"},{"name":"三元区","value":"350403","parent":"350400"},{"name":"明溪县","value":"350421","parent":"350400"},{"name":"清流县","value":"350423","parent":"350400"},{"name":"宁化县","value":"350424","parent":"350400"},{"name":"大田县","value":"350425","parent":"350400"},{"name":"尤溪县","value":"350426","parent":"350400"},{"name":"沙县","value":"350427","parent":"350400"},{"name":"将乐县","value":"350428","parent":"350400"},{"name":"泰宁县","value":"350429","parent":"350400"},{"name":"建宁县","value":"350430","parent":"350400"},{"name":"永安市","value":"350481","parent":"350400"},{"name":"鲤城区","value":"350502","parent":"350500"},{"name":"丰泽区","value":"350503","parent":"350500"},{"name":"洛江区","value":"350504","parent":"350500"},{"name":"泉港区","value":"350505","parent":"350500"},{"name":"惠安县","value":"350521","parent":"350500"},{"name":"安溪县","value":"350524","parent":"350500"},{"name":"永春县","value":"350525","parent":"350500"},{"name":"德化县","value":"350526","parent":"350500"},{"name":"金门县","value":"350527","parent":"350500"},{"name":"石狮市","value":"350581","parent":"350500"},{"name":"晋江市","value":"350582","parent":"350500"},{"name":"南安市","value":"350583","parent":"350500"},{"name":"芗城区","value":"350602","parent":"350600"},{"name":"龙文区","value":"350603","parent":"350600"},{"name":"云霄县","value":"350622","parent":"350600"},{"name":"漳浦县","value":"350623","parent":"350600"},{"name":"诏安县","value":"350624","parent":"350600"},{"name":"长泰县","value":"350625","parent":"350600"},{"name":"东山县","value":"350626","parent":"350600"},{"name":"南靖县","value":"350627","parent":"350600"},{"name":"平和县","value":"350628","parent":"350600"},{"name":"华安县","value":"350629","parent":"350600"},{"name":"龙海市","value":"350681","parent":"350600"},{"name":"延平区","value":"350702","parent":"350700"},{"name":"建阳区","value":"350703","parent":"350700"},{"name":"顺昌县","value":"350721","parent":"350700"},{"name":"浦城县","value":"350722","parent":"350700"},{"name":"光泽县","value":"350723","parent":"350700"},{"name":"松溪县","value":"350724","parent":"350700"},{"name":"政和县","value":"350725","parent":"350700"},{"name":"邵武市","value":"350781","parent":"350700"},{"name":"武夷山市","value":"350782","parent":"350700"},{"name":"建瓯市","value":"350783","parent":"350700"},{"name":"新罗区","value":"350802","parent":"350800"},{"name":"永定区","value":"350803","parent":"350800"},{"name":"长汀县","value":"350821","parent":"350800"},{"name":"上杭县","value":"350823","parent":"350800"},{"name":"武平县","value":"350824","parent":"350800"},{"name":"连城县","value":"350825","parent":"350800"},{"name":"漳平市","value":"350881","parent":"350800"},{"name":"蕉城区","value":"350902","parent":"350900"},{"name":"霞浦县","value":"350921","parent":"350900"},{"name":"古田县","value":"350922","parent":"350900"},{"name":"屏南县","value":"350923","parent":"350900"},{"name":"寿宁县","value":"350924","parent":"350900"},{"name":"周宁县","value":"350925","parent":"350900"},{"name":"柘荣县","value":"350926","parent":"350900"},{"name":"福安市","value":"350981","parent":"350900"},{"name":"福鼎市","value":"350982","parent":"350900"},{"name":"南昌市","value":"360100","parent":"360000"},{"name":"景德镇市","value":"360200","parent":"360000"},{"name":"萍乡市","value":"360300","parent":"360000"},{"name":"九江市","value":"360400","parent":"360000"},{"name":"新余市","value":"360500","parent":"360000"},{"name":"鹰潭市","value":"360600","parent":"360000"},{"name":"赣州市","value":"360700","parent":"360000"},{"name":"吉安市","value":"360800","parent":"360000"},{"name":"宜春市","value":"360900","parent":"360000"},{"name":"抚州市","value":"361000","parent":"360000"},{"name":"上饶市","value":"361100","parent":"360000"},{"name":"东湖区","value":"360102","parent":"360100"},{"name":"西湖区","value":"360103","parent":"360100"},{"name":"青云谱区","value":"360104","parent":"360100"},{"name":"湾里区","value":"360105","parent":"360100"},{"name":"青山湖区","value":"360111","parent":"360100"},{"name":"新建区","value":"360112","parent":"360100"},{"name":"南昌县","value":"360121","parent":"360100"},{"name":"安义县","value":"360123","parent":"360100"},{"name":"进贤县","value":"360124","parent":"360100"},{"name":"昌江区","value":"360202","parent":"360200"},{"name":"珠山区","value":"360203","parent":"360200"},{"name":"浮梁县","value":"360222","parent":"360200"},{"name":"乐平市","value":"360281","parent":"360200"},{"name":"安源区","value":"360302","parent":"360300"},{"name":"湘东区","value":"360313","parent":"360300"},{"name":"莲花县","value":"360321","parent":"360300"},{"name":"上栗县","value":"360322","parent":"360300"},{"name":"芦溪县","value":"360323","parent":"360300"},{"name":"庐山区","value":"360402","parent":"360400"},{"name":"浔阳区","value":"360403","parent":"360400"},{"name":"九江县","value":"360421","parent":"360400"},{"name":"武宁县","value":"360423","parent":"360400"},{"name":"修水县","value":"360424","parent":"360400"},{"name":"永修县","value":"360425","parent":"360400"},{"name":"德安县","value":"360426","parent":"360400"},{"name":"星子县","value":"360427","parent":"360400"},{"name":"都昌县","value":"360428","parent":"360400"},{"name":"湖口县","value":"360429","parent":"360400"},{"name":"彭泽县","value":"360430","parent":"360400"},{"name":"瑞昌市","value":"360481","parent":"360400"},{"name":"共青城市","value":"360482","parent":"360400"},{"name":"渝水区","value":"360502","parent":"360500"},{"name":"分宜县","value":"360521","parent":"360500"},{"name":"月湖区","value":"360602","parent":"360600"},{"name":"余江县","value":"360622","parent":"360600"},{"name":"贵溪市","value":"360681","parent":"360600"},{"name":"章贡区","value":"360702","parent":"360700"},{"name":"南康区","value":"360703","parent":"360700"},{"name":"赣县","value":"360721","parent":"360700"},{"name":"信丰县","value":"360722","parent":"360700"},{"name":"大余县","value":"360723","parent":"360700"},{"name":"上犹县","value":"360724","parent":"360700"},{"name":"崇义县","value":"360725","parent":"360700"},{"name":"安远县","value":"360726","parent":"360700"},{"name":"龙南县","value":"360727","parent":"360700"},{"name":"定南县","value":"360728","parent":"360700"},{"name":"全南县","value":"360729","parent":"360700"},{"name":"宁都县","value":"360730","parent":"360700"},{"name":"于都县","value":"360731","parent":"360700"},{"name":"兴国县","value":"360732","parent":"360700"},{"name":"会昌县","value":"360733","parent":"360700"},{"name":"寻乌县","value":"360734","parent":"360700"},{"name":"石城县","value":"360735","parent":"360700"},{"name":"瑞金市","value":"360781","parent":"360700"},{"name":"吉州区","value":"360802","parent":"360800"},{"name":"青原区","value":"360803","parent":"360800"},{"name":"吉安县","value":"360821","parent":"360800"},{"name":"吉水县","value":"360822","parent":"360800"},{"name":"峡江县","value":"360823","parent":"360800"},{"name":"新干县","value":"360824","parent":"360800"},{"name":"永丰县","value":"360825","parent":"360800"},{"name":"泰和县","value":"360826","parent":"360800"},{"name":"遂川县","value":"360827","parent":"360800"},{"name":"万安县","value":"360828","parent":"360800"},{"name":"安福县","value":"360829","parent":"360800"},{"name":"永新县","value":"360830","parent":"360800"},{"name":"井冈山市","value":"360881","parent":"360800"},{"name":"袁州区","value":"360902","parent":"360900"},{"name":"奉新县","value":"360921","parent":"360900"},{"name":"万载县","value":"360922","parent":"360900"},{"name":"上高县","value":"360923","parent":"360900"},{"name":"宜丰县","value":"360924","parent":"360900"},{"name":"靖安县","value":"360925","parent":"360900"},{"name":"铜鼓县","value":"360926","parent":"360900"},{"name":"丰城市","value":"360981","parent":"360900"},{"name":"樟树市","value":"360982","parent":"360900"},{"name":"高安市","value":"360983","parent":"360900"},{"name":"临川区","value":"361002","parent":"361000"},{"name":"南城县","value":"361021","parent":"361000"},{"name":"黎川县","value":"361022","parent":"361000"},{"name":"南丰县","value":"361023","parent":"361000"},{"name":"崇仁县","value":"361024","parent":"361000"},{"name":"乐安县","value":"361025","parent":"361000"},{"name":"宜黄县","value":"361026","parent":"361000"},{"name":"金溪县","value":"361027","parent":"361000"},{"name":"资溪县","value":"361028","parent":"361000"},{"name":"东乡县","value":"361029","parent":"361000"},{"name":"广昌县","value":"361030","parent":"361000"},{"name":"信州区","value":"361102","parent":"361100"},{"name":"广丰区","value":"361103","parent":"361100"},{"name":"上饶县","value":"361121","parent":"361100"},{"name":"玉山县","value":"361123","parent":"361100"},{"name":"铅山县","value":"361124","parent":"361100"},{"name":"横峰县","value":"361125","parent":"361100"},{"name":"弋阳县","value":"361126","parent":"361100"},{"name":"余干县","value":"361127","parent":"361100"},{"name":"鄱阳县","value":"361128","parent":"361100"},{"name":"万年县","value":"361129","parent":"361100"},{"name":"婺源县","value":"361130","parent":"361100"},{"name":"德兴市","value":"361181","parent":"361100"},{"name":"济南市","value":"370100","parent":"370000"},{"name":"青岛市","value":"370200","parent":"370000"},{"name":"淄博市","value":"370300","parent":"370000"},{"name":"枣庄市","value":"370400","parent":"370000"},{"name":"东营市","value":"370500","parent":"370000"},{"name":"烟台市","value":"370600","parent":"370000"},{"name":"潍坊市","value":"370700","parent":"370000"},{"name":"济宁市","value":"370800","parent":"370000"},{"name":"泰安市","value":"370900","parent":"370000"},{"name":"威海市","value":"371000","parent":"370000"},{"name":"日照市","value":"371100","parent":"370000"},{"name":"莱芜市","value":"371200","parent":"370000"},{"name":"临沂市","value":"371300","parent":"370000"},{"name":"德州市","value":"371400","parent":"370000"},{"name":"聊城市","value":"371500","parent":"370000"},{"name":"滨州市","value":"371600","parent":"370000"},{"name":"菏泽市","value":"371700","parent":"370000"},{"name":"历下区","value":"370102","parent":"370100"},{"name":"市中区","value":"370103","parent":"370100"},{"name":"槐荫区","value":"370104","parent":"370100"},{"name":"天桥区","value":"370105","parent":"370100"},{"name":"历城区","value":"370112","parent":"370100"},{"name":"长清区","value":"370113","parent":"370100"},{"name":"平阴县","value":"370124","parent":"370100"},{"name":"济阳县","value":"370125","parent":"370100"},{"name":"商河县","value":"370126","parent":"370100"},{"name":"章丘市","value":"370181","parent":"370100"},{"name":"市南区","value":"370202","parent":"370200"},{"name":"市北区","value":"370203","parent":"370200"},{"name":"黄岛区","value":"370211","parent":"370200"},{"name":"崂山区","value":"370212","parent":"370200"},{"name":"李沧区","value":"370213","parent":"370200"},{"name":"城阳区","value":"370214","parent":"370200"},{"name":"胶州市","value":"370281","parent":"370200"},{"name":"即墨市","value":"370282","parent":"370200"},{"name":"平度市","value":"370283","parent":"370200"},{"name":"莱西市","value":"370285","parent":"370200"},{"name":"淄川区","value":"370302","parent":"370300"},{"name":"张店区","value":"370303","parent":"370300"},{"name":"博山区","value":"370304","parent":"370300"},{"name":"临淄区","value":"370305","parent":"370300"},{"name":"周村区","value":"370306","parent":"370300"},{"name":"桓台县","value":"370321","parent":"370300"},{"name":"高青县","value":"370322","parent":"370300"},{"name":"沂源县","value":"370323","parent":"370300"},{"name":"市中区","value":"370402","parent":"370400"},{"name":"薛城区","value":"370403","parent":"370400"},{"name":"峄城区","value":"370404","parent":"370400"},{"name":"台儿庄区","value":"370405","parent":"370400"},{"name":"山亭区","value":"370406","parent":"370400"},{"name":"滕州市","value":"370481","parent":"370400"},{"name":"东营区","value":"370502","parent":"370500"},{"name":"河口区","value":"370503","parent":"370500"},{"name":"垦利县","value":"370521","parent":"370500"},{"name":"利津县","value":"370522","parent":"370500"},{"name":"广饶县","value":"370523","parent":"370500"},{"name":"芝罘区","value":"370602","parent":"370600"},{"name":"福山区","value":"370611","parent":"370600"},{"name":"牟平区","value":"370612","parent":"370600"},{"name":"莱山区","value":"370613","parent":"370600"},{"name":"长岛县","value":"370634","parent":"370600"},{"name":"龙口市","value":"370681","parent":"370600"},{"name":"莱阳市","value":"370682","parent":"370600"},{"name":"莱州市","value":"370683","parent":"370600"},{"name":"蓬莱市","value":"370684","parent":"370600"},{"name":"招远市","value":"370685","parent":"370600"},{"name":"栖霞市","value":"370686","parent":"370600"},{"name":"海阳市","value":"370687","parent":"370600"},{"name":"潍城区","value":"370702","parent":"370700"},{"name":"寒亭区","value":"370703","parent":"370700"},{"name":"坊子区","value":"370704","parent":"370700"},{"name":"奎文区","value":"370705","parent":"370700"},{"name":"临朐县","value":"370724","parent":"370700"},{"name":"昌乐县","value":"370725","parent":"370700"},{"name":"青州市","value":"370781","parent":"370700"},{"name":"诸城市","value":"370782","parent":"370700"},{"name":"寿光市","value":"370783","parent":"370700"},{"name":"安丘市","value":"370784","parent":"370700"},{"name":"高密市","value":"370785","parent":"370700"},{"name":"昌邑市","value":"370786","parent":"370700"},{"name":"任城区","value":"370811","parent":"370800"},{"name":"兖州区","value":"370812","parent":"370800"},{"name":"微山县","value":"370826","parent":"370800"},{"name":"鱼台县","value":"370827","parent":"370800"},{"name":"金乡县","value":"370828","parent":"370800"},{"name":"嘉祥县","value":"370829","parent":"370800"},{"name":"汶上县","value":"370830","parent":"370800"},{"name":"泗水县","value":"370831","parent":"370800"},{"name":"梁山县","value":"370832","parent":"370800"},{"name":"曲阜市","value":"370881","parent":"370800"},{"name":"邹城市","value":"370883","parent":"370800"},{"name":"泰山区","value":"370902","parent":"370900"},{"name":"岱岳区","value":"370911","parent":"370900"},{"name":"宁阳县","value":"370921","parent":"370900"},{"name":"东平县","value":"370923","parent":"370900"},{"name":"新泰市","value":"370982","parent":"370900"},{"name":"肥城市","value":"370983","parent":"370900"},{"name":"环翠区","value":"371002","parent":"371000"},{"name":"文登区","value":"371003","parent":"371000"},{"name":"荣成市","value":"371082","parent":"371000"},{"name":"乳山市","value":"371083","parent":"371000"},{"name":"东港区","value":"371102","parent":"371100"},{"name":"岚山区","value":"371103","parent":"371100"},{"name":"五莲县","value":"371121","parent":"371100"},{"name":"莒县","value":"371122","parent":"371100"},{"name":"莱城区","value":"371202","parent":"371200"},{"name":"钢城区","value":"371203","parent":"371200"},{"name":"兰山区","value":"371302","parent":"371300"},{"name":"罗庄区","value":"371311","parent":"371300"},{"name":"河东区","value":"371312","parent":"371300"},{"name":"沂南县","value":"371321","parent":"371300"},{"name":"郯城县","value":"371322","parent":"371300"},{"name":"沂水县","value":"371323","parent":"371300"},{"name":"兰陵县","value":"371324","parent":"371300"},{"name":"费县","value":"371325","parent":"371300"},{"name":"平邑县","value":"371326","parent":"371300"},{"name":"莒南县","value":"371327","parent":"371300"},{"name":"蒙阴县","value":"371328","parent":"371300"},{"name":"临沭县","value":"371329","parent":"371300"},{"name":"德城区","value":"371402","parent":"371400"},{"name":"陵城区","value":"371403","parent":"371400"},{"name":"宁津县","value":"371422","parent":"371400"},{"name":"庆云县","value":"371423","parent":"371400"},{"name":"临邑县","value":"371424","parent":"371400"},{"name":"齐河县","value":"371425","parent":"371400"},{"name":"平原县","value":"371426","parent":"371400"},{"name":"夏津县","value":"371427","parent":"371400"},{"name":"武城县","value":"371428","parent":"371400"},{"name":"乐陵市","value":"371481","parent":"371400"},{"name":"禹城市","value":"371482","parent":"371400"},{"name":"东昌府区","value":"371502","parent":"371500"},{"name":"阳谷县","value":"371521","parent":"371500"},{"name":"莘县","value":"371522","parent":"371500"},{"name":"茌平县","value":"371523","parent":"371500"},{"name":"东阿县","value":"371524","parent":"371500"},{"name":"冠县","value":"371525","parent":"371500"},{"name":"高唐县","value":"371526","parent":"371500"},{"name":"临清市","value":"371581","parent":"371500"},{"name":"滨城区","value":"371602","parent":"371600"},{"name":"沾化区","value":"371603","parent":"371600"},{"name":"惠民县","value":"371621","parent":"371600"},{"name":"阳信县","value":"371622","parent":"371600"},{"name":"无棣县","value":"371623","parent":"371600"},{"name":"博兴县","value":"371625","parent":"371600"},{"name":"邹平县","value":"371626","parent":"371600"},{"name":"牡丹区","value":"371702","parent":"371700"},{"name":"曹县","value":"371721","parent":"371700"},{"name":"单县","value":"371722","parent":"371700"},{"name":"成武县","value":"371723","parent":"371700"},{"name":"巨野县","value":"371724","parent":"371700"},{"name":"郓城县","value":"371725","parent":"371700"},{"name":"鄄城县","value":"371726","parent":"371700"},{"name":"定陶县","value":"371727","parent":"371700"},{"name":"东明县","value":"371728","parent":"371700"},{"name":"郑州市","value":"410100","parent":"410000"},{"name":"开封市","value":"410200","parent":"410000"},{"name":"洛阳市","value":"410300","parent":"410000"},{"name":"平顶山市","value":"410400","parent":"410000"},{"name":"安阳市","value":"410500","parent":"410000"},{"name":"鹤壁市","value":"410600","parent":"410000"},{"name":"新乡市","value":"410700","parent":"410000"},{"name":"焦作市","value":"410800","parent":"410000"},{"name":"濮阳市","value":"410900","parent":"410000"},{"name":"许昌市","value":"411000","parent":"410000"},{"name":"漯河市","value":"411100","parent":"410000"},{"name":"三门峡市","value":"411200","parent":"410000"},{"name":"南阳市","value":"411300","parent":"410000"},{"name":"商丘市","value":"411400","parent":"410000"},{"name":"信阳市","value":"411500","parent":"410000"},{"name":"周口市","value":"411600","parent":"410000"},{"name":"驻马店市","value":"411700","parent":"410000"},{"name":"济源市","value":"419001","parent":"410000"},{"name":"中原区","value":"410102","parent":"410100"},{"name":"二七区","value":"410103","parent":"410100"},{"name":"管城回族区","value":"410104","parent":"410100"},{"name":"金水区","value":"410105","parent":"410100"},{"name":"上街区","value":"410106","parent":"410100"},{"name":"惠济区","value":"410108","parent":"410100"},{"name":"中牟县","value":"410122","parent":"410100"},{"name":"巩义市","value":"410181","parent":"410100"},{"name":"荥阳市","value":"410182","parent":"410100"},{"name":"新密市","value":"410183","parent":"410100"},{"name":"新郑市","value":"410184","parent":"410100"},{"name":"登封市","value":"410185","parent":"410100"},{"name":"龙亭区","value":"410202","parent":"410200"},{"name":"顺河回族区","value":"410203","parent":"410200"},{"name":"鼓楼区","value":"410204","parent":"410200"},{"name":"禹王台区","value":"410205","parent":"410200"},{"name":"金明区","value":"410211","parent":"410200"},{"name":"祥符区","value":"410212","parent":"410200"},{"name":"杞县","value":"410221","parent":"410200"},{"name":"通许县","value":"410222","parent":"410200"},{"name":"尉氏县","value":"410223","parent":"410200"},{"name":"兰考县","value":"410225","parent":"410200"},{"name":"老城区","value":"410302","parent":"410300"},{"name":"西工区","value":"410303","parent":"410300"},{"name":"瀍河回族区","value":"410304","parent":"410300"},{"name":"涧西区","value":"410305","parent":"410300"},{"name":"吉利区","value":"410306","parent":"410300"},{"name":"洛龙区","value":"410311","parent":"410300"},{"name":"孟津县","value":"410322","parent":"410300"},{"name":"新安县","value":"410323","parent":"410300"},{"name":"栾川县","value":"410324","parent":"410300"},{"name":"嵩县","value":"410325","parent":"410300"},{"name":"汝阳县","value":"410326","parent":"410300"},{"name":"宜阳县","value":"410327","parent":"410300"},{"name":"洛宁县","value":"410328","parent":"410300"},{"name":"伊川县","value":"410329","parent":"410300"},{"name":"偃师市","value":"410381","parent":"410300"},{"name":"新华区","value":"410402","parent":"410400"},{"name":"卫东区","value":"410403","parent":"410400"},{"name":"石龙区","value":"410404","parent":"410400"},{"name":"湛河区","value":"410411","parent":"410400"},{"name":"宝丰县","value":"410421","parent":"410400"},{"name":"叶县","value":"410422","parent":"410400"},{"name":"鲁山县","value":"410423","parent":"410400"},{"name":"郏县","value":"410425","parent":"410400"},{"name":"舞钢市","value":"410481","parent":"410400"},{"name":"汝州市","value":"410482","parent":"410400"},{"name":"文峰区","value":"410502","parent":"410500"},{"name":"北关区","value":"410503","parent":"410500"},{"name":"殷都区","value":"410505","parent":"410500"},{"name":"龙安区","value":"410506","parent":"410500"},{"name":"安阳县","value":"410522","parent":"410500"},{"name":"汤阴县","value":"410523","parent":"410500"},{"name":"滑县","value":"410526","parent":"410500"},{"name":"内黄县","value":"410527","parent":"410500"},{"name":"林州市","value":"410581","parent":"410500"},{"name":"鹤山区","value":"410602","parent":"410600"},{"name":"山城区","value":"410603","parent":"410600"},{"name":"淇滨区","value":"410611","parent":"410600"},{"name":"浚县","value":"410621","parent":"410600"},{"name":"淇县","value":"410622","parent":"410600"},{"name":"红旗区","value":"410702","parent":"410700"},{"name":"卫滨区","value":"410703","parent":"410700"},{"name":"凤泉区","value":"410704","parent":"410700"},{"name":"牧野区","value":"410711","parent":"410700"},{"name":"新乡县","value":"410721","parent":"410700"},{"name":"获嘉县","value":"410724","parent":"410700"},{"name":"原阳县","value":"410725","parent":"410700"},{"name":"延津县","value":"410726","parent":"410700"},{"name":"封丘县","value":"410727","parent":"410700"},{"name":"长垣县","value":"410728","parent":"410700"},{"name":"卫辉市","value":"410781","parent":"410700"},{"name":"辉县市","value":"410782","parent":"410700"},{"name":"解放区","value":"410802","parent":"410800"},{"name":"中站区","value":"410803","parent":"410800"},{"name":"马村区","value":"410804","parent":"410800"},{"name":"山阳区","value":"410811","parent":"410800"},{"name":"修武县","value":"410821","parent":"410800"},{"name":"博爱县","value":"410822","parent":"410800"},{"name":"武陟县","value":"410823","parent":"410800"},{"name":"温县","value":"410825","parent":"410800"},{"name":"沁阳市","value":"410882","parent":"410800"},{"name":"孟州市","value":"410883","parent":"410800"},{"name":"华龙区","value":"410902","parent":"410900"},{"name":"清丰县","value":"410922","parent":"410900"},{"name":"南乐县","value":"410923","parent":"410900"},{"name":"范县","value":"410926","parent":"410900"},{"name":"台前县","value":"410927","parent":"410900"},{"name":"濮阳县","value":"410928","parent":"410900"},{"name":"魏都区","value":"411002","parent":"411000"},{"name":"许昌县","value":"411023","parent":"411000"},{"name":"鄢陵县","value":"411024","parent":"411000"},{"name":"襄城县","value":"411025","parent":"411000"},{"name":"禹州市","value":"411081","parent":"411000"},{"name":"长葛市","value":"411082","parent":"411000"},{"name":"源汇区","value":"411102","parent":"411100"},{"name":"郾城区","value":"411103","parent":"411100"},{"name":"召陵区","value":"411104","parent":"411100"},{"name":"舞阳县","value":"411121","parent":"411100"},{"name":"临颍县","value":"411122","parent":"411100"},{"name":"湖滨区","value":"411202","parent":"411200"},{"name":"渑池县","value":"411221","parent":"411200"},{"name":"陕县","value":"411222","parent":"411200"},{"name":"卢氏县","value":"411224","parent":"411200"},{"name":"义马市","value":"411281","parent":"411200"},{"name":"灵宝市","value":"411282","parent":"411200"},{"name":"宛城区","value":"411302","parent":"411300"},{"name":"卧龙区","value":"411303","parent":"411300"},{"name":"南召县","value":"411321","parent":"411300"},{"name":"方城县","value":"411322","parent":"411300"},{"name":"西峡县","value":"411323","parent":"411300"},{"name":"镇平县","value":"411324","parent":"411300"},{"name":"内乡县","value":"411325","parent":"411300"},{"name":"淅川县","value":"411326","parent":"411300"},{"name":"社旗县","value":"411327","parent":"411300"},{"name":"唐河县","value":"411328","parent":"411300"},{"name":"新野县","value":"411329","parent":"411300"},{"name":"桐柏县","value":"411330","parent":"411300"},{"name":"邓州市","value":"411381","parent":"411300"},{"name":"梁园区","value":"411402","parent":"411400"},{"name":"睢阳区","value":"411403","parent":"411400"},{"name":"民权县","value":"411421","parent":"411400"},{"name":"睢县","value":"411422","parent":"411400"},{"name":"宁陵县","value":"411423","parent":"411400"},{"name":"柘城县","value":"411424","parent":"411400"},{"name":"虞城县","value":"411425","parent":"411400"},{"name":"夏邑县","value":"411426","parent":"411400"},{"name":"永城市","value":"411481","parent":"411400"},{"name":"浉河区","value":"411502","parent":"411500"},{"name":"平桥区","value":"411503","parent":"411500"},{"name":"罗山县","value":"411521","parent":"411500"},{"name":"光山县","value":"411522","parent":"411500"},{"name":"新县","value":"411523","parent":"411500"},{"name":"商城县","value":"411524","parent":"411500"},{"name":"固始县","value":"411525","parent":"411500"},{"name":"潢川县","value":"411526","parent":"411500"},{"name":"淮滨县","value":"411527","parent":"411500"},{"name":"息县","value":"411528","parent":"411500"},{"name":"川汇区","value":"411602","parent":"411600"},{"name":"扶沟县","value":"411621","parent":"411600"},{"name":"西华县","value":"411622","parent":"411600"},{"name":"商水县","value":"411623","parent":"411600"},{"name":"沈丘县","value":"411624","parent":"411600"},{"name":"郸城县","value":"411625","parent":"411600"},{"name":"淮阳县","value":"411626","parent":"411600"},{"name":"太康县","value":"411627","parent":"411600"},{"name":"鹿邑县","value":"411628","parent":"411600"},{"name":"项城市","value":"411681","parent":"411600"},{"name":"驿城区","value":"411702","parent":"411700"},{"name":"西平县","value":"411721","parent":"411700"},{"name":"上蔡县","value":"411722","parent":"411700"},{"name":"平舆县","value":"411723","parent":"411700"},{"name":"正阳县","value":"411724","parent":"411700"},{"name":"确山县","value":"411725","parent":"411700"},{"name":"泌阳县","value":"411726","parent":"411700"},{"name":"汝南县","value":"411727","parent":"411700"},{"name":"遂平县","value":"411728","parent":"411700"},{"name":"新蔡县","value":"411729","parent":"411700"},{"name":"武汉市","value":"420100","parent":"420000"},{"name":"黄石市","value":"420200","parent":"420000"},{"name":"十堰市","value":"420300","parent":"420000"},{"name":"宜昌市","value":"420500","parent":"420000"},{"name":"襄阳市","value":"420600","parent":"420000"},{"name":"鄂州市","value":"420700","parent":"420000"},{"name":"荆门市","value":"420800","parent":"420000"},{"name":"孝感市","value":"420900","parent":"420000"},{"name":"荆州市","value":"421000","parent":"420000"},{"name":"黄冈市","value":"421100","parent":"420000"},{"name":"咸宁市","value":"421200","parent":"420000"},{"name":"随州市","value":"421300","parent":"420000"},{"name":"恩施土家族苗族自治州","value":"422800","parent":"420000"},{"name":"仙桃市","value":"429004","parent":"420000"},{"name":"潜江市","value":"429005","parent":"420000"},{"name":"天门市","value":"429006","parent":"420000"},{"name":"神农架林区","value":"429021","parent":"420000"},{"name":"江岸区","value":"420102","parent":"420100"},{"name":"江汉区","value":"420103","parent":"420100"},{"name":"硚口区","value":"420104","parent":"420100"},{"name":"汉阳区","value":"420105","parent":"420100"},{"name":"武昌区","value":"420106","parent":"420100"},{"name":"青山区","value":"420107","parent":"420100"},{"name":"洪山区","value":"420111","parent":"420100"},{"name":"东西湖区","value":"420112","parent":"420100"},{"name":"汉南区","value":"420113","parent":"420100"},{"name":"蔡甸区","value":"420114","parent":"420100"},{"name":"江夏区","value":"420115","parent":"420100"},{"name":"黄陂区","value":"420116","parent":"420100"},{"name":"新洲区","value":"420117","parent":"420100"},{"name":"黄石港区","value":"420202","parent":"420200"},{"name":"西塞山区","value":"420203","parent":"420200"},{"name":"下陆区","value":"420204","parent":"420200"},{"name":"铁山区","value":"420205","parent":"420200"},{"name":"阳新县","value":"420222","parent":"420200"},{"name":"大冶市","value":"420281","parent":"420200"},{"name":"茅箭区","value":"420302","parent":"420300"},{"name":"张湾区","value":"420303","parent":"420300"},{"name":"郧阳区","value":"420304","parent":"420300"},{"name":"郧西县","value":"420322","parent":"420300"},{"name":"竹山县","value":"420323","parent":"420300"},{"name":"竹溪县","value":"420324","parent":"420300"},{"name":"房县","value":"420325","parent":"420300"},{"name":"丹江口市","value":"420381","parent":"420300"},{"name":"西陵区","value":"420502","parent":"420500"},{"name":"伍家岗区","value":"420503","parent":"420500"},{"name":"点军区","value":"420504","parent":"420500"},{"name":"猇亭区","value":"420505","parent":"420500"},{"name":"夷陵区","value":"420506","parent":"420500"},{"name":"远安县","value":"420525","parent":"420500"},{"name":"兴山县","value":"420526","parent":"420500"},{"name":"秭归县","value":"420527","parent":"420500"},{"name":"长阳土家族自治县","value":"420528","parent":"420500"},{"name":"五峰土家族自治县","value":"420529","parent":"420500"},{"name":"宜都市","value":"420581","parent":"420500"},{"name":"当阳市","value":"420582","parent":"420500"},{"name":"枝江市","value":"420583","parent":"420500"},{"name":"襄城区","value":"420602","parent":"420600"},{"name":"樊城区","value":"420606","parent":"420600"},{"name":"襄州区","value":"420607","parent":"420600"},{"name":"南漳县","value":"420624","parent":"420600"},{"name":"谷城县","value":"420625","parent":"420600"},{"name":"保康县","value":"420626","parent":"420600"},{"name":"老河口市","value":"420682","parent":"420600"},{"name":"枣阳市","value":"420683","parent":"420600"},{"name":"宜城市","value":"420684","parent":"420600"},{"name":"梁子湖区","value":"420702","parent":"420700"},{"name":"华容区","value":"420703","parent":"420700"},{"name":"鄂城区","value":"420704","parent":"420700"},{"name":"东宝区","value":"420802","parent":"420800"},{"name":"掇刀区","value":"420804","parent":"420800"},{"name":"京山县","value":"420821","parent":"420800"},{"name":"沙洋县","value":"420822","parent":"420800"},{"name":"钟祥市","value":"420881","parent":"420800"},{"name":"孝南区","value":"420902","parent":"420900"},{"name":"孝昌县","value":"420921","parent":"420900"},{"name":"大悟县","value":"420922","parent":"420900"},{"name":"云梦县","value":"420923","parent":"420900"},{"name":"应城市","value":"420981","parent":"420900"},{"name":"安陆市","value":"420982","parent":"420900"},{"name":"汉川市","value":"420984","parent":"420900"},{"name":"沙市区","value":"421002","parent":"421000"},{"name":"荆州区","value":"421003","parent":"421000"},{"name":"公安县","value":"421022","parent":"421000"},{"name":"监利县","value":"421023","parent":"421000"},{"name":"江陵县","value":"421024","parent":"421000"},{"name":"石首市","value":"421081","parent":"421000"},{"name":"洪湖市","value":"421083","parent":"421000"},{"name":"松滋市","value":"421087","parent":"421000"},{"name":"黄州区","value":"421102","parent":"421100"},{"name":"团风县","value":"421121","parent":"421100"},{"name":"红安县","value":"421122","parent":"421100"},{"name":"罗田县","value":"421123","parent":"421100"},{"name":"英山县","value":"421124","parent":"421100"},{"name":"浠水县","value":"421125","parent":"421100"},{"name":"蕲春县","value":"421126","parent":"421100"},{"name":"黄梅县","value":"421127","parent":"421100"},{"name":"麻城市","value":"421181","parent":"421100"},{"name":"武穴市","value":"421182","parent":"421100"},{"name":"咸安区","value":"421202","parent":"421200"},{"name":"嘉鱼县","value":"421221","parent":"421200"},{"name":"通城县","value":"421222","parent":"421200"},{"name":"崇阳县","value":"421223","parent":"421200"},{"name":"通山县","value":"421224","parent":"421200"},{"name":"赤壁市","value":"421281","parent":"421200"},{"name":"曾都区","value":"421303","parent":"421300"},{"name":"随县","value":"421321","parent":"421300"},{"name":"广水市","value":"421381","parent":"421300"},{"name":"恩施市","value":"422801","parent":"422800"},{"name":"利川市","value":"422802","parent":"422800"},{"name":"建始县","value":"422822","parent":"422800"},{"name":"巴东县","value":"422823","parent":"422800"},{"name":"宣恩县","value":"422825","parent":"422800"},{"name":"咸丰县","value":"422826","parent":"422800"},{"name":"来凤县","value":"422827","parent":"422800"},{"name":"鹤峰县","value":"422828","parent":"422800"},{"name":"长沙市","value":"430100","parent":"430000"},{"name":"株洲市","value":"430200","parent":"430000"},{"name":"湘潭市","value":"430300","parent":"430000"},{"name":"衡阳市","value":"430400","parent":"430000"},{"name":"邵阳市","value":"430500","parent":"430000"},{"name":"岳阳市","value":"430600","parent":"430000"},{"name":"常德市","value":"430700","parent":"430000"},{"name":"张家界市","value":"430800","parent":"430000"},{"name":"益阳市","value":"430900","parent":"430000"},{"name":"郴州市","value":"431000","parent":"430000"},{"name":"永州市","value":"431100","parent":"430000"},{"name":"怀化市","value":"431200","parent":"430000"},{"name":"娄底市","value":"431300","parent":"430000"},{"name":"湘西土家族苗族自治州","value":"433100","parent":"430000"},{"name":"芙蓉区","value":"430102","parent":"430100"},{"name":"天心区","value":"430103","parent":"430100"},{"name":"岳麓区","value":"430104","parent":"430100"},{"name":"开福区","value":"430105","parent":"430100"},{"name":"雨花区","value":"430111","parent":"430100"},{"name":"望城区","value":"430112","parent":"430100"},{"name":"长沙县","value":"430121","parent":"430100"},{"name":"宁乡县","value":"430124","parent":"430100"},{"name":"浏阳市","value":"430181","parent":"430100"},{"name":"荷塘区","value":"430202","parent":"430200"},{"name":"芦淞区","value":"430203","parent":"430200"},{"name":"石峰区","value":"430204","parent":"430200"},{"name":"天元区","value":"430211","parent":"430200"},{"name":"株洲县","value":"430221","parent":"430200"},{"name":"攸县","value":"430223","parent":"430200"},{"name":"茶陵县","value":"430224","parent":"430200"},{"name":"炎陵县","value":"430225","parent":"430200"},{"name":"醴陵市","value":"430281","parent":"430200"},{"name":"雨湖区","value":"430302","parent":"430300"},{"name":"岳塘区","value":"430304","parent":"430300"},{"name":"湘潭县","value":"430321","parent":"430300"},{"name":"湘乡市","value":"430381","parent":"430300"},{"name":"韶山市","value":"430382","parent":"430300"},{"name":"珠晖区","value":"430405","parent":"430400"},{"name":"雁峰区","value":"430406","parent":"430400"},{"name":"石鼓区","value":"430407","parent":"430400"},{"name":"蒸湘区","value":"430408","parent":"430400"},{"name":"南岳区","value":"430412","parent":"430400"},{"name":"衡阳县","value":"430421","parent":"430400"},{"name":"衡南县","value":"430422","parent":"430400"},{"name":"衡山县","value":"430423","parent":"430400"},{"name":"衡东县","value":"430424","parent":"430400"},{"name":"祁东县","value":"430426","parent":"430400"},{"name":"耒阳市","value":"430481","parent":"430400"},{"name":"常宁市","value":"430482","parent":"430400"},{"name":"双清区","value":"430502","parent":"430500"},{"name":"大祥区","value":"430503","parent":"430500"},{"name":"北塔区","value":"430511","parent":"430500"},{"name":"邵东县","value":"430521","parent":"430500"},{"name":"新邵县","value":"430522","parent":"430500"},{"name":"邵阳县","value":"430523","parent":"430500"},{"name":"隆回县","value":"430524","parent":"430500"},{"name":"洞口县","value":"430525","parent":"430500"},{"name":"绥宁县","value":"430527","parent":"430500"},{"name":"新宁县","value":"430528","parent":"430500"},{"name":"城步苗族自治县","value":"430529","parent":"430500"},{"name":"武冈市","value":"430581","parent":"430500"},{"name":"岳阳楼区","value":"430602","parent":"430600"},{"name":"云溪区","value":"430603","parent":"430600"},{"name":"君山区","value":"430611","parent":"430600"},{"name":"岳阳县","value":"430621","parent":"430600"},{"name":"华容县","value":"430623","parent":"430600"},{"name":"湘阴县","value":"430624","parent":"430600"},{"name":"平江县","value":"430626","parent":"430600"},{"name":"汨罗市","value":"430681","parent":"430600"},{"name":"临湘市","value":"430682","parent":"430600"},{"name":"武陵区","value":"430702","parent":"430700"},{"name":"鼎城区","value":"430703","parent":"430700"},{"name":"安乡县","value":"430721","parent":"430700"},{"name":"汉寿县","value":"430722","parent":"430700"},{"name":"澧县","value":"430723","parent":"430700"},{"name":"临澧县","value":"430724","parent":"430700"},{"name":"桃源县","value":"430725","parent":"430700"},{"name":"石门县","value":"430726","parent":"430700"},{"name":"津市市","value":"430781","parent":"430700"},{"name":"永定区","value":"430802","parent":"430800"},{"name":"武陵源区","value":"430811","parent":"430800"},{"name":"慈利县","value":"430821","parent":"430800"},{"name":"桑植县","value":"430822","parent":"430800"},{"name":"资阳区","value":"430902","parent":"430900"},{"name":"赫山区","value":"430903","parent":"430900"},{"name":"南县","value":"430921","parent":"430900"},{"name":"桃江县","value":"430922","parent":"430900"},{"name":"安化县","value":"430923","parent":"430900"},{"name":"沅江市","value":"430981","parent":"430900"},{"name":"北湖区","value":"431002","parent":"431000"},{"name":"苏仙区","value":"431003","parent":"431000"},{"name":"桂阳县","value":"431021","parent":"431000"},{"name":"宜章县","value":"431022","parent":"431000"},{"name":"永兴县","value":"431023","parent":"431000"},{"name":"嘉禾县","value":"431024","parent":"431000"},{"name":"临武县","value":"431025","parent":"431000"},{"name":"汝城县","value":"431026","parent":"431000"},{"name":"桂东县","value":"431027","parent":"431000"},{"name":"安仁县","value":"431028","parent":"431000"},{"name":"资兴市","value":"431081","parent":"431000"},{"name":"零陵区","value":"431102","parent":"431100"},{"name":"冷水滩区","value":"431103","parent":"431100"},{"name":"祁阳县","value":"431121","parent":"431100"},{"name":"东安县","value":"431122","parent":"431100"},{"name":"双牌县","value":"431123","parent":"431100"},{"name":"道县","value":"431124","parent":"431100"},{"name":"江永县","value":"431125","parent":"431100"},{"name":"宁远县","value":"431126","parent":"431100"},{"name":"蓝山县","value":"431127","parent":"431100"},{"name":"新田县","value":"431128","parent":"431100"},{"name":"江华瑶族自治县","value":"431129","parent":"431100"},{"name":"鹤城区","value":"431202","parent":"431200"},{"name":"中方县","value":"431221","parent":"431200"},{"name":"沅陵县","value":"431222","parent":"431200"},{"name":"辰溪县","value":"431223","parent":"431200"},{"name":"溆浦县","value":"431224","parent":"431200"},{"name":"会同县","value":"431225","parent":"431200"},{"name":"麻阳苗族自治县","value":"431226","parent":"431200"},{"name":"新晃侗族自治县","value":"431227","parent":"431200"},{"name":"芷江侗族自治县","value":"431228","parent":"431200"},{"name":"靖州苗族侗族自治县","value":"431229","parent":"431200"},{"name":"通道侗族自治县","value":"431230","parent":"431200"},{"name":"洪江市","value":"431281","parent":"431200"},{"name":"娄星区","value":"431302","parent":"431300"},{"name":"双峰县","value":"431321","parent":"431300"},{"name":"新化县","value":"431322","parent":"431300"},{"name":"冷水江市","value":"431381","parent":"431300"},{"name":"涟源市","value":"431382","parent":"431300"},{"name":"吉首市","value":"433101","parent":"433100"},{"name":"泸溪县","value":"433122","parent":"433100"},{"name":"凤凰县","value":"433123","parent":"433100"},{"name":"花垣县","value":"433124","parent":"433100"},{"name":"保靖县","value":"433125","parent":"433100"},{"name":"古丈县","value":"433126","parent":"433100"},{"name":"永顺县","value":"433127","parent":"433100"},{"name":"龙山县","value":"433130","parent":"433100"},{"name":"广州市","value":"440100","parent":"440000"},{"name":"韶关市","value":"440200","parent":"440000"},{"name":"深圳市","value":"440300","parent":"440000"},{"name":"珠海市","value":"440400","parent":"440000"},{"name":"汕头市","value":"440500","parent":"440000"},{"name":"佛山市","value":"440600","parent":"440000"},{"name":"江门市","value":"440700","parent":"440000"},{"name":"湛江市","value":"440800","parent":"440000"},{"name":"茂名市","value":"440900","parent":"440000"},{"name":"肇庆市","value":"441200","parent":"440000"},{"name":"惠州市","value":"441300","parent":"440000"},{"name":"梅州市","value":"441400","parent":"440000"},{"name":"汕尾市","value":"441500","parent":"440000"},{"name":"河源市","value":"441600","parent":"440000"},{"name":"阳江市","value":"441700","parent":"440000"},{"name":"清远市","value":"441800","parent":"440000"},{"name":"东莞市","value":"441900","parent":"440000"},{"name":"中山市","value":"442000","parent":"440000"},{"name":"潮州市","value":"445100","parent":"440000"},{"name":"揭阳市","value":"445200","parent":"440000"},{"name":"云浮市","value":"445300","parent":"440000"},{"name":"荔湾区","value":"440103","parent":"440100"},{"name":"越秀区","value":"440104","parent":"440100"},{"name":"海珠区","value":"440105","parent":"440100"},{"name":"天河区","value":"440106","parent":"440100"},{"name":"白云区","value":"440111","parent":"440100"},{"name":"黄埔区","value":"440112","parent":"440100"},{"name":"番禺区","value":"440113","parent":"440100"},{"name":"花都区","value":"440114","parent":"440100"},{"name":"南沙区","value":"440115","parent":"440100"},{"name":"从化区","value":"440117","parent":"440100"},{"name":"增城区","value":"440118","parent":"440100"},{"name":"武江区","value":"440203","parent":"440200"},{"name":"浈江区","value":"440204","parent":"440200"},{"name":"曲江区","value":"440205","parent":"440200"},{"name":"始兴县","value":"440222","parent":"440200"},{"name":"仁化县","value":"440224","parent":"440200"},{"name":"翁源县","value":"440229","parent":"440200"},{"name":"乳源瑶族自治县","value":"440232","parent":"440200"},{"name":"新丰县","value":"440233","parent":"440200"},{"name":"乐昌市","value":"440281","parent":"440200"},{"name":"南雄市","value":"440282","parent":"440200"},{"name":"罗湖区","value":"440303","parent":"440300"},{"name":"福田区","value":"440304","parent":"440300"},{"name":"南山区","value":"440305","parent":"440300"},{"name":"宝安区","value":"440306","parent":"440300"},{"name":"龙岗区","value":"440307","parent":"440300"},{"name":"盐田区","value":"440308","parent":"440300"},{"name":"香洲区","value":"440402","parent":"440400"},{"name":"斗门区","value":"440403","parent":"440400"},{"name":"金湾区","value":"440404","parent":"440400"},{"name":"龙湖区","value":"440507","parent":"440500"},{"name":"金平区","value":"440511","parent":"440500"},{"name":"濠江区","value":"440512","parent":"440500"},{"name":"潮阳区","value":"440513","parent":"440500"},{"name":"潮南区","value":"440514","parent":"440500"},{"name":"澄海区","value":"440515","parent":"440500"},{"name":"南澳县","value":"440523","parent":"440500"},{"name":"禅城区","value":"440604","parent":"440600"},{"name":"南海区","value":"440605","parent":"440600"},{"name":"顺德区","value":"440606","parent":"440600"},{"name":"三水区","value":"440607","parent":"440600"},{"name":"高明区","value":"440608","parent":"440600"},{"name":"蓬江区","value":"440703","parent":"440700"},{"name":"江海区","value":"440704","parent":"440700"},{"name":"新会区","value":"440705","parent":"440700"},{"name":"台山市","value":"440781","parent":"440700"},{"name":"开平市","value":"440783","parent":"440700"},{"name":"鹤山市","value":"440784","parent":"440700"},{"name":"恩平市","value":"440785","parent":"440700"},{"name":"赤坎区","value":"440802","parent":"440800"},{"name":"霞山区","value":"440803","parent":"440800"},{"name":"坡头区","value":"440804","parent":"440800"},{"name":"麻章区","value":"440811","parent":"440800"},{"name":"遂溪县","value":"440823","parent":"440800"},{"name":"徐闻县","value":"440825","parent":"440800"},{"name":"廉江市","value":"440881","parent":"440800"},{"name":"雷州市","value":"440882","parent":"440800"},{"name":"吴川市","value":"440883","parent":"440800"},{"name":"茂南区","value":"440902","parent":"440900"},{"name":"电白区","value":"440904","parent":"440900"},{"name":"高州市","value":"440981","parent":"440900"},{"name":"化州市","value":"440982","parent":"440900"},{"name":"信宜市","value":"440983","parent":"440900"},{"name":"端州区","value":"441202","parent":"441200"},{"name":"鼎湖区","value":"441203","parent":"441200"},{"name":"高要区","value":"441204","parent":"441200"},{"name":"广宁县","value":"441223","parent":"441200"},{"name":"怀集县","value":"441224","parent":"441200"},{"name":"封开县","value":"441225","parent":"441200"},{"name":"德庆县","value":"441226","parent":"441200"},{"name":"四会市","value":"441284","parent":"441200"},{"name":"惠城区","value":"441302","parent":"441300"},{"name":"惠阳区","value":"441303","parent":"441300"},{"name":"博罗县","value":"441322","parent":"441300"},{"name":"惠东县","value":"441323","parent":"441300"},{"name":"龙门县","value":"441324","parent":"441300"},{"name":"梅江区","value":"441402","parent":"441400"},{"name":"梅县区","value":"441403","parent":"441400"},{"name":"大埔县","value":"441422","parent":"441400"},{"name":"丰顺县","value":"441423","parent":"441400"},{"name":"五华县","value":"441424","parent":"441400"},{"name":"平远县","value":"441426","parent":"441400"},{"name":"蕉岭县","value":"441427","parent":"441400"},{"name":"兴宁市","value":"441481","parent":"441400"},{"name":"城区","value":"441502","parent":"441500"},{"name":"海丰县","value":"441521","parent":"441500"},{"name":"陆河县","value":"441523","parent":"441500"},{"name":"陆丰市","value":"441581","parent":"441500"},{"name":"源城区","value":"441602","parent":"441600"},{"name":"紫金县","value":"441621","parent":"441600"},{"name":"龙川县","value":"441622","parent":"441600"},{"name":"连平县","value":"441623","parent":"441600"},{"name":"和平县","value":"441624","parent":"441600"},{"name":"东源县","value":"441625","parent":"441600"},{"name":"江城区","value":"441702","parent":"441700"},{"name":"阳东区","value":"441704","parent":"441700"},{"name":"阳西县","value":"441721","parent":"441700"},{"name":"阳春市","value":"441781","parent":"441700"},{"name":"清城区","value":"441802","parent":"441800"},{"name":"清新区","value":"441803","parent":"441800"},{"name":"佛冈县","value":"441821","parent":"441800"},{"name":"阳山县","value":"441823","parent":"441800"},{"name":"连山壮族瑶族自治县","value":"441825","parent":"441800"},{"name":"连南瑶族自治县","value":"441826","parent":"441800"},{"name":"英德市","value":"441881","parent":"441800"},{"name":"连州市","value":"441882","parent":"441800"},{"name":"湘桥区","value":"445102","parent":"445100"},{"name":"潮安区","value":"445103","parent":"445100"},{"name":"饶平县","value":"445122","parent":"445100"},{"name":"榕城区","value":"445202","parent":"445200"},{"name":"揭东区","value":"445203","parent":"445200"},{"name":"揭西县","value":"445222","parent":"445200"},{"name":"惠来县","value":"445224","parent":"445200"},{"name":"普宁市","value":"445281","parent":"445200"},{"name":"云城区","value":"445302","parent":"445300"},{"name":"云安区","value":"445303","parent":"445300"},{"name":"新兴县","value":"445321","parent":"445300"},{"name":"郁南县","value":"445322","parent":"445300"},{"name":"罗定市","value":"445381","parent":"445300"},{"name":"南宁市","value":"450100","parent":"450000"},{"name":"柳州市","value":"450200","parent":"450000"},{"name":"桂林市","value":"450300","parent":"450000"},{"name":"梧州市","value":"450400","parent":"450000"},{"name":"北海市","value":"450500","parent":"450000"},{"name":"防城港市","value":"450600","parent":"450000"},{"name":"钦州市","value":"450700","parent":"450000"},{"name":"贵港市","value":"450800","parent":"450000"},{"name":"玉林市","value":"450900","parent":"450000"},{"name":"百色市","value":"451000","parent":"450000"},{"name":"贺州市","value":"451100","parent":"450000"},{"name":"河池市","value":"451200","parent":"450000"},{"name":"来宾市","value":"451300","parent":"450000"},{"name":"崇左市","value":"451400","parent":"450000"},{"name":"兴宁区","value":"450102","parent":"450100"},{"name":"青秀区","value":"450103","parent":"450100"},{"name":"江南区","value":"450105","parent":"450100"},{"name":"西乡塘区","value":"450107","parent":"450100"},{"name":"良庆区","value":"450108","parent":"450100"},{"name":"邕宁区","value":"450109","parent":"450100"},{"name":"武鸣区","value":"450110","parent":"450100"},{"name":"隆安县","value":"450123","parent":"450100"},{"name":"马山县","value":"450124","parent":"450100"},{"name":"上林县","value":"450125","parent":"450100"},{"name":"宾阳县","value":"450126","parent":"450100"},{"name":"横县","value":"450127","parent":"450100"},{"name":"城中区","value":"450202","parent":"450200"},{"name":"鱼峰区","value":"450203","parent":"450200"},{"name":"柳南区","value":"450204","parent":"450200"},{"name":"柳北区","value":"450205","parent":"450200"},{"name":"柳江县","value":"450221","parent":"450200"},{"name":"柳城县","value":"450222","parent":"450200"},{"name":"鹿寨县","value":"450223","parent":"450200"},{"name":"融安县","value":"450224","parent":"450200"},{"name":"融水苗族自治县","value":"450225","parent":"450200"},{"name":"三江侗族自治县","value":"450226","parent":"450200"},{"name":"秀峰区","value":"450302","parent":"450300"},{"name":"叠彩区","value":"450303","parent":"450300"},{"name":"象山区","value":"450304","parent":"450300"},{"name":"七星区","value":"450305","parent":"450300"},{"name":"雁山区","value":"450311","parent":"450300"},{"name":"临桂区","value":"450312","parent":"450300"},{"name":"阳朔县","value":"450321","parent":"450300"},{"name":"灵川县","value":"450323","parent":"450300"},{"name":"全州县","value":"450324","parent":"450300"},{"name":"兴安县","value":"450325","parent":"450300"},{"name":"永福县","value":"450326","parent":"450300"},{"name":"灌阳县","value":"450327","parent":"450300"},{"name":"龙胜各族自治县","value":"450328","parent":"450300"},{"name":"资源县","value":"450329","parent":"450300"},{"name":"平乐县","value":"450330","parent":"450300"},{"name":"荔浦县","value":"450331","parent":"450300"},{"name":"恭城瑶族自治县","value":"450332","parent":"450300"},{"name":"万秀区","value":"450403","parent":"450400"},{"name":"长洲区","value":"450405","parent":"450400"},{"name":"龙圩区","value":"450406","parent":"450400"},{"name":"苍梧县","value":"450421","parent":"450400"},{"name":"藤县","value":"450422","parent":"450400"},{"name":"蒙山县","value":"450423","parent":"450400"},{"name":"岑溪市","value":"450481","parent":"450400"},{"name":"海城区","value":"450502","parent":"450500"},{"name":"银海区","value":"450503","parent":"450500"},{"name":"铁山港区","value":"450512","parent":"450500"},{"name":"合浦县","value":"450521","parent":"450500"},{"name":"港口区","value":"450602","parent":"450600"},{"name":"防城区","value":"450603","parent":"450600"},{"name":"上思县","value":"450621","parent":"450600"},{"name":"东兴市","value":"450681","parent":"450600"},{"name":"钦南区","value":"450702","parent":"450700"},{"name":"钦北区","value":"450703","parent":"450700"},{"name":"灵山县","value":"450721","parent":"450700"},{"name":"浦北县","value":"450722","parent":"450700"},{"name":"港北区","value":"450802","parent":"450800"},{"name":"港南区","value":"450803","parent":"450800"},{"name":"覃塘区","value":"450804","parent":"450800"},{"name":"平南县","value":"450821","parent":"450800"},{"name":"桂平市","value":"450881","parent":"450800"},{"name":"玉州区","value":"450902","parent":"450900"},{"name":"福绵区","value":"450903","parent":"450900"},{"name":"容县","value":"450921","parent":"450900"},{"name":"陆川县","value":"450922","parent":"450900"},{"name":"博白县","value":"450923","parent":"450900"},{"name":"兴业县","value":"450924","parent":"450900"},{"name":"北流市","value":"450981","parent":"450900"},{"name":"右江区","value":"451002","parent":"451000"},{"name":"田阳县","value":"451021","parent":"451000"},{"name":"田东县","value":"451022","parent":"451000"},{"name":"平果县","value":"451023","parent":"451000"},{"name":"德保县","value":"451024","parent":"451000"},{"name":"那坡县","value":"451026","parent":"451000"},{"name":"凌云县","value":"451027","parent":"451000"},{"name":"乐业县","value":"451028","parent":"451000"},{"name":"田林县","value":"451029","parent":"451000"},{"name":"西林县","value":"451030","parent":"451000"},{"name":"隆林各族自治县","value":"451031","parent":"451000"},{"name":"靖西市","value":"451081","parent":"451000"},{"name":"八步区","value":"451102","parent":"451100"},{"name":"昭平县","value":"451121","parent":"451100"},{"name":"钟山县","value":"451122","parent":"451100"},{"name":"富川瑶族自治县","value":"451123","parent":"451100"},{"name":"金城江区","value":"451202","parent":"451200"},{"name":"南丹县","value":"451221","parent":"451200"},{"name":"天峨县","value":"451222","parent":"451200"},{"name":"凤山县","value":"451223","parent":"451200"},{"name":"东兰县","value":"451224","parent":"451200"},{"name":"罗城仫佬族自治县","value":"451225","parent":"451200"},{"name":"环江毛南族自治县","value":"451226","parent":"451200"},{"name":"巴马瑶族自治县","value":"451227","parent":"451200"},{"name":"都安瑶族自治县","value":"451228","parent":"451200"},{"name":"大化瑶族自治县","value":"451229","parent":"451200"},{"name":"宜州市","value":"451281","parent":"451200"},{"name":"兴宾区","value":"451302","parent":"451300"},{"name":"忻城县","value":"451321","parent":"451300"},{"name":"象州县","value":"451322","parent":"451300"},{"name":"武宣县","value":"451323","parent":"451300"},{"name":"金秀瑶族自治县","value":"451324","parent":"451300"},{"name":"合山市","value":"451381","parent":"451300"},{"name":"江州区","value":"451402","parent":"451400"},{"name":"扶绥县","value":"451421","parent":"451400"},{"name":"宁明县","value":"451422","parent":"451400"},{"name":"龙州县","value":"451423","parent":"451400"},{"name":"大新县","value":"451424","parent":"451400"},{"name":"天等县","value":"451425","parent":"451400"},{"name":"凭祥市","value":"451481","parent":"451400"},{"name":"海口市","value":"460100","parent":"460000"},{"name":"三亚市","value":"460200","parent":"460000"},{"name":"三沙市","value":"460300","parent":"460000"},{"name":"五指山市","value":"469001","parent":"460000"},{"name":"琼海市","value":"469002","parent":"460000"},{"name":"儋州市","value":"469003","parent":"460000"},{"name":"文昌市","value":"469005","parent":"460000"},{"name":"万宁市","value":"469006","parent":"460000"},{"name":"东方市","value":"469007","parent":"460000"},{"name":"定安县","value":"469021","parent":"460000"},{"name":"屯昌县","value":"469022","parent":"460000"},{"name":"澄迈县","value":"469023","parent":"460000"},{"name":"临高县","value":"469024","parent":"460000"},{"name":"白沙黎族自治县","value":"469025","parent":"460000"},{"name":"昌江黎族自治县","value":"469026","parent":"460000"},{"name":"乐东黎族自治县","value":"469027","parent":"460000"},{"name":"陵水黎族自治县","value":"469028","parent":"460000"},{"name":"保亭黎族苗族自治县","value":"469029","parent":"460000"},{"name":"琼中黎族苗族自治县","value":"469030","parent":"460000"},{"name":"秀英区","value":"460105","parent":"460100"},{"name":"龙华区","value":"460106","parent":"460100"},{"name":"琼山区","value":"460107","parent":"460100"},{"name":"美兰区","value":"460108","parent":"460100"},{"name":"海棠区","value":"460202","parent":"460200"},{"name":"吉阳区","value":"460203","parent":"460200"},{"name":"天涯区","value":"460204","parent":"460200"},{"name":"崖州区","value":"460205","parent":"460200"},{"name":"西沙群岛","value":"460321","parent":"460300"},{"name":"南沙群岛","value":"460322","parent":"460300"},{"name":"中沙群岛的岛礁及其海域","value":"460323","parent":"460300"},{"name":"市辖区","value":"500100","parent":"500000"},{"name":"万州区","value":"500101","parent":"500100"},{"name":"涪陵区","value":"500102","parent":"500100"},{"name":"渝中区","value":"500103","parent":"500100"},{"name":"大渡口区","value":"500104","parent":"500100"},{"name":"江北区","value":"500105","parent":"500100"},{"name":"沙坪坝区","value":"500106","parent":"500100"},{"name":"九龙坡区","value":"500107","parent":"500100"},{"name":"南岸区","value":"500108","parent":"500100"},{"name":"北碚区","value":"500109","parent":"500100"},{"name":"綦江区","value":"500110","parent":"500100"},{"name":"大足区","value":"500111","parent":"500100"},{"name":"渝北区","value":"500112","parent":"500100"},{"name":"巴南区","value":"500113","parent":"500100"},{"name":"黔江区","value":"500114","parent":"500100"},{"name":"长寿区","value":"500115","parent":"500100"},{"name":"江津区","value":"500116","parent":"500100"},{"name":"合川区","value":"500117","parent":"500100"},{"name":"永川区","value":"500118","parent":"500100"},{"name":"南川区","value":"500119","parent":"500100"},{"name":"璧山区","value":"500120","parent":"500100"},{"name":"铜梁区","value":"500151","parent":"500100"},{"name":"潼南区","value":"500152","parent":"500100"},{"name":"荣昌区","value":"500153","parent":"500100"},{"name":"梁平县","value":"500228","parent":"500100"},{"name":"城口县","value":"500229","parent":"500100"},{"name":"丰都县","value":"500230","parent":"500100"},{"name":"垫江县","value":"500231","parent":"500100"},{"name":"武隆县","value":"500232","parent":"500100"},{"name":"忠县","value":"500233","parent":"500100"},{"name":"开县","value":"500234","parent":"500100"},{"name":"云阳县","value":"500235","parent":"500100"},{"name":"奉节县","value":"500236","parent":"500100"},{"name":"巫山县","value":"500237","parent":"500100"},{"name":"巫溪县","value":"500238","parent":"500100"},{"name":"石柱土家族自治县","value":"500240","parent":"500100"},{"name":"秀山土家族苗族自治县","value":"500241","parent":"500100"},{"name":"酉阳土家族苗族自治县","value":"500242","parent":"500100"},{"name":"彭水苗族土家族自治县","value":"500243","parent":"500100"},{"name":"成都市","value":"510100","parent":"510000"},{"name":"自贡市","value":"510300","parent":"510000"},{"name":"攀枝花市","value":"510400","parent":"510000"},{"name":"泸州市","value":"510500","parent":"510000"},{"name":"德阳市","value":"510600","parent":"510000"},{"name":"绵阳市","value":"510700","parent":"510000"},{"name":"广元市","value":"510800","parent":"510000"},{"name":"遂宁市","value":"510900","parent":"510000"},{"name":"内江市","value":"511000","parent":"510000"},{"name":"乐山市","value":"511100","parent":"510000"},{"name":"南充市","value":"511300","parent":"510000"},{"name":"眉山市","value":"511400","parent":"510000"},{"name":"宜宾市","value":"511500","parent":"510000"},{"name":"广安市","value":"511600","parent":"510000"},{"name":"达州市","value":"511700","parent":"510000"},{"name":"雅安市","value":"511800","parent":"510000"},{"name":"巴中市","value":"511900","parent":"510000"},{"name":"资阳市","value":"512000","parent":"510000"},{"name":"阿坝藏族羌族自治州","value":"513200","parent":"510000"},{"name":"甘孜藏族自治州","value":"513300","parent":"510000"},{"name":"凉山彝族自治州","value":"513400","parent":"510000"},{"name":"锦江区","value":"510104","parent":"510100"},{"name":"青羊区","value":"510105","parent":"510100"},{"name":"金牛区","value":"510106","parent":"510100"},{"name":"武侯区","value":"510107","parent":"510100"},{"name":"成华区","value":"510108","parent":"510100"},{"name":"龙泉驿区","value":"510112","parent":"510100"},{"name":"青白江区","value":"510113","parent":"510100"},{"name":"新都区","value":"510114","parent":"510100"},{"name":"温江区","value":"510115","parent":"510100"},{"name":"金堂县","value":"510121","parent":"510100"},{"name":"双流县","value":"510122","parent":"510100"},{"name":"郫县","value":"510124","parent":"510100"},{"name":"大邑县","value":"510129","parent":"510100"},{"name":"蒲江县","value":"510131","parent":"510100"},{"name":"新津县","value":"510132","parent":"510100"},{"name":"都江堰市","value":"510181","parent":"510100"},{"name":"彭州市","value":"510182","parent":"510100"},{"name":"邛崃市","value":"510183","parent":"510100"},{"name":"崇州市","value":"510184","parent":"510100"},{"name":"自流井区","value":"510302","parent":"510300"},{"name":"贡井区","value":"510303","parent":"510300"},{"name":"大安区","value":"510304","parent":"510300"},{"name":"沿滩区","value":"510311","parent":"510300"},{"name":"荣县","value":"510321","parent":"510300"},{"name":"富顺县","value":"510322","parent":"510300"},{"name":"东区","value":"510402","parent":"510400"},{"name":"西区","value":"510403","parent":"510400"},{"name":"仁和区","value":"510411","parent":"510400"},{"name":"米易县","value":"510421","parent":"510400"},{"name":"盐边县","value":"510422","parent":"510400"},{"name":"江阳区","value":"510502","parent":"510500"},{"name":"纳溪区","value":"510503","parent":"510500"},{"name":"龙马潭区","value":"510504","parent":"510500"},{"name":"泸县","value":"510521","parent":"510500"},{"name":"合江县","value":"510522","parent":"510500"},{"name":"叙永县","value":"510524","parent":"510500"},{"name":"古蔺县","value":"510525","parent":"510500"},{"name":"旌阳区","value":"510603","parent":"510600"},{"name":"中江县","value":"510623","parent":"510600"},{"name":"罗江县","value":"510626","parent":"510600"},{"name":"广汉市","value":"510681","parent":"510600"},{"name":"什邡市","value":"510682","parent":"510600"},{"name":"绵竹市","value":"510683","parent":"510600"},{"name":"涪城区","value":"510703","parent":"510700"},{"name":"游仙区","value":"510704","parent":"510700"},{"name":"三台县","value":"510722","parent":"510700"},{"name":"盐亭县","value":"510723","parent":"510700"},{"name":"安县","value":"510724","parent":"510700"},{"name":"梓潼县","value":"510725","parent":"510700"},{"name":"北川羌族自治县","value":"510726","parent":"510700"},{"name":"平武县","value":"510727","parent":"510700"},{"name":"江油市","value":"510781","parent":"510700"},{"name":"利州区","value":"510802","parent":"510800"},{"name":"昭化区","value":"510811","parent":"510800"},{"name":"朝天区","value":"510812","parent":"510800"},{"name":"旺苍县","value":"510821","parent":"510800"},{"name":"青川县","value":"510822","parent":"510800"},{"name":"剑阁县","value":"510823","parent":"510800"},{"name":"苍溪县","value":"510824","parent":"510800"},{"name":"船山区","value":"510903","parent":"510900"},{"name":"安居区","value":"510904","parent":"510900"},{"name":"蓬溪县","value":"510921","parent":"510900"},{"name":"射洪县","value":"510922","parent":"510900"},{"name":"大英县","value":"510923","parent":"510900"},{"name":"市中区","value":"511002","parent":"511000"},{"name":"东兴区","value":"511011","parent":"511000"},{"name":"威远县","value":"511024","parent":"511000"},{"name":"资中县","value":"511025","parent":"511000"},{"name":"隆昌县","value":"511028","parent":"511000"},{"name":"市中区","value":"511102","parent":"511100"},{"name":"沙湾区","value":"511111","parent":"511100"},{"name":"五通桥区","value":"511112","parent":"511100"},{"name":"金口河区","value":"511113","parent":"511100"},{"name":"犍为县","value":"511123","parent":"511100"},{"name":"井研县","value":"511124","parent":"511100"},{"name":"夹江县","value":"511126","parent":"511100"},{"name":"沐川县","value":"511129","parent":"511100"},{"name":"峨边彝族自治县","value":"511132","parent":"511100"},{"name":"马边彝族自治县","value":"511133","parent":"511100"},{"name":"峨眉山市","value":"511181","parent":"511100"},{"name":"顺庆区","value":"511302","parent":"511300"},{"name":"高坪区","value":"511303","parent":"511300"},{"name":"嘉陵区","value":"511304","parent":"511300"},{"name":"南部县","value":"511321","parent":"511300"},{"name":"营山县","value":"511322","parent":"511300"},{"name":"蓬安县","value":"511323","parent":"511300"},{"name":"仪陇县","value":"511324","parent":"511300"},{"name":"西充县","value":"511325","parent":"511300"},{"name":"阆中市","value":"511381","parent":"511300"},{"name":"东坡区","value":"511402","parent":"511400"},{"name":"彭山区","value":"511403","parent":"511400"},{"name":"仁寿县","value":"511421","parent":"511400"},{"name":"洪雅县","value":"511423","parent":"511400"},{"name":"丹棱县","value":"511424","parent":"511400"},{"name":"青神县","value":"511425","parent":"511400"},{"name":"翠屏区","value":"511502","parent":"511500"},{"name":"南溪区","value":"511503","parent":"511500"},{"name":"宜宾县","value":"511521","parent":"511500"},{"name":"江安县","value":"511523","parent":"511500"},{"name":"长宁县","value":"511524","parent":"511500"},{"name":"高县","value":"511525","parent":"511500"},{"name":"珙县","value":"511526","parent":"511500"},{"name":"筠连县","value":"511527","parent":"511500"},{"name":"兴文县","value":"511528","parent":"511500"},{"name":"屏山县","value":"511529","parent":"511500"},{"name":"广安区","value":"511602","parent":"511600"},{"name":"前锋区","value":"511603","parent":"511600"},{"name":"岳池县","value":"511621","parent":"511600"},{"name":"武胜县","value":"511622","parent":"511600"},{"name":"邻水县","value":"511623","parent":"511600"},{"name":"华蓥市","value":"511681","parent":"511600"},{"name":"通川区","value":"511702","parent":"511700"},{"name":"达川区","value":"511703","parent":"511700"},{"name":"宣汉县","value":"511722","parent":"511700"},{"name":"开江县","value":"511723","parent":"511700"},{"name":"大竹县","value":"511724","parent":"511700"},{"name":"渠县","value":"511725","parent":"511700"},{"name":"万源市","value":"511781","parent":"511700"},{"name":"雨城区","value":"511802","parent":"511800"},{"name":"名山区","value":"511803","parent":"511800"},{"name":"荥经县","value":"511822","parent":"511800"},{"name":"汉源县","value":"511823","parent":"511800"},{"name":"石棉县","value":"511824","parent":"511800"},{"name":"天全县","value":"511825","parent":"511800"},{"name":"芦山县","value":"511826","parent":"511800"},{"name":"宝兴县","value":"511827","parent":"511800"},{"name":"巴州区","value":"511902","parent":"511900"},{"name":"恩阳区","value":"511903","parent":"511900"},{"name":"通江县","value":"511921","parent":"511900"},{"name":"南江县","value":"511922","parent":"511900"},{"name":"平昌县","value":"511923","parent":"511900"},{"name":"雁江区","value":"512002","parent":"512000"},{"name":"安岳县","value":"512021","parent":"512000"},{"name":"乐至县","value":"512022","parent":"512000"},{"name":"简阳市","value":"512081","parent":"512000"},{"name":"汶川县","value":"513221","parent":"513200"},{"name":"理县","value":"513222","parent":"513200"},{"name":"茂县","value":"513223","parent":"513200"},{"name":"松潘县","value":"513224","parent":"513200"},{"name":"九寨沟县","value":"513225","parent":"513200"},{"name":"金川县","value":"513226","parent":"513200"},{"name":"小金县","value":"513227","parent":"513200"},{"name":"黑水县","value":"513228","parent":"513200"},{"name":"马尔康县","value":"513229","parent":"513200"},{"name":"壤塘县","value":"513230","parent":"513200"},{"name":"阿坝县","value":"513231","parent":"513200"},{"name":"若尔盖县","value":"513232","parent":"513200"},{"name":"红原县","value":"513233","parent":"513200"},{"name":"康定市","value":"513301","parent":"513300"},{"name":"泸定县","value":"513322","parent":"513300"},{"name":"丹巴县","value":"513323","parent":"513300"},{"name":"九龙县","value":"513324","parent":"513300"},{"name":"雅江县","value":"513325","parent":"513300"},{"name":"道孚县","value":"513326","parent":"513300"},{"name":"炉霍县","value":"513327","parent":"513300"},{"name":"甘孜县","value":"513328","parent":"513300"},{"name":"新龙县","value":"513329","parent":"513300"},{"name":"德格县","value":"513330","parent":"513300"},{"name":"白玉县","value":"513331","parent":"513300"},{"name":"石渠县","value":"513332","parent":"513300"},{"name":"色达县","value":"513333","parent":"513300"},{"name":"理塘县","value":"513334","parent":"513300"},{"name":"巴塘县","value":"513335","parent":"513300"},{"name":"乡城县","value":"513336","parent":"513300"},{"name":"稻城县","value":"513337","parent":"513300"},{"name":"得荣县","value":"513338","parent":"513300"},{"name":"西昌市","value":"513401","parent":"513400"},{"name":"木里藏族自治县","value":"513422","parent":"513400"},{"name":"盐源县","value":"513423","parent":"513400"},{"name":"德昌县","value":"513424","parent":"513400"},{"name":"会理县","value":"513425","parent":"513400"},{"name":"会东县","value":"513426","parent":"513400"},{"name":"宁南县","value":"513427","parent":"513400"},{"name":"普格县","value":"513428","parent":"513400"},{"name":"布拖县","value":"513429","parent":"513400"},{"name":"金阳县","value":"513430","parent":"513400"},{"name":"昭觉县","value":"513431","parent":"513400"},{"name":"喜德县","value":"513432","parent":"513400"},{"name":"冕宁县","value":"513433","parent":"513400"},{"name":"越西县","value":"513434","parent":"513400"},{"name":"甘洛县","value":"513435","parent":"513400"},{"name":"美姑县","value":"513436","parent":"513400"},{"name":"雷波县","value":"513437","parent":"513400"},{"name":"贵阳市","value":"520100","parent":"520000"},{"name":"六盘水市","value":"520200","parent":"520000"},{"name":"遵义市","value":"520300","parent":"520000"},{"name":"安顺市","value":"520400","parent":"520000"},{"name":"毕节市","value":"520500","parent":"520000"},{"name":"铜仁市","value":"520600","parent":"520000"},{"name":"黔西南布依族苗族自治州","value":"522300","parent":"520000"},{"name":"黔东南苗族侗族自治州","value":"522600","parent":"520000"},{"name":"黔南布依族苗族自治州","value":"522700","parent":"520000"},{"name":"南明区","value":"520102","parent":"520100"},{"name":"云岩区","value":"520103","parent":"520100"},{"name":"花溪区","value":"520111","parent":"520100"},{"name":"乌当区","value":"520112","parent":"520100"},{"name":"白云区","value":"520113","parent":"520100"},{"name":"观山湖区","value":"520115","parent":"520100"},{"name":"开阳县","value":"520121","parent":"520100"},{"name":"息烽县","value":"520122","parent":"520100"},{"name":"修文县","value":"520123","parent":"520100"},{"name":"清镇市","value":"520181","parent":"520100"},{"name":"钟山区","value":"520201","parent":"520200"},{"name":"六枝特区","value":"520203","parent":"520200"},{"name":"水城县","value":"520221","parent":"520200"},{"name":"盘县","value":"520222","parent":"520200"},{"name":"红花岗区","value":"520302","parent":"520300"},{"name":"汇川区","value":"520303","parent":"520300"},{"name":"遵义县","value":"520321","parent":"520300"},{"name":"桐梓县","value":"520322","parent":"520300"},{"name":"绥阳县","value":"520323","parent":"520300"},{"name":"正安县","value":"520324","parent":"520300"},{"name":"道真仡佬族苗族自治县","value":"520325","parent":"520300"},{"name":"务川仡佬族苗族自治县","value":"520326","parent":"520300"},{"name":"凤冈县","value":"520327","parent":"520300"},{"name":"湄潭县","value":"520328","parent":"520300"},{"name":"余庆县","value":"520329","parent":"520300"},{"name":"习水县","value":"520330","parent":"520300"},{"name":"赤水市","value":"520381","parent":"520300"},{"name":"仁怀市","value":"520382","parent":"520300"},{"name":"西秀区","value":"520402","parent":"520400"},{"name":"平坝区","value":"520403","parent":"520400"},{"name":"普定县","value":"520422","parent":"520400"},{"name":"镇宁布依族苗族自治县","value":"520423","parent":"520400"},{"name":"关岭布依族苗族自治县","value":"520424","parent":"520400"},{"name":"紫云苗族布依族自治县","value":"520425","parent":"520400"},{"name":"七星关区","value":"520502","parent":"520500"},{"name":"大方县","value":"520521","parent":"520500"},{"name":"黔西县","value":"520522","parent":"520500"},{"name":"金沙县","value":"520523","parent":"520500"},{"name":"织金县","value":"520524","parent":"520500"},{"name":"纳雍县","value":"520525","parent":"520500"},{"name":"威宁彝族回族苗族自治县","value":"520526","parent":"520500"},{"name":"赫章县","value":"520527","parent":"520500"},{"name":"碧江区","value":"520602","parent":"520600"},{"name":"万山区","value":"520603","parent":"520600"},{"name":"江口县","value":"520621","parent":"520600"},{"name":"玉屏侗族自治县","value":"520622","parent":"520600"},{"name":"石阡县","value":"520623","parent":"520600"},{"name":"思南县","value":"520624","parent":"520600"},{"name":"印江土家族苗族自治县","value":"520625","parent":"520600"},{"name":"德江县","value":"520626","parent":"520600"},{"name":"沿河土家族自治县","value":"520627","parent":"520600"},{"name":"松桃苗族自治县","value":"520628","parent":"520600"},{"name":"兴义市","value":"522301","parent":"522300"},{"name":"兴仁县","value":"522322","parent":"522300"},{"name":"普安县","value":"522323","parent":"522300"},{"name":"晴隆县","value":"522324","parent":"522300"},{"name":"贞丰县","value":"522325","parent":"522300"},{"name":"望谟县","value":"522326","parent":"522300"},{"name":"册亨县","value":"522327","parent":"522300"},{"name":"安龙县","value":"522328","parent":"522300"},{"name":"凯里市","value":"522601","parent":"522600"},{"name":"黄平县","value":"522622","parent":"522600"},{"name":"施秉县","value":"522623","parent":"522600"},{"name":"三穗县","value":"522624","parent":"522600"},{"name":"镇远县","value":"522625","parent":"522600"},{"name":"岑巩县","value":"522626","parent":"522600"},{"name":"天柱县","value":"522627","parent":"522600"},{"name":"锦屏县","value":"522628","parent":"522600"},{"name":"剑河县","value":"522629","parent":"522600"},{"name":"台江县","value":"522630","parent":"522600"},{"name":"黎平县","value":"522631","parent":"522600"},{"name":"榕江县","value":"522632","parent":"522600"},{"name":"从江县","value":"522633","parent":"522600"},{"name":"雷山县","value":"522634","parent":"522600"},{"name":"麻江县","value":"522635","parent":"522600"},{"name":"丹寨县","value":"522636","parent":"522600"},{"name":"都匀市","value":"522701","parent":"522700"},{"name":"福泉市","value":"522702","parent":"522700"},{"name":"荔波县","value":"522722","parent":"522700"},{"name":"贵定县","value":"522723","parent":"522700"},{"name":"瓮安县","value":"522725","parent":"522700"},{"name":"独山县","value":"522726","parent":"522700"},{"name":"平塘县","value":"522727","parent":"522700"},{"name":"罗甸县","value":"522728","parent":"522700"},{"name":"长顺县","value":"522729","parent":"522700"},{"name":"龙里县","value":"522730","parent":"522700"},{"name":"惠水县","value":"522731","parent":"522700"},{"name":"三都水族自治县","value":"522732","parent":"522700"},{"name":"昆明市","value":"530100","parent":"530000"},{"name":"曲靖市","value":"530300","parent":"530000"},{"name":"玉溪市","value":"530400","parent":"530000"},{"name":"保山市","value":"530500","parent":"530000"},{"name":"昭通市","value":"530600","parent":"530000"},{"name":"丽江市","value":"530700","parent":"530000"},{"name":"普洱市","value":"530800","parent":"530000"},{"name":"临沧市","value":"530900","parent":"530000"},{"name":"楚雄彝族自治州","value":"532300","parent":"530000"},{"name":"红河哈尼族彝族自治州","value":"532500","parent":"530000"},{"name":"文山壮族苗族自治州","value":"532600","parent":"530000"},{"name":"西双版纳傣族自治州","value":"532800","parent":"530000"},{"name":"大理白族自治州","value":"532900","parent":"530000"},{"name":"德宏傣族景颇族自治州","value":"533100","parent":"530000"},{"name":"怒江傈僳族自治州","value":"533300","parent":"530000"},{"name":"迪庆藏族自治州","value":"533400","parent":"530000"},{"name":"五华区","value":"530102","parent":"530100"},{"name":"盘龙区","value":"530103","parent":"530100"},{"name":"官渡区","value":"530111","parent":"530100"},{"name":"西山区","value":"530112","parent":"530100"},{"name":"东川区","value":"530113","parent":"530100"},{"name":"呈贡区","value":"530114","parent":"530100"},{"name":"晋宁县","value":"530122","parent":"530100"},{"name":"富民县","value":"530124","parent":"530100"},{"name":"宜良县","value":"530125","parent":"530100"},{"name":"石林彝族自治县","value":"530126","parent":"530100"},{"name":"嵩明县","value":"530127","parent":"530100"},{"name":"禄劝彝族苗族自治县","value":"530128","parent":"530100"},{"name":"寻甸回族彝族自治县","value":"530129","parent":"530100"},{"name":"安宁市","value":"530181","parent":"530100"},{"name":"麒麟区","value":"530302","parent":"530300"},{"name":"马龙县","value":"530321","parent":"530300"},{"name":"陆良县","value":"530322","parent":"530300"},{"name":"师宗县","value":"530323","parent":"530300"},{"name":"罗平县","value":"530324","parent":"530300"},{"name":"富源县","value":"530325","parent":"530300"},{"name":"会泽县","value":"530326","parent":"530300"},{"name":"沾益县","value":"530328","parent":"530300"},{"name":"宣威市","value":"530381","parent":"530300"},{"name":"红塔区","value":"530402","parent":"530400"},{"name":"江川县","value":"530421","parent":"530400"},{"name":"澄江县","value":"530422","parent":"530400"},{"name":"通海县","value":"530423","parent":"530400"},{"name":"华宁县","value":"530424","parent":"530400"},{"name":"易门县","value":"530425","parent":"530400"},{"name":"峨山彝族自治县","value":"530426","parent":"530400"},{"name":"新平彝族傣族自治县","value":"530427","parent":"530400"},{"name":"元江哈尼族彝族傣族自治县","value":"530428","parent":"530400"},{"name":"隆阳区","value":"530502","parent":"530500"},{"name":"施甸县","value":"530521","parent":"530500"},{"name":"龙陵县","value":"530523","parent":"530500"},{"name":"昌宁县","value":"530524","parent":"530500"},{"name":"腾冲市","value":"530581","parent":"530500"},{"name":"昭阳区","value":"530602","parent":"530600"},{"name":"鲁甸县","value":"530621","parent":"530600"},{"name":"巧家县","value":"530622","parent":"530600"},{"name":"盐津县","value":"530623","parent":"530600"},{"name":"大关县","value":"530624","parent":"530600"},{"name":"永善县","value":"530625","parent":"530600"},{"name":"绥江县","value":"530626","parent":"530600"},{"name":"镇雄县","value":"530627","parent":"530600"},{"name":"彝良县","value":"530628","parent":"530600"},{"name":"威信县","value":"530629","parent":"530600"},{"name":"水富县","value":"530630","parent":"530600"},{"name":"古城区","value":"530702","parent":"530700"},{"name":"玉龙纳西族自治县","value":"530721","parent":"530700"},{"name":"永胜县","value":"530722","parent":"530700"},{"name":"华坪县","value":"530723","parent":"530700"},{"name":"宁蒗彝族自治县","value":"530724","parent":"530700"},{"name":"思茅区","value":"530802","parent":"530800"},{"name":"宁洱哈尼族彝族自治县","value":"530821","parent":"530800"},{"name":"墨江哈尼族自治县","value":"530822","parent":"530800"},{"name":"景东彝族自治县","value":"530823","parent":"530800"},{"name":"景谷傣族彝族自治县","value":"530824","parent":"530800"},{"name":"镇沅彝族哈尼族拉祜族自治县","value":"530825","parent":"530800"},{"name":"江城哈尼族彝族自治县","value":"530826","parent":"530800"},{"name":"孟连傣族拉祜族佤族自治县","value":"530827","parent":"530800"},{"name":"澜沧拉祜族自治县","value":"530828","parent":"530800"},{"name":"西盟佤族自治县","value":"530829","parent":"530800"},{"name":"临翔区","value":"530902","parent":"530900"},{"name":"凤庆县","value":"530921","parent":"530900"},{"name":"云县","value":"530922","parent":"530900"},{"name":"永德县","value":"530923","parent":"530900"},{"name":"镇康县","value":"530924","parent":"530900"},{"name":"双江拉祜族佤族布朗族傣族自治县","value":"530925","parent":"530900"},{"name":"耿马傣族佤族自治县","value":"530926","parent":"530900"},{"name":"沧源佤族自治县","value":"530927","parent":"530900"},{"name":"楚雄市","value":"532301","parent":"532300"},{"name":"双柏县","value":"532322","parent":"532300"},{"name":"牟定县","value":"532323","parent":"532300"},{"name":"南华县","value":"532324","parent":"532300"},{"name":"姚安县","value":"532325","parent":"532300"},{"name":"大姚县","value":"532326","parent":"532300"},{"name":"永仁县","value":"532327","parent":"532300"},{"name":"元谋县","value":"532328","parent":"532300"},{"name":"武定县","value":"532329","parent":"532300"},{"name":"禄丰县","value":"532331","parent":"532300"},{"name":"个旧市","value":"532501","parent":"532500"},{"name":"开远市","value":"532502","parent":"532500"},{"name":"蒙自市","value":"532503","parent":"532500"},{"name":"弥勒市","value":"532504","parent":"532500"},{"name":"屏边苗族自治县","value":"532523","parent":"532500"},{"name":"建水县","value":"532524","parent":"532500"},{"name":"石屏县","value":"532525","parent":"532500"},{"name":"泸西县","value":"532527","parent":"532500"},{"name":"元阳县","value":"532528","parent":"532500"},{"name":"红河县","value":"532529","parent":"532500"},{"name":"金平苗族瑶族傣族自治县","value":"532530","parent":"532500"},{"name":"绿春县","value":"532531","parent":"532500"},{"name":"河口瑶族自治县","value":"532532","parent":"532500"},{"name":"文山市","value":"532601","parent":"532600"},{"name":"砚山县","value":"532622","parent":"532600"},{"name":"西畴县","value":"532623","parent":"532600"},{"name":"麻栗坡县","value":"532624","parent":"532600"},{"name":"马关县","value":"532625","parent":"532600"},{"name":"丘北县","value":"532626","parent":"532600"},{"name":"广南县","value":"532627","parent":"532600"},{"name":"富宁县","value":"532628","parent":"532600"},{"name":"景洪市","value":"532801","parent":"532800"},{"name":"勐海县","value":"532822","parent":"532800"},{"name":"勐腊县","value":"532823","parent":"532800"},{"name":"大理市","value":"532901","parent":"532900"},{"name":"漾濞彝族自治县","value":"532922","parent":"532900"},{"name":"祥云县","value":"532923","parent":"532900"},{"name":"宾川县","value":"532924","parent":"532900"},{"name":"弥渡县","value":"532925","parent":"532900"},{"name":"南涧彝族自治县","value":"532926","parent":"532900"},{"name":"巍山彝族回族自治县","value":"532927","parent":"532900"},{"name":"永平县","value":"532928","parent":"532900"},{"name":"云龙县","value":"532929","parent":"532900"},{"name":"洱源县","value":"532930","parent":"532900"},{"name":"剑川县","value":"532931","parent":"532900"},{"name":"鹤庆县","value":"532932","parent":"532900"},{"name":"瑞丽市","value":"533102","parent":"533100"},{"name":"芒市","value":"533103","parent":"533100"},{"name":"梁河县","value":"533122","parent":"533100"},{"name":"盈江县","value":"533123","parent":"533100"},{"name":"陇川县","value":"533124","parent":"533100"},{"name":"泸水县","value":"533321","parent":"533300"},{"name":"福贡县","value":"533323","parent":"533300"},{"name":"贡山独龙族怒族自治县","value":"533324","parent":"533300"},{"name":"兰坪白族普米族自治县","value":"533325","parent":"533300"},{"name":"香格里拉市","value":"533401","parent":"533400"},{"name":"德钦县","value":"533422","parent":"533400"},{"name":"维西傈僳族自治县","value":"533423","parent":"533400"},{"name":"拉萨市","value":"540100","parent":"540000"},{"name":"日喀则市","value":"540200","parent":"540000"},{"name":"昌都市","value":"540300","parent":"540000"},{"name":"林芝市","value":"540400","parent":"540000"},{"name":"山南地区","value":"542200","parent":"540000"},{"name":"那曲地区","value":"542400","parent":"540000"},{"name":"阿里地区","value":"542500","parent":"540000"},{"name":"城关区","value":"540102","parent":"540100"},{"name":"林周县","value":"540121","parent":"540100"},{"name":"当雄县","value":"540122","parent":"540100"},{"name":"尼木县","value":"540123","parent":"540100"},{"name":"曲水县","value":"540124","parent":"540100"},{"name":"堆龙德庆县","value":"540125","parent":"540100"},{"name":"达孜县","value":"540126","parent":"540100"},{"name":"墨竹工卡县","value":"540127","parent":"540100"},{"name":"桑珠孜区","value":"540202","parent":"540200"},{"name":"南木林县","value":"540221","parent":"540200"},{"name":"江孜县","value":"540222","parent":"540200"},{"name":"定日县","value":"540223","parent":"540200"},{"name":"萨迦县","value":"540224","parent":"540200"},{"name":"拉孜县","value":"540225","parent":"540200"},{"name":"昂仁县","value":"540226","parent":"540200"},{"name":"谢通门县","value":"540227","parent":"540200"},{"name":"白朗县","value":"540228","parent":"540200"},{"name":"仁布县","value":"540229","parent":"540200"},{"name":"康马县","value":"540230","parent":"540200"},{"name":"定结县","value":"540231","parent":"540200"},{"name":"仲巴县","value":"540232","parent":"540200"},{"name":"亚东县","value":"540233","parent":"540200"},{"name":"吉隆县","value":"540234","parent":"540200"},{"name":"聂拉木县","value":"540235","parent":"540200"},{"name":"萨嘎县","value":"540236","parent":"540200"},{"name":"岗巴县","value":"540237","parent":"540200"},{"name":"卡若区","value":"540302","parent":"540300"},{"name":"江达县","value":"540321","parent":"540300"},{"name":"贡觉县","value":"540322","parent":"540300"},{"name":"类乌齐县","value":"540323","parent":"540300"},{"name":"丁青县","value":"540324","parent":"540300"},{"name":"察雅县","value":"540325","parent":"540300"},{"name":"八宿县","value":"540326","parent":"540300"},{"name":"左贡县","value":"540327","parent":"540300"},{"name":"芒康县","value":"540328","parent":"540300"},{"name":"洛隆县","value":"540329","parent":"540300"},{"name":"边坝县","value":"540330","parent":"540300"},{"name":"巴宜区","value":"540402","parent":"540400"},{"name":"工布江达县","value":"540421","parent":"540400"},{"name":"米林县","value":"540422","parent":"540400"},{"name":"墨脱县","value":"540423","parent":"540400"},{"name":"波密县","value":"540424","parent":"540400"},{"name":"察隅县","value":"540425","parent":"540400"},{"name":"朗县","value":"540426","parent":"540400"},{"name":"乃东县","value":"542221","parent":"542200"},{"name":"扎囊县","value":"542222","parent":"542200"},{"name":"贡嘎县","value":"542223","parent":"542200"},{"name":"桑日县","value":"542224","parent":"542200"},{"name":"琼结县","value":"542225","parent":"542200"},{"name":"曲松县","value":"542226","parent":"542200"},{"name":"措美县","value":"542227","parent":"542200"},{"name":"洛扎县","value":"542228","parent":"542200"},{"name":"加查县","value":"542229","parent":"542200"},{"name":"隆子县","value":"542231","parent":"542200"},{"name":"错那县","value":"542232","parent":"542200"},{"name":"浪卡子县","value":"542233","parent":"542200"},{"name":"那曲县","value":"542421","parent":"542400"},{"name":"嘉黎县","value":"542422","parent":"542400"},{"name":"比如县","value":"542423","parent":"542400"},{"name":"聂荣县","value":"542424","parent":"542400"},{"name":"安多县","value":"542425","parent":"542400"},{"name":"申扎县","value":"542426","parent":"542400"},{"name":"索县","value":"542427","parent":"542400"},{"name":"班戈县","value":"542428","parent":"542400"},{"name":"巴青县","value":"542429","parent":"542400"},{"name":"尼玛县","value":"542430","parent":"542400"},{"name":"双湖县","value":"542431","parent":"542400"},{"name":"普兰县","value":"542521","parent":"542500"},{"name":"札达县","value":"542522","parent":"542500"},{"name":"噶尔县","value":"542523","parent":"542500"},{"name":"日土县","value":"542524","parent":"542500"},{"name":"革吉县","value":"542525","parent":"542500"},{"name":"改则县","value":"542526","parent":"542500"},{"name":"措勤县","value":"542527","parent":"542500"},{"name":"西安市","value":"610100","parent":"610000"},{"name":"铜川市","value":"610200","parent":"610000"},{"name":"宝鸡市","value":"610300","parent":"610000"},{"name":"咸阳市","value":"610400","parent":"610000"},{"name":"渭南市","value":"610500","parent":"610000"},{"name":"延安市","value":"610600","parent":"610000"},{"name":"汉中市","value":"610700","parent":"610000"},{"name":"榆林市","value":"610800","parent":"610000"},{"name":"安康市","value":"610900","parent":"610000"},{"name":"商洛市","value":"611000","parent":"610000"},{"name":"新城区","value":"610102","parent":"610100"},{"name":"碑林区","value":"610103","parent":"610100"},{"name":"莲湖区","value":"610104","parent":"610100"},{"name":"灞桥区","value":"610111","parent":"610100"},{"name":"未央区","value":"610112","parent":"610100"},{"name":"雁塔区","value":"610113","parent":"610100"},{"name":"阎良区","value":"610114","parent":"610100"},{"name":"临潼区","value":"610115","parent":"610100"},{"name":"长安区","value":"610116","parent":"610100"},{"name":"高陵区","value":"610117","parent":"610100"},{"name":"蓝田县","value":"610122","parent":"610100"},{"name":"周至县","value":"610124","parent":"610100"},{"name":"户县","value":"610125","parent":"610100"},{"name":"王益区","value":"610202","parent":"610200"},{"name":"印台区","value":"610203","parent":"610200"},{"name":"耀州区","value":"610204","parent":"610200"},{"name":"宜君县","value":"610222","parent":"610200"},{"name":"渭滨区","value":"610302","parent":"610300"},{"name":"金台区","value":"610303","parent":"610300"},{"name":"陈仓区","value":"610304","parent":"610300"},{"name":"凤翔县","value":"610322","parent":"610300"},{"name":"岐山县","value":"610323","parent":"610300"},{"name":"扶风县","value":"610324","parent":"610300"},{"name":"眉县","value":"610326","parent":"610300"},{"name":"陇县","value":"610327","parent":"610300"},{"name":"千阳县","value":"610328","parent":"610300"},{"name":"麟游县","value":"610329","parent":"610300"},{"name":"凤县","value":"610330","parent":"610300"},{"name":"太白县","value":"610331","parent":"610300"},{"name":"秦都区","value":"610402","parent":"610400"},{"name":"杨陵区","value":"610403","parent":"610400"},{"name":"渭城区","value":"610404","parent":"610400"},{"name":"三原县","value":"610422","parent":"610400"},{"name":"泾阳县","value":"610423","parent":"610400"},{"name":"乾县","value":"610424","parent":"610400"},{"name":"礼泉县","value":"610425","parent":"610400"},{"name":"永寿县","value":"610426","parent":"610400"},{"name":"彬县","value":"610427","parent":"610400"},{"name":"长武县","value":"610428","parent":"610400"},{"name":"旬邑县","value":"610429","parent":"610400"},{"name":"淳化县","value":"610430","parent":"610400"},{"name":"武功县","value":"610431","parent":"610400"},{"name":"兴平市","value":"610481","parent":"610400"},{"name":"临渭区","value":"610502","parent":"610500"},{"name":"华县","value":"610521","parent":"610500"},{"name":"潼关县","value":"610522","parent":"610500"},{"name":"大荔县","value":"610523","parent":"610500"},{"name":"合阳县","value":"610524","parent":"610500"},{"name":"澄城县","value":"610525","parent":"610500"},{"name":"蒲城县","value":"610526","parent":"610500"},{"name":"白水县","value":"610527","parent":"610500"},{"name":"富平县","value":"610528","parent":"610500"},{"name":"韩城市","value":"610581","parent":"610500"},{"name":"华阴市","value":"610582","parent":"610500"},{"name":"宝塔区","value":"610602","parent":"610600"},{"name":"延长县","value":"610621","parent":"610600"},{"name":"延川县","value":"610622","parent":"610600"},{"name":"子长县","value":"610623","parent":"610600"},{"name":"安塞县","value":"610624","parent":"610600"},{"name":"志丹县","value":"610625","parent":"610600"},{"name":"吴起县","value":"610626","parent":"610600"},{"name":"甘泉县","value":"610627","parent":"610600"},{"name":"富县","value":"610628","parent":"610600"},{"name":"洛川县","value":"610629","parent":"610600"},{"name":"宜川县","value":"610630","parent":"610600"},{"name":"黄龙县","value":"610631","parent":"610600"},{"name":"黄陵县","value":"610632","parent":"610600"},{"name":"汉台区","value":"610702","parent":"610700"},{"name":"南郑县","value":"610721","parent":"610700"},{"name":"城固县","value":"610722","parent":"610700"},{"name":"洋县","value":"610723","parent":"610700"},{"name":"西乡县","value":"610724","parent":"610700"},{"name":"勉县","value":"610725","parent":"610700"},{"name":"宁强县","value":"610726","parent":"610700"},{"name":"略阳县","value":"610727","parent":"610700"},{"name":"镇巴县","value":"610728","parent":"610700"},{"name":"留坝县","value":"610729","parent":"610700"},{"name":"佛坪县","value":"610730","parent":"610700"},{"name":"榆阳区","value":"610802","parent":"610800"},{"name":"神木县","value":"610821","parent":"610800"},{"name":"府谷县","value":"610822","parent":"610800"},{"name":"横山县","value":"610823","parent":"610800"},{"name":"靖边县","value":"610824","parent":"610800"},{"name":"定边县","value":"610825","parent":"610800"},{"name":"绥德县","value":"610826","parent":"610800"},{"name":"米脂县","value":"610827","parent":"610800"},{"name":"佳县","value":"610828","parent":"610800"},{"name":"吴堡县","value":"610829","parent":"610800"},{"name":"清涧县","value":"610830","parent":"610800"},{"name":"子洲县","value":"610831","parent":"610800"},{"name":"汉滨区","value":"610902","parent":"610900"},{"name":"汉阴县","value":"610921","parent":"610900"},{"name":"石泉县","value":"610922","parent":"610900"},{"name":"宁陕县","value":"610923","parent":"610900"},{"name":"紫阳县","value":"610924","parent":"610900"},{"name":"岚皋县","value":"610925","parent":"610900"},{"name":"平利县","value":"610926","parent":"610900"},{"name":"镇坪县","value":"610927","parent":"610900"},{"name":"旬阳县","value":"610928","parent":"610900"},{"name":"白河县","value":"610929","parent":"610900"},{"name":"商州区","value":"611002","parent":"611000"},{"name":"洛南县","value":"611021","parent":"611000"},{"name":"丹凤县","value":"611022","parent":"611000"},{"name":"商南县","value":"611023","parent":"611000"},{"name":"山阳县","value":"611024","parent":"611000"},{"name":"镇安县","value":"611025","parent":"611000"},{"name":"柞水县","value":"611026","parent":"611000"},{"name":"兰州市","value":"620100","parent":"620000"},{"name":"嘉峪关市","value":"620200","parent":"620000"},{"name":"金昌市","value":"620300","parent":"620000"},{"name":"白银市","value":"620400","parent":"620000"},{"name":"天水市","value":"620500","parent":"620000"},{"name":"武威市","value":"620600","parent":"620000"},{"name":"张掖市","value":"620700","parent":"620000"},{"name":"平凉市","value":"620800","parent":"620000"},{"name":"酒泉市","value":"620900","parent":"620000"},{"name":"庆阳市","value":"621000","parent":"620000"},{"name":"定西市","value":"621100","parent":"620000"},{"name":"陇南市","value":"621200","parent":"620000"},{"name":"临夏回族自治州","value":"622900","parent":"620000"},{"name":"甘南藏族自治州","value":"623000","parent":"620000"},{"name":"城关区","value":"620102","parent":"620100"},{"name":"七里河区","value":"620103","parent":"620100"},{"name":"西固区","value":"620104","parent":"620100"},{"name":"安宁区","value":"620105","parent":"620100"},{"name":"红古区","value":"620111","parent":"620100"},{"name":"永登县","value":"620121","parent":"620100"},{"name":"皋兰县","value":"620122","parent":"620100"},{"name":"榆中县","value":"620123","parent":"620100"},{"name":"金川区","value":"620302","parent":"620300"},{"name":"永昌县","value":"620321","parent":"620300"},{"name":"白银区","value":"620402","parent":"620400"},{"name":"平川区","value":"620403","parent":"620400"},{"name":"靖远县","value":"620421","parent":"620400"},{"name":"会宁县","value":"620422","parent":"620400"},{"name":"景泰县","value":"620423","parent":"620400"},{"name":"秦州区","value":"620502","parent":"620500"},{"name":"麦积区","value":"620503","parent":"620500"},{"name":"清水县","value":"620521","parent":"620500"},{"name":"秦安县","value":"620522","parent":"620500"},{"name":"甘谷县","value":"620523","parent":"620500"},{"name":"武山县","value":"620524","parent":"620500"},{"name":"张家川回族自治县","value":"620525","parent":"620500"},{"name":"凉州区","value":"620602","parent":"620600"},{"name":"民勤县","value":"620621","parent":"620600"},{"name":"古浪县","value":"620622","parent":"620600"},{"name":"天祝藏族自治县","value":"620623","parent":"620600"},{"name":"甘州区","value":"620702","parent":"620700"},{"name":"肃南裕固族自治县","value":"620721","parent":"620700"},{"name":"民乐县","value":"620722","parent":"620700"},{"name":"临泽县","value":"620723","parent":"620700"},{"name":"高台县","value":"620724","parent":"620700"},{"name":"山丹县","value":"620725","parent":"620700"},{"name":"崆峒区","value":"620802","parent":"620800"},{"name":"泾川县","value":"620821","parent":"620800"},{"name":"灵台县","value":"620822","parent":"620800"},{"name":"崇信县","value":"620823","parent":"620800"},{"name":"华亭县","value":"620824","parent":"620800"},{"name":"庄浪县","value":"620825","parent":"620800"},{"name":"静宁县","value":"620826","parent":"620800"},{"name":"肃州区","value":"620902","parent":"620900"},{"name":"金塔县","value":"620921","parent":"620900"},{"name":"瓜州县","value":"620922","parent":"620900"},{"name":"肃北蒙古族自治县","value":"620923","parent":"620900"},{"name":"阿克塞哈萨克族自治县","value":"620924","parent":"620900"},{"name":"玉门市","value":"620981","parent":"620900"},{"name":"敦煌市","value":"620982","parent":"620900"},{"name":"西峰区","value":"621002","parent":"621000"},{"name":"庆城县","value":"621021","parent":"621000"},{"name":"环县","value":"621022","parent":"621000"},{"name":"华池县","value":"621023","parent":"621000"},{"name":"合水县","value":"621024","parent":"621000"},{"name":"正宁县","value":"621025","parent":"621000"},{"name":"宁县","value":"621026","parent":"621000"},{"name":"镇原县","value":"621027","parent":"621000"},{"name":"安定区","value":"621102","parent":"621100"},{"name":"通渭县","value":"621121","parent":"621100"},{"name":"陇西县","value":"621122","parent":"621100"},{"name":"渭源县","value":"621123","parent":"621100"},{"name":"临洮县","value":"621124","parent":"621100"},{"name":"漳县","value":"621125","parent":"621100"},{"name":"岷县","value":"621126","parent":"621100"},{"name":"武都区","value":"621202","parent":"621200"},{"name":"成县","value":"621221","parent":"621200"},{"name":"文县","value":"621222","parent":"621200"},{"name":"宕昌县","value":"621223","parent":"621200"},{"name":"康县","value":"621224","parent":"621200"},{"name":"西和县","value":"621225","parent":"621200"},{"name":"礼县","value":"621226","parent":"621200"},{"name":"徽县","value":"621227","parent":"621200"},{"name":"两当县","value":"621228","parent":"621200"},{"name":"临夏市","value":"622901","parent":"622900"},{"name":"临夏县","value":"622921","parent":"622900"},{"name":"康乐县","value":"622922","parent":"622900"},{"name":"永靖县","value":"622923","parent":"622900"},{"name":"广河县","value":"622924","parent":"622900"},{"name":"和政县","value":"622925","parent":"622900"},{"name":"东乡族自治县","value":"622926","parent":"622900"},{"name":"积石山保安族东乡族撒拉族自治县","value":"622927","parent":"622900"},{"name":"合作市","value":"623001","parent":"623000"},{"name":"临潭县","value":"623021","parent":"623000"},{"name":"卓尼县","value":"623022","parent":"623000"},{"name":"舟曲县","value":"623023","parent":"623000"},{"name":"迭部县","value":"623024","parent":"623000"},{"name":"玛曲县","value":"623025","parent":"623000"},{"name":"碌曲县","value":"623026","parent":"623000"},{"name":"夏河县","value":"623027","parent":"623000"},{"name":"西宁市","value":"630100","parent":"630000"},{"name":"海东市","value":"630200","parent":"630000"},{"name":"海北藏族自治州","value":"632200","parent":"630000"},{"name":"黄南藏族自治州","value":"632300","parent":"630000"},{"name":"海南藏族自治州","value":"632500","parent":"630000"},{"name":"果洛藏族自治州","value":"632600","parent":"630000"},{"name":"玉树藏族自治州","value":"632700","parent":"630000"},{"name":"海西蒙古族藏族自治州","value":"632800","parent":"630000"},{"name":"城东区","value":"630102","parent":"630100"},{"name":"城中区","value":"630103","parent":"630100"},{"name":"城西区","value":"630104","parent":"630100"},{"name":"城北区","value":"630105","parent":"630100"},{"name":"大通回族土族自治县","value":"630121","parent":"630100"},{"name":"湟中县","value":"630122","parent":"630100"},{"name":"湟源县","value":"630123","parent":"630100"},{"name":"乐都区","value":"630202","parent":"630200"},{"name":"平安区","value":"630203","parent":"630200"},{"name":"民和回族土族自治县","value":"630222","parent":"630200"},{"name":"互助土族自治县","value":"630223","parent":"630200"},{"name":"化隆回族自治县","value":"630224","parent":"630200"},{"name":"循化撒拉族自治县","value":"630225","parent":"630200"},{"name":"门源回族自治县","value":"632221","parent":"632200"},{"name":"祁连县","value":"632222","parent":"632200"},{"name":"海晏县","value":"632223","parent":"632200"},{"name":"刚察县","value":"632224","parent":"632200"},{"name":"同仁县","value":"632321","parent":"632300"},{"name":"尖扎县","value":"632322","parent":"632300"},{"name":"泽库县","value":"632323","parent":"632300"},{"name":"河南蒙古族自治县","value":"632324","parent":"632300"},{"name":"共和县","value":"632521","parent":"632500"},{"name":"同德县","value":"632522","parent":"632500"},{"name":"贵德县","value":"632523","parent":"632500"},{"name":"兴海县","value":"632524","parent":"632500"},{"name":"贵南县","value":"632525","parent":"632500"},{"name":"玛沁县","value":"632621","parent":"632600"},{"name":"班玛县","value":"632622","parent":"632600"},{"name":"甘德县","value":"632623","parent":"632600"},{"name":"达日县","value":"632624","parent":"632600"},{"name":"久治县","value":"632625","parent":"632600"},{"name":"玛多县","value":"632626","parent":"632600"},{"name":"玉树市","value":"632701","parent":"632700"},{"name":"杂多县","value":"632722","parent":"632700"},{"name":"称多县","value":"632723","parent":"632700"},{"name":"治多县","value":"632724","parent":"632700"},{"name":"囊谦县","value":"632725","parent":"632700"},{"name":"曲麻莱县","value":"632726","parent":"632700"},{"name":"格尔木市","value":"632801","parent":"632800"},{"name":"德令哈市","value":"632802","parent":"632800"},{"name":"乌兰县","value":"632821","parent":"632800"},{"name":"都兰县","value":"632822","parent":"632800"},{"name":"天峻县","value":"632823","parent":"632800"},{"name":"银川市","value":"640100","parent":"640000"},{"name":"石嘴山市","value":"640200","parent":"640000"},{"name":"吴忠市","value":"640300","parent":"640000"},{"name":"固原市","value":"640400","parent":"640000"},{"name":"中卫市","value":"640500","parent":"640000"},{"name":"兴庆区","value":"640104","parent":"640100"},{"name":"西夏区","value":"640105","parent":"640100"},{"name":"金凤区","value":"640106","parent":"640100"},{"name":"永宁县","value":"640121","parent":"640100"},{"name":"贺兰县","value":"640122","parent":"640100"},{"name":"灵武市","value":"640181","parent":"640100"},{"name":"大武口区","value":"640202","parent":"640200"},{"name":"惠农区","value":"640205","parent":"640200"},{"name":"平罗县","value":"640221","parent":"640200"},{"name":"利通区","value":"640302","parent":"640300"},{"name":"红寺堡区","value":"640303","parent":"640300"},{"name":"盐池县","value":"640323","parent":"640300"},{"name":"同心县","value":"640324","parent":"640300"},{"name":"青铜峡市","value":"640381","parent":"640300"},{"name":"原州区","value":"640402","parent":"640400"},{"name":"西吉县","value":"640422","parent":"640400"},{"name":"隆德县","value":"640423","parent":"640400"},{"name":"泾源县","value":"640424","parent":"640400"},{"name":"彭阳县","value":"640425","parent":"640400"},{"name":"沙坡头区","value":"640502","parent":"640500"},{"name":"中宁县","value":"640521","parent":"640500"},{"name":"海原县","value":"640522","parent":"640500"},{"name":"乌鲁木齐市","value":"650100","parent":"650000"},{"name":"克拉玛依市","value":"650200","parent":"650000"},{"name":"吐鲁番市","value":"650400","parent":"650000"},{"name":"哈密地区","value":"652200","parent":"650000"},{"name":"昌吉回族自治州","value":"652300","parent":"650000"},{"name":"博尔塔拉蒙古自治州","value":"652700","parent":"650000"},{"name":"巴音郭楞蒙古自治州","value":"652800","parent":"650000"},{"name":"阿克苏地区","value":"652900","parent":"650000"},{"name":"克孜勒苏柯尔克孜自治州","value":"653000","parent":"650000"},{"name":"喀什地区","value":"653100","parent":"650000"},{"name":"和田地区","value":"653200","parent":"650000"},{"name":"伊犁哈萨克自治州","value":"654000","parent":"650000"},{"name":"塔城地区","value":"654200","parent":"650000"},{"name":"阿勒泰地区","value":"654300","parent":"650000"},{"name":"石河子市","value":"659001","parent":"650000"},{"name":"阿拉尔市","value":"659002","parent":"650000"},{"name":"图木舒克市","value":"659003","parent":"650000"},{"name":"五家渠市","value":"659004","parent":"650000"},{"name":"天山区","value":"650102","parent":"650100"},{"name":"沙依巴克区","value":"650103","parent":"650100"},{"name":"新市区","value":"650104","parent":"650100"},{"name":"水磨沟区","value":"650105","parent":"650100"},{"name":"头屯河区","value":"650106","parent":"650100"},{"name":"达坂城区","value":"650107","parent":"650100"},{"name":"米东区","value":"650109","parent":"650100"},{"name":"乌鲁木齐县","value":"650121","parent":"650100"},{"name":"独山子区","value":"650202","parent":"650200"},{"name":"克拉玛依区","value":"650203","parent":"650200"},{"name":"白碱滩区","value":"650204","parent":"650200"},{"name":"乌尔禾区","value":"650205","parent":"650200"},{"name":"高昌区","value":"650402","parent":"650400"},{"name":"鄯善县","value":"650421","parent":"650400"},{"name":"托克逊县","value":"650422","parent":"650400"},{"name":"哈密市","value":"652201","parent":"652200"},{"name":"巴里坤哈萨克自治县","value":"652222","parent":"652200"},{"name":"伊吾县","value":"652223","parent":"652200"},{"name":"昌吉市","value":"652301","parent":"652300"},{"name":"阜康市","value":"652302","parent":"652300"},{"name":"呼图壁县","value":"652323","parent":"652300"},{"name":"玛纳斯县","value":"652324","parent":"652300"},{"name":"奇台县","value":"652325","parent":"652300"},{"name":"吉木萨尔县","value":"652327","parent":"652300"},{"name":"木垒哈萨克自治县","value":"652328","parent":"652300"},{"name":"博乐市","value":"652701","parent":"652700"},{"name":"阿拉山口市","value":"652702","parent":"652700"},{"name":"精河县","value":"652722","parent":"652700"},{"name":"温泉县","value":"652723","parent":"652700"},{"name":"库尔勒市","value":"652801","parent":"652800"},{"name":"轮台县","value":"652822","parent":"652800"},{"name":"尉犁县","value":"652823","parent":"652800"},{"name":"若羌县","value":"652824","parent":"652800"},{"name":"且末县","value":"652825","parent":"652800"},{"name":"焉耆回族自治县","value":"652826","parent":"652800"},{"name":"和静县","value":"652827","parent":"652800"},{"name":"和硕县","value":"652828","parent":"652800"},{"name":"博湖县","value":"652829","parent":"652800"},{"name":"阿克苏市","value":"652901","parent":"652900"},{"name":"温宿县","value":"652922","parent":"652900"},{"name":"库车县","value":"652923","parent":"652900"},{"name":"沙雅县","value":"652924","parent":"652900"},{"name":"新和县","value":"652925","parent":"652900"},{"name":"拜城县","value":"652926","parent":"652900"},{"name":"乌什县","value":"652927","parent":"652900"},{"name":"阿瓦提县","value":"652928","parent":"652900"},{"name":"柯坪县","value":"652929","parent":"652900"},{"name":"阿图什市","value":"653001","parent":"653000"},{"name":"阿克陶县","value":"653022","parent":"653000"},{"name":"阿合奇县","value":"653023","parent":"653000"},{"name":"乌恰县","value":"653024","parent":"653000"},{"name":"喀什市","value":"653101","parent":"653100"},{"name":"疏附县","value":"653121","parent":"653100"},{"name":"疏勒县","value":"653122","parent":"653100"},{"name":"英吉沙县","value":"653123","parent":"653100"},{"name":"泽普县","value":"653124","parent":"653100"},{"name":"莎车县","value":"653125","parent":"653100"},{"name":"叶城县","value":"653126","parent":"653100"},{"name":"麦盖提县","value":"653127","parent":"653100"},{"name":"岳普湖县","value":"653128","parent":"653100"},{"name":"伽师县","value":"653129","parent":"653100"},{"name":"巴楚县","value":"653130","parent":"653100"},{"name":"塔什库尔干塔吉克自治县","value":"653131","parent":"653100"},{"name":"和田市","value":"653201","parent":"653200"},{"name":"和田县","value":"653221","parent":"653200"},{"name":"墨玉县","value":"653222","parent":"653200"},{"name":"皮山县","value":"653223","parent":"653200"},{"name":"洛浦县","value":"653224","parent":"653200"},{"name":"策勒县","value":"653225","parent":"653200"},{"name":"于田县","value":"653226","parent":"653200"},{"name":"民丰县","value":"653227","parent":"653200"},{"name":"伊宁市","value":"654002","parent":"654000"},{"name":"奎屯市","value":"654003","parent":"654000"},{"name":"霍尔果斯市","value":"654004","parent":"654000"},{"name":"伊宁县","value":"654021","parent":"654000"},{"name":"察布查尔锡伯自治县","value":"654022","parent":"654000"},{"name":"霍城县","value":"654023","parent":"654000"},{"name":"巩留县","value":"654024","parent":"654000"},{"name":"新源县","value":"654025","parent":"654000"},{"name":"昭苏县","value":"654026","parent":"654000"},{"name":"特克斯县","value":"654027","parent":"654000"},{"name":"尼勒克县","value":"654028","parent":"654000"},{"name":"塔城市","value":"654201","parent":"654200"},{"name":"乌苏市","value":"654202","parent":"654200"},{"name":"额敏县","value":"654221","parent":"654200"},{"name":"沙湾县","value":"654223","parent":"654200"},{"name":"托里县","value":"654224","parent":"654200"},{"name":"裕民县","value":"654225","parent":"654200"},{"name":"和布克赛尔蒙古自治县","value":"654226","parent":"654200"},{"name":"阿勒泰市","value":"654301","parent":"654300"},{"name":"布尔津县","value":"654321","parent":"654300"},{"name":"富蕴县","value":"654322","parent":"654300"},{"name":"福海县","value":"654323","parent":"654300"},{"name":"哈巴河县","value":"654324","parent":"654300"},{"name":"青河县","value":"654325","parent":"654300"},{"name":"吉木乃县","value":"654326","parent":"654300"},{"name":"中西區","value":"810001","parent":"810000"},{"name":"灣仔區","value":"810002","parent":"810000"},{"name":"東區","value":"810003","parent":"810000"},{"name":"南區","value":"810004","parent":"810000"},{"name":"油尖旺區","value":"810005","parent":"810000"},{"name":"深水埗區","value":"810006","parent":"810000"},{"name":"九龍城區","value":"810007","parent":"810000"},{"name":"黃大仙區","value":"810008","parent":"810000"},{"name":"觀塘區","value":"810009","parent":"810000"},{"name":"荃灣區","value":"810010","parent":"810000"},{"name":"屯門區","value":"810011","parent":"810000"},{"name":"元朗區","value":"810012","parent":"810000"},{"name":"北區","value":"810013","parent":"810000"},{"name":"大埔區","value":"810014","parent":"810000"},{"name":"西貢區","value":"810015","parent":"810000"},{"name":"沙田區","value":"810016","parent":"810000"},{"name":"葵青區","value":"810017","parent":"810000"},{"name":"離島區","value":"810018","parent":"810000"},{"name":"花地瑪堂區","value":"820001","parent":"820000"},{"name":"花王堂區","value":"820002","parent":"820000"},{"name":"望德堂區","value":"820003","parent":"820000"},{"name":"大堂區","value":"820004","parent":"820000"},{"name":"風順堂區","value":"820005","parent":"820000"},{"name":"嘉模堂區","value":"820006","parent":"820000"},{"name":"路氹填海區","value":"820007","parent":"820000"},{"name":"聖方濟各堂區","value":"820008","parent":"820000"},{"name":"--","value":"--","parent":"110200"},{"name":"--","value":"--","parent":"120200"},{"name":"--","value":"--","parent":"139000"},{"name":"--","value":"--","parent":"139001"},{"name":"--","value":"--","parent":"139002"},{"name":"--","value":"--","parent":"310200"},{"name":"--","value":"--","parent":"419000"},{"name":"--","value":"--","parent":"419001"},{"name":"--","value":"--","parent":"429000"},{"name":"--","value":"--","parent":"429004"},{"name":"--","value":"--","parent":"429005"},{"name":"--","value":"--","parent":"429006"},{"name":"--","value":"--","parent":"429021"},{"name":"--","value":"--","parent":"441900"},{"name":"--","value":"--","parent":"442000"},{"name":"--","value":"--","parent":"469000"},{"name":"--","value":"--","parent":"469001"},{"name":"--","value":"--","parent":"469002"},{"name":"--","value":"--","parent":"469003"},{"name":"--","value":"--","parent":"469005"},{"name":"--","value":"--","parent":"469006"},{"name":"--","value":"--","parent":"469007"},{"name":"--","value":"--","parent":"469021"},{"name":"--","value":"--","parent":"469022"},{"name":"--","value":"--","parent":"469023"},{"name":"--","value":"--","parent":"469024"},{"name":"--","value":"--","parent":"469025"},{"name":"--","value":"--","parent":"469026"},{"name":"--","value":"--","parent":"469027"},{"name":"--","value":"--","parent":"469028"},{"name":"--","value":"--","parent":"469029"},{"name":"--","value":"--","parent":"469030"},{"name":"--","value":"--","parent":"500200"},{"name":"--","value":"--","parent":"620200"},{"name":"--","value":"--","parent":"659000"},{"name":"--","value":"--","parent":"659001"},{"name":"--","value":"--","parent":"659002"},{"name":"--","value":"--","parent":"659003"},{"name":"--","value":"--","parent":"659004"}]

/***/ }),

/***/ "eWmL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className: function className() {
      return 'weui-icon weui_icon_' + this.type + ' weui-icon-' + this.type.replace(/_/g, '-');
    }
  }
};

/***/ }),

/***/ "eu68":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

var _scroller = __webpack_require__("qu0v");

var _scroller2 = _interopRequireDefault(_scroller);

var _flexbox = __webpack_require__("QgQO");

var _chain = __webpack_require__("B7K5");

var _chain2 = _interopRequireDefault(_chain);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _isArray = __webpack_require__("SNYt");

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'picker',
  components: {
    Flexbox: _flexbox.Flexbox,
    FlexboxItem: _flexbox.FlexboxItem
  },
  created: function created() {
    if (this.columns !== 0) {
      var length = this.columns;
      this.store = new _chain2.default(this.data, length, this.fixedColumns || this.columns);
      this.currentData = this.store.getColumns(this.value);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(function () {
      _this2.render(_this2.currentData, _this2.currentValue);
    });
  },

  props: {
    data: Array,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues: function getNameValues() {
      return (0, _value2name2.default)(this.currentValue, this.data);
    },
    getId: function getId(i) {
      return '#vux-picker-' + this.uuid + '-' + i;
    },
    render: function render(data, value) {
      this.count = this.currentData.length;
      var _this = this;
      if (!data || !data.length) {
        return;
      }
      var count = this.currentData.length;

      if (value.length < count) {
        for (var i = 0; i < count; i++) {
          if (false) {
            console.error('[VUX error] 渲染出错，如果为联动模式，需要指定 columns(列数)');
          }
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0]);
        }
      }

      var _loop = function _loop(_i) {
        if (!document.querySelector(_this.getId(_i))) {
          return {
            v: void 0
          };
        }

        _this.scroller[_i] && _this.scroller[_i].destroy();
        _this.scroller[_i] = new _scroller2.default(_this.getId(_i), {
          data: data[_i],
          defaultValue: value[_i] || data[_i][0].value,
          itemClass: _this.itemClass,
          onSelect: function onSelect(value) {
            _this.$set(_this.currentValue, _i, value);
            if (!this.columns || this.columns && _this.getValue().length === _this.store.count) {
              _this.$nextTick(function () {
                _this.$emit('on-change', _this.getValue());
              });
            }
            if (_this.columns !== 0) {
              _this.renderChain(_i + 1);
            }
          }
        });
        if (_this.currentValue) {
          _this.scroller[_i].select(value[_i]);
        }
      };

      for (var _i = 0; _i < data.length; _i++) {
        var _ret = _loop(_i);

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }
    },
    renderChain: function renderChain(i) {
      if (!this.columns) {
        return;
      }

      if (i > this.count - 1) {
        return;
      }

      var _this = this;
      var ID = this.getId(i);

      this.scroller[i].destroy();
      var list = this.store.getChildren(_this.getValue()[i - 1]);
      this.scroller[i] = new _scroller2.default(ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect: function onSelect(value) {
          _this.$set(_this.currentValue, i, value);
          _this.$nextTick(function () {
            _this.$emit('on-change', _this.getValue());
          });
          _this.renderChain(i + 1);
        }
      });

      if (list.length) {
        this.$set(this.currentValue, i, list[0].value);
        this.renderChain(i + 1);
      } else {
        this.$set(this.currentValue, i, null);
      }
    },
    getValue: function getValue() {
      var data = [];
      for (var i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value);
        } else {
          return [];
        }
      }
      return data;
    },
    emitValueChange: function emitValueChange(val) {
      if (!this.columns || this.columns && val.length === this.store.count) {
        this.$emit('on-change', val);
      }
    }
  },
  data: function data() {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.currentValue)) {
        this.currentValue = val;
      }
    },
    currentValue: function currentValue(val, oldVal) {
      this.$emit('input', val);

      if (this.columns !== 0) {
        if (val.length > 0) {
          if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(oldVal)) {
            this.currentData = this.store.getColumns(val);
            this.$nextTick(function () {
              this.render(this.currentData, val);
            });
          }
        }
      } else {
        if (val.length) {
          for (var i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i]);
            }
          }
        } else {
          this.render(this.currentData, []);
        }
      }
    },
    data: function data(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.currentData)) {
        this.currentData = val;
      }
    },
    currentData: function currentData(newData) {
      var _this3 = this;

      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(function () {
          _this3.render(newData, _this3.currentValue);

          _this3.$nextTick(function () {
            _this3.emitValueChange(_this3.getValue());

            if ((0, _stringify2.default)(_this3.getValue()) !== (0, _stringify2.default)(_this3.currentValue)) {
              if (!_this3.columns || _this3.columns && _this3.getValue().length === _this3.store.count) {
                _this3.currentValue = _this3.getValue();
              }
            }
          });
        });
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return;
          }
          var length = this.columns;
          this.store = new _chain2.default(newData, length, this.fixedColumns || this.columns);
          this.currentData = this.store.getColumns(this.currentValue);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy();
      this.scroller[i] = null;
    }
  }
};

/***/ }),

/***/ "fcxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _picker = __webpack_require__("UdYw");

var _picker2 = _interopRequireDefault(_picker);

var _cell = __webpack_require__("gpPJ");

var _cell2 = _interopRequireDefault(_cell);

var _popup = __webpack_require__("cTn1");

var _popup2 = _interopRequireDefault(_popup);

var _popupHeader = __webpack_require__("lN2D");

var _popupHeader2 = _interopRequireDefault(_popupHeader);

var _inlineDesc = __webpack_require__("2vzc");

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _flexbox = __webpack_require__("QgQO");

var _array2String = __webpack_require__("ytj0");

var _array2String2 = _interopRequireDefault(_array2String);

var _value2name = __webpack_require__("CZ5u");

var _value2name2 = _interopRequireDefault(_value2name);

var _mixin_uuid = __webpack_require__("ONqH");

var _mixin_uuid2 = _interopRequireDefault(_mixin_uuid);

var _transferDom = __webpack_require__("Jp5S");

var _transferDom2 = _interopRequireDefault(_transferDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getObject = function getObject(obj) {
  return JSON.parse((0, _stringify2.default)(obj));
};

exports.default = {
  name: 'popup-picker',
  directives: {
    TransferDom: _transferDom2.default
  },
  created: function created() {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show;
    }
  },

  mixins: [_mixin_uuid2.default],
  components: {
    Picker: _picker2.default,
    Cell: _cell2.default,
    Popup: _popup2.default,
    PopupHeader: _popupHeader2.default,
    Flexbox: _flexbox.Flexbox,
    FlexboxItem: _flexbox.FlexboxItem,
    InlineDesc: _inlineDesc2.default
  },
  filters: {
    array2string: _array2String2.default,
    value2name: _value2name2.default
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String,
    disabled: Boolean
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    value2name: _value2name2.default,
    getNameValues: function getNameValues() {
      return (0, _value2name2.default)(this.currentValue, this.data);
    },
    onClick: function onClick() {
      if (!this.disabled) {
        this.showValue = true;
      }
    },
    onHide: function onHide(type) {
      this.showValue = false;
      if (type) {
        this.closeType = true;
        this.currentValue = getObject(this.tempValue);
      }
      if (!type) {
        this.closeType = false;
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue);
        }
      }
    },
    onPopupShow: function onPopupShow() {
      this.closeType = false;
      this.$emit('on-show');
    },
    onPopupHide: function onPopupHide(val) {
      if (this.value.length > 0) {
        this.tempValue = getObject(this.currentValue);
      }
      this.$emit('on-hide', this.closeType);
    },
    onPickerChange: function onPickerChange(val) {
      if ((0, _stringify2.default)(this.currentValue) !== (0, _stringify2.default)(val)) {
        if (this.value.length) {
          var nowData = (0, _stringify2.default)(this.data);
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val);
          }
          this.currentData = nowData;
        } else {}
      }
      var _val = getObject(val);
      this.$emit('on-shadow-change', _val, (0, _value2name2.default)(_val, this.data).split(' '));
    }
  },
  watch: {
    value: function value(val) {
      if ((0, _stringify2.default)(val) !== (0, _stringify2.default)(this.tempValue)) {
        this.tempValue = getObject(val);
        this.currentValue = getObject(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', getObject(val));
      this.$emit('on-change', getObject(val));
    },
    show: function show(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('update:show', val);
    }
  },
  data: function data() {
    return {
      onShowProcess: false,
      tempValue: getObject(this.value),
      closeType: false,
      currentData: (0, _stringify2.default)(this.data),
      showValue: false,
      currentValue: this.value
    };
  }
};

/***/ }),

/***/ "fqpJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  created: function created() {
    this.uuid = Math.random().toString(36).substring(3, 8);
  }
};

/***/ }),

/***/ "fvyU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("3a/0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("WSuk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58b92dc6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("x7MA");
function injectStyle (ssrContext) {
  __webpack_require__("97wD")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58b92dc6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hArn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("eWmL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("XvmL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_39bbf206_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("wc2Y");
function injectStyle (ssrContext) {
  __webpack_require__("CuDe")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_39bbf206_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "i/Hp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cells__title"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "i46f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("bwqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("s48m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4bd8611d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("r9dx");
function injectStyle (ssrContext) {
  __webpack_require__("2lvs")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4bd8611d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jfuQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'popup-header',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),

/***/ "lFnp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElement = getElement;
exports.getComputedStyle = getComputedStyle;
exports.easeOutCubic = easeOutCubic;
exports.easeInOutCubic = easeInOutCubic;
function getElement(expr) {
  return typeof expr === 'string' ? document.querySelector(expr) : expr;
}

function getComputedStyle(el, key) {
  var computedStyle = window.getComputedStyle(el);
  return computedStyle[key] || '';
}

function easeOutCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
}

function easeInOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2);
}

/***/ }),

/***/ "lN2D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("jfuQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("qH4F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58491e4a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("qT6w");
function injectStyle (ssrContext) {
  __webpack_require__("F+W+")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58491e4a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "o+C2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("EaEK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("fcxy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0b671e1c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("TlQ5");
function injectStyle (ssrContext) {
  __webpack_require__("dvdu")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0b671e1c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pWBi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var Big = __webpack_require__("JCi3");
exports.default = {
  name: 'x-number',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator: function validator(value) {
        if (typeof value === 'number') {
          return true;
        } else if (typeof value === 'string') {
          return value === '';
        }
        return false;
      },

      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created: function created() {
    this.currentValue = this.value;
  },
  data: function data() {
    return {
      currentValue: 0
    };
  },

  computed: {
    disabledMin: function disabledMin() {
      return typeof this.min === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue <= this.min;
    },
    disabledMax: function disabledMax() {
      return typeof this.max === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue >= this.max;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue: function currentValue(newValue, old) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min;
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max;
        }
      }
      this.$emit('input', this.currentValue);
    },
    value: function value(newValue) {
      this.currentValue = newValue;
      this.$emit('on-change', newValue);
    }
  },
  methods: {
    add: function add() {
      if (!this.disabledMax) {
        var x = new Big(this.currentValue);
        this.currentValue = x.plus(this.step) * 1;
      }
    },
    sub: function sub() {
      if (!this.disabledMin) {
        var x = new Big(this.currentValue);
        this.currentValue = x.minus(this.step) * 1;
      }
    },
    blur: function blur() {
      if (this.currentValue === '') {
        this.currentValue = 0;
      }
    }
  }
};

/***/ }),

/***/ "qH4F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'popup-header',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),

/***/ "qT6w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-popup-header",class:_vm.showBottomBorder ? 'vux-1px-b' : ''},[_c('div',{staticClass:"vux-popup-header-left",on:{"click":function($event){_vm.$emit('on-click-left')}}},[_vm._t("left-text",[_vm._v(_vm._s(_vm.leftText))])],2),_vm._v(" "),_c('div',{staticClass:"vux-popup-header-title"},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_vm._v(" "),_c('div',{staticClass:"vux-popup-header-right",on:{"click":function($event){_vm.$emit('on-click-right')}}},[_vm._t("right-text",[_vm._v(_vm._s(_vm.rightText))])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qZvt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function find(array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context);
  }

  context = context || this;
  var length = array.length;
  var i;

  if (typeof predicate !== 'function') {
    throw new TypeError(predicate + ' is not a function');
  }

  for (i = 0; i < length; i++) {
    if (predicate.call(context, array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = find;


/***/ }),

/***/ "qu0v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("3cXf");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__("hRKE");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object';

var TEMPLATE = '\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n';

var Animate = __webpack_require__("R7kJ");

var _require = __webpack_require__("lFnp"),
    getElement = _require.getElement,
    getComputedStyle = _require.getComputedStyle,
    easeOutCubic = _require.easeOutCubic,
    easeInOutCubic = _require.easeInOutCubic;

var passiveSupported = __webpack_require__("KTwD");

var getDpr = function getDpr() {
  var dpr = 1;
  if (isBrowser) {
    if (window.VUX_CONFIG && window.VUX_CONFIG.$picker && window.VUX_CONFIG.$picker.respectHtmlDataDpr) {
      dpr = document.documentElement.getAttribute('data-dpr') || 1;
    }
  }
  return dpr;
};

var Scroller = function Scroller(container, options) {
  var self = this;

  self.dpr = getDpr();

  options = options || {};

  self.options = {
    itemClass: 'scroller-item',
    onSelect: function onSelect() {},

    defaultValue: 0,
    data: []
  };

  for (var key in options) {
    if (options[key] !== undefined) {
      self.options[key] = options[key];
    }
  }

  self.__container = getElement(container);

  var tempContainer = document.createElement('div');
  tempContainer.innerHTML = options.template || TEMPLATE;

  var component = self.__component = tempContainer.querySelector('[data-role=component]');
  var content = self.__content = component.querySelector('[data-role=content]');
  var indicator = component.querySelector('[data-role=indicator]');

  var data = self.options.data;
  var html = '';
  if (data.length && data[0].constructor === Object) {
    data.forEach(function (row) {
      html += '<div class="' + self.options.itemClass + '" data-value=' + (0, _stringify2.default)({ value: encodeURI(row.value) }) + '>' + row.name + '</div>';
    });
  } else {
    data.forEach(function (val) {
      html += '<div class="' + self.options.itemClass + '" data-value=' + (0, _stringify2.default)({ value: encodeURI(val) }) + '>' + val + '</div>';
    });
  }
  content.innerHTML = html;

  self.__container.appendChild(component);

  self.__itemHeight = parseFloat(getComputedStyle(indicator, 'height'), 10);

  self.__callback = options.callback || function (top) {
    var distance = -top * self.dpr;
    content.style.webkitTransform = 'translate3d(0, ' + distance + 'px, 0)';
    content.style.transform = 'translate3d(0, ' + distance + 'px, 0)';
  };

  var rect = component.getBoundingClientRect();

  self.__clientTop = rect.top + component.clientTop || 0;

  self.__setDimensions(component.clientHeight, content.offsetHeight);

  if (component.clientHeight === 0) {
    self.__setDimensions(parseFloat(getComputedStyle(component, 'height'), 10), 204);
  }
  self.select(self.options.defaultValue, false);

  var touchStartHandler = function touchStartHandler(e) {
    if (e.target.tagName.match(/input|textarea|select/i)) {
      return;
    }
    e.preventDefault();
    self.__doTouchStart(e, e.timeStamp);
  };

  var touchMoveHandler = function touchMoveHandler(e) {
    self.__doTouchMove(e, e.timeStamp);
  };

  var touchEndHandler = function touchEndHandler(e) {
    self.__doTouchEnd(e.timeStamp);
  };

  var willPreventDefault = passiveSupported ? { passive: false } : false;
  var willNotPreventDefault = passiveSupported ? { passive: true } : false;

  component.addEventListener('touchstart', touchStartHandler, willPreventDefault);
  component.addEventListener('mousedown', touchStartHandler, willPreventDefault);

  component.addEventListener('touchmove', touchMoveHandler, willNotPreventDefault);
  component.addEventListener('mousemove', touchMoveHandler, willNotPreventDefault);

  component.addEventListener('touchend', touchEndHandler, willNotPreventDefault);
  component.addEventListener('mouseup', touchEndHandler, willNotPreventDefault);
};

var members = {
  value: null,
  __prevValue: null,
  __isSingleTouch: false,
  __isTracking: false,
  __didDecelerationComplete: false,
  __isGesturing: false,
  __isDragging: false,
  __isDecelerating: false,
  __isAnimating: false,
  __clientTop: 0,
  __clientHeight: 0,
  __contentHeight: 0,
  __itemHeight: 0,
  __scrollTop: 0,
  __minScrollTop: 0,
  __maxScrollTop: 0,
  __scheduledTop: 0,
  __lastTouchTop: null,
  __lastTouchMove: null,
  __positions: null,
  __minDecelerationScrollTop: null,
  __maxDecelerationScrollTop: null,
  __decelerationVelocityY: null,

  __setDimensions: function __setDimensions(clientHeight, contentHeight) {
    var self = this;

    self.__clientHeight = clientHeight;
    self.__contentHeight = contentHeight;

    var totalItemCount = self.options.data.length;
    var clientItemCount = Math.round(self.__clientHeight / self.__itemHeight);

    self.__minScrollTop = -self.__itemHeight * (clientItemCount / 2);
    self.__maxScrollTop = self.__minScrollTop + totalItemCount * self.__itemHeight - 0.1;
  },
  selectByIndex: function selectByIndex(index, animate) {
    var self = this;
    if (index < 0 || index > self.__content.childElementCount - 1) {
      return;
    }
    self.__scrollTop = self.__minScrollTop + index * self.__itemHeight;

    self.scrollTo(self.__scrollTop, animate);

    self.__selectItem(self.__content.children[index]);
  },
  select: function select(value, animate) {
    var self = this;

    var children = self.__content.children;
    for (var i = 0, len = children.length; i < len; i++) {
      if (decodeURI(JSON.parse(children[i].dataset.value).value) === value) {
        self.selectByIndex(i, animate);
        return;
      }
    }

    self.selectByIndex(0, animate);
  },
  getValue: function getValue() {
    return this.value;
  },
  scrollTo: function scrollTo(top, animate) {
    var self = this;

    animate = animate === undefined ? true : animate;

    if (self.__isDecelerating) {
      Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    top = Math.round((top / self.__itemHeight).toFixed(5)) * self.__itemHeight;
    top = Math.max(Math.min(self.__maxScrollTop, top), self.__minScrollTop);

    if (top === self.__scrollTop || !animate) {
      self.__publish(top);
      self.__scrollingComplete();
      return;
    }
    self.__publish(top, 250);
  },
  destroy: function destroy() {
    this.__component.parentNode && this.__component.parentNode.removeChild(this.__component);
  },
  __selectItem: function __selectItem(selectedItem) {
    var self = this;

    var selectedItemClass = self.options.itemClass + '-selected';
    var lastSelectedElem = self.__content.querySelector('.' + selectedItemClass);
    if (lastSelectedElem) {
      lastSelectedElem.classList.remove(selectedItemClass);
    }
    selectedItem.classList.add(selectedItemClass);

    if (self.value !== null) {
      self.__prevValue = self.value;
    }

    self.value = decodeURI(JSON.parse(selectedItem.dataset.value).value);
  },
  __scrollingComplete: function __scrollingComplete() {
    var self = this;

    var index = Math.round((self.__scrollTop - self.__minScrollTop - self.__itemHeight / 2) / self.__itemHeight);

    self.__selectItem(self.__content.children[index]);

    if (self.__prevValue !== null && self.__prevValue !== self.value) {
      self.options.onSelect(self.value);
    }
  },
  __doTouchStart: function __doTouchStart(ev, timeStamp) {
    var touches = ev.touches;
    var self = this;
    var target = ev.touches ? ev.touches[0] : ev;
    var isMobile = !!ev.touches;

    if (ev.touches && touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    self.__interruptedAnimation = true;

    if (self.__isDecelerating) {
      Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
      self.__interruptedAnimation = true;
    }

    if (self.__isAnimating) {
      Animate.stop(self.__isAnimating);
      self.__isAnimating = false;
      self.__interruptedAnimation = true;
    }

    var currentTouchTop;
    var isSingleTouch = isMobile && touches.length === 1 || !isMobile;
    if (isSingleTouch) {
      currentTouchTop = target.pageY;
    } else {
      currentTouchTop = Math.abs(target.pageY + touches[1].pageY) / 2;
    }

    self.__initialTouchTop = currentTouchTop;
    self.__lastTouchTop = currentTouchTop;
    self.__lastTouchMove = timeStamp;
    self.__lastScale = 1;
    self.__enableScrollY = !isSingleTouch;
    self.__isTracking = true;
    self.__didDecelerationComplete = false;
    self.__isDragging = !isSingleTouch;
    self.__isSingleTouch = isSingleTouch;
    self.__positions = [];
  },
  __doTouchMove: function __doTouchMove(ev, timeStamp, scale) {
    var self = this;
    var touches = ev.touches;
    var target = ev.touches ? ev.touches[0] : ev;
    var isMobile = !!ev.touches;

    if (touches && touches.length == null) {
      throw new Error('Invalid touch list: ' + touches);
    }
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    if (!self.__isTracking) {
      return;
    }

    var currentTouchTop;

    if (isMobile && touches.length === 2) {
      currentTouchTop = Math.abs(target.pageY + touches[1].pageY) / 2;
    } else {
      currentTouchTop = target.pageY;
    }

    var positions = self.__positions;

    if (self.__isDragging) {
      var moveY = currentTouchTop - self.__lastTouchTop;
      var scrollTop = self.__scrollTop;

      if (self.__enableScrollY) {
        scrollTop -= moveY;

        var minScrollTop = self.__minScrollTop;
        var maxScrollTop = self.__maxScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < minScrollTop) {
          if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop;
          } else {
            scrollTop = minScrollTop;
          }
        }
      }

      if (positions.length > 40) {
        positions.splice(0, 20);
      }

      positions.push(scrollTop, timeStamp);

      self.__publish(scrollTop);
    } else {
      var minimumTrackingForScroll = 0;
      var minimumTrackingForDrag = 5;

      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

      self.__enableScrollY = distanceY >= minimumTrackingForScroll;

      positions.push(self.__scrollTop, timeStamp);

      self.__isDragging = self.__enableScrollY && distanceY >= minimumTrackingForDrag;

      if (self.__isDragging) {
        self.__interruptedAnimation = false;
      }
    }

    self.__lastTouchTop = currentTouchTop;
    self.__lastTouchMove = timeStamp;
    self.__lastScale = scale;
  },
  __doTouchEnd: function __doTouchEnd(timeStamp) {
    var self = this;

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp);
    }

    if (!self.__isTracking) {
      return;
    }

    self.__isTracking = false;

    if (self.__isDragging) {
      self.__isDragging = false;

      if (self.__isSingleTouch && timeStamp - self.__lastTouchMove <= 100) {
        var positions = self.__positions;
        var endPos = positions.length - 1;
        var startPos = endPos;

        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 2) {
          startPos = i;
        }

        if (startPos !== endPos) {
          var timeOffset = positions[endPos] - positions[startPos];
          var movedTop = self.__scrollTop - positions[startPos - 1];

          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

          var minVelocityToStartDeceleration = 4;

          if (Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            self.__startDeceleration(timeStamp);
          }
        }
      }
    }

    if (!self.__isDecelerating) {
      self.scrollTo(self.__scrollTop);
    }

    self.__positions.length = 0;
  },
  __publish: function __publish(top, animationDuration) {
    var self = this;

    var wasAnimating = self.__isAnimating;
    if (wasAnimating) {
      Animate.stop(wasAnimating);
      self.__isAnimating = false;
    }

    if (animationDuration) {
      self.__scheduledTop = top;

      var oldTop = self.__scrollTop;
      var diffTop = top - oldTop;

      var step = function step(percent, now, render) {
        self.__scrollTop = oldTop + diffTop * percent;

        if (self.__callback) {
          self.__callback(self.__scrollTop);
        }
      };

      var verify = function verify(id) {
        return self.__isAnimating === id;
      };

      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === self.__isAnimating) {
          self.__isAnimating = false;
        }
        if (self.__didDecelerationComplete || wasFinished) {
          self.__scrollingComplete();
        }
      };

      self.__isAnimating = Animate.start(step, verify, completed, animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
    } else {
      self.__scheduledTop = self.__scrollTop = top;

      if (self.__callback) {
        self.__callback(top);
      }
    }
  },
  __startDeceleration: function __startDeceleration(timeStamp) {
    var self = this;

    self.__minDecelerationScrollTop = self.__minScrollTop;
    self.__maxDecelerationScrollTop = self.__maxScrollTop;

    var step = function step(percent, now, render) {
      self.__stepThroughDeceleration(render);
    };

    var minVelocityToKeepDecelerating = 0.5;

    var verify = function verify() {
      var shouldContinue = Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
      if (!shouldContinue) {
        self.__didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
      self.__isDecelerating = false;
      if (self.__scrollTop <= self.__minScrollTop || self.__scrollTop >= self.__maxScrollTop) {
        self.scrollTo(self.__scrollTop);
        return;
      }
      if (self.__didDecelerationComplete) {
        self.__scrollingComplete();
      }
    };

    self.__isDecelerating = Animate.start(step, verify, completed);
  },
  __stepThroughDeceleration: function __stepThroughDeceleration(render) {
    var self = this;

    var scrollTop = self.__scrollTop + self.__decelerationVelocityY;

    var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);
    if (scrollTopFixed !== scrollTop) {
      scrollTop = scrollTopFixed;
      self.__decelerationVelocityY = 0;
    }

    if (Math.abs(self.__decelerationVelocityY) <= 1) {
      if (Math.abs(scrollTop % self.__itemHeight) < 1) {
        self.__decelerationVelocityY = 0;
      }
    } else {
      self.__decelerationVelocityY *= 0.95;
    }

    self.__publish(scrollTop);
  }
};

for (var key in members) {
  Scroller.prototype[key] = members[key];
}

exports.default = Scroller;

/***/ }),

/***/ "r9dx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-tab"},[_vm._t("header"),_vm._v(" "),_c('div',{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:({paddingTop: _vm.bodyPaddingTop, paddingBottom: _vm.bodyPaddingBottom}),attrs:{"id":"vux_view_box_body"}},[_vm._t("default")],2),_vm._v(" "),_vm._t("bottom")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rWoo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ "s48m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'view-box',
  props: ['bodyPaddingTop', 'bodyPaddingBottom'],
  methods: {
    scrollTo: function scrollTo(top) {
      this.$refs.viewBoxBody.scrollTop = top;
    },
    getScrollTop: function getScrollTop() {
      return this.$refs.viewBoxBody.scrollTop;
    },
    getScrollBody: function getScrollBody() {
      return this.$refs.viewBoxBody;
    }
  }
};

/***/ }),

/***/ "soxc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _popup = __webpack_require__("5lwt");

var _popup2 = _interopRequireDefault(_popup);

var _dom = __webpack_require__("NlBL");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(function () {
      var _this = _this2;
      _this2.popup = new _popup2.default({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen: function onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose: function onClose() {
          _this.show = false;
          if (window.__$vuxPopups && (0, _keys2.default)(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(function () {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (_this2.value) {
        _this2.popup.show();
      }
      _this2.initialShow = false;
    });
  },
  deactivated: function deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },

  methods: {
    fixSafariOverflowScrolling: function fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;

      for (var i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName: function removeModalClassName() {
      this.layout === 'VIEW_BOX' && _dom2.default.removeClass(document.body, 'vux-modal-open');
    },
    doShow: function doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && _dom2.default.addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop: function scrollTop() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$el.scrollTop = 0;
        var box = _this3.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (var i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data: function data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },

  computed: {
    styles: function styles() {
      var styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (var i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value: function value(val) {
      this.show = val;
    },
    show: function show(val) {
      var _this4 = this;

      this.$emit('input', val);
      if (val) {
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(function () {
            _this4.scrollTop();
            _this4.shouldRenderBody = true;
            _this4.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(function () {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            _this4.fixSafariOverflowScrolling('touch');
          }
          _this4.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
};

/***/ }),

/***/ "thvO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("ZLEe");

var _keys2 = _interopRequireDefault(_keys);

var _popup = __webpack_require__("5lwt");

var _popup2 = _interopRequireDefault(_popup);

var _dom = __webpack_require__("NlBL");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(function () {
      var _this = _this2;
      _this2.popup = new _popup2.default({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen: function onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose: function onClose() {
          _this.show = false;
          if (window.__$vuxPopups && (0, _keys2.default)(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(function () {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (_this2.value) {
        _this2.popup.show();
      }
      _this2.initialShow = false;
    });
  },
  deactivated: function deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },

  methods: {
    fixSafariOverflowScrolling: function fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;

      for (var i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName: function removeModalClassName() {
      this.layout === 'VIEW_BOX' && _dom2.default.removeClass(document.body, 'vux-modal-open');
    },
    doShow: function doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && _dom2.default.addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop: function scrollTop() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$el.scrollTop = 0;
        var box = _this3.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (var i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data: function data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },

  computed: {
    styles: function styles() {
      var styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (var i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value: function value(val) {
      this.show = val;
    },
    show: function show(val) {
      var _this4 = this;

      this.$emit('input', val);
      if (val) {
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(function () {
            _this4.scrollTop();
            _this4.shouldRenderBody = true;
            _this4.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(function () {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            _this4.fixSafariOverflowScrolling('touch');
          }
          _this4.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
};

/***/ }),

/***/ "uZcP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'group-title'
};

/***/ }),

/***/ "vDCO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vxcK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Q80G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("3Nc+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_56e3769c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("z/p+");
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_56e3769c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wc2Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:[_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "x7MA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-input weui-cell",class:{
			'weui-cell_warn': _vm.showWarn,
			'disabled': _vm.disabled,
			'vux-x-input-has-right-full': _vm.hasRightFullHeightSlot
		}},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),attrs:{"for":("vux-x-input-" + _vm.uuid)},domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd weui-cell__primary",class:_vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''},[(!_vm.type || _vm.type === 'text')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"text","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"number","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'email')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"email","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'password')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"password","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'tel')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"tel","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"},[_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasRightFullHeightSlot && !_vm.equalWith && _vm.showClear && _vm.currentValue !== '' && !_vm.readonly && !_vm.disabled && _vm.isFocus),expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{"type":"clear"},nativeOn:{"click":function($event){return _vm.clear($event)}}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWarn),expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":!_vm.valid ? _vm.firstError : ''},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}),_vm._v(" "),(!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid)?_c('icon',{staticClass:"vux-input-icon",attrs:{"type":"warn"},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'success'),expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'error'),expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{"type":"warn"}}),_vm._v(" "),_vm._t("right"),_vm._v(" "),(_vm.hasRightFullHeightSlot)?_c('div',{staticClass:"vux-x-input-right-full"},[_vm._t("right-full-height")],2):_vm._e()],2),_vm._v(" "),_c('toast',{attrs:{"type":"text","width":"auto","time":600},model:{value:(_vm.showErrorToast),callback:function ($$v) {_vm.showErrorToast=$$v},expression:"showErrorToast"}},[_vm._v(_vm._s(_vm.firstError))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xSur":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("liLe");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "ytj0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  return array.length === 1 ? array[0] : array.join(' ');
};

/***/ }),

/***/ "z/p+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('popup-picker',{attrs:{"fixed-columns":_vm.hideDistrict ? 2 : 0,"columns":3,"data":_vm.list,"title":_vm.title,"show-name":"","inline-desc":_vm.inlineDesc,"placeholder":_vm.placeholder,"value-text-align":_vm.valueTextAlign,"confirm-text":_vm.confirmText,"cancel-text":_vm.cancelText,"display-format":_vm.displayFormat,"popup-style":_vm.popupStyle,"popup-title":_vm.popupTitle,"show":_vm.showValue,"disabled":_vm.disabled},on:{"update:show":function($event){_vm.showValue=$event},"on-shadow-change":_vm.onShadowChange,"on-hide":_vm.emitHide,"on-show":function($event){_vm.$emit('on-show')}},scopedSlots:_vm._u([{key:"title",fn:function(props){return [_vm._t("title",[(props.labelTitle)?_c('label',{class:[props.labelClass,_vm.labelClass],style:(props.labelStyle),domProps:{"innerHTML":_vm._s(props.labelTitle)}}):_vm._e()],{labelClass:props.labelClass,labelStyle:props.labelStyles,labelTitle:props.title})]}}]),model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});