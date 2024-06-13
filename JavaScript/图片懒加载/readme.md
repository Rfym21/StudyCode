# 图片懒加载 LazyLoad
 ## 浏览器会做什么
    - 渲染页面
    - 下载html标签   =>  在内存中建立DOM树(document.querySelector())
    - 下载CSS样式表  =>  渲染树
    - DOM树 + CSS渲染树 = 页面
    - 浏览器是多线程的
    - img link script ... 浏览器会启动新的下载线程
    - 多线程堵塞：有必要同时并发那么多的图片吗？

 ## 性能优化
    - 首屏的图片(视窗)
    - 滚动懒加载
    - 前端的天职是尽快显示页面

 ## 步骤
    - 手动控制图片加载  (img src(标签属性) 默认立马下载)
    - data-src(数据属性)
        dataset 一个元素可以有多个数据属性

## 收获
    - 前端性能主题之图片懒加载
    - 浏览器的底层原理 -> 下载线程
        并发数不能太多  tcp/ip通道有限
    - clientHeight(一屏高度)    scrollTop(滚动高度)   offsetTop(标签距离浏览器高度)
    - dataset
    - 业务逻辑优化
    imgs.length removeEventListener
