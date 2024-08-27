import { reactive, ReactiveFlags, reactiveMap, shallowReactiveMap } from "./reactive.js"
import { isObject } from "../shared/index.js"
import { track, trigger } from "./effect.js"

const createGetter = (shallow = false) => {
  return function get(target, key, receiver) {
    // 判断target是否已经被代理过
    const isExist = () => key === ReactiveFlags.RAW && (receiver === reactiveMap.get(target) || receiver === shallowReactiveMap.get(target))
    // 判断是否二次代理
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true
    } else if (isExist()) {
      return target
    }

    const res = Reflect.get(target, key, receiver)
    // 收集副作用函数
    track(target, 'set', key)

    // 如果是对象，递归代理
    if (isObject(res)) {
      return shallow ? res : reactive(res)
    }
    return res
  }
}

const createSetter = () => {
  return function set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    trigger(target, 'set', key)
    console.log('修改值')
    return res
  }
}

const get = createGetter()
const set = createSetter()
const shallowReactiveGet = createGetter(true)

export const mutableHandlers = {
  get,
  set
}

export const shallowReactiveHandlers = {
  get: shallowReactiveGet,
  set
}