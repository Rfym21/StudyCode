// ---------------------------------以下为服务配置---------------------------------
const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const router = require('@koa/router')()
const fs = require('fs')
const path = require('path')
const { base64Encode } = require('./lib/base64.js')


// ---------------------------------以下为服务启动---------------------------------
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8103, () => {
  console.log('服务在端口8103上启动成功!')
})

// ---------------------------------以下为处理规则---------------------------------
const worldRules = (content) => {
  // 去除规则集合
  const rules = [
    "vmess://eyJhZGQiOiIxNjQuMTUyLjYwLjI0MiIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAi",
    "vmess://eyJhZGQiOiIxNjguMTM4LjEzMS4xMiIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAi"
  ]

  // 从节点中查找并去除包含规则的节点
  for (let item of rules) {
    const index = content.findIndex(rule => rule.includes(item))
    if (index !== -1) {
      content.splice(index, 1)
    }
  }
  return content
}

const config = {
  type: [
    'v2ray',
    'clash'
  ],
  file: {
    v2ray: 'v2ray.txt',
    me: 'me.txt'
  },
  name: {
    world: worldRules
  }
}

// ---------------------------------以下为路由配置---------------------------------
// router.prefix('/v2')

router.get('/', async ctx => {
  // 获取 URL 查询字符串中的 type 和 name 参数
  let { file, name, number, type } = URLToJson(ctx.url.slice(2))
  // 获取相应的文件内容    
  let content = []
  if (file === 'all') {
    for (item in config.file) {
      const temp = getFIle(config.file[item])
      content = [...temp, ...content]
    }
  } else {
    content = getFIle(`${config.file[file]}`)
    if (content === false) {
      ctx.header['Content-Type'] = 'text/html'
      ctx.body = '<h1 style="margin: 200px auto; width: 300px; text-align: center;font-size:48px;">请求参数错误</h1>'
      return
    }
  }
  const len = content.length
  // Sub输出节点
  let sub = []
  // 查询有无 name 规则，如果有，进行进一步处理
  if (name && config.name[name]) {
    content = config.name[name](content)
  }
  // 判断 number 参数是否存在，如果存在，只返回指定数量的节点
  if (number === 'all') {
    number = content.length
  }
  else {
    number = Number(number)
    if (number) {
      if (number <= 0) {
        number = 1
        // 从节点中查找并去除包含 sn://ssh? 的节点
        const SnIndex = findIndexWithPrefix(content, 'sn://ssh?')
        if (SnIndex !== -1) {
          content.splice(SnIndex, 1)
        }
      }
    } else {
      // 如果 number 参数不存在，返回1个节点
      number = 1
      // 从节点中查找并去除包含 sn://ssh? 的节点
      const SnIndex = findIndexWithPrefix(content, 'sn://ssh?')
      if (SnIndex !== -1) {
        content.splice(SnIndex, 1)
      }
    }

    // 如果 number 大于节点数量，将 number 设置为节点数量
    if (number > content.length) {
      number = content.length
    }
  }

  if (number !== len) {
    // 只返回指定数量的节点
    for (let i = 0; i < number; i++) {
      sub.push(content.splice(Math.floor(Math.random() * content.length), 1)[0])
    }
  } else {
    sub = content
  }

  // 分 type 进行处理
  if (type === 'v2ray' || type === undefined) {
    // 转为字符串，并对其进行 Base64 编码
    sub = base64Encode(sub.join('\n'))
    // 将编码后的字符串作为响应体返回
    ctx.body = sub
  }
  else if (type === 'clash') {

  }
  else {
    ctx.body = '<h1 style="margin: 200px auto; width: 300px; text-align: center;">暂不支持该类型</h1>'
  }

  function findIndexWithPrefix(arr, prefix) {
    return arr.findIndex(item => item.startsWith(prefix))
  }
})


// ---------------------------------以下为获取文件---------------------------------
const getFIle = (fileName) => {
  // 使用 path.resolve() 方法创建文件的绝对路径
  const File = path.resolve(__dirname, 'data', fileName)
  try {
    const fileContent = fs.readFileSync(File, 'utf-8')
    const contentArray = fileContent.split(/\r?\n/).map(line => line.trim())
    return contentArray
  } catch (e) {
    // 如果读取文件时出错，返回一段 HTML 代码表示服务暂停
    return false
  }
}


// ---------------------------------以下为URLToJson---------------------------------
function URLToJson(str) {
  const params = new URLSearchParams(str)
  // 将解析后的参数转换为 JSON 对象
  const jsonObject = {}
  for (const [key, value] of params.entries()) {
    jsonObject[key] = value
  }
  return jsonObject
}
