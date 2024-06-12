const arr = []

arr.push(1)
arr.splice(0, 0, 2)
arr.unshift(3)

// arr.pop()
// arr.shift()
// arr.splice(0, 1)

console.log(arr)

console.log("----------------------------------------------------")

const stack = []    // pop push

stack.push('小布丁')
stack.push('大布丁')
stack.push('老冰棍')
stack.push('钟薛高')

while (stack.length) {
  let top = stack[stack.length - 1]
  console.log(`拿出 ${top} 吃掉了`);
  stack.pop()
}