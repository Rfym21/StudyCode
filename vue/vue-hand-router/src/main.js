import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// vue 只负责 组件思想  只做核心
// 其他的交给生态系统
// vue-router 是 vue 生态中的路由模块
// vue 与其生态系统对接使用 use 方法
app.use(router)
app.mount('#app')
