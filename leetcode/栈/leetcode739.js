// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function (temperatures) {
//   let len = temperatures.length
//   let res = new Array(len).fill(0)

//   for (let i = 0; i < len - 1; i++) {

//     for (let j = i + 1; j < len; j++) {

//       if (temperatures[j] > temperatures[i]) {
//         res[i] = (j - i)
//         break
//       }

//     }

//   }
//   return res
// };






temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length
  const stack = []
  const res = new Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
};

console.log(dailyTemperatures(temperatures))