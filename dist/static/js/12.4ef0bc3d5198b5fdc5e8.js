webpackJsonp([12],{

/***/ "+zKS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "87d/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/swiper.1b89c72.jpg";

/***/ }),

/***/ "E4vr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("MeScroll组件,强烈推荐使用")]),_vm._v(" "),_c('mescroll-vue',{ref:"mescroll",attrs:{"up":_vm.mescrollUp},on:{"init":_vm.mescrollInit}},[_c('img',{staticClass:"swiper",attrs:{"src":__webpack_require__("87d/")}}),_vm._v(" "),_c('div',{staticClass:"nav"},[_c('p',{class:_vm.getActiveCls(0),on:{"click":function($event){_vm.changeTab(0)}}},[_vm._v("全部")]),_vm._v(" "),_c('p',{class:_vm.getActiveCls(1),on:{"click":function($event){_vm.changeTab(1)}}},[_vm._v("奶粉")]),_vm._v(" "),_c('p',{class:_vm.getActiveCls(2),on:{"click":function($event){_vm.changeTab(2)}}},[_vm._v("图书")])]),_vm._v(" "),_c('ul',{staticClass:"data-list",attrs:{"id":"dataList"}},_vm._l((_vm.dataList),function(pd){return _c('li',{key:pd.id},[_c('img',{staticClass:"pd-img",attrs:{"imgurl":pd.pdImg,"src":__webpack_require__("76a6")}}),_vm._v(" "),_c('p',{staticClass:"pd-name"},[_vm._v(_vm._s(pd.pdName))]),_vm._v(" "),_c('p',{staticClass:"pd-price"},[_vm._v(_vm._s(pd.pdPrice)+" 元")]),_vm._v(" "),_c('p',{staticClass:"pd-sold"},[_vm._v("已售"+_vm._s(pd.pdSold)+"件")])])}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Qhtz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("jKMe");

var _mescroll2 = _interopRequireDefault(_mescroll);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _pdlist = __webpack_require__("Zgli");

var _pdlist2 = _interopRequireDefault(_pdlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mescrollComponent',
  components: {
    MescrollVue: _mescroll2.default,
    XHeader: _index2.default
  },
  data: function data() {
    return {
      mescroll: null,
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          src: './static/mescroll/mescroll-totop.png'
        },
        empty: {

          warpId: 'dataList',
          icon: './static/mescroll/mescroll-empty.png',
          tip: '暂无相关数据~',
          btntext: '去逛逛 >', btnClick: function btnClick() {
            alert('点击了按钮,具体逻辑自行实现');
          }
        },
        lazyLoad: {
          use: true
        }
      },
      dataList: [],
      pdType: 0
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$refs.mescroll.beforeRouteEnter();
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.$refs.mescroll.beforeRouteLeave();
    next();
  },

  methods: {
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback: function upCallback(page, mescroll) {
      var _this = this;

      this.getListDataFromNet(this.pdType, page.num, page.size, function (arr) {

        if (page.num === 1) _this.dataList = [];

        _this.dataList = _this.dataList.concat(arr);

        _this.$nextTick(function () {
          mescroll.endSuccess(arr.length);
        });
      }, function () {

        mescroll.endErr();
      });
    },
    getActiveCls: function getActiveCls(type) {
      return this.pdType === type ? 'active' : '';
    },
    changeTab: function changeTab(type) {
      if (this.pdType !== type) {
        this.pdType = type;
        this.dataList = [];
        this.mescroll.resetUpScroll();
      }
    },
    getListDataFromNet: function getListDataFromNet(pdType, pageNum, pageSize, successCallback, errorCallback) {

      setTimeout(function () {

        var listData = [];

        if (pdType === 0) {

          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i === _pdlist2.default.length) break;
            listData.push(_pdlist2.default[i]);
          }
        } else if (pdType === 1) {

          for (var j = 0; j < _pdlist2.default.length; j++) {
            if (_pdlist2.default[j].pdName.indexOf('奶') !== -1) {
              listData.push(_pdlist2.default[j]);
            }
          }
        } else if (pdType === 2) {

          for (var k = 0; k < _pdlist2.default.length; k++) {
            if (_pdlist2.default[k].pdName.indexOf('图书') !== -1) {
              listData.push(_pdlist2.default[k]);
            }
          }
        }

        successCallback(listData);
      }, 1000);
    }
  }
};

/***/ }),

/***/ "Tsmn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("6UIf");

var _mescroll2 = _interopRequireDefault(_mescroll);

__webpack_require__("4sx6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MeScrollVue',
  data: function data() {
    return {
      mescroll: null,
      lastScrollTop: 0,
      lastBounce: null };
  },
  props: {
    up: Object,
    down: Object
  },
  mounted: function mounted() {
    this.mescroll = new _mescroll2.default(this.$refs.mescroll, {
      up: this.up,
      down: this.down
    });
    this.$emit('init', this.mescroll);
  },
  methods: {
    beforeRouteEnter: function beforeRouteEnter() {
      var _this = this;

      if (this.mescroll) {
        if (this.lastScrollTop) {
          this.mescroll.setScrollTop(this.lastScrollTop);
          setTimeout(function () {
            _this.mescroll.setTopBtnFadeDuration(0);
          }, 16);
        }

        if (this.lastBounce != null) this.mescroll.setBounce(this.lastBounce);
      }
    },
    beforeRouteLeave: function beforeRouteLeave() {
      if (this.mescroll) {
        this.lastScrollTop = this.mescroll.getScrollTop();
        this.mescroll.hideTopBtn(0);
        this.lastBounce = this.mescroll.optUp.isBounce;
        this.mescroll.setBounce(true);
      }
    }
  }
};

/***/ }),

/***/ "UY5C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("6UIf");

var _mescroll2 = _interopRequireDefault(_mescroll);

__webpack_require__("4sx6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MeScrollVue',
  data: function data() {
    return {
      mescroll: null,
      lastScrollTop: 0,
      lastBounce: null };
  },
  props: {
    up: Object,
    down: Object
  },
  mounted: function mounted() {
    this.mescroll = new _mescroll2.default(this.$refs.mescroll, {
      up: this.up,
      down: this.down
    });
    this.$emit('init', this.mescroll);
  },
  methods: {
    beforeRouteEnter: function beforeRouteEnter() {
      var _this = this;

      if (this.mescroll) {
        if (this.lastScrollTop) {
          this.mescroll.setScrollTop(this.lastScrollTop);
          setTimeout(function () {
            _this.mescroll.setTopBtnFadeDuration(0);
          }, 16);
        }

        if (this.lastBounce != null) this.mescroll.setBounce(this.lastBounce);
      }
    },
    beforeRouteLeave: function beforeRouteLeave() {
      if (this.mescroll) {
        this.lastScrollTop = this.mescroll.getScrollTop();
        this.mescroll.hideTopBtn(0);
        this.lastBounce = this.mescroll.optUp.isBounce;
        this.mescroll.setBounce(true);
      }
    }
  }
};

/***/ }),

/***/ "jKMe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__ = __webpack_require__("UY5C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__ = __webpack_require__("Tsmn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_10026139_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mescroll_vue__ = __webpack_require__("rxLE");
function injectStyle (ssrContext) {
  __webpack_require__("nhJw")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vux_loader_1_2_9_vux_loader_src_script_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_10026139_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_vux_loader_1_2_9_vux_loader_src_template_loader_js_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mescroll_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nhJw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rxLE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"mescroll",staticClass:"mescroll"},[_c('div',[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "y60Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("jKMe");

var _mescroll2 = _interopRequireDefault(_mescroll);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _pdlist = __webpack_require__("Zgli");

var _pdlist2 = _interopRequireDefault(_pdlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mescrollComponent',
  components: {
    MescrollVue: _mescroll2.default,
    XHeader: _index2.default
  },
  data: function data() {
    return {
      mescroll: null,
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          src: './static/mescroll/mescroll-totop.png'
        },
        empty: {

          warpId: 'dataList',
          icon: './static/mescroll/mescroll-empty.png',
          tip: '暂无相关数据~',
          btntext: '去逛逛 >', btnClick: function btnClick() {
            alert('点击了按钮,具体逻辑自行实现');
          }
        },
        lazyLoad: {
          use: true
        }
      },
      dataList: [],
      pdType: 0
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$refs.mescroll.beforeRouteEnter();
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.$refs.mescroll.beforeRouteLeave();
    next();
  },

  methods: {
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback: function upCallback(page, mescroll) {
      var _this = this;

      this.getListDataFromNet(this.pdType, page.num, page.size, function (arr) {

        if (page.num === 1) _this.dataList = [];

        _this.dataList = _this.dataList.concat(arr);

        _this.$nextTick(function () {
          mescroll.endSuccess(arr.length);
        });
      }, function () {

        mescroll.endErr();
      });
    },
    getActiveCls: function getActiveCls(type) {
      return this.pdType === type ? 'active' : '';
    },
    changeTab: function changeTab(type) {
      if (this.pdType !== type) {
        this.pdType = type;
        this.dataList = [];
        this.mescroll.resetUpScroll();
      }
    },
    getListDataFromNet: function getListDataFromNet(pdType, pageNum, pageSize, successCallback, errorCallback) {

      setTimeout(function () {

        var listData = [];

        if (pdType === 0) {

          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i === _pdlist2.default.length) break;
            listData.push(_pdlist2.default[i]);
          }
        } else if (pdType === 1) {

          for (var j = 0; j < _pdlist2.default.length; j++) {
            if (_pdlist2.default[j].pdName.indexOf('奶') !== -1) {
              listData.push(_pdlist2.default[j]);
            }
          }
        } else if (pdType === 2) {

          for (var k = 0; k < _pdlist2.default.length; k++) {
            if (_pdlist2.default[k].pdName.indexOf('图书') !== -1) {
              listData.push(_pdlist2.default[k]);
            }
          }
        }

        successCallback(listData);
      }, 1000);
    }
  }
};

/***/ }),

/***/ "y8Rf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__ = __webpack_require__("y60Q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__ = __webpack_require__("Qhtz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1486516f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mescroll_component_vue__ = __webpack_require__("E4vr");
function injectStyle (ssrContext) {
  __webpack_require__("+zKS")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_mescroll_component_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1486516f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_mescroll_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});