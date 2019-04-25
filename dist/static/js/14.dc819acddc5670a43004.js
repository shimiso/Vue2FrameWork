webpackJsonp([14],{

/***/ "4sRq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("4YfN");

var _extends3 = _interopRequireDefault(_extends2);

var _mescroll = __webpack_require__("jKMe");

var _mescroll2 = _interopRequireDefault(_mescroll);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _vuex = __webpack_require__("9rMa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'home-view',
  components: { XHeader: _index2.default, MescrollVue: _mescroll2.default },
  data: function data() {
    return {
      mold: 'thumbnail',
      mescroll: null,
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 4
        },
        noMoreSize: 5,
        toTop: {
          src: '../static/mescroll/mescroll-totop.png',
          offset: 500 },
        empty: {
          warpId: 'dataList',
          icon: './static/mescroll/mescroll-empty.png',
          tip: '暂无相关数据~',
          btntext: '去逛逛 >', btnClick: function btnClick() {

            this.mescroll.resetUpScroll();
          }
        }
      }
    };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({
    items: function items(state) {
      return state.list.items;
    }
  })),
  methods: (0, _extends3.default)({
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback: function upCallback(page, mescroll) {
      var _this = this;

      this.getUpCallbackList(page).then(function (response) {

        mescroll.endSuccess(response.length);
      }, function (error) {
        _this.mescrollUp.empty = {
          warpId: 'dataList',
          icon: './static/mescroll/mescroll-error.png',
          tip: '服务器发生未知异常',
          btntext: '点击重试', btnClick: function btnClick() {

            mescroll.resetUpScroll();
          }
        };

        mescroll.endSuccess(0);
      });
    }
  }, (0, _vuex.mapActions)(['getUpCallbackList'])),
  filters: {
    subStr: function subStr(value) {
      var newVal = value.replace(/<.*?>/g, '');
      return newVal.slice(0, 30);
    }
  }
};

/***/ }),

/***/ "DYno":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "Zb7g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("4YfN");

var _extends3 = _interopRequireDefault(_extends2);

var _mescroll = __webpack_require__("jKMe");

var _mescroll2 = _interopRequireDefault(_mescroll);

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _vuex = __webpack_require__("9rMa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'home-view',
  components: { XHeader: _index2.default, MescrollVue: _mescroll2.default },
  data: function data() {
    return {
      mold: 'thumbnail',
      mescroll: null,
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 4
        },
        noMoreSize: 5,
        toTop: {
          src: '../static/mescroll/mescroll-totop.png',
          offset: 500 },
        empty: {
          warpId: 'dataList',
          icon: './static/mescroll/mescroll-empty.png',
          tip: '暂无相关数据~',
          btntext: '去逛逛 >', btnClick: function btnClick() {

            this.mescroll.resetUpScroll();
          }
        }
      }
    };
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({
    items: function items(state) {
      return state.list.items;
    }
  })),
  methods: (0, _extends3.default)({
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback: function upCallback(page, mescroll) {
      var _this = this;

      this.getUpCallbackList(page).then(function (response) {

        mescroll.endSuccess(response.length);
      }, function (error) {
        _this.mescrollUp.empty = {
          warpId: 'dataList',
          icon: './static/mescroll/mescroll-error.png',
          tip: '服务器发生未知异常',
          btntext: '点击重试', btnClick: function btnClick() {

            mescroll.resetUpScroll();
          }
        };

        mescroll.endSuccess(0);
      });
    }
  }, (0, _vuex.mapActions)(['getUpCallbackList'])),
  filters: {
    subStr: function subStr(value) {
      var newVal = value.replace(/<.*?>/g, '');
      return newVal.slice(0, 30);
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

/***/ "uJdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__ = __webpack_require__("4sRq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__ = __webpack_require__("Zb7g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2747724c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_ListView_vue__ = __webpack_require__("w/uE");
function injectStyle (ssrContext) {
  __webpack_require__("DYno")
}
var normalizeComponent = __webpack_require__("C7Lr")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2747724c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ListView_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2747724c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_ListView_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "w/uE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-view has-header",attrs:{"id":""}},[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("ListViewDemo")]),_vm._v(" "),_c('mescroll-vue',{ref:"mescroll",attrs:{"up":_vm.mescrollUp},on:{"init":_vm.mescrollInit}},[_c('div',{staticClass:"list",attrs:{"id":"dataList"}},[_vm._l((_vm.items),function(item){return (_vm.mold === 'thumbnail')?[_c('router-link',{staticClass:"thumbnail",attrs:{"to":{name: 'DetailView', params: { id: item.id }}}},[_c('div',{staticClass:"content"},[_c('img',{attrs:{"src":item.image_hlarge,"alt":"cover"}}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm._f("subStr")(item.content)))])]),_vm._v(" "),_c('div',{staticClass:"author"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.category_name))]),_vm._v(" "),(item.subcategory_name)?_c('span',{staticClass:"label"},[_vm._v("\n              本活动来自栏目 "+_vm._s(item.subcategory_name)+"\n            ")]):_vm._e()])])]:_vm._e()}),_vm._v(" "),(_vm.mold === 'basic')?[_c('ul',{staticClass:"basic"},_vm._l((_vm.items),function(item){return _c('li',[_c('a',{attrs:{"href":"#"}},[_c('h3',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"info"},[_vm._v(_vm._s(item.comments))])])])}))]:_vm._e()],2)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});