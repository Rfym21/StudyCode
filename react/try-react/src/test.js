// console.log("Hello World!")
// es6 module, add.js 返回 add 方法
// add.js 会返回多个方法，这里只引入 add 方法
// Add,add 都是add.js 在此文件的代表
import Add, { add } from './add.js'

console.log(add(1, 1))
console.log(Add)