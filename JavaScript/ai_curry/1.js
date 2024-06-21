function add(x, y) {
  // arguments 是一个类(似)数组对象，包含传入函数的参数 
  // 对象？只要不是简单数据类型均为对象(Object)

  // console.log(Object.prototype.toString.call(arguments))

  if (arguments.length < 2) {
    console.log('参数数量不对')
    return
  }
  // 创建数组方法的一种 Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
  const items = Array.from(arguments)
  // console.log(Object.prototype.toString.call(items))

  return items.reduce((sum, item) => sum + item, 0)
}

console.log(add(1, 2))