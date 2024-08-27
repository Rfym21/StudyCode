
const targetMap = new WeakMap()
let activeEffect = null

export function effect(fn) {
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }
  }
  effectFn()
}


// 记录把key用在了哪些函数中
export function track(target, type, key) {
  let depMap = targetMap.get(target)
  if (!depMap) {
    targetMap.set(target, (depMap = new Map()))
  }

  let deps = depMap.get(key)
  if (!deps) {
    deps = new Set()
  }

  if (!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect)
  }

  depMap.set(key, deps)

  console.log(targetMap)

}

export function trigger(target, type, key) {
  const depMap = targetMap.get(target)
  if (!depMap) {
    return
  }

  const deps = depMap.get(key)
  if (!deps) {
    return
  }

  deps.forEach(effect => effect())
}