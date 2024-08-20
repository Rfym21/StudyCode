# 前端存储考点

## 存在浏览器里
- localStorage
- cookie
    - 存储在浏览器的一段字符串
        key=value;expires=;path=/;
        domain会自动设置

    - cookie 属于相应的domain
        document.cookie 种下一个cookie domain
        name value domain path expires...
    - CookMange 类
        - setCookie
        - getCookie
        - deleteCookie
- 日期对象
    - [object Date]
    - 日期操作
        new Date()
    - getTime() 格林尼治毫秒数
    - setTime(getTime + 1000*3600*24)
    - cookie expires
        - 生命期(用户身份),到期后登出
        - 退出功能 deleteCookie(name)  expires = -1
    - path=/
- cookie 是什么
    - 某域名,存储在浏览器空间的一段字符,格式为 key=value;expires=;
    - 一直存在,除非过期
- cookie 和 localStorage 区别
    - cookie 是字符串 localStorage 是对象(setItem getItem)
    - cookie 空间小 用于存储关键数据 4kb为单位 http 1.0
    - 因为每次http都会带上,所以要克制,不然会影响http性能
    - 每次http请求都会带上,弥补http无状态
    - localStorage 空间大一些 5MB
    - 不同的应用场景
        - cookie 存储用户身份等
        - localStorage 存储用户数据 离线访问