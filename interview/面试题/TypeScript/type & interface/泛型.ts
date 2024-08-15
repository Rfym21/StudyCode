function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>('myString')
// let output_a = identity<string>(123)  // 错误: 类型为“123”的参数不能赋给类型为“ string”的参数。