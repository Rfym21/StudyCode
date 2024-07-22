<template>
  <ItemContainer parent="item"/>
</template>

<script setup>
import ItemContainer from '../components/ItemContainer.vue'

import { useQuestionStore } from '../store/question.js'

const questionStore = useQuestionStore()
questionStore.getQuestionList()
</script>

<style lang="css" scoped></style>