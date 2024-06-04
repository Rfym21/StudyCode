let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m)
  // nums1.length = m

  let arr = [], i = 0, j = 0
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i])
      i++
    } else {
      arr.push(nums2[j])
      j++
    }
  }
  if (i < m) {
    while(i < m) {
      arr.push(nums1[i])
      i++
    }
  } else {
    while(j < n) {
      arr.push(nums2[j])
      j++
    }
  }
  
  nums1.splice(0)
  nums1.push(...arr)
};



/*
双指针
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  console.log(nums1);
};
*/


// const arr1 = [3, 5, 7, 2, 1]

// arr1.sort(function (a, b) {
//   return a - b
// })
// // a - b  正序
// // b - a  倒序
// console.log(arr1);