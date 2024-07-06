/**
 *@func 基于localStorage封装Storage类，单例模式
 *@author jj
 *@date 2022-06-15
 * 
 */

// 语法糖
class Storage{
  // static instance = null;
  static getInstance(){
    // JS动态  static 属性
    // JS没有类，都是对象
    if(!this.instance){
      this.instance = new Storage()
    }
    return this.instance
  }
  getItem(key){
    return localStorage.getItem(key)
  }
  setItem(key, value){
    localStorage.setItem(key, value)
  }
}

// new Storage()
const instance = Storage.getInstance()

export default Storage