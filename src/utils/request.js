import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000 // request timeout
})

let loading

function startLoading() { // 使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() { // 使用Element loading-close 方法
  loading.close()
}

const methodAry = ['post', 'patch', 'delete'] // 只有是post或patch才触发加载
let meth = '' // 初始化
let isLoading = true // 是否展示loading 值为false时不展示

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // config.headers['X-CSRF-Token'] = Cookies.get('X-CSRF-Token')
    meth = config.method
    isLoading = config.loading
    if (methodAry.includes(meth) && isLoading !== false) {
      startLoading()
    }
    return config
  },
  error => {
    // Do something with request error
    if (methodAry.includes(meth) && error.loading !== false) {
      endLoading()
    }
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (methodAry.includes(response.config.method) && isLoading !== false) {
      endLoading()
    }
    const res = response.data
    if ((res.success + '') != 'undefined') {
      if (!res.success && (res.message_zh || res.message)) {
        Message.error(res.message_zh || res.message)
      }
    }
    return response
  },

  error => {
    console.log('er:', error)
    if (methodAry.includes(meth) && isLoading !== false) {
      endLoading()
    }
    if (!error.response) {
      Message({
        message: 'Network Error',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      const { data } = error.response
      if (data.message_zh || data.message) {
        Message({
          message: data.message_zh || data.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
    return Promise.reject(error)
  }
)

export default service
