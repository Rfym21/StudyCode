import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, Button } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
// import 'zarm/dist/zarm.css'
import { getUserInfo } from 'utils/index.js'

export default function App() {
  useEffect(() => {

    (async () => {
      const res = await getUserInfo()
      console.log(res)
    })()

  })

  return (
    <ConfigProvider locale={zhCN} primaryColor='#007FFF'>
      <Router>
        <Routes>
          {
            // 遍历路由配置，生成路由 
            // 使用 key 可使得在数据更新时，React 能够正确地更新组件，提高性能
            routes.map(route => <Route path={route.path} element={<route.component />} key={route.path} />)
          }
        </Routes>
        <Button theme='primary'>按钮</Button>
      </Router>
    </ConfigProvider>
  )
}
