import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
import { ref, inject } from 'vue'

// 主观上的单例模式
export const createRouter = (options) => {
  return new Router(options)
}

export const createHashRouter = () => {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }
  // history 对象
  return {
    url: window.location.hash.slice(1) || '/',
    bindEvents
  }
}

// 标记 router 暴露给 vue
// 通过 inject 获取已暴露的 router 对象
// 1. provide
// 2. inject
const ROUTER_KEY = '__router__'
// use 开头的是一派 hooks 函数式编程
export const useRouter = () => {
  return inject(ROUTER_KEY)
}

class Router {
  constructor(options) {
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)
    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1)
    })
  }

  // use 调用插件 install方法
  install(app) {
    // 全局声明有一个 router 对象
    // 先向外暴露一个对象 名称为 __router__
    app.provide(ROUTER_KEY, this)
    console.log('Router installed', app)
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
  }
}