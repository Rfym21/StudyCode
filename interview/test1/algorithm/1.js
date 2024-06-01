// 发红包算法：随机，公平或有趣，多少人，total 最低0.01，总金额为total
// Math.random()生成一个0-1的随机数
// console.log(Math.random())
/**
 * @func 红包算法
 * @param {number} total 总金额
 * @param {number} num  人数
 */
function hongbao(total, num) {
  // 发红包的一刻已决定了
  // 原因：可能服务器宕机
  const arr = [];
  // 余额
  let restAmount = total;
  // 未领人数
  let restNum = num;
  for (let i = 0; i < restNum - 1; i++) {
    let amount = parseFloat(Math.random() * (restAmount / restNum * 4)).toFixed(2);
    restAmount -= amount;
    arr.push(amount);
  }
  // 最后一个人的
  arr.push(restAmount.toFixed(2))
  return arr;
}
let arr1 = hongbao(20, 20)
console.log(arr1);
let sum = 0
for (let i = 0; i < arr1.length; i++) {
  sum += parseFloat(arr1[i])
}
console.log(sum)