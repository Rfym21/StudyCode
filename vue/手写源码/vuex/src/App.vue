<template>
  <h1 style="width:100%;font-size: 3rem;text-align: center;">{{ count }}</h1>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from './store/gvuex'

const store = useStore()
const count = computed(() => store.state.count)

setInterval(() => {
  store.dispatch('asyncAdd')
}, 1000)
</script>

<style lang="css" scoped></style>