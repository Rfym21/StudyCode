import { createStore } from 'vuex'


// 全局状态
// 不再有父子兄弟组件通信的问题
const state = {
  count: 0,
  user: null
}
// 修改  动作
const actions = {
  increment: ({ commit }) => {
    console.log('钩子: => commit')
    // commit 提交一项修改给mutations
    commit('increment')
  }
}

// 所有状态修改都要经过mutations
// 只有mutations才能修改状态
const mutations = {
  increment(state) {
    console.log('钩子: => increment')
    state.count++
  }
}

// vuex 除对读外，其他操作都十分严格
const store = createStore({
  state,
  actions,
  mutations
})


export default store

