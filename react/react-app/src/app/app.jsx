// 根组件
// react 使用函数创建组件 组件一定返回JSX
// 组件不同于html 一堆的html + css + js
// 页面由组件组成(复用)

import AppHeader from '../components/app-header'

const App = () => {
  const element = (
    <div className='desc'>
      <AppHeader name="帝皇侠"/>
      <AppHeader name="炎龙侠"/>
    </div>
  )
  return element
}

// module 输出
export default App