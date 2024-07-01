# B站就地编辑
## 用户体验
    - 平时是文本状态 => 显示签名
    - mouseover 进入编辑状态,显示编辑框
    - 退出编辑状态,自动保存,显示文本状态

## 考点
    - 有开发经验,就地编辑(js高级用户体验)
    - 用类的概念来封装,复用,考虑队友
    - EditInPlace 类里的事件监听,内部this丢失 self/that = this 暂存
    - 正好利用箭头函数没有this,直接用外层this来实现对象方法调用
    - html localStorage 本地存储 getItem setItem 方法
    - 原型式面向对象虽好,其他语言开发者看不懂
    - es6提供了 class 语法糖 大型企业级开发语言
    - es5不支持 class 关键词
- 什么是网站?
    - 一切皆资源 restful 的概念
    - db.json users
    - 定义了资源的访问方式
        - http//:localhost:3000/users 用户的集合资源
        - http//:localhost:3000/users/1 用户的单个资源
- event loop 事件循环
    - JS是单线程的(简单),又负责用户体验,因此不能发生阻塞
    - 将同步代码(ms级别可以快速一行行按顺序运行的)  快速执行
    - 如果碰到 定时器 ajax 事件监听等异步任务,先放入event loop(事件池) 登记 click 放进池子里的是事件的处理函数
        - fetch then 函数
    - 继续执行同步任务
    - 程序进入idle状态
    - 一直检测event有没有任务可以执行了
        -  loop 轮询