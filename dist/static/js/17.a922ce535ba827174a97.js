webpackJsonp([17],{

/***/ "MBZo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("6UIf");

var _mescroll2 = _interopRequireDefault(_mescroll);

__webpack_require__("4sx6");

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _pdlist = __webpack_require__("Zgli");

var _pdlist2 = _interopRequireDefault(_pdlist);

var _pdlistEdit = __webpack_require__("qUnq");

var _pdlistEdit2 = _interopRequireDefault(_pdlistEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'listProducts',
  components: { XHeader: _index2.default },
  data: function data() {
    return {
      mescroll: null,
      dataList: [],
      isEdit: false
    };
  },

  mounted: function mounted() {

    this.mescroll = new _mescroll2.default(this.$refs.mescroll, {
      up: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          src: './static/mescroll/mescroll-totop.png'
        },
        lazyLoad: {
          use: true
        }
      }
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (vm.mescroll) {

        if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce);

        if (vm.mescroll.lastScrollTop) {
          vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop);
          setTimeout(function () {
            vm.mescroll.setTopBtnFadeDuration(0);
          }, 16);
        }
      }
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mescroll) {
      this.mescroll.lastBounce = this.mescroll.optUp.isBounce;
      this.mescroll.setBounce(true);
      this.mescroll.lastScrollTop = this.mescroll.getScrollTop();
      this.mescroll.hideTopBtn(0);
    }
    next();
  },

  methods: {
    upCallback: function upCallback(page) {
      var _this = this;

      this.getListDataFromNet(this.pdType, page.num, page.size, function (arr) {

        if (page.num === 1) _this.dataList = [];

        _this.dataList = _this.dataList.concat(arr);

        _this.$nextTick(function () {
          _this.mescroll.endSuccess(arr.length);
        });
      }, function () {
        _this.mescroll.endErr();
      });
    },
    getListDataFromNet: function getListDataFromNet(pdType, pageNum, pageSize, successCallback, errorCallback) {
      var _this2 = this;

      setTimeout(function () {

        var listData = [];
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (_this2.isEdit) {
            if (i === _pdlistEdit2.default.length) break;
            listData.push(_pdlistEdit2.default[i]);
          } else {
            if (i === _pdlist2.default.length) break;
            listData.push(_pdlist2.default[i]);
          }
        }

        successCallback(listData);
      }, 1000);
    }
  }
};

/***/ }),

/***/ "eoKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__ = __webpack_require__("zOsH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__ = __webpack_require__("MBZo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_382e6c38_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_list_products_vue__ = __webpack_require__("gKp0");
function injectStyle (ssrContext) {
  __webpack_require__("zbyf")
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_1_2_9_vux_loader_src_script_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_list_products_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_382e6c38_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_1_2_9_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_1_2_9_vux_loader_src_template_loader_js_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_list_products_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "gKp0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("商品列表")]),_vm._v(" "),_c('div',{ref:"mescroll",staticClass:"mescroll"},[_c('div',{staticClass:"notice"},[_vm._v("\n      因为商品的名称价格销量会变动,也可能会下架删除"),_c('br'),_vm._v("所以本Demo的下拉刷新会重置列表数据"),_c('br'),_vm._v(" "),_c('p',{staticClass:"btn-change",on:{"click":function($event){_vm.isEdit=!_vm.isEdit}}},[_vm._v("模拟后台修改商品信息"+_vm._s(_vm.isEdit))])]),_vm._v(" "),_c('ul',{staticClass:"data-list",attrs:{"id":"dataList"}},_vm._l((_vm.dataList),function(pd){return _c('li',{key:pd.id},[_c('img',{staticClass:"pd-img",attrs:{"imgurl":pd.pdImg,"src":__webpack_require__("76a6")}}),_vm._v(" "),_c('p',{staticClass:"pd-name"},[_vm._v(_vm._s(pd.pdName))]),_vm._v(" "),_c('p',{staticClass:"pd-price"},[_vm._v(_vm._s(pd.pdPrice)+" 元")]),_vm._v(" "),_c('p',{staticClass:"pd-sold"},[_vm._v("已售"+_vm._s(pd.pdSold)+"件")])])}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qUnq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pdlistEdit = [{
  'id': 3,
  'pdImg': './static/mock/img/pd3.jpg',
  'pdName': '【3】 美素佳儿Friso婴儿配方奶粉3段 ( 商品【1】【2】 已删除 )',
  'pdPrice': 177.0,
  'pdSold': 1023
}, {
  'id': 4,
  'pdImg': './static/mock/img/pd4.jpg',
  'pdName': '【4】 每人限购1辆 费雪滑行车',
  'pdPrice': 189.00,
  'pdSold': 199
}, {
  'id': 5,
  'pdImg': './static/mock/img/pd5.jpg',
  'pdName': '【5】  巴布力实木婴儿床',
  'pdPrice': 1800.00,
  'pdSold': 72
}, {
  'id': 6,
  'pdImg': './static/mock/img/pd6.jpg',
  'pdName': '【6】  贝亲奶粉盒',
  'pdPrice': 98.00,
  'pdSold': 677
}, {
  'id': 7,
  'pdImg': './static/mock/img/pd7.jpg',
  'pdName': '【7】 兔兔小布肩纽扣套装',
  'pdPrice': 277.00,
  'pdSold': 166
}, {
  'id': 8,
  'pdImg': './static/mock/img/pd8.jpg',
  'pdName': '【8】  璐拉婴儿沐浴露',
  'pdPrice': 155.00,
  'pdSold': 343
}, {
  'id': 9,
  'pdImg': './static/mock/img/pd9.jpg',
  'pdName': '【9】  启赋illuma 奶粉3段900g',
  'pdPrice': 238.00,
  'pdSold': 102
}, {
  'id': 10,
  'pdImg': './static/mock/img/pd10.jpg',
  'pdName': '【10】  雅培Abbott乳蛋白部分水解婴儿配方奶粉3段820g',
  'pdPrice': 91.00,
  'pdSold': 135
}, {
  'id': 11,
  'pdImg': './static/mock/img/pd11.jpg',
  'pdName': '【11】  韩蜜 酷炫唇蜜（礼盒套装）2.8g*4',
  'pdPrice': 151.00,
  'pdSold': 123
}, {
  'id': 12,
  'pdImg': './static/mock/img/pd12.jpg',
  'pdName': '【12】  保税区直发【3包装】日本Merries花王纸尿裤NB90',
  'pdPrice': 292.00,
  'pdSold': 1933
}, {
  'id': 13,
  'pdImg': './static/mock/img/pd13.jpg',
  'pdName': '【13】  Comotomo可么多么 硅胶奶瓶（0-3月奶嘴）150ml绿色',
  'pdPrice': 245.00,
  'pdSold': 95
}, {
  'id': 14,
  'pdImg': './static/mock/img/pd14.jpg',
  'pdName': '【14】  香港直邮德国瑞德露Rival de Loop芦荟精华安瓶',
  'pdPrice': 163.00,
  'pdSold': 75
}, {
  'id': 15,
  'pdImg': './static/mock/img/pd15.jpg',
  'pdName': '【15】  保税区直发药师堂尊马油香草味温和保湿无刺激面霜',
  'pdPrice': 259.00,
  'pdSold': 86
}, {
  'id': 16,
  'pdImg': './static/mock/img/pd16.jpg',
  'pdName': '【16】  香港直邮日本Spatreatment眼膜保湿去细纹法令纹',
  'pdPrice': 237.00,
  'pdSold': 58
}, {
  'id': 17,
  'pdImg': './static/mock/img/pd17.jpg',
  'pdName': '【17】  韩国MEDIHEALNMF可莱丝针剂睡眠面膜',
  'pdPrice': 81.00,
  'pdSold': 135
}, {
  'id': 18,
  'pdImg': './static/mock/img/pd18.jpg',
  'pdName': '【18】  DHC蝶翠诗橄榄蜂蜜滋养洗脸手工皂90g',
  'pdPrice': 123.00,
  'pdSold': 87
}, {
  'id': 19,
  'pdImg': './static/mock/img/pd19.jpg',
  'pdName': '【19】  日本资生堂CPB肌肤之钥新版隔离霜 清爽型 30ml',
  'pdPrice': 429.00,
  'pdSold': 45
}, {
  'id': 20,
  'pdImg': './static/mock/img/pd20.jpg',
  'pdName': '【20】 Heinz亨氏 婴儿面条优加面条全素套餐组合3口味3盒',
  'pdPrice': 39.00,
  'pdSold': 32
}, {
  'id': 21,
  'pdImg': './static/mock/img/pd21.jpg',
  'pdName': '【21】  Heinz亨氏 乐维滋果汁泥组合5口味15袋',
  'pdPrice': 64.00,
  'pdSold': 75
}, {
  'id': 22,
  'pdImg': './static/mock/img/pd22.jpg',
  'pdName': '【22】  保税区直发澳大利亚Swisse高浓度蔓越莓胶囊30粒',
  'pdPrice': 271.00,
  'pdSold': 12
}, {
  'id': 23,
  'pdImg': './static/mock/img/pd23.jpg',
  'pdName': '【23】  挪威Nordic Naturals小鱼婴幼儿鱼油DHA滴剂',
  'pdPrice': 175.00,
  'pdSold': 111
}, {
  'id': 24,
  'pdImg': './static/mock/img/pd24.jpg',
  'pdName': '【24】  澳大利亚Bio island DHA for Pregnancy海藻油DHA',
  'pdPrice': 289.00,
  'pdSold': 28
}, {
  'id': 25,
  'pdImg': './static/mock/img/pd25.jpg',
  'pdName': '【25】  澳大利亚Fatblaster Coconut Detox椰子水',
  'pdPrice': 152.00,
  'pdSold': 17
}, {
  'id': 26,
  'pdImg': './static/mock/img/pd26.jpg',
  'pdName': '【26】  Suitsky舒比奇 高护极薄舒爽纸尿片尿不湿XL60',
  'pdPrice': 99.00,
  'pdSold': 181
}, {
  'id': 27,
  'pdImg': './static/mock/img/pd27.jpg',
  'pdName': '【27】  英国JUST SOAP手工皂 玫瑰天竺葵蛋糕皂',
  'pdPrice': 72.00,
  'pdSold': 66
}, {
  'id': 28,
  'pdImg': './static/mock/img/pd28.jpg',
  'pdName': '【28】  德国NUK 多色婴幼儿带盖学饮杯',
  'pdPrice': 92.00,
  'pdSold': 138
}];

exports.default = pdlistEdit;

/***/ }),

/***/ "zOsH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mescroll = __webpack_require__("6UIf");

var _mescroll2 = _interopRequireDefault(_mescroll);

__webpack_require__("4sx6");

var _index = __webpack_require__("Z2Kc");

var _index2 = _interopRequireDefault(_index);

var _pdlist = __webpack_require__("Zgli");

var _pdlist2 = _interopRequireDefault(_pdlist);

var _pdlistEdit = __webpack_require__("qUnq");

var _pdlistEdit2 = _interopRequireDefault(_pdlistEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'listProducts',
  components: { XHeader: _index2.default },
  data: function data() {
    return {
      mescroll: null,
      dataList: [],
      isEdit: false
    };
  },

  mounted: function mounted() {

    this.mescroll = new _mescroll2.default(this.$refs.mescroll, {
      up: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          src: './static/mescroll/mescroll-totop.png'
        },
        lazyLoad: {
          use: true
        }
      }
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (vm.mescroll) {

        if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce);

        if (vm.mescroll.lastScrollTop) {
          vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop);
          setTimeout(function () {
            vm.mescroll.setTopBtnFadeDuration(0);
          }, 16);
        }
      }
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mescroll) {
      this.mescroll.lastBounce = this.mescroll.optUp.isBounce;
      this.mescroll.setBounce(true);
      this.mescroll.lastScrollTop = this.mescroll.getScrollTop();
      this.mescroll.hideTopBtn(0);
    }
    next();
  },

  methods: {
    upCallback: function upCallback(page) {
      var _this = this;

      this.getListDataFromNet(this.pdType, page.num, page.size, function (arr) {

        if (page.num === 1) _this.dataList = [];

        _this.dataList = _this.dataList.concat(arr);

        _this.$nextTick(function () {
          _this.mescroll.endSuccess(arr.length);
        });
      }, function () {
        _this.mescroll.endErr();
      });
    },
    getListDataFromNet: function getListDataFromNet(pdType, pageNum, pageSize, successCallback, errorCallback) {
      var _this2 = this;

      setTimeout(function () {

        var listData = [];
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (_this2.isEdit) {
            if (i === _pdlistEdit2.default.length) break;
            listData.push(_pdlistEdit2.default[i]);
          } else {
            if (i === _pdlist2.default.length) break;
            listData.push(_pdlist2.default[i]);
          }
        }

        successCallback(listData);
      }, 1000);
    }
  }
};

/***/ }),

/***/ "zbyf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});