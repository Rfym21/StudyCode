# vuex带来了数据流管理

- 小型项目不需要vuex / pinia , 在大型项目中担任专职财务职责 => 管理数据

- 为数据流为生
    - 收归数据流集中管理
    - 按规则

- npm i vuex
    插件 install -> use

- 读状态
    useStore
    computed  =>  store.state.count
- 写状态
    store.dispatch('increment') dispatch 一个 action
    action 执行一下 最后一定执行 commit  => 提交修改
    mutation 修改状态
    state.count++ 值发生改变,所有用到该值的地方全部更新