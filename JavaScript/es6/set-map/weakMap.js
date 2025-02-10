// weakMap 只接受对象作为键名（null除外），不接受其他类型的值作为键名

const wm = new WeakMap()

let obj = {
  name: 'tom'
}

let person = obj.name

// obj = null

wm.set(obj, 1)
// weakMap 是弱引用，不会阻止垃圾回收