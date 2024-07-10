<template>
  <div class="container mx-auto p-4 w-3/6">
    <h1 class="text-3xl font-bold my-8 text-center">Login</h1>
    <form @submit.prevent="handleSubmit">

      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold my-4">username: </label>
        <input required type="text" id="username" v-model="state.username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>

      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold my-4">password: </label>
        <input required type="password" id="password" v-model="state.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <button type="submit"
        class="bg-sky-300 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
    </form>
  </div>
</template>

<script setup>
import { reactive,onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const state = reactive({
  username: '',
  password: ''
})

onMounted(() => {
  if (localStorage.getItem('isLoggedIn')) {
    alert('您已经登录')
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
})

const handleSubmit = () => {
  console.log(state.username, state.password)
  if (state.username === 'admin' && state.password === '123456') {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/')
  } else {
    alert('用户名或密码错误')
  }
}
</script>

<style lang="css" scoped></style>
