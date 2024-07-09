# hash router(哈希路由)

- http协议是无状态的,服务器端不能主动向浏览器推送内容
- 请求新的资源 / -> /page2 ,重新发送请求
- 服务器返回所有的html
- 单页应用(SPA -> Signle Page Application)带来的全新用户体验
    优点: 加载快(页面加载快是等一要义),不刷新页面
    - url 改变 -> 浏览器地址栏改变 但是不重新刷新整个页面  锚链接(#/page2)
    - 锚链接
    - hashChange事件 ajax请求 + DOM编程 -> router-view -> views/Component
- 即不能跳页,又要动态更新界面 SPA => 手机APP
- handler.call(this)
    可以在处理函数中拿到相应的路由对象