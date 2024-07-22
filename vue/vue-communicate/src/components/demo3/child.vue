<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newMsg = ref('')

const emits = defineEmits(['addItem'])

const add = async () => {
  await emits('addItem', newMsg.value)
  newMsg.value = ''
}
</script>

<style lang="css" scoped></style>