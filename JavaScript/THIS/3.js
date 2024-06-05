// var a = 1

// console.log(this.a)
var obj = {
  a: 1,
  foo: function foo() {
    console.log(this.a)
  }
}
obj.foo()