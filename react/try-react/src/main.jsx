// import React from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 新时代的前端开发,旧时代 DOM Api
// 接管 root 节点
const root = ReactDOM.createRoot(document.getElementById('root'))

// const element = React.createElement(
//   'h1',
//   null,
//   React.createElement(
//     'header',
//     { className: 'header' },
//     'header'
//   ),
//   React.createElement(
//     'main',
//     { className: 'main' },
//     React.createElement(
//       'aside',
//       { className: 'aside' },
//       'aside'
//     ),
//     React.createElement(
//       'article',
//       { className: 'article' },
//       'article'
//     ),
//     React.createElement(
//       'aside',
//       { className: 'aside' },
//       'aside'
//     )
//   ),
//   React.createElement(
//     'footer',
//     { className: 'footer' },
//     'footer'
//   )
// )

// JSX react 表现力优于vue


// React Element(VDOM 全新打造的react节点) 不是DOM element
const element = (
  <h1 className='container'>
    <header className="header">header</header>
    <main className="main">
      <aside className="aside">aside</aside>
      <article className="article">article</article>
      <aside className="aside">aside</aside>
    </main>
    <footer className="footer">footer</footer>
  </h1>
)

root.render(
  // element
  <App />
)