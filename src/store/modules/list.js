import Vue from 'vue'
const state = {
  items: []
}
const mutations = {
  getUpCallbackList (state, payload) {
    state.items = state.items.concat(payload.res)
  }
}

const actions = {
  getUpCallbackList ({commit, state},page) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        Vue.prototype.$http.get('/douban/event/list', {
          params: {
            'loc': '108288',
            'start': page.num,
            'count': page.size
          }
        }).then((response) => {
          if(!response.data||!response.data.events){
            reject(response.data)
            return
          }
          commit({
            type: 'getUpCallbackList',
            res: response.data.events
          })
          resolve(response.data.events);
          console.log('成功返回：', response.data)
        }, (error) => {
          reject(error)
        })
      }, 1000);
    })

  }
}
export default {
  state,
  mutations,
  actions
}
