import request from 'superagent'
import jsonp from 'superagent-jsonp'
import Vue from 'vue'
import qs from 'qs';
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
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
    let postData = qs.stringify({
      'grant_type':'password',
      'username':'shimingsong',
      'password':'Pass123$',
      'client_id':'ro.client',
      'client_secret':'secret',
      'scopes':'StaffInfo'
    })

    // axios({
    //   method: 'post',
    //   url:'/dandian',
    //   timeout: 5000,
    //   headers:{
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Accept': '*/*',
    //     'X-CSRF-TOKEN': '8vMyyBrsamNi4my3UQQMHOG7blsEebn5Y5m2E5WG'
    //   },
    //   data:postData
    // }).then((res)=>{
    //   console.log('返回结果：', res)
    // });

   /* Vue.prototype.$http.post('/dandian',postData,{
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then((res) => {
      console.log('返回结果：', res)
      this.json = res
    }, (error) => {
      console.log(error)
    })*/
     return new Promise((resolve, reject) => {

       request
         .post('http://jujia01.ycsenior.com:5000/connect/token')
         .type('form')
         .set('Content-Type', 'application/x-www-form-urlencoded')
         // .send('{"grant_type":"password","username":"shimingsong","password":"Pass123","client_id":"ro.client","client_secret":"secret","scopes":"StaffInfo"}') // name=An&age=20
         // .send('grant_type=password&username=shimingsong&password=Pass123$&client_id=ro.client&client_secret=secret&scopes=StaffInfo')
         // .send('grant_type=password')
         // .send('username=shimingsong')
         // .send('password=Pass123$')
         // .send('client_id=ro.client')
         // .send('client_secret=secret')
         // .send('scopes=StaffInfo')
         .set('Accept', '*/*')
         .send(postData)


         .use(jsonp({timeout: 10000}))
         .end((err, res) => {
           if (!err) {
             console.log(res)
           }
         })
     })
    /*  request
        .get('https://api.douban.com/v2/event/' + payload.id)
        .use(jsonp({timeout: 10000}))
        .end((err, res) => {
          if (!err) {
            commit({
              type: 'getSingleEvent',
              res: res.body
            })
            resolve(res)
          }
        })
    })*/

   /* Vue.prototype.$http.get('/douban/event/'+payload.id)
      .then((response) => {
        Vue.prototype.showToast('请求成功')
        commit({
          type: 'getSingleEvent',
          res: response.data
        })
        console.log('成功返回：', response.data)
      }, (error) => {
        Vue.prototype.showToast('请求失败：' + error);
      })*/
  }
}

export default {
  state,
  mutations,
  actions
}
