const router = require('@koa/router')()
const jwt = require('../utils/jwt.js')
const { findNoteById } = require('../controllers/index.js')

router.get('/findNoteById', jwt.verify(), async (ctx) => {
  const { id } = ctx.request.query
  try {
    const data = await findNoteById(id)
    if (data.length) {
      ctx.body = {
        code: 800,
        msg: "笔记获取成功！",
        data:data[0]
      }
    } else {
      ctx.body = {
        code: 804,
        msg: "获取失败: 该笔记不存在!",
        data: data
      }
    }
  } catch (err) {
    ctx.body = {
      code: 805,
      msg: "获取失败: 服务器异常!",
      data: err
    }
  }
})

module.exports = router