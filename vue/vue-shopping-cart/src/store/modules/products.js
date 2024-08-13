import api from '../../api/shop'
const state = {
  all: []
}

const getters = {}

const actions = {
  // api 请求数据 => 提交 mutations
  // commit => vuex 给 actions 可以 commit mutations 的 API
  getAllProducts({ commit }) {
    api.getProducts((products) => {
      // console.log(products)
      commit('setProducts', products)
    })
  }
}

// vuex中唯一能改变状态的地方
// 规定数据的修改方式
const mutations = {
  // vuex mutation 的第一个参数是当前的 state
  // products => 传递过来的数据
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}