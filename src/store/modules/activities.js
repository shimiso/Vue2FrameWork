import request from 'superagent'
import jsonp from 'superagent-jsonp'
import http from '../../libs/Http'
const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  }
}

const actions = {
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore ({commit, state}) {
    http.get('/api/event/list', {
      params:{
        'loc': '108288',
        'start': state.skip,
        'count':'3'
      }
    })
      .then((response) => {
        // this.showToast('请求成功')
        commit({
          type: 'loadMore',
          res: response.data.events
        })
        console.log('成功返回：', response.data)
      }, (error) => {
        // this.showToast('请求失败：' + error);
      })

   /* request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
        state.skip + '&count=3')
      .use(jsonp({timeout: 10000}))
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadMore',
            res: res.body.events
          })
        }
      })*/
  }
}

export default {
  state,
  mutations,
  actions
}
