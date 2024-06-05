function Person() {
  let obj = {
    name: '爱因斯坦'
  }
  Person.call(obj)
  obj.__proto__ = Person.prototype
  return obj
  //return的是一个对象，那么这个对象会取代整个new出来的结果
  //反之如果return的是一个值，那么这个值会被忽略
}

let p = new Person()
console.log(p);
