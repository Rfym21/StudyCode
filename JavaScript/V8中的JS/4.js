
let obj = {
  a: 1,
  b: { n: 2 }
}

const newObj = structuredClone(obj)

console.log(newObj)