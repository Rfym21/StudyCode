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
      path: '/goods',
      name: 'Goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path: '/comments',
      name: 'Comments',
      component: () => import('../views/Comments.vue')
    },
    {
      path: '/business',
      name: 'Business',
      component: () => import('../views/Business.vue')
    }
  ]
})

export default router
