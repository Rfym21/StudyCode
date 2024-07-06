<template>
  <div class="container">
    <h1>Vue 3 Base</h1>
    <h2>点击: {{ count }} 次</h2>
    <button class="btn" @click="add">增加</button>
    <button class="btn" @click="minus">减少</button>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      count: 10
    }
  },
  methods: {
    minus() {
      this.count--
    },
    add() {
      this.count++
    }
  }
}
</script> -->

<!-- <script>
// ref 是一个函数，用于创建一个响应式的数据
import { ref } from 'vue'
export default {
  setup() {
    let count = ref(10)

    const add = function () {
      count.value++
    }
    const minus = function () {
      count.value--
    }

    return {
      count,
      add,
      minus
    }
  }
}
</script> -->

<script setup>
import { ref } from 'vue'

const count = ref(10)

const add = function () {
  count.value++
}

const minus = function () {
  count.value--
}

</script>

<style lang="css" scoped>
.container {
  margin: 100px auto;
  padding: 20px;
  width: 400px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
}

.btn {
  margin: 20px auto;
  display: block;
  width: 100px;
  height: 40px;
  line-height: 36px;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-sizing: border-box;
}
</style>