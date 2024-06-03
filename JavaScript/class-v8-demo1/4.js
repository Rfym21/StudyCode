// var num = 123
// num.a = 'a'
// // 原始值不能拥有属性和方法的，属性和方法只有对象才能拥有

// console.log(num.a);

// Number()   Boolean()   String()

var num = new Number(123);   //数字对象
// console.log(num * 2)
num.a = 'aaa';
console.log(num.a);

var str = 'abcd'    //new String('abcd')
console.log(str.length)   //

var num1 = 4    // 执行：new Number(4)
num.len = 3     // new Number(4).len = 3
// 原始值不能有属性和方法,立马执行：delete num.len
console.log(num.len)
