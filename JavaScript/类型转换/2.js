let s = 's'
let n = 1
let f = false
let u = undefined
let nu = null

console.log(Boolean(s))               // true
console.log(Boolean(n))               // true
console.log(Boolean(Infinity))        // true  Infinity无穷大 -Infinity负无穷大 NaN非数值
console.log(Boolean(u))               // false
console.log(Boolean(nu))              // false
console.log(Boolean())                // false
console.log(Number(s))                // NaN;
console.log(Number(''))               // 0
console.log(Number('0x1a1a1a'))       // 1701706
console.log(Number(null))             // 0
console.log(Number(undefined))        // NaN
console.log(Number())                 // NaN


function add(x, y) {
  return Number(x) + Number(y)
}

console.log(add('1', 2))              // 3  字符串转数字