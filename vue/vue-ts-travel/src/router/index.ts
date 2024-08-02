import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// ts中:用于声明一个变量的类型
const rootRoutes: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'Home',
    meta: {
      cache: true
    },
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: 'discount',
    name: 'Discount',
    meta: {
      cache: false
    },
    component: () => import('../views/Discount/Discount.vue')
  }

]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'App',
    component: () => import('../views/TheRoot.vue'),
    redirect: '/home',
    children: rootRoutes
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router