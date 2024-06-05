var obj = {
  a: 1
}

function foo(x, y) {
  console.log(this.a, x + y);
}

// foo.call(obj)  // call()方法改变this指向 （call会把foo中的this掰弯到obj中）
foo.apply(obj, [3, 4])  // apply()方法改变this指向 （apply会把foo中的this掰弯到obj中）
//在改变this指向的同时，还可以传递参数，并调用函数
// call(obj, arg1, arg2, arg3, ...)
// call()方法传递参数时，参数以逗号分隔
// apply(obj, [arg1, arg2, arg3, ...])
// apply()方法传递参数时，参数以数组形式传递
const bar = foo.bind(obj, 1, 2)
bar(2)