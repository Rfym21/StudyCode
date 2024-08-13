<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br>
      <button @click="addProductsToCart(product)" :disabled="!product.inventory">Add to Cart</button>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
// 当 store 中的 products 数据发送变化时，会自动更新
const products = computed(() => store.state.products.all)

onMounted(() => {
  // commit mutation dispatch action
  store.dispatch('products/getAllProducts')
})


const addProductsToCart = (product) => {
  // console.log(product)
  // 购物车商品数量 +1, 产品库存 -1
  // dispatch action => commit mutation
  store.dispatch('cart/addProductToCart', product)
}


</script>

<style lang="css" scoped></style>