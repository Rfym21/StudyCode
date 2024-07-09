<template>
  <div>
    <!-- 
    <RateOld :value="5" />
    <RateOld :value="4" />
    <RateOld :value="3" />
    <RateOld :value="2" />
    <RateOld :value="1" />
 -->

    <Rate :value="score" theme="red" @update-rate="update" />

  </div>
</template>

<script setup>
// import RateOld from './components/Rate_old.vue'
import Rate from './components/Rate.vue'
import { ref } from 'vue'

let score = ref(3)

function update(num) {
  if (num > 5 || num < 1) {
    return
  }
  score.value = num
}



</script>

<style lang="css" scoped></style>