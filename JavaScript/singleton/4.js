// 函数表达式
// js 变量类型由值决定
var Singleton = function (name) {
  this.name = name
}

var obj1 = new Singleton('Chiikawa')
var obj2 = new Singleton('Chiikawa')
// obj1=obj2
console.log(obj1 === obj2)//内存地址不同-->值不同

var obj = { 'a': 1 }
var obj3 = { 'a': 1 }
var obj4 = obj
console.log(obj == obj3)
console.log(obj4 == obj)