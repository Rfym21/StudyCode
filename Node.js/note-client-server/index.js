
const koa = require('koa')
const app = new koa()
const useRouter = require('./routes/index.js')
const cors = require('@koa/cors')
const { bodyParser } = require('@koa/bodyparser')


app.listen(8401, () => {
  console.log("项目已在8401端口启动")
})
app.use(cors())
// 让koa可以解析post请求体
app.use(bodyParser())
useRouter(app)