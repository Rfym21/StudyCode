var obj = {
  a: 1
}

function foo() {
  console.log(this.a);
}

// foo.call(obj)

Function.prototype.mycall = function () {
  // 拿到foo
  // 将foo引用到obj上
  // 让obj触发foo
  // 移除掉obj上的foo

  // arguments会自动获取所有的参数

  const context = arguments[0]
  const args = Array.from(arguments).slice(1)
  context.fn = this  //context上加了一个fn属性，值是this(foo方法)
  /*
  
  var obj = {
    a: 1
    fn : foo(this)
  }

  */
  const res = context.fn(...args)  //因为context调用了fn，所以fn里面的this就是context --> (obj)

  delete context.fn   //删除掉obj上的fn属性,因为fn是临时的，不需要保留
  return res //返回foo的执行结果
}

let res = foo.mycall(obj, 4, 5)
console.log(res);