<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <productList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script setup>
import productList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

</script>

<style lang="css" scoped></style>