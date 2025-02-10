const set = new Set()
set.add(1)
set.add(2)
set.delete(1)
console.log(set)
console.log(set.has(2))
console.log(set.size)

const arr=[1,2,2,5,5,6]
const set1=new Set(arr)
console.log(Array.from(set1))
console.log(...set1);