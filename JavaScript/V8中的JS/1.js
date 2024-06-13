// showMyName()    // 预编译阶段会将函数声明提升到作用域的顶部
// console.log(myName);    // var声明的变量会被提升，但是赋值不会被提升

// var myName = 'bob'
// function showMyName() {
//   console.log('hello world');
// }


var myName = 'bob'    // 全局作用域
function showMyName() {
  var myName = 'jack'

  function foo() {    // showMyName作用域
    console.log(myName);    // foo作用域中没有myName变量，会向上一级作用域查找
  }
  foo()
}

showMyName()


