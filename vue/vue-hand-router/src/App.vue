<template>
  <header>
    <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
  </header>

  <main class="main">
    <router-view></router-view>
  </main>

  <footer>

  </footer>
</template>

<script setup>

</script>

<style lang="css" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px 20px;
  margin-bottom: 30px;
  text-align: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  cursor: pointer;
}

.nav a {
  padding: 5px 20px;
  text-decoration: none;
  color: #333;
  border-radius: 3px;
}

.nav a:hover {
  transform: scale(1.1);
  transition: all 0.5s;
  background-color: #bfbfbf3d;
  font-weight: bold;
}

.main {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
</style>