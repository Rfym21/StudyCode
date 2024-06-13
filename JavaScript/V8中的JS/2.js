let a = 1
let b = a
a = 2
// console.log(b)      // 1

let obj = {
  age: 18
}

let obj2 = obj
obj.age = 20
console.log(obj2.age)    // 20