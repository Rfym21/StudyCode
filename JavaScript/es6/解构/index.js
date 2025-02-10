const arr = [1, 2, 3]
const arr1 = [1, 2, { a: 3 }]
arr[0] = 'a'
arr[1] = 'b'

// const [a, b, c] = arr
console.log(...arr);

const obj = { a: 1, b: 2, c: 3 }
// const { a: a, b: b, c: c } = obj
const { a, b, c } = obj
console.log(a, b, c);

const [a1, b1, c1, d1] = 'mark'

function foo(a, ...args) {
  // args 接收剩余参数
  // console.log(arguments);
  console.log(args);
}
foo(1, 2, 3)

function foo1([a,b]){
console.log(a,b);
}
foo1([1,2])