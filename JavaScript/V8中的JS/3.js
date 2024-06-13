
let obj = {
  a: 1,
  b: { n: 2 },
  c: 'cc',
  d: true,
  e: undefined,
  f: null,
  g: function () { },
  h: Symbol(1)
}

obj.a = obj.b
obj.m = obj.a


let s = JSON.stringify(obj)
let obj2 = JSON.parse(s)
obj2.a = 3

console.log(obj)
console.log(obj2)
console.log(obj.b)
console.log(obj2.b)