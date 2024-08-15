
class EventEmitter {
  constructor() {
    this.cache = {}
  }

  on(name, callback) {
    if (this.cache[name]) {
      this.cache[name].push(callback)
    } else {
      this.cache[name] = [callback]
    }
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 执行但是不影响原数组
      let tasks = this.cache[name].slice()
      for (let task of tasks) {
        task(...args)
      }

      if (once) {
        delete this.cache[name]
      }
    }
  }

  off(name, callback) {
    let tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(cb => cb === callback || cb.callback === callback)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

}