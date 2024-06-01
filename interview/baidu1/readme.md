## 手风琴效果

- 布局怎么做？
    - 盒子用块级元素，从上到下，从左到右，文档流

- stylus 
    - css超集，支持预编译
    - 省事{}：；可省略，取而代之是tab缩进
    - 选择器也可以缩进
        自动加上限定前缀
        即缩进，又表示是同一级别 &:nth-child
    - 模块性 stylus给css引入了编程特性
    stylus common.styl -o common.css 编译文o:output
    stylus -w common.styl -o common.css 监听并编译
- ul 使用了弹性布局，开辟一个全新的格式化上下文
    - ul父元素和子元素们之间的一种布局（手机width不一）
    - 子父元素默认在一行，不会换行不是inline