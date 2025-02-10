let str = 'abc'
let num = 123
let bool = true
let nul = null
let und = undefined

let bigInt = 123n   // BigInt大整型
let sym1 = Symbol('1')  // Symbol唯一值
let sym2 = Symbol('1')

console.log(sym1 == sym2)

var foo = (obj) => {
  const fn = Symbol('fn')
  obj[fn] = this
  obj[fn]()
  delete obj[fn]
}


foo()