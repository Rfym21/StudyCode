import axios from 'axios'
import { Toast } from 'zarm'

axios.defaults.baseURL = '/api'
// 允许携带cookie
axios.defaults.withCredentials = true

// 响应拦截器
axios.interceptors.response.use((res) => {
  
  if (res.status !== 200) {
    Toast.show(res.data.msg)
    return Promise.reject(res.data.message)
  } 

  return res
}, (err) => {
  // 错误处理
  Toast.show(err.response.data.message)
  return Promise.reject(err)
})

// 请求拦截器
axios.interceptors.request.use((req) => {
  return req
})


export default axios
