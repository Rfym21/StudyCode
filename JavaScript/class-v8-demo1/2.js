//创建对象字面量
var obj = {}

//new String
var str = 'hello'
// 对象构造函数
var obj2 = new Object()

function Car(color) {
  var obj = {
    name: 'su7',
    heigth: 1400,
    lang: 5000,
    weight: 1000
  }

  return obj
}
let car1 = new Car('red')
car1.name = '法'
let car2 = new Car('green')
// 如果该对象需要用new创建 首字母需要大写
console.log(car1);
console.log(car1);