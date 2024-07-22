import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/item',
      component: () => import('../views/Item.vue')
    },
    {
      path: '/score',
      component: () => import('../views/Score.vue')
    }
  ]
})

export default router
