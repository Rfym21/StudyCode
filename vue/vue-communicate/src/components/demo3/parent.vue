<template>
  <child @addItem="handle" />
  <div class="body">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import child from "./child.vue";
import { ref } from 'vue';

const list = ref(['html', 'css'])

const handle = (msg) => {
  if (msg.trim() === '') return
  list.value.push(msg)
}

</script>

<style lang="css" scoped></style>