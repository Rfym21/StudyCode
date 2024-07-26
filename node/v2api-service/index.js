const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const router = require('@koa/router')()
const fs = require('fs')
const path = require('path')

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8103, () => {
  console.log('服务在端口8103上启动成功!')
})

router.prefix('/v2')

// 获取clash配置文件
router.get('/clash', async ctx => {
  ctx.body = getFIle("clash.yaml")
})
// 获取v2ray配置文件
router.get('/v2ray', async ctx => {
  ctx.body = getFIle("v2ray.txt")
})
// 获取自建配置文件
router.get('/r', async ctx => {
  ctx.body = getFIle("me.txt")
})


/**
 * 根据文件名获取文件内容
 * @param {string} fileName - 要获取的文件名
 * @returns {string} - 文件内容，如果获取失败则返回错误信息
 */
function getFIle(fileName) {
  // 使用 path.resolve() 方法创建文件的绝对路径
  const File = path.resolve(__dirname, 'data', fileName);

  try {
    // 使用 fs.readFileSync() 方法同步读取文件内容，并指定编码为 utf-8
    const content = fs.readFileSync(File, 'utf-8');
    return content;
  } catch (e) {
    // 如果读取文件时出错，返回一段 HTML 代码表示服务暂停
    return '<h1 style="margin: 200px auto; width: 300px; text-align: center;">暂停服务</h1>';
  }
}
