const str = 'abcd'

let newArr = str.split('').reverse().join('')   // reverse() 反转数组
console.log(newArr);

const str1 = 'yesey'
const newStr1 = str1.split('').reverse().join('')
console.log(str1 == newStr1)

function isPalindrome(s) {

  const len = s.length

  if (len == 1) {
    return true
  }

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('assa'));