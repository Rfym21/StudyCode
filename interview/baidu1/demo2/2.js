// console.log([1, [2, [3, [4, [5, [6]]]]]].toString(), typeof [1, [2, [3, 4]]].toString())
// 扁平化
var arr = [1, [2, [3, [4, [5, [6]]]]]]
function flatten(arr) {
  var strArr = arr.toString()
  // split删除字符串里面的字符
  var numArr = strArr.split(',')
  var result = []
  for (var i = 0, len = numArr.length; i < len; i++) {
    // numArr[i]是字符串，在js中可以强制类型转换
    // +与Number()是一样的
    // + 隐式类型转换
    // Number 显示转换
    result.push(+numArr[i])
  }
  return result
}

console.log(flatten(arr))