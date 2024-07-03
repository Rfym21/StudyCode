// es6 module
import ReactDOM from 'react-dom/client'
import React from 'react'
// 模块化的导入
import App from './app/app'

// 只做一次DOM查找,ReactDOM
// DOM编程性能很差
const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = React.createElement('h2', {className:'title',id:'title'}, 'hello world 0')
// const element = React.createElement(
//   'div',
//   { className: 'title'},
//   React.createElement(
//     'h1',
//     { className: 'desc'},
//     "帝皇侠"
//   )
// )

root.render(
  // <h1>hello world</h1>
  // element
  // <div className='title'>
  //   <h1 className='desc'>帝皇侠 go</h1>
  // </div>
  <App />
)
