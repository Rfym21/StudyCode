
const get = createGetter()
const set = createSetter()
const shallowReactiveGet = createGetter(true)

const createGetter = (shallow = false) => {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
  }
}

const createSetter = () => { }

export const mutableHandlers = {
  get,
  set
}

export const shallowReactiveHandlers = {
  get,
  set
}