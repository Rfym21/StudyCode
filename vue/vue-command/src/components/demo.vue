<template>
  <div>
    <h2 @click="onChange">{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('Hello Vue 3.0!')

const onChange = function () {
  msg.value += '!'
}
</script>

<style lang="css" scoped></style>