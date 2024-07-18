import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页',
          // noAuth: true,
        },
        component: () => import('../views/dashboard.vue')
      },
      {
        path: '/system-user',
        name: 'system-user',
        meta: {
          title: '用户管理',
          permiss: '11'
        },
        component: () => import('../views/system-user.vue')
      },
      {
        path: '/system-role',
        name: 'system-role',
        meta: {
          title: '角色管理',
          permiss: '12'
        },
        component: () => import('../views/system-role.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      noAuth: true
    },
    component: () => import('../views/login.vue')
  },
  {
    path: '/403',
    meta: {
      title: '403',
      noAuth: true
    },
    component: () => import('../views/403.vue')
  },
  {
    path: '/404',
    meta: {
      title: '404',
      noAuth: true
    },
    component: () => import('../views/404.vue')
  },
  {
    path: '/:path(.*)',
    redirect: '/404'
  }
]

// WebHistory 的url与传统的url相同，例如：http://localhost:8080/about
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  // 设置页面标题
  const role = localStorage.getItem('ms_name')
  const permiss = {
    'admin': ['11', '12'],
    'user': ['11']
  }

  document.title = to.meta.title


  // 没有登录,并且访问需要登录的网页
  if (!role && to.meta.noAuth !== true) {
    next('/login')
  }
  // 已经登录,并且访问登录页面
   else if (role && to.path === '/login') {
    ElMessage.success('您已登录')
    next('/')
  }
  // 已经登录,并且访问没有权限的网页
  else if (typeof to.meta.permiss == "string" && !permiss[role].includes(to.meta.permiss)) {
    next('/403')
  } else {
    next()
  }

})

router.afterEach(() => {
  NProgress.done()
})


export default router