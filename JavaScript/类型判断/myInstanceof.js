function myInstanceof(L, R) {


  while (L !== null) {
    if (L.__proto__ === R.prototype) {
      return true
    } else {
      L = L.__proto__
    }
  }

  return false
}

var arr = []
console.log(myInstanceof(arr, Array))
console.log(myInstanceof(arr, Object))