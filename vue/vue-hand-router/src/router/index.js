import { createRouter, createHashRouter } from '../grouter/index.js'
import Home from '../pages/index.vue'
import About from '../pages/about.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createHashRouter(),
  routes
})

export default router