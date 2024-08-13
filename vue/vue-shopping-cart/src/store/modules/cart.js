const state = {
  items: []
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return{
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // 需要跨模块调用时,需要加上{ root: true }
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }

  }
}

// vuex中唯一能改变状态的地方
// 规定数据的修改方式
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state,cartItem) {
    cartItem.quantity++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}