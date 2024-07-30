
const jwt = require('jsonwebtoken')
// 密钥
const key = `Rfym21_${new Date('2019-11-08').getTime()}_notebook`

function sign(option) {
  // 使用密钥对选项进行签名，生成 JSON Web Token（JWT）。
  return jwt.sign(option, `${key}`, {
    // 设置 JWT 的过期时间为 7 天。
    expiresIn: 60 * 60 * 24 * 7
  })
}


function verify() {
  return async (ctx, next) => {
    const jwtToken = ctx.req.headers.authorization
    console.log(jwtToken)
    try {
      if (jwtToken) {
        const decode = jwt.verify(jwtToken, key)
        // token合法
        if (decode.id) {
          console.log('用户名: =>', decode.username, ' | 昵称: =>', decode.nickname, ' | 访问时间: =>', new Date())
          ctx.userId = decode.id
          await next()
        }
      }
    } catch (err) {
      ctx.body = {
        code: 809,
        msg: 'token 失效,无权访问!',
        data: err
      }
    }
  }
}

module.exports = {
  sign,
  verify
}