
let nums = [8, 1, 3, -1, -3, 5, 3, 6, 7], k = 3

// var maxSlidingWindow = function (nums, k) {
//   const res = []
//   for (let i = 0; i <= nums.length - k; i++) {
//     const arr = nums.slice(i, i + k)
//     res.push(MaXValue(arr))
//   }
//   return res
// }

// function MaXValue(arr) {
//   let max = -Infinity
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }



// var maxSlidingWindow = function (nums, k) {
//   let i = 0, j = k - 1
//   const res = []
//   while (j < nums.length) {
//     res.push(MaXValue(nums, i, j))
//     i++
//     j++
//   }
//   return res
// }

// function MaXValue(arr, l, r) {
//   let max = -Infinity
//   for (let i = l; i <= r; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }



var maxSlidingWindow = function (nums, k) {
  const res = []
  const queue = []    // 递减队列
  let len = nums.length
  for (let i = 0; i < len; i++) {

    // 存入的值是不是维持递减队列
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()

    }

    queue.push(i)
    // 右进左出
    while (queue.length && queue[0] < i - k + 1) {
      queue.shift()
    }

    // 达到窗口大小，开始输出
    if (i >= k - 1) {
      res.push(nums[queue[0]])
    }

  }
  return res
}

console.log(maxSlidingWindow(nums, k));