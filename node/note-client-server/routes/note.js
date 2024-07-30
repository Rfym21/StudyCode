const router = require('@koa/router')()
const jwt = require('../utils/jwt.js')
const { findNoteListByType } = require('../controllers/index.js')

router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
  const { note_type } = ctx.request.query
  const res = await findNoteListByType(note_type, ctx.userId)
  ctx.body = {
    code: 800,
    data: res
  }
})

module.exports = router