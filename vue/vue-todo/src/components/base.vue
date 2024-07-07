<template>
  <h2>{{ count }}</h2>
  <h3>建议穿 : {{ suggest }}</h3>
  <button @click="add">+1</button>
  <button @click="minus">-1</button>
</template>

<script setup>
import { ref, watch, computed } from "vue"

const count = ref(20)
// let suggest = ref('夹克')

const add = () => {
  count.value += 5
}

const minus = () => {
  count.value -= 5
}

// watch(count, (newVal, oldVal) => {
//   console.log(`新值: ${newVal}`, `旧值: ${oldVal}`)
//   if (newVal >= 30) {
//     suggest.value = '短袖'
//   } else if (newVal >= 20) {
//     suggest.value = '夹克'
//   } else if (newVal >= 10) {
//     suggest.value = '羽绒服'
//   }
// }, { immediate: true })

const suggest = computed(() => {
  if (count.value >= 30) {
    return '短袖'
  } else if (count.value >= 20) {
    return '夹克'
  } else if (count.value >= 10) {
    return '羽绒服'
  }
})
</script>

<style lang="css" scoped>
button {
  margin: 0 10px;
}
</style>