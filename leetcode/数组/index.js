// const arr = [1, 2, 3, 4]
// const arr = new Array(7).fill(0)   //fill(0) 将所有元素填充为0
// console.log(arr)

const arr = [1, 2, 3, 4, 0]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 2) {
    break
    //continue
    //return
  }
  console.log(arr[i]);
}

arr.forEach(function (item, index, arr) {
  if (item > 2) {
    return
  }
  //          元素  下标   数组
  console.log(item, index, arr)
})

let newArr = arr.map(function (item, index, arr) { return item * 2 })    //原数组不受影响
console.log(newArr, arr);


const arr2 = [
  [1, 2, 3, 4],
  [10, 20, 30, 40],
  [11, 22, 33, 44],
  [100, 200, 300, 400]
]

// 0(n^2) 时间复杂度，主要是解决时间复杂度，空间复杂度无所谓
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    arr2[i][j] += ''
  }
}
console.log(arr2);