import axios from 'axios'

// 创建一个axios单例
export const service = axios.create({
  // 每个项目的后端地址Base是一样的
  // url = baseURL + path
  baseURL: 'http://localhost:8401',
  // 响应超时时间
  timeout: 5000
})

// 响应拦截器
service.interceptors.response.use(res => {
  console.log("响应成功数据: ", res)
  return res.data
}, function (err) {
  console.log("响应失败错误: ", err)
  return {
    "title": "404 Not Found",
    "category": "请求响应失败"
  }
 })