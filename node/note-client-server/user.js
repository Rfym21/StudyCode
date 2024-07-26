const router = require('@koa/router')()
const { userLogin } = require('./controllers/index.js')

router.prefix('/user')
router.post('/login', async ctx => {
  // 从请求体中解析从客户端传递过来的数据
  const { username, password } = ctx.request.body
  // 调用登录方法
  try {
    const result = await userLogin(username, password)

    console.log(result)

    if (result.length) {
      const data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username
      }
      ctx.body = {
        code: 800,
        msg: "登录成功",
        data
      }
    } else {
      ctx.body = {
        code: 8004,
        msg: "登录失败: 用户名或密码错误",
        data: 'error'
      }
    }
  } catch (err) {
    ctx.body = {
      code: 8005,
      msg: "登录失败: 服务器异常",
      data: err
    }
  }

})


module.exports = router