let a = 1   // 基本数据类型 栈内存存储(调用栈)
let b = { num: 2 }    // 引用数据类型 堆内存存储

let str='hello'
let num=123
let flag=false
let un=undefined
let nu=null

let obj={}
let arr=[]
let fn=function(){}
let date=new Date()

console.log(typeof str);    // string
console.log(typeof num);    // number
console.log(typeof flag);   // boolean
console.log(typeof un);     // undefined
console.log(typeof nu);     // object
console.log(typeof obj);    // object
console.log(typeof arr);    // object
console.log(typeof fn);     // function
console.log(typeof date);   // object
// typeof 能判断除null外的所有基本数据类型，但是引用数据类型除了function都是object
// typeof 判断类型时会将数据转换为二进制，然后判断二进制的前三位，如果前三位为000则判断为Object，所以null的二进制是全0，所以判断为object