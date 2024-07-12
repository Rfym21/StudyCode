export default (func, delay) => {
  return function (args) {
    clearTimeout(func.id)
    func.id = setTimeout(() => {
      func(args)
    }, delay)
  }
}