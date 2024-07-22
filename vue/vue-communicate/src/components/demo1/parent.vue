<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>

  <child :list="list" />
</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'

const newMsg = ref('')
const list = ref(['html', 'css'])

const add = () => {
  list.value.push(newMsg.value)
  newMsg.value = ''
}
</script>

<style lang="css" scoped></style>