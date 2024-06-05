// function foo() {
//   var a = 1
//   console.log(this.a);    // 函数在哪个词法作用域里生效
// }

// foo()  // 独立调用


// var a = 2
// function foo() {
//   var a = 1
//   function bar() {
//     console.log(this.a);
//   }
//   bar()   //在foo()的作用域里生效，词法作用域是foo()的词法作用域（全局词法作用域 ）
// }
// foo()

// 词法作用域有指向性
var a = 1
function foo() {
  var a = 2
  function bar() {
    var a = 3
    function baz() {
      console.log(this.a);
    }
    baz()   //baz()在bar()的作用域里生效，baz this --> bar this --> foo this --> window
  }
  bar()
}
foo()