<template>
  <div>
    {{ value }}
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

let props = defineProps({
  value: Number
})

</script>

<style lang="css" scoped></style>