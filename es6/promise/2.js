
var data = null
function a(foo) {// 假设为 ajax
  setTimeout(() => {
    data = '123'
    foo()
  }, 1000)
}

function b() {
  console.log(data)
}

a(b)
