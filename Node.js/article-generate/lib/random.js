
function randomInt(min, max) {
  const n = Math.random()

  return Math.floor(min * (1 - n) + max * n)
}

/**
 * 创建一个可以从数组中随机选择元素的函数
 * 每次调用该函数时，它都会返回数组中的一个随机元素，并且下次调用时将不会重复之前的选择
 * 该函数内部使用了一个随机数生成器来选择元素
 *
 * @param {array} arr
 * @return {function} 一个函数，可以用来随机从数组中选择一个元素
 * @public
 */
function createRandomPicker(arr) {
  arr = [...arr]

  function randomPick() {
    const len = arr.length - 1
    const index = randomInt(0, len);
    // 解构
    [arr[index], arr[len]] = [arr[len], arr[index]]
    return arr[index]
  }

  // 放弃第一次的随机结果
  randomPick()
  return randomPick
}


module.exports = {
  randomInt,
  createRandomPicker
}