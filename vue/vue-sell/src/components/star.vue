<template>
  <div class="star">
    <span v-for="num in score" :key="num">⭐️</span>
    <span v-for="num in 5 - score" :key="num">☆</span>
  </div>
</template>
<script setup>

import { defineProps, ref } from 'vue';
let props = defineProps({
  value: Number,
})
const score = ref(Math.floor(props.value)) || 0

</script>
<style>
.star {
  position: relative;
  display: block;
}

.star span {
  display: inline-block;
  cursor: pointer;
}
</style>