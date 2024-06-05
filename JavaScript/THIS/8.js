// function foo(){

// }

// var bar=function(){

// }

var obj={
  a:1,
  // baz:baz,
  foo:function (){
    const fn =()=>{   //箭头函数没有this，会向上级作用域查找this
      console.log(this.a)
    }
  }
}

// const baz=()=>{
//   console.log(this.a)
// }

// obj.foo()


const a=()=>{
  const b=()=>{
   const c=()=>{
     console.log(this)
   }
  }
}