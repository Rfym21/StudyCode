# V8的储存
1. 原始类型的值直接储存在调用栈中
2. 复杂数据类型存在堆结构中，并将堆的引用地址存在调用栈中

- 调用栈空间比较小，引用类型的数据当量又可能非常大，所以引用类型如果放在调
用栈中很容易爆栈

# typeof()
1. 可以判断除null之外的原始类型
2. 无法判断除function之外的引l用类型

- typeof的判断原理是：将值转换为二进制后看其前三位是不是0，除了函数的引用类型
的二进制前三位都是0，null的二进制全是0

# instanceof
1. 只能判断引用类型
- 是通过原型链的查找来判断

# Object.prototype.toString()
- Object.prototype.toString.call(n)

- toString
1. 对象的toString()   -->   
2. 数组的toString()   -->   将数组中的元素用逗号的方式拼接成字符串
2. 其他的toString()   -->   

- Object.prototype.toString()
1. 如果toString接受的值是undefined，则返回"[object Undefined]"
2. 如果toString接受的值是null，则返回"[object Null]"
3. 调用ToObject(n) 将n转为对象，此时对象内部一定拥有一个属性[[class]]，而该属性[[class]]的值就是 n 的类型
4. 设 class 是 [[class]] 的值
5. return 由 "[object 和 class]" 拼接的字符串

# Array.isArray
