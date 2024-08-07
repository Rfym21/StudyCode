# React 组件

    - 返回JSX的函数就是组件
    - 函数就是对象
    - React(函数式组件) / vue(函数式编程)

## MVVM(函数) + 组件化思想 + 函数式编程

    - vue => API 简洁好上手
    - react => 
        1. 纯JS风格 函数参数解构 props
        2. react 不使用v-model双向绑定 (性能不好)
        3. react 单项绑定

## react <></>

    - 可以做容器但是没有多增加节点
    - 文档碎片组件 Fragment

## Hook技术

    - vue借鉴了 React Hooks思想
    - useRouter vue-router,React 框架本身内置了hook函数
    - React =>
        1. useState  -> 引入一个响应式状态 (返回一个数组[状态,更新状态的函数])
        2. useRef -> 类似vue中的ref动态绑定的节点 (null => current)
        3. useEffect -> 生命周期钩子函数

## React数据通信

    - 状态管理 pinia redux
    - 父子组件通信

## html功能

    1. 拖拽功能
    2. form 表单新特性
    3. 语义化标签
    4. canvas audio
    5. 本地存储 localStorage sessionsStorage
    6. web socket
    6. html5 file
    7. web worker 多线程
    8. LBS附近的位置
    9. webGL three.js 3D效果

- Web Worker
    1. js因为复杂任务启动worker线程,性能优化,压缩,加密,AI
    2. worker不做DOM编程
    3. 实例化 new Worker(new URL('.worker.js'),{type:'module'})
    4. 消息机制完成,主线程和worker之间的通信

- 介绍项目小作文
  - 本项目基于React + Transformer.js => 实现了AI翻译功能
  - 端模型可以在多种设备上进行运行
  - 使用了web worker进行性能优化,带来了良好的用户体验 =>
      1. AI功能耗时长,耗能大选择 -> web worker多线程方案
      2. 主线程和worker线程提供消息机制通信
  - 定制了两个组件 =>
      1. LanguageSelector组件
      2. Progress组件
  - hook函数 =>
      1. useState
      2. useEffect
      3. useRef
