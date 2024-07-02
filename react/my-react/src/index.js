
// 入口文件
// console.log("index.js")
// import React from 'react'
// es6 module
import ReactDOM from 'react-dom/client'
import React from 'react'

// root 内部就是react的虚拟DOM
// root react 的根节点
const root = ReactDOM.createRoot(
  // 获取挂载点,以后react 就不再做DOM操作了
  document.getElementById('root')
)

// // 节点                             Tag   属性         内容
// const element2 = React.createElement('div', {id:'name'}, 'Hello World')
// console.log(element2)

// root.render(element)

// react 法宝 JSX语法
// 不上纯js,react jsx语法
const element = (<h1>我是铠甲勇士</h1>)
// console.log(element)
root.render(element)
// root.render(element2)