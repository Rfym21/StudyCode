<template>
  <div class="body">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed, onBeforeUpdate } from 'vue'
// const props = defineProps({
//   list: {
//     type: Array,
//     default: () => []
//   }
// })

const props = defineProps({
  msg: String
})

// const _list = reactive(['html', 'css'])
const list = reactive(['html', 'css'])

// const list = computed(() => {
//   if (props.msg.trim() === '') {
//     return _list
//   }

//   _list.push(props.msg)
//   return _list
// })

onBeforeUpdate(() => {
  list.push(props.msg)
})

</script>

<style lang="css" scoped></style>