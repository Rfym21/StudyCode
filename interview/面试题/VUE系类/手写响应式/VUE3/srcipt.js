let toProxy = new WeakMap() // 原对象 -> 代理对象
let toRaw = new Set() // 代理对象 -> 原对象

function isObject(val) {
  return typeof val === 'object' && val !== null
}

function reactive() {
  return createReactiveObject(obj)
}

function createReactiveObject(target) {
  if (!isObject(target)) {
    return target
  }

  let proxy = toProxy.get(target)
  let raw = toRaw.get(target)
  if (proxy) {
    return proxy
  }
  if (raw) {
    return raw
  }

  let baseHandler = {
    get(target, key, receiver) {
      let res = Reflect.get(target, key, receiver)
      return isObject(res) ? reactive(res) : res
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      console.log('更新视图')
      return
    }
  }

  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}



let obj = {
  a: 1,
  b: 2,
  c: {
    n: 3
  },
  d: ["1", "2", "3"]
}

let proxy = reactive(obj)
proxy.c = 10
console.log(proxy.c)
