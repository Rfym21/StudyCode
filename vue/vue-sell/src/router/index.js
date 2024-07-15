import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: () => import('../App.vue')
    // },
    {
      path: '/',
      name: 'Goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path: '/comment',
      name: 'Comment',
      component: () => import('../views/Comment.vue')
    },
    {
      path: '/seller',
      name: 'Seller',
      component: () => import('../views/Seller.vue')
    }
  ]
})

export default router
