function shallowCopy(obj) {
  let newObj = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      newObj[key] = obj[key]
  }
  return newObj
}

obj.prototype.c = 3
let obj = {
  a: 1,
  b: { n: 2 }
}


let obj2 = shallowCopy(obj)
console.log(obj)
console.log(obj2)