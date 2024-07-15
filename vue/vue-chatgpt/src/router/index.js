// 路由 -> path  对应  组件

import { createRouter, createWebHistory } from 'vue-router'

// 路由对象
// 哈希路由
// # -> 锚链接
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      // 页面级别组件 views
      component: () => import('../views/Home.vue')
    }
    //, {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../views/About.vue')
    // }
  ]
})

export default router