const userRouter = require('./user.js')
const noteRouter = require('./note.js')
const detailRouter = require('./detail.js')

function useRouter(app) {
  app.use(userRouter.routes(), userRouter.allowedMethods())
  app.use(noteRouter.routes(), noteRouter.allowedMethods())
  app.use(detailRouter.routes(), detailRouter.allowedMethods())
}

module.exports = useRouter