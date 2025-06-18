# vue-router

- router 初始化以及配置
- 路由守卫
    router:beforeEach
- 路由懒加载
    {
      path: "/about",
      component: () => import('./views/about.vue')
    }
- router-view / router-link
- vue 组件
  - 自定义组件
  - transition 内置组件
  - 全局组件,在任何地方都可以直接访问
        app.component('router', RouterLink)
    - 如果组件没有被引入, DOM 会把它当成一般标签解析
    - app.component: => app.use(router)
- router-link 工作原理
  - 来自于 vue-router
  - vue.component() 设置为全局组件
  - vue.use() vue 向插件生态注入
  - router 插件 准备好 install 方法
- <slot />
    - 插槽
    - 将组件的内部交给外部去定义
    - 提升了组件的可复用性
- <http://localhost:8201/posts/:id/#/home?a=1&b=2>
  - 协议: http://
  - 域名: localhost
  - 端口号: 8201
  - hash: #/home
  - path: posts
  - params: :id
  - query: ?a=1&b=2
- 高级响应式
  - ref / reactive
  - 在模板,在组件,在任何地方的都会更新
