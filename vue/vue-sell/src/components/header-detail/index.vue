<template>
  <Transition name="fade">

    <div class="header-detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">{{ state.name }}</h1>
          <div class="star-wrapper">
            <Star :value="state.score"></Star>
          </div>
          <div class="title">
            <span>优惠信息</span>
          </div>
          <div class="supports">
            <div class="support-item" v-for="(support, i) in state.supports" :key="i">
              <Icon :type="support.type" size="4"></Icon>
              <span class="text">{{ support.description }}</span>
            </div>
          </div>

          <div class="title">
            <span>商家公告</span>
          </div>
          <p class="bulletin">{{ state.bulletin }}</p>
        </div>
      </div>

      <div class="detail-close" @click.stop="close">
        <img src="/src/assets/icon/cancel.png" alt="">
      </div>
    </div>
  </Transition>
</template>

<script setup>
import Star from '@/components/star.vue'
import { reactive, defineProps, watch, defineEmits } from 'vue'
import Icon from '@/components/support-ico/index.vue'

const state = reactive({
  // 公告
  bulletin: '',
  // 商家名称
  name: '',
  // 优惠信息
  supports: [{ type: 0, description: 'Loading...' }],
  //评分
  score: 0,
})

const res = defineProps({
  seller: Object
})

// console.log('商家详情数据: ', res.seller);
watch(() => res.seller, () => {
  console.log('商家详情数据: ', res.seller);
  const { bulletin, name, score, supports } = res.seller
  // 将数据赋值给 state
  state.bulletin = bulletin || ''
  state.name = name || ''
  state.score = score || ''
  state.supports = supports || [{ type: 0, description: 'Loading...' }]
}, {
  immediate: true
})

const emits = defineEmits(['hideDetail'])// 创建事件
const close = () => {
  emits('hideDetail', false)
}

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.header-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: @color-background-s;
  color: @color-white;
  z-index: 100;
  backdrop-filter: blur(10px);

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    background: @color-background;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s ease;
  }

  .detail-wrapper {
    width: 100%;
    min-height: 100%;
    overflow: auto;

    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;

      .name {
        text-align: center;
        font-size: @fontsize-large;
        font-weight: bold;
      }

      .star-wrapper {
        padding: 2px 0;
        margin-top: 8px;
        text-align: center;
      }

      .title {
        width: 80%;
        margin: 28px auto 24px auto;
        text-align: center;
        display: flex;
        align-items: center;

        &::before,
        &::after {
          content: '';
          height: 1px;
          background-color: #fff;
          flex: 1;
          opacity: 0.3;
        }

        span {
          font-size: @fontsize-medium;
          padding: 0 12px;
          font-weight: bold;
        }
      }

      .supports {
        width: 80%;
        margin: 0 auto;
        .support-item{
          display: block;
          margin: 8px 0;
          span {
            margin-left: 8px;
          }
        }
      }
      .bulletin {
        width: 80%;
        margin: 0 auto;
        line-height: 24px;
      }
    }
  }

  .detail-close {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>