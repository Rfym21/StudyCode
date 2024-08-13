# vite & webpack 区别

    - 都是现代工程化套件 => 但是vite是基于ESM的，webpack是基于CommonJS的
    - vite 更快,更轻,更现代化
    - webpack 更成熟,更稳定,更全面 => 定制性和功能更强大

    - vite 使用 node 命令行工具启动工程化
        1. 在某个端口上启动 web-server
        2. 以 index.html 为首页 #root 作为挂载点
        3. src/main.js 为入口,App.vue为根组件,通过 import 导入其他模块
        4. vite 会自动编译,打包,热更新 => 无需配置

    - webpack 使用 webpack-cli 命令行工具启动工程化
        1. 以 webpack.config.js 为配置文件
        2. 以 src/index.js 为入口,通过 import 导入其他模块
        3. package.json 中配置 scripts 启动 webpack-dev-server
            - webpack 打包核心
            - webpack-dev-server 开发服务器
            - webpack-cli 命令行工具
        4. 运行流程
            1. npm run dev => dev "webpack serve --open"
            2. webpack-cli 命令行工具接收命令行的指令
                - webpack 先打包
                - serve 启动服务器
                - --open 自动打开浏览器
            3. webpack 打包
                - 读取根目录下的 webpack.config.js 配置文件
                - 模块化 module.exports = {}
                - entry(/src/main.js) 入口文件
                - output(bundle.js) 输出文件
                - devServer 配置服务器 => port(端口) + contentBase(首页 index.html)
                - plugins 插件 => html-webpack-plugin
                - module 配置模块 => rules(规则) + test(正则) + use(使用) + loaders(加载器)
                    stylus => css
                    js => es6 -> es5
                    ts => ts -> js
                    vue => js + css + html
            4. loader 加载器 -> label转译
            5. entry main.js => module => rules => test 文件类型 => use 加载器 => loader

    - vite & webpack => 
        1. 开发阶段
        2. 打包阶段
        3. 生产阶段

    - 工程化优势 => 
        1. 支持 stylus less sass => css
        2. 支持 typescript => javascript
        3. 支持浏览器兼容: => javascript => es6 -> es5
        4. 支持加载插件(loader plugin) => 插件化(.vue)

## babel & webpack

    - js转译 => es6 -> es5
    - babel-loader 加载js到babel工作间
    - @babel/core 的核心功能
    - @babel/preset-env 预处理方式
