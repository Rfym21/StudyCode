<template>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow-md p-8 mt-8">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <div class="text-gray-700 mb-4">
        <p v-html="post.category"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getPostById, getRecommendPosts } from '../api/index.js'

// 获取当前路由对象  hooks 编程 use开头
const route = useRoute()
const id = route.params.id
const post = ref({})

onMounted(async () => {
  const data = await getPostById(id)
  data && (post.value = data)
  console.log(post.value)

  const recommend=await getRecommendPosts(id)
})

</script>

<style lang="css" scoped></style>