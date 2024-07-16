<template>
  <!--  -->
  <component :is="component" />
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from '../grouter/index.js'
// import Home from '../pages/index.vue'
// import About from '../pages/about.vue'

const router = useRouter()
console.log(router)

// router-view 动态组件展示依赖于 url 的变化
// 响应式 router.current
const component = computed(() => {
  const route = router.routes.find(
    (route) => route.path == router.current.value
  )
  console.log(route)
  return route ? route.component : null
})


</script>

<style lang="css" scoped></style>