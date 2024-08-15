import { createStore } from "./gvuex"

const store = createStore({
  // 全局状态
  state() {
    return {
      count: 0

    }
  },

  getters: {
    double(state) {
      return state.count * 2
    }
  },

  mutations: {
    add(state) {
      state.count++
    }
  },

  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }


})

export default store