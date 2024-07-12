<template>
  <div class="goods">
    <div class="goods-content">

      <div class="menu-wrap" ref="menuWrap">

        <ul>
          <li :class="`menu-item ${state.index === i ? 'current' : ''}`" v-for="(item, i) in state.goods"> <span
              class="text" @click="changeStatus(i)" :key="i">
              <Icon size="3" :type="item.type" v-if="item.type > 0" />
              {{ item.name }}
            </span>
          </li>
        </ul>

      </div>
    </div>

    <div class="food-wrap">

    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/support-ico/index.vue'
import { getGoods } from '@/api'
import { reactive, ref, nextTick } from 'vue'
import BScroll from '@better-scroll/core'

// 滚动效果
const menuWrap = ref(null)
const initScroll = () => {
  let bs = new BScroll(menuWrap.value, {
    click: true
  })
}

const state = reactive({
  index: 0,
  goods: []
})


getGoods().then(res => {
  state.goods = res
  console.log(state.goods)
  nextTick(() => {
    initScroll()
  })
})

const changeStatus = (i) => {
  state.index = i
}

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.goods {
  width: 100%;
  position: absolute;
  bottom: 46px;
  top: 177px;
  overflow: hidden;

  .goods-content {
    display: flex;
    height: 100%;

    .menu-wrap {
      flex: 0 0 80px;
      background-color: @color-background-ssss;

      .menu-item {
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.current {
          background-color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>