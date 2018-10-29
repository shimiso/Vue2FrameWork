import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// 全局配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = process.env.BASE_URL

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(config => {
  // 处理请求之前的配置 显示loading
  return config
}, error => {
  // 请求失败的处理
  return Promise.reject(error)
})

// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(response => {
  // 处理响应数据
  return response
}, error => {
  if (error && error.response) {
    var message = null
    switch (error.response.status) {
      case 400:
        message = '错误请求'
        break
      case 401:
        message = '未授权，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求错误,未找到该资源'
        break
      case 405:
        message = '请求方法未允许'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器端出错'
        break
      case 501:
        message = '网络未实现'
        break
      case 502:
        message = '网络错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网络超时'
        break
      case 505:
        message = 'http版本不支持该请求'
        break
      default:
        message = `连接错误${error.response.status}`
    }
  } else {
    message = '连接到服务器失败'
  }
  Vue.prototype.showToast(message, '20em')
  // 处理响应失败
  return Promise.resolve(error.response)
})

export default {
  get (url, config = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, config).then(response => {
        resolve(response)
      }).catch(err => {
        console.error('get请求异常：' + err)
        reject(err)
      })
    })
  },

  post (url, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(response => {
          resolve(response)
        }, err => {
          console.error('post请求异常：' + err)
          reject(err)
        })
    })
  },
  postForm (url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      config.url = url
      config.method = 'post'
      config.data = qs.stringify(data)
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
      axios(config).then((response) => {
        resolve(response)
      }, err => {
        console.error('postForm请求异常：' + err)
        reject(err)
      })
    })
  }
}
