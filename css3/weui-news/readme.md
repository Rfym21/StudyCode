# 基于weui 快速搭建新闻列表页

- 组件
    - tabbar 
    - searchbar

- tab 切换
    - 事件监听在dom元素上，而不是集合上
    - 循环事件监听中，拿到下标
    - for 同步
    - event 异步
    - 添加作用域
        - es5 立即执行闭包i
        - es6 let 块级作用域 + for{}
    - this 事件元素
    - classlist add contains remove 等方法
    - 点击当前已选中 return

- weui 使命：盲人也要能使用 无障碍浏览(读屏器) label标签可以被读屏器读出
    - input被 visibility:hidden
    - weui-search-bar_fcusing:display:none