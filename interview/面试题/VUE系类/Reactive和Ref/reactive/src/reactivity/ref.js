import { track, trigger } from "./effect.js"
import { isObject } from "../shared/index.js"
export function ref(val) {
  return createRef(val)
}

function createRef(val) {
  if (val && val.__v_isRef) {
    return val
  }
  return RefImp(val)
}

class RefImp {
  constructor(value) {
    this._value = convert(value)
    this.__v_isRef = true
  }

  get value() {
    track(this, 'get', 'value')
    return this._value
  }
  set value(newValue) {
    this._value = newValue
    trigger(this, 'set', 'value')
  }
}

function convert(value) {
  return isObject(value) ? reactive(value) : value
}