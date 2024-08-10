

// 递归 自顶向下思考 递归方式
// 递归的方式会有很多重复计算，时间复杂度为O(2^n)

function fib(n) {
  if (n == 0 || n == 1) {
    return 0
  }

  return fib(n - 1) + fib(n - 2)
}

// 自底向上,迭代推导,动态规划
// 时间复杂度为O(n)
function fib_a(n) {
  if (n <= 1) {
    return n
  }

  let fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib[n]
}
