"use static"
let name = '炎龙铠甲'
let obj = {
  name: '铠甲勇士'
}
let obj2 = {
  name: '帝皇铠甲',
  getName: function () {
    console.log('.......................')
    console.log(this.name)
  }
}

let obj3 = {}
obj3.__proto__ = obj2//以obj2为原型
console.log(obj3.name)
obj3.__proto__ = obj
console.log(obj3.name)