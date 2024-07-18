# v3 后台管理系统

- 实习项目,外包必备
    - 给内部人员使用,与用户端产品联动
    - 项目基本都有
        外包 需求增加
- vue 组件库 ElementPLus
    - main.js  use(ElementPlus) 和加载css
    - ElementPlus 太大了,加载太慢了
    - 按需加载 解构{ } 单个use
- 路由
    - 使用WebHistory
    - 路由守卫
        - 权限,登录
        - 身份权限 admin / user
- 路由功能
    - 两种路由形式的优缺点
        hash 兼容性好  形式不好
        history  兼容性差  但是形式好
        用户项目, 如果要考虑兼容性, 用hash, 用户端移动项目不太需要兼容性(可以用history)
        hash(用户 & PC 产品)
    - 路由懒加载
    - 二级路由
    - 路由守卫
        - 登录鉴权  auth
        - 权限系统(角色权限)  => role(admin / user)
        - 403 / 404 跳转
        - meta 用法
            - title  => document.title
            - permiss  => role
    - NProgress  进度条
        router.beforeEach
        router.afterEach
    - history 用法
        访问历史  router-link  点击
        地址栏切换
        useRouter => push go(-1)
- ElForm 的用法
    - ElementPlus UI组件库的Form组件
    - ElForm ElFormItem ElInput ElCheckbox
    - v-model 双向绑定 reactive: { username, password}
        - ElForm :model="param"
    - validate riles
        - 对 form 进行ref绑定, 绑定的是Form组件
        - 提交之前 使用Form对象有的validate方法进行校验
    - 提交 ? 成功:失败  &  跳转

- pinia
    - 状态管理
    - 比 vuex 更现代化更好用
    - app.use(createPinna())

- 全局状态设计
    - collapse 状态 true | false
    - 窄屏的设备适配