## 大厂面试题

- js
  - js分水岭 2015年 es6
  - var基本不用了，无法定义常量，如果要定义常量，变量名要大写(编程习惯约束)
  - js早期支持不用var直接定义变量，直接挂载在全局，是不宜于编程的，应该使用"use static"严格模式
  - 实际上是变量提升(hoisting)
  - const 声明变量不可改变，但声明对象的属性可以改变？
  - Object.defineProperty(obj,'PI'{
    value:3.1415926,
    writable:false,
    })
    let obj = {}
    常量作为对象的属性来使用，Object.defineProperty 来定义不可变
  - MDN文档
      使用Object.freeze()实现起来更轻松： Object.freeze(obj):静态方法可以使一个对象被冻结。冻结对象可以防止扩展，并使现有的属性不可写入和不可配置。被冻结的对象不能再被更改：不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性、可写性或值，对象的原型也不能被重新指定。freeze() 返回与传入的对象相同的对象。