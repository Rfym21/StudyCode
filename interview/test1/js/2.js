// 使用严格模式
// "use static"
(function () {
  // 有什么方式能改变a的作用域,转为全局定义域？
  // 方法：去除var  a=1 (当定义变量时没有使用let var const时该变量的定义域为全局)
  a = 1;
})
console.log(a);