<template>
  <div class="cart-control">
    <Transition name="move">
      <div class="cart-decrease" v-if="props.food.count" @click="minusCart">
        <div class="icon-jianhao"><img src="@/assets/icon/minus.png" alt="" style="width: 100%;height: 100%;"></div>
      </div>
    </Transition>
    <div class="cart-count" v-if="props.food.count">{{ props.food.count }}</div>

    <div class="cart-add" @click="addCart">
      <div class="icon-jiahao"><img src="@/assets/icon/add.png" alt="" style="width: 100%;height: 100%;"></div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  food: {
    type: Object,
    default: {}
  }
})

const emits = defineEmits(['update:food'])

const addCart = () => {
  const obj = props.food
  if (!obj.count) {
    obj.count = 1
  } else {
    obj.count++
  }
  emits('update:food', obj)
}

const minusCart = () => {
  const obj = props.food
  if (obj.count) {
    obj.count--
  }
  emits('update:food', obj)
}

</script>
<style lang="less" scoped>
.cart-control {
  display: flex;
  align-items: center;

  .cart-decrease {
    padding: 6px;
    opacity: 1;
    transform: translateX(0);

    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.4s linear;
    }

    &.move-enter-from,
    &.move-leave-to {
      opacity: 0;
      transform: translateX(24px) rotate(180deg);
    }


    .icon-jianhao {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

  .cart-count {
    padding: 6px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .cart-add {
    padding: 6px;

    .icon-jiahao {
      width: 24px;
      height: 24px;
    }
  }
}
</style>