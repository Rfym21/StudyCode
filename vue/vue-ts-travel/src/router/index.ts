import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// ts中:用于声明一个变量的类型
const rootRoutes: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('../views/HomePage/HomePage.vue')
  }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'App',
    component: () => import('../views/TheRoot.vue'),
    redirect: '/home',
    children: rootRoutes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router