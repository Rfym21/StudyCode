# 购物车

    - 库存维护(inventory)

## 数据流管理

    - api => 商品数据接口
    - 商品数据 => getProducts
    - 购物车数据

## 面试表达

    - vuex 是数据流管理的设计模式
    - vuex createStore() 返回一个单一状态树,状态就是树上的节点,实现数据共享
    - 大型应用可以安状态的模块化管理,使用 modules
    - 小型应用使用全局状态
    - 每个模块的数据流程由 state => mutation => action => getter => view
    - vuex dispatch action commit mutation = > vuex 设计模式
    - mutation 让数据管理更严格 App = 用户界面组件 + 数据管理
    - pinia 在vue3 推出 hooks,更方便,defineStore() 函数式编程自带模块化
    - hooks函数 => 封装响应式状态和业务的函数
    - action 和 mutation 的区别 => 
        1. action 异步操作,mutation 同步操作
        2. mutation 明确且清晰的状态修改规定
        3. dispatch action
        4. commit mutation

    - 简历技能点 => vuex & pinia
      1. vuex 比 pinia 复杂
      2. vuex createStore() 返回一个单一状态树,状态就是树上的节点
      3. vuex 提供了modules模块化 状态树分支模块化管理,namespaced
      4. pinia defineStore() 模块化由 hooks 实现,简单好理解
      5. vuex 有 mutation 概念,要修改数据必须 commit mutation 数据管理更严格
      6. 在数据共享中,读操作基本不会出问题,写操作可能会出现问题,vuex中的写操作由mutation管理,pinia中的写操作由hooks管理
