const oldArrayProperty = Array.prototype
const proto = Object.create(oldArrayProperty)
// 重写数组的方法
Array.from(['push', 'pop', 'shift', 'unshift']).forEach(method => {
  // 函数劫持
  proto[method] = () => {
    oldArrayProperty[method].call(this, ...arguments)
    updateView()
  }
})

function observer(target) {
  if (Array.isArray(target)) {
    target.__proto__ = proto
    return
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value === 'object' && value !== null) {
    observer(value)
  }

  // 数据劫持 => 参数对象，属性，描述对象
  Object.defineProperty(target, key, {
    // 取值
    get() {
      return value
    },
    // 赋值
    set(val) {
      if (val !== value) {
        value = val
        updateView()
      }
    }
  })
}

function updateView() {
  console.log('更新视图')
}

let obj = {
  a: 1,
  b: 2,
  c: {
    n: 3
  },
  d: ["1", "2", "3"]
}

observer(obj)

obj.d.push('4')
console.log(obj.d)
