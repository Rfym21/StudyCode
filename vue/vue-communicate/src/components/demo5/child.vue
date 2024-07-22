<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newMsg = ref('')
const list = ref(['html', 'css'])

const add = () => {
  list.value.push(newMsg.value)
}

// 子组件暴露一个 list 属性
defineExpose({
  list
})
</script>

<style lang="css" scoped></style>