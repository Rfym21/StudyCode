
Array.prototype.push = function (x) {
  this[0] = x   // arr[0] = x
}

var arr = [1, 2, 3]   // new Array()  --> this

arr.push(4)
console.log(arr)

//-----------------------------------------------

var num = 1   // new Number
console.log(num.toString());