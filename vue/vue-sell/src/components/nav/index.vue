<template>
  <nav class="nav">
    <Router-link to="/goods" class="nav_item">商品</Router-link>
    <Router-link to="/comments" class="nav_item">评价</Router-link>
    <Router-link to="/business" class="nav_item">商家</Router-link>
  </nav>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: @fontsize-large;
  height: 36px;
  background-color: #fff;

  .nav_item {
    display: block;
    width: 33.3333%;
    color: @color-font;
    font-style: normal;
    text-decoration: none;
    /* 禁用拖动 */
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-drag: none;
    /* 禁用文本选择 */
    user-select: none;
    /* 移动端去除点击后的高亮效果 */
    -webkit-tap-highlight-color: transparent;
  }

  .nav_item:focus {
    outline: none;
    text-decoration: none;
  }
}
</style>