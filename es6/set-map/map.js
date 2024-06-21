const arr = [1, 2, 3]
const arr2 = arr.map((item) => {
  return item * 10
})

console.log(arr, arr2)

const b = [2]
const obj = {
  a: 1,
  [b]: 2
}

console.log(obj)

const m = new Map([['name', 'tom']])     // 弥补传统对象只能用字符串当作键的缺陷

const o = { p: 'Hello World' }
m.set(o, 'content')

console.log(m.get(o))
console.log(m.has(o))
console.log(m.delete(o))
console.log(m)