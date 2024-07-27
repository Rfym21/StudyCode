import { createRouter, createWebHistory, useRoute } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        title: '注册'
      },
      component: () => import('../views/Register.vue')
    }
  ]
})

// 全局路由守卫
// 白名单
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title + ' - 一颗云笔记'
  // 判断是否登录
  const token = localStorage.getItem('token')
  if (!token) {
    // 没有登录,判断是否在白名单中
    if (!whitePath.includes(to.path)) {
      // 不在白名单中，跳转到登录页
      router.push('/login')
    } else {
      // 在白名单中，直接放行
      next()
    }
  } else {
    // 如果已经登录，直接放行
    // 但是如果是登录页，跳转到首页
    // if (to.path === '/login') {
    //   router.push('/')
    // } else {
    //   next()
    // }
    next()
  }
})

export default router
