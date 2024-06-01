// 单例模式,有的类只实例化一次,性能更好,更方便管理
var Singleton = function (name) {
  this.name = name
  // this.instance = null 如果放在这里那么每个创建的实例得到的结果不同
}


Singleton.prototype.getName = function () {
  console.log(this.name)
}

// getInstance直接挂载在Singleton上,相当Java中的静态方法
Singleton.getInstance = function (name) {
  if (!this.instance) {
    // 静态的属性,静态的属性,所有实例共享
    this.instance = new Singleton(name)
  }
  return this.instance
}

let obj1 = Singleton.getInstance('铠甲勇士')
let obj2 = Singleton.getInstance('帝皇铠甲')
console.log(obj1 == obj2, obj1.name, obj2.name)