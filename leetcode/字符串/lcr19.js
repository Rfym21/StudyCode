var s = 'abc'

// function validPalindrome(s) {
//   let len = s.length

//   if (len == 1 || isPalindrome(s)) {
//     return true
//   }

//   for (let i = 0; i < len; i++) {
//     let arr = s.split('')
//     arr.splice(i, 1)    //splice() 返回的是删除的元素
//     if (isPalindrome(arr.join(''))) {
//       return true
//     }
//   }
//   return false
// }


// function isPalindrome(s) {

//   const len = s.length

//   if (len == 1) {
//     return true
//   }

//   for (let i = 0; i < len / 2; i++) {
//     if (s[i] !== s[len - i - 1]) {
//       return false
//     }
//   }

//   return true
// }

function validPalindrome(s) {
  j = s.length - 1, i = 0

  while (i < j && s[i] === s[j]) {
    i++
    j--
  }

  if (isPalindrome(i + 1, j) || isPalindrome(i, j - 1)) {
    return true
  }


  function isPalindrome(i, j) {
    while (i <= j) {
      if (s[i] === s[j]) {
        i++
        j--
      } else {
        return false
      }
    }
    return true
  }

  return false
  
}

console.log(validPalindrome(s));