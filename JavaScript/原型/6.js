let a = {
  num: 1
}

let b = Object.create(a)          // 创建一个对象继承a对象，即便a为空对象，b也有原型 --> Object
// let b = Object.create(null)    // 创建一个没有原型的对象
// let b = Object.create(Object)  // 创建一个对象继承Object
console.log(b.num);


Foo.prototype.a = 1
function Foo() {

}


Foo.b = 2
let f = new Foo()
console.log(f.b);