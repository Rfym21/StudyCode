
const koa = require('koa')
const app = new koa()


const main = (ctx) => {
  // ctx.require | ctx.response
  // ctx.response.body = 'Hello World'
}

app.use(main)

app.listen(8201, () => {
  console.log('Server is running at http://localhost:8201')
})