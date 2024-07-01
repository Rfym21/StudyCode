/*
* CookieManger cookie管理类
*
*/
// 登录 
// cookie不易于操作

class CookieManger {
  constructor() {

  }

  getCookie() {

  }

  // es6 函数参数默认值
  setCookie(name, value, expires = 7) {
    let expiresDate = ''
    if (expires) {
      const date = new Date()  // 获取当前时间
      // console.log(date.getTime())
      date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000)) // 设置过期时间
      // console.log(date.getTime())
      expiresDate = `;expires=${date.toUTCString()}`
      // console.log(expiresDate)
      document.cookie = `${name}=${value}${expiresDate};path=/`
    }
  }

  deleteCookie(name) {
    this.setCookie(name, '', -1)
  }

}