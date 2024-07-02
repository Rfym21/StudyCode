# 前端第一框架React

- Facebook
- 特别适合中大型项目开发
- 学习成本高

## 安装环境
- npm 包管理器
- npm i -g  create-react-app
    - react/vue 企业级应用,create-react-app来自于Facebook官方推出的项目脚手架
    - -g 全局安装
        npm config ls
        create-react-app => path =>prefix
- create-react-app my-react(project-name)
    - 不再是html css js 
        从0开始
    - 不需要从0开始,直接使用一个标准项目模板,快速启动

- my-react
    - src 开发目录,代码主战场
        index.js 入口文件
        index.css 全局样式文件
    - node_modules 存放依赖包
        package.json 项目描述文件
        react 18 最牛逼的现代的开发框架
        react-dom
    - public 静态资源目录
        index.html 首页
            - root react 功能挂载点
    - localhost:3000 -> index.html -> load index.js -> react接管项目开发
    - package.json
- create-react-app 做了什么事
    - git clone 项目模板
    - npm i 依赖 react react-dom
    - npm run start
    - web server prot:3000
    - public/index.html 首页
    - src/所有react开发代码会打包成 /public/js/bundle.js 动态加载到index.html
    - react 功能 接管 root 开启react世界
- defer(推迟) 异步加载
    推迟到 DOMcontentLoaded 之后
    async 异步加载 浏览器会异步加载