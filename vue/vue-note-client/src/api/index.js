import axios from 'axios'
import { showToast } from 'vant'

// 默认请求地址
axios.defaults.baseURL = 'http://localhost:8401'
// 默认POST响应请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
// axios.interceptors.request.use(config => {

// }, error => {

// })

// 响应拦截器
axios.interceptors.response.use(res => {
  console.log("响应拦截 => ", res.data)
  if (res.status !== 200) {
    // 程序错误
    showToast('服务器异常')
    return Promise.reject(res)
  } 
  else if (res.data.code !== 800) {
    // 逻辑错误,并提示错误信息
    showToast(res.data.msg)
    return Promise.reject(res)
  }

  return res.data
}, error => {

})

export default axios