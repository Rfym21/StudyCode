import { mutableHandlers, shallowReactiveHandlers } from "./baseHandlers"
// 深层代理对象
export const reactiveMap = new WeakMap()
// 浅层代理对象
export const shallowReactiveMap = new WeakMap()
export const ReactiveFlags = {
  IS_REACTIVE: '__v_isReactive',
}

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}

export function shallowReactive(target, shallowReactiveMap) {
  return createReactiveObject(target, shallowReactiveMap, proxyHandlers)
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
  // 如果不是对象，直接返回
  if (typeof target !== 'object') {
    return target
  }

  // 如果已经代理过，直接返回代理对象
  const existingProxy = proxyMap.get(target, proxyHandlers)
  if (existingProxy) {
    return existingProxy
  }

  // 创建代理对象
  const proxy = new Proxy(target)
  proxyMap.set(target, proxy)

  return proxy
}