
function type(n) {

  let res = Object.prototype.toString.call(n)
  return res.slice(8, -1)

}

console.log(type('hello'))
console.log(type(123))
console.log(type([]))