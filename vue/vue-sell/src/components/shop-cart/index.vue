<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">

        <div class="logo-wrap">
          <div :class="`logo ${foodCount > 0 ? 'active' : ''}`">
            <img src="@/assets/icon/cart.png" alt="">
          </div>
          <div class="num">{{ foodCount }}</div>
        </div>
        <div class="price">{{ totalPrice }}</div>
        <div class="desc"></div>
      </div>
      <div class="content-right">
        <div class="pay">
          {{ totalPrice < props.minPrice - pay ? ` 还差${props.minPrice - totalPrice}元` : '去结算' }} </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
const props = defineProps({
  selectedFood: {
    type: Array,
    default: () => []
  }
})


const totalPrice = computed(() => {
  const price = props.selectedFood.reduce((num, food) => {
    return num + food.price * food.count
  }, 0)
  return price
})


const foodCount = computed(() => {
  const count = props.selectedFood.reduce((num, food) => {
    return num + food.count
  }, 0)

  return count
})

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.shop-cart {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 46px;

  .content {
    display: flex;
    background-color: @color-background;
    color: @color-light-grey;

    &-left {
      flex: 1;
      display: flex;

      .logo-wrap {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #141d27;
        padding: 6px;
        box-sizing: border-box;
        margin: 0 12px;
        position: relative;
        top: -10px;

        .logo {
          width: 100%;
          height: 100%;
          background-color: @color-dark-grey;
          border-radius: 50%;
          text-align: center;

          &.active {
            background-color: @color-blue;
          }

          img {
            width: 40px;
            height: 40px;

            &.active {
              color: @color-white;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          color: @color-white;
          background-color: @color-red;
          border-radius: 16px;
          font-size: @fontsize-small-s;
        }
      }

      .price {
        line-height: 46px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: @fontsize-large;
        font-weight: bold;

        &.active {
          color: @color-white;
        }
      }

      .desc {
        line-height: 46px;
        font-size: @fontsize-small-s;
        margin-left: 20px;
      }
    }

    &-right {
      flex: 0 0 105px;

      .pay {
        width: 100%;
        height: 100%;
        line-height: 46px;
        text-align: center;

        &.enough {
          background-color: green;
        }
      }
    }
  }
}
</style>