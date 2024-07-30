const router = require('@koa/router')()
const jwt = require('../utils/jwt.js')
const { formatDate } = require('../utils/formateTime.js')
const { findNoteListByType, notePublish } = require('../controllers/index.js')

router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
  const { note_type } = ctx.request.query
  try {
    const data = await findNoteListByType(note_type, ctx.userId)
    if (data.length) {
      ctx.body = {
        code: 800,
        msg: "笔记列表获取成功！",
        data
      }
    } else {
      ctx.body = {
        code: 804,
        msg: "获取失败: 该分类没有笔记!",
        data
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

router.post('/publish', jwt.verify(), async (ctx) => {
  const { title, note_type, head_img, note_content } = ctx.request.body
  // console.log(ctx.request.body)
  const time = formatDate(new Date())
  try { 
    const data = await notePublish({ title, note_type, head_img, note_content, userId: ctx.userId, nickname: ctx.nickname, c_time: time, m_time: time }) 
    console.log('data', data)
  } catch (err) { 
    console.log(err); 
  }
  
})




module.exports = router