// 类似与javaSE中的构造函数
function Duck(nickname) {
  // console.log(this)
  this.nickname = nickname
}

// 向Duck中添加方法Duck
Duck.prototype.singsing = function () {
  console.log('嘎嘎嘎')
}
Duck.prototype.work = function () {
  console.log('gagaggagaagaagag')
}

// es6 reset(...)--->...args运算符
// es5 arguments
function myNew(Fun, ...args) {//Fun = Duck || args = ['铠甲勇士', '光明市', 'R']
  // console.log(args);
  let obj = {};//对象，内存在堆内存中，地址引用,创建空对象
  // let a = 1 //简单数据类型，内存在栈内存
  // let b = a//值的拷贝
  Fun.apply(obj, args)//将this指向obj,Fun为obj打工
  obj.__proto__ = Fun.prototype//Fun是obj原obj型对象
  return obj;
}
// new Duck() 默认return this引用的地址
//duck做obj的引用
let duck = myNew(Duck, '铠甲勇士', '光明市', 'R')

console.log(duck.nickname)
duck.singsing()
duck.work()