# event loop

- JavaScript 是单线程语言
- JS代码的执行顺序和编写顺序不一样
- event loop 是JS的执行机制
    - script 脚本是第一个宏任务
    - 让同步任务快速执行掉
    - 异步任务会先放到event loop登记事件
        click ()=>{}
        setTimeout()
    - 系统进入idle状态
    - 检测event table是否有任务要执行
    - 任务放入event queue(队列)
    - 执行
    - 进入 idle 状态