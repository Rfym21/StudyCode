<template>
  <nav class="bg-white text-black p-4 flex text-center text-2xl justify-evenly shadow-lg shadow-gray-300">
    <router-link to="/" class="hover:text-gray-300">首页</router-link>
    <router-link to="/cart" class="hover:text-gray-300">购物车</router-link>
    <router-link to="/login" class="hover:text-gray-300">登录</router-link>

  </nav>

  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>