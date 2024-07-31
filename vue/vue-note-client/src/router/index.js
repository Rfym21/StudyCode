import { createRouter, createWebHistory } from 'vue-router'
import { showToast } from 'vant'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Note from '../views/Note.vue'
import Detail from '../views/Detail.vue'
import New from '../views/New.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录账号'
      },
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        title: '注册账号'
      },
      component: Register
    },
    {
      path: '/home',
      name: 'NoteClass',
      meta: {
        title: '笔记分类'
      },
      component: Home
    },
    {
      path: '/note/:name',
      name: 'Note',
      meta: {
        title: '笔记列表'
      },
      component: Note
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      meta: {
        title: '笔记详情'
      },
      component: Detail
    },
    {
      path: '/new',
      name: 'New',
      meta: {
        title: '新建笔记'
      },
      component: New
    },
    {
      path: '/:pathMatch(.*)*', // 捕获所有未定义的路径
      redirect: '/home' // 重定向到首页
    }
  ]
})

// 全局路由守卫
// 白名单
const whitePath = ['/login', '/register', '/home']
router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title + ' - 一颗云笔记'
  // 判断是否登录
  const token = localStorage.getItem('token')

  if (!token) {
    // 没有登录,判断是否在白名单中
    if (!whitePath.includes(to.path)) {
      // 不在白名单中，跳转到登录页
      showToast('请先登录!')
      next('/login')
    } else {
      // 在白名单中，直接放行
      next()
    }
  } else {
    // 如果已经登录，直接放行
    // 但是如果是登录页，跳转到首页
    if (to.path === '/login' || to.path === '/register') {
      showToast('您已经登录，请不要重复登录!')
      next('/home')
      return
    } else {
      next()
    }
  }

})

export default router
