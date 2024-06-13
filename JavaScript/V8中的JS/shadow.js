let obj = {
  a: 1,
  b: [1, 2]
}

let obj2 = Object.create(obj)           // 创建一个新对象，新对象的原型指向obj
obj2.a = 2
obj.b.push(3)
console.log(obj.b)
console.log(obj2.b)

let obj3 = Object.assign({}, obj)       // 创建一个新对象，将obj的属性复制到新对象中

let arr = [1, 2, 3, { a: 1 }]
let arr2 = [].concat(arr)               // 创建一个新数组，将arr的元素和空数组到新数组中
let arr3 = [...arr]
let arr4 = arr.slice(0)
let arr5 =arr.toReverse().reverse()
arr[3].a = 2

console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
