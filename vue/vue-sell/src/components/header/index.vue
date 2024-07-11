<template>
  <div class="header">

    <div class="content-wrapper">
      <!-- 店铺头像 -->
      <div class="avatar">
        <img :src="state.avatar" alt="">
      </div>

      <!-- 店铺信息 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ state.name }}</span>
        </div>
        <!-- 描述 -->
        <div class="description">{{ state.description }}/{{ state.deliveryTime }}分钟送达</div>
        <div class="support">
          <Icon :type="state.supports[0].type" size="1" />
          <span class="text">{{ state.supports[0].description }}</span>
        </div>
        <div class="support-count">
          <span class="count">{{ state.supports.length }}个</span>
          <span class="support-more"></span>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletion-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ state.bulletin }}</span>
      <i class="bulletin-more"></i>
    </div>

    <div class="background">
      <img :src="state.avatar" alt="">
    </div>
  </div>
</template>

<script setup>
import Icon from '/src/components/support-ico/index.vue'
import { reactive, onBeforeMount } from 'vue'
import { getSeller } from '@/api'

const state = reactive({
  // 商家头像
  avatar: '',
  // 公告
  bulletin: '',
  // 商家名称
  name: '',
  // 送达时间
  deliveryTime: '',
  // desc
  description: '',
  // 优惠信息
  supports: [{ type: 0, description: 'Loading...' }],
  // 优惠类型
})

getSeller().then(res => {
  const { avatar, bulletin, name, deliveryTime, description, supports } = res
  // 将数据赋值给 state
  state.avatar = avatar || ''
  state.bulletin = bulletin || ''
  state.name = name || ''
  state.deliveryTime = deliveryTime || ''
  state.description = description || ''
  state.supports = supports || []

  console.log('当前State属性值: ', state)
})

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';
@import '@/assets/mixin.less';

.header {
  color: @color-white;
  position: relative;
  background-color: @color-background-ss;

  .content-wrapper {
    position: relative;
    display: flex;
    padding: 24px 12px 18px 24px;

    .avatar {
      width: 64px;
      height: 64px;
      overflow: hidden;
      border-radius: 2px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      flex: 1;
      margin-left: 16px;

      .title {
        display: flex;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          .bg-image('brand');
          background-size: 100% 100%;
        }

        .name {
          margin-left: 6px;
          font-size: @fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 8px;
        font-size: @fontsize-small;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          display: inline-block;
          margin-left: 4px;
          height: 12px;
          font-size: @fontsize-small-s;
          line-height: 12px;
        }
      }

      .support-count {
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: 24px;
        right: 12px;
        bottom: 14px;
        text-align: center;
        background-color: @color-background-sss;
        border-radius: 14px;

        .count {
          font-size: @fontsize-small-s;
          line-height: 24px;
        }

        .support-more {
          width: 12px;
          height: 12px;
          background-image: url('/src/assets/icon/right-white.png');
          background-size: 100% 100%;
        }
      }
    }
  }

  .bulletion-wrapper {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 28px;
    background-color: @color-background-sss;

    .bulletin-title {
      display: inline-block;
      margin-right: 4px;
      width: 22px;
      height: 12px;
      .bg-image('bulletin');
      background-size: 100% 100%;
    }

    .bulletin-text {
      display: inline-block;
      flex: 1;
      height: 28px;
      line-height: 28px;
      font-size: @fontsize-small-s;
      /* 禁止换行 */
      white-space: nowrap;
      /* 隐藏超出部分 */
      overflow: hidden;
      /* 显示省略号 */
      text-overflow: ellipsis;
    }

    .bulletin-more {
      display: block;
      height: 16px;
      width: 16px;
      background-image: url('/src/assets/icon/right-white.png');
      background-size: 100% 100%;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: @color-background-ss;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      /* 确保图像填充容器的宽度 */
      /* 确保图像填充容器的高度 */
      object-fit: cover;
      filter: blur(5px);
    }
  }
}
</style>