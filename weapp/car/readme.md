# 小程序
    - 小 相对于Android/IOS Native程序
    - 不需要安装，扫码即可以使用
    - O2O：online to offline（线上到线下）

## 技术价格
    - pages概念
        一个个的页面
        - wxml 页面的结构 模板
            {{motto}}
            组件，swiper
        - wxss 样式
        - js data 数据

## 技术细节
    - wxss 细腻，代码复用
          拆分：由多个基础类组成
          section: 100vh
          hero.white 白色主题
          - 数据绑定
          slides数组 --> wx:for={{slides}}  wx:key="id"(唯一值) {{item.image}}
          - 每个页面的js，都有一个Page函数，{}代表这个页面的配置
          Page({
            数据项
            data:{
              slides:....
            },
            method.....
          })
    -VUE MVVM的世界，不再需要DOM编程，专注于业务
    - bindtop
    - 伪元素
        - 没有标签，但是可以显示在DOM树中
        - css选择器 ::afterm ::before
    - content属性一定要给
    - border
## 小程序+AI
