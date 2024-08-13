const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
// 需要手动配置
// 使用commonjs规范 & node模块化方案
// 启动一个webpack-dev-server 设定端口号
// 以index.html为首页,src/main.js为入口文件
// 打包(bundle) webpack可以打包一切静态资源
module.exports = {
  // 开发环境打包
  mode: "development",
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // 服务端口
    port: 8201,
    hot: true,
  },
  plugins: [
    // 生成html文件
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
}