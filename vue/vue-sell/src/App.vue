<template>
  <Header :seller="sellerData.value" />

  <div class="tab">

    <div class="tab-wrap">
      <Router-link to="/goods">商品</Router-link>
    </div>

    <div class="tab-wrap">
      <Router-link to="/comment">评论</Router-link>
    </div>

    <div class="tab-wrap">
      <Router-link to="/seller">商家</Router-link>
    </div>

  </div>

  <Router-view />
</template>

<script setup>
import Header from './components/header/index.vue'
import { reactive } from 'vue'
import { getSeller } from '@/api'

const sellerData = reactive({})

getSeller().then(res => {
  sellerData.value = res
  
  console.log('原始数据: ', sellerData)
})

</script>

<style lang="less" scoped>
@import './assets/variable.less';

.tab {
  background-color: @color-white;
  display: flex;
  height: 36px;

  .tab-wrap {
    flex: 1;

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 36px;
      text-decoration: none;
      color: @color-font;

      &.router-link-active {
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}
</style>