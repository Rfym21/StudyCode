<template>
  <div class="wrapper">
    <v-header>
      <v-sidebar>
        <main class="content-box">
    <router-view />
        </main>
      </v-sidebar>
    </v-header>
  </div>
</template>

<script setup>
import vHeader from '../components/header.vue'
import vSidebar from '../components/sidebar.vue'
</script>

<style lang="css">
.wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>