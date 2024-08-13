<template>
  <div class="cart">
    <h2>You Cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart</i>
    </p>

    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p v-show="products.length">Total: {{ total }}</p>

  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const products = computed(() => store.getters['cart/cartProducts'])
const total = computed(() => store.getters['cart/cartTotalPrice'])


</script>

<style lang="css" scoped></style>