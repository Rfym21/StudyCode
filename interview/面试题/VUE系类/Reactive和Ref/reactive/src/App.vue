<template>
  <h1>{{ state.msg }}</h1>
  <p>{{ state.data.name }}</p>
  <p>{{ state.data.age }}</p>
  <button @click="changeName">修改</button>
</template>

<script>
import { reactive } from './reactivity/reactive.js'
import { effect } from './reactivity/effect.js'

export default {
  setup() {
    const state = reactive({
      msg: 'Hello Vue 3',
      data: {
        name: '张三',
        age: 18
      }
    })


    const changeName = () => {
      state.msg = 'ngm'
    }

    effect(() => {
      console.log('effect', state.msg[0])
    })

    return {
      state,
      changeName
    }
  }
}

</script>

<style lang="css" scoped></style>