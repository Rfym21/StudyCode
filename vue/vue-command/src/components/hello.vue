<template>
  <div>
    <h1>{{ message }}</h1>
    <h2 v-text="message2"></h2>
    <h3>{{ message3 }}</h3>
    <h4 v-text="message3"></h4>
    <h5 v-html="message3"></h5>
  </div>
</template>

<script setup>

const message = 'Hello Vue 3.0!'
const message2 = 'Hello world!'
const message3 = '<p>铠甲勇士</p><p>帝皇侠</p>' // 富文本

</script>

<style lang="css" scoped></style>