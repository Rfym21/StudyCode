# js 函数的高级技巧
    1. 闭包(closure)
         函数嵌套函数 形成闭包

    2. arguments
         - 函数运行时参数管理对象，类数组对象
         - Object.prototype.toString.call(arguments) == '[Object Arguments]'
         - for .length能力，但是 forEach，join，reduce，方法
         - es6 reduce方法，数组相加太好了
         - add arguments 相加？
         - 类数组转为真数组 Array.from(arr)
         - ...展开运算符/rest运算符
         - node 4.js 1 2 3 4
         - 箭头函数没有arguments，使用外层的
         - es6 rest运算符的存在，使得arguments不必要了
         - 箭头函数初衷是为了方便
         - 参考：MDN