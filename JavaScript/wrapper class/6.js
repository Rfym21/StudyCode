var str = 'abc'   // new String('abc')
str += 1    // str={'abc'}  valueOf --> 'abc' + 1 = 'abc1'
var test = typeof (str)   // 'String'

if (test.length === 6) {
  // test是字面量不能拥有属性和方法
  test.sign = 'typeOf的返回结果可能是String'
  // delete test.sign
}

console.log(test.sign)    //new String(test).sign