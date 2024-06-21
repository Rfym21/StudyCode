function add(...args) {
  return args.reduce((sum, item) => sum + item, 0)
}

console.log(add(1, 2, 3, 4, 5))