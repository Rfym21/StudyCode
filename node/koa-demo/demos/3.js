const Koa = require('koa')
const router = require('koa-route')
const app = new Koa()

const home = (ctx) => {
  ctx.body = '<h1>Home Page</h1>'
}

const about = (ctx) => {
  ctx.body = '<a href="/home">去首页</a>'
}

const logger = (ctx, next) => {
  console.log(`URL: => ${ctx.url} | 请求方式: => ${ctx.method} | 时间: => ${new Date()}`)
  next()
}

app.use(logger)  // 中间件
app.use(router.get('/home', home))
app.use(router.get('/about', about))

app.listen(8201, () => {
  console.log('listening on 8201');
})

