# root 挂载点,react接管
- react/vue 开启了前端开发的新篇章
    - 脱离了原始dom树操作
    - 开启了 mvvm 的世界
- React.createElement('div', props, children)
- JSX语法 <div>{name}</div>html 也是一种xml   xml in js 界面表现力
    src/index.js  -> 编译一下(stylus) -> react支持JSX
- ReactDOM.render()

## create-react-app 生产工艺流程的理解

# # react 不同开发环境
    - /src 开发目录 development
    - npm run build 项目打包上线 production
    - test 测试阶段
    - vercel(vercel deploy)

    - 开发流程
        - 拿到offer,领取开发任务(登录)
        - src/相应的功能开发
        - localhost:3000 调试
        - npm run build 打包一个上线的代码包  ./build
        - serve -s ./build  本地模拟线上环境
        - PC 局域网 移动设备测试
        - deploy真正的push上线

    - vercel
        - 云开发:本地一键上云
            vercel login
            vercel deploy
        - 免费的二级域名 指向上传的build目录
            http://localhost:3000 development
            http://localhost:prot build
            test
            https://react-jg6jtcwxy-rfym21s-projects.vercel.app

- JSX 拥有强大的表现力
    - React.createElement() 太繁琐
    - 模块化
      - index.js 只负责根节点的接洽
      - App.jsx 根组件