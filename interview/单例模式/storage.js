
/* 
* 
*/
class Storage {

  static getInstance() {
    // JS动态  static属性
    // JS没有类 都是对象
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

// new Storage()


export default Storage