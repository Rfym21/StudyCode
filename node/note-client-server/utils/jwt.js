const jwt = require('jsonwebtoken')

function sign(option) {
  // 加密
  const key = `Rfym21_${new Date('2019-11-08').getTime()}_notebook`

  // 使用密钥对选项进行签名，生成 JSON Web Token（JWT）。
  return jwt.sign(option, `${key}`, {
    // 设置 JWT 的过期时间为 7 天。
    expiresIn: 60 * 60 * 24 * 7
  })


}

module.exports = {
  sign
}