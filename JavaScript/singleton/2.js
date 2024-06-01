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

//函数this指向是由运行方式来决定的
//对象的方法调用 this是的动态的
//obj2.getName();
const fn = obj2.getName
// obj2.getName中getName被obj2调用,this指向obj2
// console.log(fn())
// 最普通的函数来运行，this指向全局
// 如果启用了严格模式，普通函数 this -> undefined，是js的一个错误
fn.apply(obj)//.apply这个函数会被执行,将this指向obj
// apply可以手动指定this指定this为第一个参数,余下要传给函数运行时的形参