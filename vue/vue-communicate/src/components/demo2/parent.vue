<template>
  <div class="header">
    <input type="text" v-model="newMsg">
    <button @click="add">确定</button>
  </div>

  <child :msg="val" />
</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'

const val = ref('')
const newMsg = ref('')

const add = () => {
  val.value = newMsg.value
}
</script>

<style lang="css" scoped></style>