var arr = [1, [2, [3, [4, [5, [6]]]]]]
function flatten(arr) {
  // map() 是 JavaScript 中的一个数组方法，它会对数组的每个元素都调用指定的函数，并返回一个新数组，新数组包含每次函数调用的结果。
  return arr.toString().split(',').map(function (item) {
    return +item
  })
}
console.log(flatten(arr))