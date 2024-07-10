# 文章推荐算法

- posts 数据源
- 大前端
    vue3 + vue-router => 单页应用
    backend AI推荐

- router-link 高级用法
    <router-link to='/'>Home</router-link>
    动态
    /user/123
    {
      name: 'user',
      path: '/user/:userId'
    }
    <router-link :to='{name: 'user',params:{id:123}}'>user</router-link>
- axios vue/react 通用的请求器
    - baseURL 切换本地线上
    - api/ 接管所有的请求
        service.get()
    - 拦截器
        1. 请求拦截器
        2. 响应拦截器
            response.data
            统一处理报错请求