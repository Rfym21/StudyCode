<template>
  <div class="header">
    <input type="text" v-model="newMsg" @keydown.enter="add">
    <button @click="add">确定</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newMsg = ref('')

const props = defineProps({
  list: Array
})

const emits = defineEmits(['update:list'])

const add = () => {
  const arr = props.list
  arr.push(newMsg.value)
  emits['update:list', arr]
}

</script>

<style lang="css" scoped></style>