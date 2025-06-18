const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./router/user')

app.use(cors())
// 限制请求体大小
app.use(express.json({ limit: '10mb' }))
// 加载路由
app.use('/api', userRouter)

// 错误处理中间件
app.use((err, req, res, next) => {
  // console.log(err)
  res.status(500).json({
    code: 500,
    message: err.message
  })
})

// 启动服务器
app.listen(5174, () => {
  console.log('Server is running on http://localhost:5174')
})


