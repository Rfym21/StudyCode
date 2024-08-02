<template>
  <div>
    <Router-view v-slot="{ Component }">
      <keep-alive :include="cacheComponents.toString()">
        <Component :is="Component"></Component>
      </keep-alive>
    </Router-view>
    <div class="footer h-12">
      <TabBar class="fixed bottom-0"></TabBar>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabBar from '../views/layout/TabBar.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const cacheComponents = computed(() => {
  return router.getRoutes().filter(route => route.meta.cache).map(route => route.name)
})


</script>

<style scoped></style>