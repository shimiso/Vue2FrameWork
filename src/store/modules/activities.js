// import request from 'superagent'
// import jsonp from 'superagent-jsonp'
import Vue from 'vue'

const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore(state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore({commit, state}) {
    Vue.prototype.$http.get('/douban/event/list', {
      params: {
        'loc': '108288',
        'start': state.skip,
        'count': '3'
      }
    })
      .then((response) => {
        Vue.prototype.showToast('请求成功')
        commit({
          type: 'loadMore',
          res: response.data.events
        })
        console.log('成功返回：', response.data)
      }, (error) => {
        Vue.prototype.showToast('请求失败：' + error);
      })
  },
  /**
   * Getting single event
   * id: event id
   */
  getSingleEvent({commit, state}, payload) {
    Vue.prototype.$http.get('/douban/event/'+payload.id)
      .then((response) => {
        Vue.prototype.showToast('请求成功')
        commit({
          type: 'getSingleEvent',
          res: response.data
        })
        console.log('成功返回：', response.data)
      }, (error) => {
        Vue.prototype.showToast('请求失败：' + error);
      })
  }
}

export default {
  state,
  mutations,
  actions
}
