<template>
  <div class="item-wrapper flex space-x-2 w-screen overflow-hidden px-4">
    <div class="item flex-[0_0_auto] w-28 space-y-2" v-for="(item, i) in items" :key="i">
      <div class="item-image">
        <img :src="item.cover" :alt="item.title" class=" rounded-lg">
      </div>

      <div class="item-info">
        <div class="item-name text-xs font-bold">{{ item.title }}</div>
        <div class="item-name text-xs font-bold">{{ getCurrency(item.price) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { recentlyViewedState } from '../types/home'
import { getCurrency } from '../utils/utils'

defineProps({
  items: {
    type: Array<recentlyViewedState>,
    default: []
  }
})

</script>

<style scoped></style>