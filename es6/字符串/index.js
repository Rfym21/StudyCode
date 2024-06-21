let a = 'Tom'
let b = 'hello' + 'I am ' + a
let c = `hello I am ${a}`
console.log(b)
console.log(c)

console.log(c.includes('Tom'))  // 检查是否包含
console.log(c.startsWith('hello'))  // 检查是否以某个字符串开头
console.log(c.endsWith('Tom'))  // 检查是否以某个字符串结尾


let a1 = 123
console.log(Number.isFinite(a1))  // 检查是否是有限数字