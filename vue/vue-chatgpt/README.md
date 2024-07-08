#  企业级vue3 开发 商业项目

- 项目架构
    - vue-router  单页应用  路由功能

- 理解项目需求
    - url 改变 #hash  不会刷新当前页面  -> 实现的单页页面的要求
    - HashChange router-view 相应的组件显示到router-view位置
    - 路由分为两种  哈希路由(hash) #name 兼容性好  使用锚链接
        localhost:5173/#name
        localhost:5173/#about

    - 来自于"锚链接"的原生能力
        <a name="top"></a>    <a href="#top"></a>
        url + #top 同时跳转到top部位  且页面不刷新
    - tailwind css  原子css 外包好帮手  减少95% css代码
    - npx tailwindcss init -p
- tailwind CSS
    - 原子CSS
    - 4 => 1rem
    - py => padding-bottom
    - ml => margin-left
    - css 带来了语义化

- 复杂的页面状态
    - input 兼具 api-key保存 和 openai聊天
    - 状态驱动界面
- 手写ChatGPT
    - openai 聊天模型
        - model: gpt-3.5-turbo
        - message: 上下文
            最近几次的聊天内容都发给llm 上下文越多,反馈越准确
        - role
            system  chat bot 角色
            assistant openai 派出的助理
            user 提问
            assistant 回答