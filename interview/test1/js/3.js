// 怎么在不使用 const 使得PI不可被改变
// 方法一：闭包(麻烦)
// var PI = 3.1415926

// 方法二：对象
var myObj = {

}
// 定义一个属性
Object.defineProperty(myObj, 'PI', {
  value: 3.1415926,
  writable: false,
  configurable: true
})
myObj.PI = 2
console.log(myObj.PI);