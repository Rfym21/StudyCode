<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>
  <child />
</template>

<script setup>
import { ref, provide } from 'vue'
import child from './child.vue'

const newMsg = ref('')
const list = ref(['html', 'css'])

const add = () => {
  list.value.push(newMsg.value)
}

provide('list', list.value)
</script>

<style lang="css" scoped></style>