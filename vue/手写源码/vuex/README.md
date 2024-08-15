# vuex源码

    - es6 class
        1. 组织 install dispatch commit 等方法 面向对象思想
        2. this._state 私有变量封装 使用响应式数据
        3. get / set 属性 简化了属性的操作,但这里不提供 set
        4. 私有属性不可被直接访问 => mutations actions 都不可被直接访问,使用私有属性进行保存
        5. getters public 属性
            Object.keys() 拿到 option.getters 所有的key => 遍历 => 拿到每个 fn => 通过 computed 返回一个方法 将 this.state 作为参数传入
