<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="text-center w-auto">
      <span
        class="inline-block bg-opacity-30 backdrop-filter bg-purple-300 rounded-full py-1 px-4 text-purple-700 mb-3">如风雨沐丷</span>
      <h1 class="text-4xl font-bold">一条 <span class="inline-block text-5xl">活泼</span> 的订阅</h1>

      <p class="text-xl w-full mx-auto font-bold my-6 text-center">欢迎来到我的订阅服务页面!</p>
      <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">订阅更新: </span>订阅更新时间不定，纯人工筛选添加。</p>
      <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">即时订阅: </span>点击“立即获取”按钮，立即开始您的订阅之旅。</p>
      <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">意见反馈: </span>有意见要提? 点击“Call
        Me”按钮,发起Telegram聊天!</p>

      <div class="flex items-center justify-center mt-8">
        <button
          class="bg-black backdrop-filter backdrop-blur-md text-white rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 mr-8"
          @click="router.push('/sub')">
          立即获取 <span>🐱</span> </button>
        <a class="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300"
          href="https://t.me/Rdev_ovo_Bot" target="_blank">
          Call Me </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="css" scoped></style>
