# TodoList

- 拆分组件能力
    - 编程思维
    -组件就是抗事，组件化思想 页面由组件组成，而不是html
    - react/vue 组件powerful
        props state 生命周期 ...

    - css 单独编写 组件写入
    - 数据管理
      - 交给父组件数 据的管理，子组件负责渲染

   - 数据状态的一致性
      - 表单组件比较难打理
      - 表单组件也叫做受控组件  表单的值（input）收到state约束的
      - inputText state
      - 数据状态时要——对应的
      - 数据是什么样的——状态一定也是什么样的
      - input 界面状态与input绑定
      - value={inputText}数据绑定
      - onChange setState inputText
      vue/react 区别的本质


      - props 传递下去
        - todos 
          - TodosList 
    - TodoForm
    
    - 循环列表
    - vue v-for
    - react {js的运行区域，返回值占位}
      {
        todos.map((todo, index)=>{

        })
      }

# 性能优化
  引擎包括 渲染引擎 和 JS 引擎
    - 过路费交太多（时间花费，算法太多 不断在两个引擎之前切换）
      渲染引擎 《-高速-》 JS引擎
      把10000次字符串先拼接
      .innerHTML=整体
    - 缓存dom节点

- 重绘 replain
  几何尺寸没有改变，但是样式变了
- 重排 reflow 回流
    DOM修改，引发了DOM几何尺寸的改变，（宽高，隐藏元素）
    自己之外，其他元素的集合属性和位置也会受影响
重排比重绘更耗费性能，所以重绘比重排更快

  render tree -> 变化 -> 回流 -> 重绘

- 页面绘制
  HTML/CSS/JS资源
  三个都会阻塞 -> 浏览器内核 webkit -> 图像（静态页面）
  parseHTML -> style 计算样式 ->Layout(计算图层布局) -> Paint 绘制图层 -> Composite整合图层成页面

  Layout tree

- 渲染引擎
    - 不用等JS 最后
    - HTML解析器 DOM parser
    - css 解析器 css文档，生成样式规则 css om树
    - DOM树+css渲染树 -> 渲染树
    - 图层布局计算模块 输入时render tree 输出是 layout tree（精确的位置大小）
    - 视图绘制模块（像素级绘制）CPU -> GPU
    - 

- js引擎 霸道的
    重绘重排

 css selector css选择器都是从右到左的
#myList li{

}
#myList .list_item{

}
规则：
- 避免使用通配符，*  
- 关注可以通过继承实现属性
- 少用标签选择器
- 不要画蛇添足
.myList#title
#title

- 减少嵌套
    开销过大

- todosList 存储
    - 采用了单例 Storage模块封装
    - utils/工具类
    - addTodo setItem
        aditTodo setItem
        deleteTodo setTodo
