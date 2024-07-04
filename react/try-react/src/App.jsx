import AppHeader from './components/app-header.jsx'

// 根组件 返回JSX的函数就是组件
const App = () => {
  // App的数据
  const name = "蔡徐坤"
  return (
    <div className="container">
      {/* 参数传递给子组件 */}
      <AppHeader name={name} theme="day" />
    </div>
  )
}

export default App