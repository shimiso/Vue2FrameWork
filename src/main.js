// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import vuexI18n from 'vuex-i18n'
import vuxLocales from 'vux/src/locales/all.yml'
import componentsLocales from 'vux/src/locales/components.yml'
import objectAssign from 'object-assign'
import store from './store'
import http from './libs/axiosUtils.js'
import 'lib-flexible/flexible'
import { LocalePlugin, AlertPlugin, BusPlugin, ConfigPlugin, ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'

// 需要注意的是axios是基于Promise的，因此如果你需要兼容低版本浏览器(caniuse)，需要引入polyfill。
// Polyfill 推荐使用 es6-promise
require('es6-promise').polyfill()
Es6Promise.polyfill()

// 定义全局变量
Vue.prototype.$http = http
Vue.use(Vuex)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(BusPlugin)

// 公用的弹窗(全局变量)
Vue.prototype.showToast = function (text, width) {
  Vue.$vux.toast.show({
    text: text,
    position: 'bottom',
    width: width == null ? '10em' : width,
    type: 'text'
  })
}

// 公用的加载动画(全局变量)
Vue.prototype.showLoading = function (text) {
  Vue.$vux.loading.show({
    text: text == null ? '加载中...' : text
  })
}
Vue.prototype.hideLoading = function () {
  Vue.$vux.loading.hide()
}

Vue.use(vuexI18n.plugin, store)
Vue.use(LocalePlugin)

const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}

for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

const nowLocale = Vue.locale.get()
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh-CN')
} else {
  Vue.i18n.set('en')
}

// no transitoin in demo site
const shouldUseTransition = !/transition=none/.test(location.href)
store.registerModule('vux', {
  state: {
    direction: shouldUseTransition ? 'forward' : ''
  },
  mutations: {
    updateDirection (state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  }
})

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

// vue-router的beforeEach和afterEach来更改loading状态
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  isPush = false
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
