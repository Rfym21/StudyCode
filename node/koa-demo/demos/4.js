const Koa = require('koa');
const app = new Koa()

const one = (ctx, next) => {
  console.log('one')
  next()
  console.log('one - 2')
}

const two = (ctx, next) => {
  console.log('two')
  next()
  console.log('two - 2')
}

const three = (ctx, next) => {
  console.log('three')
  next()
  console.log('three - 2')
}

app.use(one)
app.use(two)
app.use(three)

app.listen(8201, () => {
  console.log('listening on 8201');
})