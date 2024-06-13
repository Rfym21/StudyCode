
let obj = {
  a: 1,
  b: { n: 2 }
}


function deepCopy(obj) {
  let newObj = {}
  for (key in obj) {
    // if (typeof obj[key] === 'Object' && obj[key] != null) 
    if (obj[key] instanceof Object) {
      newObj[key] = deepCopy(obj[key])
    } else {
      newObj[key] = obj[key]
    }

  }
  return newObj
}

let obj2 = deepCopy(obj)
obj.b.n = 4
console.log(obj.b);
console.log(obj2.b);