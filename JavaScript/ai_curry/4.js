// 箭头函数本身没有this，arguments绑定，这些都是继承自外围最近一层非箭头函数的对应值
const add = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}

console.log(add(1, 2, 3, 4, 5))