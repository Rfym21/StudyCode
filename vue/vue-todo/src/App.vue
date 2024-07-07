<template>
  <div id="container">
    <nav>
      <span @click="changeTab(1)">基础知识</span> |
      <span @click="changeTab(2)">购物车</span> |
      <span @click="changeTab(3)">待办事项</span>
    </nav>


    <Base v-if="state.index === 1" />
    <shopping v-if="state.index === 2" />
    <todo v-if="state.index === 3" />

  </div>
</template>

<script setup>
import Base from './components/base.vue'
import shopping from './components/shopping.vue'
import todo from './components/todo.vue'
import { ref, reactive } from 'vue'

let state = reactive({
  index: 1
})
const changeTab = (index) => {
  state.index = index
}
</script>

<style lang="css">
#container {
  min-width: 600px;
  margin: 100px auto;
  text-align: center;
}
</style>