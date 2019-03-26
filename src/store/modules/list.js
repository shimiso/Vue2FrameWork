import Vue from 'vue'
const state = {
  items: [],
  size: 3
}
const mutations = {
  getUpCallbackList (state, payload) {
    state.items = state.items.concat(payload.res)
  }
}

const actions = {
  getUpCallbackList ({commit, state}, upParams) {
    Vue.prototype.$http.get('/douban/event/list', {
      params: {
        'loc': '108288',
        'start': 0,
        'count': state.size
      }
    })
      .then((response) => {
        let len = response.data.events.length
        if (len === 0) {
          // 重写关于数据为空的dom
          upParams.mescrollUp.empty = {
            warpId: 'dataList', // 父布局的id;
            icon: './static/mescroll/mescroll-empty.png', // 图标,支持网络图
            tip: '暂无相关数据~', // 提示
            btntext: '去逛逛 >', // 按钮,默认""
            btnClick () { // 点击按钮的回调,默认null
              // 数据为空点击btn的回调，或者直接不再这里重写，直接用listView的默认配置
              alert('数据为空点击btn的回调')
            }
          }
        }
        // Vue.prototype.showToast('请求成功')
        commit({
          type: 'getUpCallbackList',
          res: response.data.events
        })
        // 数据渲染成功后,隐藏下拉刷新的状态
        upParams.mescroll.endSuccess(response.data.events.length)
        console.log('成功返回：', response.data)
      }, (error) => {
        // 联网异常,隐藏上拉和下拉的加载进度
        upParams.endErr()
        // 弹窗提示或者请求错误页面
        Vue.prototype.showToast('请求失败：' + error);
      })
  }
}
export default {
  state,
  mutations,
  actions
}
