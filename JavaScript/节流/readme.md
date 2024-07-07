# 节流

- 在一定时间内执行一次
    闭包
    - last deferTimer
    - 第一次直接执行 last 有了值
    - if (last && now < last + delay)  不可以执行的时间内频繁的触发
    - last 更新 else 执行
    - 如果用户不触发keyup了,如何使得最后一次keyup被执行
        killTimeout + setTimeout last更新


- 性能优化
 - 闭包
    定时器

## 浏览器底层原理
    - 浏览器内核
        css 内核不同,兼容性 微软
        -webkit-tap-highlight-color:transparent
        -webkit-scroll-behavior:smooth
        display:-webkit-flex
    - 每家浏览器厂商内核不一样
        webkit(内核) safari(浏览器) chrome(浏览器) 移动端统一,兼容性好
        chrome已经升级到 blink 内核,webkit 升级版
        360浏览器   webkit套壳
        trident    IE
        Gecko      firefox
    - 分为两部分
        1. 渲染引擎 render engine html + css
        2. JS 引擎  V8
        前端两个都要
        后端只要JS引擎
    - 渲染引擎
        1. 渲染引擎   图片 由渲染引擎画出来的,电脑的刷帧经历过程
        - html 解析器  html -> DOM树
        - css解析 -> CSS M树
        - 渲染树 DOM + CSS OM  -> 渲染树
        - 图层布局计算模块 -> Layout 树 -> 盒子模型
        - 视图绘制模块 -> 页面图

    - css 选择器的性能
        * 性能不好 会匹配全部元素
        * {
            margin:0;
            padding:0;
        }

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre {
          margin: 0;
          padding: 0;
        }
        
    - JS 引擎
        css会在渲染引擎工作的时候阻塞
        html 解析

