// var obj = {
//   a: 1,
//   foo: foo()
// }
// 对象没有作用域这个概念

function foo() {
  console.log(this.a)
}

var obj = {
  a: 1,
  foo: foo
}

var onj2 = {
  a: 2,
  obj: obj
}

onj2.obj.foo()