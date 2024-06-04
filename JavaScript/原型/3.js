function Person() {
  this.name = 'R'
}

Person.prototype.like = '听歌'

let p = new Person()
p.like = '看电视 '
//delete p.like
// 实例对象只能访问原型上的属性，不能修改和删除

// console.log(p);

function Car() {
  this.name = 'su7'
}

let car = new Car()
console.log(car.constructor)    // 实例对象通过constructor来记录'我'是由谁创建的