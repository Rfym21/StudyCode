import { computed, reactive, provide, inject } from "vue"
const STORE_KEY = '__store__'

export const createStore = (options) => {
  return new Store(options)
}

export const useStore = () => {
  return inject(STORE_KEY)
}

class Store {

  constructor(options) {
    // 使用响应式数据
    this.$options = options
    // 以_开头的数据一般认为是私有数据
    // 不可被外界直接访问
    this._state = reactive({
      data: options.state()
    })
    // mutations 不可被外界直接访问,需要通过 commit dispatch 触发
    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {}

    // 遍历 getters 上的所有方法 并传入一个参数 state
    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name]
      this.getters[name] = computed(() => fn(this.state))
    })

  }

  // es6 的访问器属性 get set
  get state() {
    return this._state.data
  }

  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  // 动作类型 参数
  dispatch(type, payload) {
    const entry = this._actions[type]
    entry && entry(this, payload)
  }

  install(app) {
    // key Store对象
    app.provide(STORE_KEY, this)
  }

} 