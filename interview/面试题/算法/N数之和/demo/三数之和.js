
function threeSum(nums) {
  // sort 方法可以将数组按照升序排列
  nums.sort((a, b) => a - b) // 冒泡排序法

  const result = []
  for (let i = 0; i < nums.length - 2; i++) { // left right 不用迭代
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        // 去重,跳过重复的数字
        while (left < right && nums[left] === nums[left + 1]) {left++}
        while (left < right && nums[right] === nums[right - 1]) {right--}

        left++
        right--
      }else if (sum <0){
        left++
      }else{
        right--
      }
    }
  }

  return result
}