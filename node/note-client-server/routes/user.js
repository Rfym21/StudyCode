const router = require('@koa/router')()
const { userLogin, userFind, userRegister } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')

router.prefix('/user')
// 登录
router.post('/login', async ctx => {
  // 从请求体中解析从客户端传递过来的数据
  const { username, password } = ctx.request.body
  // 调用登录方法
  try {
    const result = await userLogin(username, password)

    console.log("用户手动登录成功: =>", result[0])

    if (result.length) {
      const data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username
      }

      const token = jwt.sign(data)

      ctx.body = {
        code: 800,
        token: token,
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

// 注册
router.post('/register', async ctx => {
  // 从请求体中解析从客户端传递过来的数据
  const { username, password, nickname } = ctx.request.body
  // 判断是否有缺少必要参数
  if (!username || !password || !nickname) {
    ctx.body = {
      code: 801,
      msg: "注册失败: 缺少必要参数",
      data: 'error'
    }
    return
  }
  // 查找用户名是否已经被注册
  const findResult = await userFind(username)
  if (findResult.length) {
    ctx.body = {
      code: 803,
      msg: "注册失败: 用户名已被注册",
      data: 'error'
    }
    return
  }
  // 用户名没有被注册，可以注册
  try {
    const res = await userRegister({ username, password, nickname })
    if (res.affectedRows) {
      ctx.body = {
        code: 800,
        msg: "注册成功",
        data: 'success'
      }
    } else {
      ctx.body = {
        code: 802,
        msg: "注册失败: 服务器异常",
        data: 'error'
      }
    }
    console.log(res)
    return
  } catch (err) {
    ctx.body = {
      code: 805,
      msg: "注册失败: 服务器异常",
      data: err
    }
  }

})

module.exports = router