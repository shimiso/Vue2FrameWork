import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import activities from './modules/activities'

Vue.use(Vuex)
const state = {
  direction: 'forward'
}
export default new Vuex.Store({
  state,
  modules: {
    activities,
    /** 18n 国际化 **/
    i18n: vuexI18n.store
  }
})
