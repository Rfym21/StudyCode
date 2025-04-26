
const koa = require('koa')
const fs = require('fs')
const app = new koa()
const path = require('path')


const main = (ctx) => {
  // ctx.require | ctx.response
  // ctx.response.body = 'Hello World'
  if (ctx.url === '/') {
    ctx.response.body = 'Hello World'
  }
  else if (ctx.url === '/home') {
    ctx.response.body = "<h1>Home Page</h1>"
  }
  else if (ctx.url === '/about') {
    const file = path.resolve(__dirname, 'about.html')
    const aboutHTML = fs.readFileSync(file, 'utf8')
    // const aboutHTML = fs.readFileSync(file)
    // const aboutHTML = fs.createReadStream(file)
    ctx.response.body = aboutHTML
  }
}

app.use(main)

app.listen(8201, () => {
  console.log('Server is running at http://localhost:8201')
})