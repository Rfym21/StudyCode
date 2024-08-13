import { createStore } from "vuex"
import cart from "./modules/cart"
import products from "./modules/products"
// vuex & pinia ? =>
// vuex更复杂,中央仓库的概念,单一状态树
// pinia更简单,更轻量,更容易使用

// 仓库中分子仓库
export default createStore({
  // 全局状态 => 不利于大量数据的管理
  state: {
    count: 0
  },
  // 模块化状态
  modules: {
    // 购物车数据管理
    cart,
    // 产品数据管理
    products
  }
})