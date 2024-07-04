import AppHeader from "./components/app-header.jsx"
// 父组件
const App = () => {
  return (
    <div className="container">
      {/* 子组件 */}
      <AppHeader name="蔡徐坤"/>
    </div>
  )
}

export default App