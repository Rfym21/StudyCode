/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length

  if (len % 2 === 1) {
    return false
  }

  const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  // 准备栈
  // 遍历字符串s
  // 取到的是左边,就存入右边到栈
  // 如果取到的是右边,就取出栈顶元素,看是否匹配

  const stack = []

  for (let i = 0; i < len; i++) {
    if (obj[s[i]]) {
      stack.push(obj[s[i]])
    } else {
      if (stack.pop() !== s[i]) {   // pop() 删除并返回删除元素的值
        return false
      }
    }
  }

  return !stack.length    //判断栈内是否还有元素，如果有则返回false，没有则返回true

}

console.log(isValid('()[]{}'))