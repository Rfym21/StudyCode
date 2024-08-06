// 展平:递归
const arr = [1, [2, [3, 4]]];

function flatten(arr) {
  let result = []
  // len缓存了值 arr是对象 .length耗时
  for (let i = 0, len = arr.length; i < len; i++) {
    // 数组，递归
    if (Array.isArray(arr[i])) {
      // concat数组拼接
      result = result.concat(flatten(arr[i]))
    }
    // 否则加入数组
    else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flatten(arr));