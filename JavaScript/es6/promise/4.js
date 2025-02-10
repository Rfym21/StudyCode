
function xq() { // pending resolve rejected
  return new Promise((resolve, reject) => { // {status: pending}
    setTimeout(function () {
      console.log('相亲')
      resolve()
    }, 2000)
  })
}

function marry() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('结婚')
      resolve()
    }, 1000)
  })
}

function baby() {
  console.log('小孩')
}

xq()
  .then(() => {
    return marry()
  })
  .then(() => {
    baby()
  })