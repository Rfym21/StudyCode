// 所有的接口请求都应该放在这里
// 将 fetch 封装管理

import { service } from './request.js'

// 文章列表
export const getPosts = () => {
  return service.get('/posts')
}

// 文章详情
export const getPostById = (id) => {
  return service.get(`/posts/${id}`)
}

// 相关文章
export const getRecommendPosts = (id) => { }