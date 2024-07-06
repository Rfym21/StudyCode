<template>
  <div>
    <div class="container">
      <!-- <hello /> -->
      <!-- <condition /> -->
      <!-- <list /> -->
      <attribute />
      <demo />
    </div>
  </div>
</template>

<script setup>
import hello from './components/hello.vue'
import condition from './components/condition.vue'
import list from './components/list.vue'
import attribute from './components/attribute.vue'
import demo from './components/demo.vue'
</script>

<style lang="css" scoped>
.container {
  margin: 10vh auto;
  padding: 20px 100px;
  width: 400px;
  min-height: 60vh;
  border: 2px solid #ccc;
  text-align: center;
}
</style>