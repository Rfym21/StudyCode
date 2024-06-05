const str = 'abcd'

// console.log(str.at(2))
// console.log(str[2])

//str.slice(1,1)


// let arr=str.split('b')
let arr = str.split('').splice(2, 2)
console.log(arr.join(''))
console.log(arr)
// console.log()

const str1 = 'abcd'

let index = str1.indexOf('f')  //找到了返回下标
let rIndex = str1.lastIndexOf('f') //找到了返回下标

console.log(index,rIndex)

let flag = str1.includes('n')   //找到了返回true 