
function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // console.log('hello')
      resolve('hello')
      // reject('error')  // 如果执行了reject，那么后面的then不会执行，会直接执行catch  “error”为catch的参数
    }, 1000)
  })
}

function b() {
  console.log('world')
}

a()
  .then((res) => {
    console.log(res)
    b()
  })
// .then(b)