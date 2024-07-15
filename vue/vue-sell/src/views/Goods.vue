<template>
  <div class="goods">
    <div class="goods-content">

      <div class="menu-wrap" ref="menuWrap">

        <ul>
          <li :class="`menu-item ${state.currentIndex === i ? 'current' : ''}`" v-for="(item, i) in state.foodLists"
            @click="selectMenu(i)"> <span class="text" :key="i">
              <Icon size="3" :type="item.type" v-if="item.type > 0" />
              {{ item.name }}
            </span>
          </li>
        </ul>

      </div>

      <div class="foods-wrap" ref="foodWrap">
        <ul>
          <!-- 菜系 -->
          <li class="food-list" v-for="foodList in state.foodLists" ref="foodList">
            <h1 class="title">{{ foodList.name }}</h1>
            <ul>
              <!-- 菜品 -->
              <li class="food-item" v-for="food in foodList.foods">
                <div class="pic">
                  <img :src="food.image" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <div class="desc">{{ food.description }}</div>
                  <div class="extra">
                    <span class="count" :key="food.count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                  <div class="cartcontrol-wrap">
                    <CartControl :food="food" @update:food="updateDate" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <ShopCart :selectedFood="state.selectedFoods" />
</template>

<script setup>
import Icon from '@/components/support-ico/index.vue'
import { getGoods } from '@/api'
import { reactive, ref, nextTick, computed } from 'vue'
import BScroll from '@better-scroll/core'
import CartControl from '@/components/cart-control/index.vue'
import ShopCart from '@/components/shop-cart/index.vue'

// 滚动效果
const menuWrap = ref(null)
const foodWrap = ref(null)
const initScroll = () => {
  new BScroll(menuWrap.value, {
    click: true
  })

  state.foodScroll = new BScroll(foodWrap.value, {
    click: true,
    probeType: 3
  })

  state.foodScroll.on('scroll', position => {
    state.scrollY = Math.abs(position.y)
    // console.log('滚动', position.y, state.scrollY)
    if (state.currentIndex !== _currentIndex.value) {
      state.currentIndex = _currentIndex.value
    }
  })
}

const _currentIndex = computed(() => {
  for (let i = 0; i < state.listHeight.length; i++) {
    const h1 = state.listHeight[i]
    const h2 = state.listHeight[i + 1]
    if (!h2 || (h1 <= state.scrollY && state.scrollY < h2)) {
      return i
    }
  }
  return 0
})

const state = reactive({
  currentIndex: 0,
  foodLists: [],
  foodScroll: null,
  listHeight: [],
  scrollY: 0,
  selectedFoods: []
})


getGoods().then(res => {
  state.foodLists = res
  console.log('菜品数据', state.foodLists)
  nextTick(() => {
    initScroll()
    calculateHeight()
  })
})

const foodList = ref(null)

const selectMenu = (i) => {

  const height = Math.abs(state.listHeight[i] - state.listHeight[state.currentIndex])
  const delay = Math.floor(height / 2)
  console.log(`${state.currentIndex} - 滚动到 - ${i} - 高度: ${height} - 时间: ${delay}`)
  state.currentIndex = i
  state.foodScroll.scrollToElement(foodList.value[i], delay)
}



// 计算所有菜系的高度
const calculateHeight = () => {

  if (foodList.value !== null) {
    let height = 0
    state.listHeight.push(height)
    foodList.value.forEach((item, i) => {
      height += item.clientHeight
      state.listHeight.push(height)
    })
  }

  console.log('菜系高度', state.listHeight)
}

const updateDate = (updatedFood) => {
  const arr = []
  for (let good of state.foodLists) {
    for (let food of good.foods) {
      if (food.count) {
        console.log('添加', food)
        arr.push(food)
      }
    }
  }

  state.selectedFoods = arr
  console.log(state.selectedFoods);
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

  .foods-wrap {
    flex: 1;

    .title {
      height: 26px;
      line-height: 26px;
      font-size: @fontsize-small;
      color: rgb(147, 153, 159);
      background-color: @color-background-ssss;
      padding-left: 14px;
      border-left: 2px solid #d9dde1;
    }

    .food-item {
      display: flex;
      padding: 18px;

      .pic {
        flex: 0 0 57px;
        margin-right: 10px;

        img {
          width: 100%;
        }
      }

      .content {
        flex: 1;
        position: relative;

        .name {
          font-size: @fontsize-medium;
          color: @color-background;
          margin: 2px 0 8px 0;
        }

        .desc,
        .extra {
          font-size: @fontsize-small-s;
          color: rgb(147, 153, 159);
          margin-bottom: 8px;

          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;

          .now {
            font-size: @fontsize-medium;
            color: @color-red;
            margin-right: 8px;
          }

          .old {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            text-decoration: line-through;
          }
        }

        .cartcontrol-wrap {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }

  }

}
</style>