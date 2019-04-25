webpackJsonp([6],{

/***/ "1KKZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2gE6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'badge',
  props: {
    text: [String, Number]
  }
};

/***/ }),

/***/ "3Pzv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'badge',
  props: {
    text: [String, Number]
  }
};

/***/ }),

/***/ "77JW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("4YfN");

var _extends3 = _interopRequireDefault(_extends2);

var _tabbar = __webpack_require__("Q+KX");

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbarItem = __webpack_require__("rAHu");

var _tabbarItem2 = _interopRequireDefault(_tabbarItem);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("PvbP");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("Jp5S");

var _index6 = _interopRequireDefault(_index5);

var _vuex = __webpack_require__("9rMa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  directives: {
    TransferDom: _index6.default
  },
  components: {
    Tabbar: _tabbar2.default,
    TabbarItem: _tabbarItem2.default,
    XHeader: _index2.default,
    Actionsheet: _index4.default
  },
  methods: {
    changeLocale: function changeLocale(key, text) {
      console.log(key);
      this.$i18n.set(key);
      this.$locale.set(key);
    }
  },
  watch: {
    path: function path(_path) {
      var _this = this;

      if (_path === '/demo') {
        setTimeout(function () {
          _this.box = document.querySelector('#demo_list_box');
          if (_this.box) {
            _this.box.removeEventListener('scroll', _this.handler, false);
            _this.box.addEventListener('scroll', _this.handler, false);
          }
        }, 1000);
      } else {
        this.box && this.box.removeEventListener('scroll', this.handler, false);
      }
    }
  },
  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({

    direction: function direction(state) {
      return state.vux.direction;
    }
  }), {
    viewTransition: function viewTransition() {
      if (!this.direction) return '';
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out');
    }
  }),
  data: function data() {
    return {
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      showMenu: false
    };
  }
};

/***/ }),

/***/ "A3R9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAH5JREFUaAXt17ERgDAIAEDiKs5i4zlERnOJVO7iKvFsc0fvmacDGvikIUIQIECAAIFUoGSdtV6t99iz/ufqJdp9bsc41zIW5AQIECBAgAABAgQIECDwCrgH/QMCBAgQIECAAAECBAjMKeAenPPdbU2AAAECBAgQIECAAIHfCzxT3RUKkM/E+AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "DV+v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childMixin = exports.parentMixin = undefined;

var _router = __webpack_require__("7+S+");

var parentMixin = {
  mounted: function mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value;
    }
    this.updateIndex();
  },

  methods: {
    updateIndex: function updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      var children = this.$children;
      for (var i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex: function currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
      this.$emit('input', val);
      this.$emit('on-index-change', val, oldVal);
    },
    index: function index(val) {
      this.currentIndex = val;
    },
    value: function value(val) {
      this.index = val;
    }
  },
  data: function data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    };
  }
};

var childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$parent.updateIndex();
  },
  beforeDestroy: function beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(function () {
      $parent.updateIndex();
    });
  },

  methods: {
    onItemClick: function onItemClick(hasLink) {
      var _this = this;

      if (this.$parent.preventDefault) {
        this.$parent.$emit('on-before-index-change', this.currentIndex);
        return;
      }
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true;
        this.$parent.currentIndex = this.currentIndex;
        this.$nextTick(function () {
          _this.$emit('on-item-click', _this.currentIndex);
        });
      }
      if (hasLink === true) {
        (0, _router.go)(this.link, this.$router);
      }
    }
  },
  watch: {
    currentSelected: function currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    },
    selected: function selected(val) {
      this.currentSelected = val;
    }
  },
  data: function data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    };
  }
};

exports.parentMixin = parentMixin;
exports.childMixin = childMixin;

/***/ }),

/***/ "Ddr0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-actionsheet"},[_c('transition',{attrs:{"name":"vux-actionsheet-mask"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-mask weui-mask_transparent",on:{"click":_vm.onClickingMask}})]),_vm._v(" "),(_vm.theme === 'android')?_c('div',{staticClass:"weui-skin_android"},[_c('transition',{attrs:{"name":"vux-android-actionsheet"},on:{"after-enter":function($event){_vm.$emit('on-after-show')},"after-leave":function($event){_vm.$emit('on-after-hide')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-actionsheet"},[_c('div',{staticClass:"weui-actionsheet__menu"},_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){_vm.onMenuClick(text, key)}}})}))])])],1):_c('div',{ref:"iOSMenu",staticClass:"weui-actionsheet",class:{'weui-actionsheet_toggle': _vm.show}},[_c('div',{staticClass:"weui-actionsheet__menu"},[(_vm.hasHeaderSlot)?_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._t("header")],2):_vm._e(),_vm._v(" "),_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",class:("vux-actionsheet-menu-" + (text.type || 'default')),domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){_vm.onMenuClick(text, key)}}})})],2),_vm._v(" "),(_vm.showCancel)?_c('div',{staticClass:"weui-actionsheet__action",on:{"click":function($event){_vm.emitEvent('on-click-menu', 'cancel')}}},[_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._v(_vm._s(_vm.cancelText || '取消'))])]):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KJIW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"weui-tabbar__item",class:{'weui-bar__item_on': _vm.isActive, 'vux-tabbar-simple': _vm.simple},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.onItemClick(true)}}},[(!_vm.simple)?_c('div',{staticClass:"weui-tabbar__icon",class:[_vm.iconClass || _vm.$parent.iconClass, {'vux-reddot': _vm.showDot}]},[(!_vm.simple && !(_vm.hasActiveIcon && _vm.isActive))?_vm._t("icon"):_vm._e(),_vm._v(" "),(!_vm.simple && _vm.hasActiveIcon && _vm.isActive)?_vm._t("icon-active"):_vm._e(),_vm._v(" "),(_vm.badge)?_c('sup',[_c('badge',{attrs:{"text":_vm.badge}})],1):_vm._e()],2):_vm._e(),_vm._v(" "),_c('p',{staticClass:"weui-tabbar__label"},[_vm._t("label")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "PvbP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("oOlq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("xsYn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2e0f5529_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("Ddr0");
function injectStyle (ssrContext) {
  __webpack_require__("1KKZ")
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
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2e0f5529_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Q+KX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__ = __webpack_require__("mlbX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__ = __webpack_require__("u52O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b03bcef0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tabbar_vue__ = __webpack_require__("qTCP");
function injectStyle (ssrContext) {
  __webpack_require__("KJIW")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_b03bcef0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tabbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Saxf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiItems = __webpack_require__("DV+v");

var _badge = __webpack_require__("YqLr");

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'tabbar-item',
  components: {
    Badge: _badge2.default
  },
  mounted: function mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true;
    }
  },

  mixins: [_multiItems.childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  data: function data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  }
};

/***/ }),

/***/ "TXrh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiItems = __webpack_require__("DV+v");

var _badge = __webpack_require__("YqLr");

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'tabbar-item',
  components: {
    Badge: _badge2.default
  },
  mounted: function mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true;
    }
  },

  mixins: [_multiItems.childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  data: function data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  }
};

/***/ }),

/***/ "Twl9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("4YfN");

var _extends3 = _interopRequireDefault(_extends2);

var _tabbar = __webpack_require__("Q+KX");

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbarItem = __webpack_require__("rAHu");

var _tabbarItem2 = _interopRequireDefault(_tabbarItem);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("PvbP");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("Jp5S");

var _index6 = _interopRequireDefault(_index5);

var _vuex = __webpack_require__("9rMa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  directives: {
    TransferDom: _index6.default
  },
  components: {
    Tabbar: _tabbar2.default,
    TabbarItem: _tabbarItem2.default,
    XHeader: _index2.default,
    Actionsheet: _index4.default
  },
  methods: {
    changeLocale: function changeLocale(key, text) {
      console.log(key);
      this.$i18n.set(key);
      this.$locale.set(key);
    }
  },
  watch: {
    path: function path(_path) {
      var _this = this;

      if (_path === '/demo') {
        setTimeout(function () {
          _this.box = document.querySelector('#demo_list_box');
          if (_this.box) {
            _this.box.removeEventListener('scroll', _this.handler, false);
            _this.box.addEventListener('scroll', _this.handler, false);
          }
        }, 1000);
      } else {
        this.box && this.box.removeEventListener('scroll', this.handler, false);
      }
    }
  },
  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({

    direction: function direction(state) {
      return state.vux.direction;
    }
  }), {
    viewTransition: function viewTransition() {
      if (!this.direction) return '';
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out');
    }
  }),
  data: function data() {
    return {
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      showMenu: false
    };
  }
};

/***/ }),

/***/ "YqLr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("3Pzv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("2gE6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_53b5c389_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("wcXw");
function injectStyle (ssrContext) {
  __webpack_require__("lgqB")
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
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_53b5c389_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "b/gH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__ = __webpack_require__("Twl9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__ = __webpack_require__("77JW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_21614094_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_TabbarView_vue__ = __webpack_require__("zoV+");
function injectStyle (ssrContext) {
  __webpack_require__("dwDO")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_TabbarView_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_21614094_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_TabbarView_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dwDO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "j70O":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAWNJREFUaAXtmssNwjAMhpOKMTjwkNgF2IMpgAMwBXsAuyDxODAHISlVTzGylMS41Z9T5Dqx/X9GTVGMwYACqhWwVHbP7Wz+du+jcW5I+aiwW/uqbLUa7a6XWD5VzBhsnSguJOoB1LmGeWQMIravqSE3OdxIyuRawQf39dT96jKSoGCORUOhwKLyCmwOggIiFw0BgkXlFdgcBAVELhoCBIvKK7A5fRZlBn9spifnzILpHnWz1pzH+9sy+jDR2PsWTSZYSvlEcO3y3hNEgS3rjk5AsKPg2rRBsJWio5Pk92COkwylXY4TjuoWdf5fT6p4rj2ZIE4yXKkL+alu0Rw1o8AcKv5zDxD8p/o5YveeYPJ7ECeZhD7DSYYhXu9/gyiQ0QWqXUBQNR5GciDIEEm1CwiqxsNIDgQZIql2ob8m/D3McIuvvs2nugSfXMiVGGSLhkumvxYS+8mbmwux8oEREQpkUeADV8xGaoJtaEsAAAAASUVORK5CYII="

/***/ }),

/***/ "lgqB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mlbX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiItems = __webpack_require__("DV+v");

exports.default = {
  mounted: function mounted() {
    var _this = this;

    if (false) {
      this.$nextTick(function () {
        var $el = _this.$el;
        var position = window.getComputedStyle($el).position;
        if (position === 'fixed') {
          return;
        } else if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[VUX warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed');
          }
        }
      });
    }
  },

  name: 'tabbar',
  mixins: [_multiItems.parentMixin],
  props: {
    iconClass: String
  }
};

/***/ }),

/***/ "oOlq":
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

exports.default = {
  name: 'actionsheet',
  mounted: function mounted() {
    var _this = this;

    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(function () {
      _this.$tabbar = document.querySelector('.weui-tabbar');
      _this.$refs.iOSMenu && _this.$refs.iOSMenu.addEventListener('transitionend', _this.onTransitionEnd);
    });
  },

  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: function _default() {
        return {};
      }
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },

  methods: {
    onTransitionEnd: function onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick: function onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask: function onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent: function emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        var _item = item;
        if ((typeof _item === 'undefined' ? 'undefined' : (0, _typeof3.default)(_item)) === 'object') {
          _item = JSON.parse((0, _stringify2.default)(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(event + '-' + menu);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos: function fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show: function show(val) {
      var _this2 = this;

      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(function () {
          _this2.fixIos(100);
        }, 200);
      }
    },

    value: {
      handler: function handler(val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
};

/***/ }),

/***/ "qTCP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-tabbar"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rAHu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__ = __webpack_require__("Saxf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__ = __webpack_require__("TXrh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ab8ae38c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tabbar_item_vue__ = __webpack_require__("OOwS");
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tabbar_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ab8ae38c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tabbar_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tHpE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII="

/***/ }),

/***/ "u52O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiItems = __webpack_require__("DV+v");

exports.default = {
  mounted: function mounted() {
    var _this = this;

    if (false) {
      this.$nextTick(function () {
        var $el = _this.$el;
        var position = window.getComputedStyle($el).position;
        if (position === 'fixed') {
          return;
        } else if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[VUX warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed');
          }
        }
      });
    }
  },

  name: 'tabbar',
  mixins: [_multiItems.parentMixin],
  props: {
    iconClass: String
  }
};

/***/ }),

/***/ "voox":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ1ODE5NEE5RDgxMTFFNTlBNTVGQTA1RTcxRjc4QUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ1ODE5NEI5RDgxMTFFNTlBNTVGQTA1RTcxRjc4QUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDQxRjA0NTlENjkxMUU1OUE1NUZBMDVFNzFGNzhBQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDQxRjA0NjlENjkxMUU1OUE1NUZBMDVFNzFGNzhBQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgfnkEMAAAgFSURBVHja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"

/***/ }),

/***/ "wcXw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['vux-badge', {'vux-badge-dot': typeof _vm.text === 'undefined', 'vux-badge-single': typeof _vm.text !== 'undefined' && _vm.text.toString().length === 1}],domProps:{"textContent":_vm._s(_vm.text)}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xsYn":
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

exports.default = {
  name: 'actionsheet',
  mounted: function mounted() {
    var _this = this;

    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(function () {
      _this.$tabbar = document.querySelector('.weui-tabbar');
      _this.$refs.iOSMenu && _this.$refs.iOSMenu.addEventListener('transitionend', _this.onTransitionEnd);
    });
  },

  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: function _default() {
        return {};
      }
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },

  methods: {
    onTransitionEnd: function onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick: function onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask: function onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent: function emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        var _item = item;
        if ((typeof _item === 'undefined' ? 'undefined' : (0, _typeof3.default)(_item)) === 'object') {
          _item = JSON.parse((0, _stringify2.default)(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(event + '-' + menu);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos: function fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show: function show(val) {
      var _this2 = this;

      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(function () {
          _this2.fixIos(100);
        }, 200);
      }
    },

    value: {
      handler: function handler(val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
};

/***/ }),

/***/ "zoV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"}},[_c('x-header',{attrs:{"left-options":{backText: ''},"right-options":{showMore: true}},on:{"on-click-more":function($event){_vm.showMenu = true}}},[_vm._v("TabbarView")]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.viewTransition,"css":!!_vm.direction},on:{"after-enter":function($event){_vm.$vux.bus && _vm.$vux.bus.$emit('vux:after-view-enter')}}},[_c('router-view',{staticClass:"router-view"})],1),_vm._v(" "),_c('tabbar',{staticClass:"vux-demo-tabbar",attrs:{"slot":"bottom","icon-class":"vux-center"},slot:"bottom"},[_c('tabbar-item',{attrs:{"link":{path:'/TabbarView/TabitemView?name=首页'},"selected":""}},[_c('img',{attrs:{"slot":"icon","src":__webpack_require__("tHpE")},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("首页")])]),_vm._v(" "),_c('tabbar-item',{attrs:{"link":{path:'/TabbarView/TabitemView?name=图书'}}},[_c('img',{attrs:{"slot":"icon","src":__webpack_require__("voox")},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("图书")])]),_vm._v(" "),_c('tabbar-item',{attrs:{"link":{path:'/TabbarView/TabitemView?name=广播'}}},[_c('img',{attrs:{"slot":"icon","src":__webpack_require__("j70O")},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("广播")])]),_vm._v(" "),_c('tabbar-item',{attrs:{"link":{path:'/TabbarView/TabitemView?name=小组'},"badge":"9"}},[_c('img',{attrs:{"slot":"icon","src":__webpack_require__("A3R9")},slot:"icon"}),_vm._v(" "),_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("小组")])])],1),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('actionsheet',{attrs:{"menus":_vm.menus},on:{"on-click-menu":_vm.changeLocale},model:{value:(_vm.showMenu),callback:function ($$v) {_vm.showMenu=$$v},expression:"showMenu"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});