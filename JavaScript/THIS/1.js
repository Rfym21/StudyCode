let obj = {
  myName: '种',
  age: 18,
  say: function () {
    console.log(obj.myName)
    console.log(this.myName)      // this指向调用函数的对象
    // console.log(myName)
  }

}

obj.say()