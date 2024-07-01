// 后端简单的框架
import Koa from 'koa'  // 后端简单请求
import Router from 'koa-router'   // 路由
import { bodyParser } from '@koa/bodyparser'
import punycode from 'punycode'
import cors from '@koa/cors'

// web 服务就是一个app
const app = new Koa()   // 服务实例
const router = new Router()   // 路由实例
// use 挂载一个服务
// 函数 ctx 是一个对象 里面有request 和 response 
// HTTP是基于请求响应的的简单协议

import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: 'sk-dfX0BbaQIc6iC3pIqgmYoHTRHczPanxLhKhfFMcvsaVNR3Fg',
  // apiKey: 'sk-VN0UcszHjccS7ecQD264C46eEa754b0bA50bFf8702A450C5',
  // api接口地址
  baseURL: 'https://api.302.ai/v1'
  //  baseURL: 'https://burn.hair/v1'
})


app.use(bodyParser())  // 解析请求体
app.use(cors())  // 跨域

router.post('/logo', async (ctx) => {
  // let title = ctr.request.body.title
  // let desc = ctr.request.body.desc
  let { title, desc } = ctx.request.body
  // ctx.body = 'logo'
  // log(title, desc)
  const prompt = `
    你是一位资深的设计师
    请为标题明为${title}，功能为${desc}app应用设计一款1ogo
    要求高端大气上档次
  `

  try {
    const response = await client.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
    })

    ctx.body = {
      status: 200,
      url: response.data[0].url
    }

  } catch (error) {
    ctx.body = {
      status: 500,
      error: error.message
    }
    return
  }

})

router.get('/', ctx => {
  ctx.body = '首页'
})

app.use(router.routes())  // 启动路由

// app.use((ctx) => {
//   // ctx.response.body = 响应体是 'Hello World'
//   ctx.body = 'Hello World'
// })

// http 协议的提供
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})