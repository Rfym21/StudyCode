<template>
  <router-view />
</template>

<script setup>
// hooks 函数
import { useSidebarStore } from './store/sidebar.js'

const sidebarStore = useSidebarStore()

</script>

<style lang="css" scoped></style>
