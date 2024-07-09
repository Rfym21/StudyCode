<template>
  <h1 :style="fontStyle">

    <!-- <div class="rate" @mouseout="mouseOut">
      <div class="show">
        <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
      </div>
      <div class="hollow" :style="fontwitdh">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </div>
    </div> -->

    <div class="show" @mouseout="mouseOut">
      <span v-for="i in 5" :key="i" @mouseover="mouseOver(i)" @click="onRate(i)">{{ i <= state.scoreIndex ? '★' : '☆'
      }}</span>
    </div>

  </h1>
</template>

<script setup>
import { ref, defineProps, computed, defineEmits, onMounted, reactive } from 'vue'


// 新的需求，需要支持主题颜色
let props = defineProps({
  value: Number,
  theme: { type: String, default: 'orange' }
})

// 自身的状态
// const width = ref(props.value)
// let fontwitdh = computed(() => {
//   return `width: ${width.value}em`
// })

let emits = defineEmits([
  'update-rate'
])

// let rate = computed(() => { return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value) })

const fontStyle = computed(() => {
  return `color: ${themeObj[props.theme]};`
})

const themeObj = {
  orange: '#fa541c',
  blue: '#40a9ff',
  green: '#73d13d',
  black: '#00ff00',
  red: '#f5222d',
  ye1low: '#fadb14'
}

const state = reactive({
  scoreIndex: 0
})

onMounted(() => {
  state.scoreIndex = props.value
})

// 触发自定义事件
const onRate = async () => {
  await emits('update-rate', state.scoreIndex)
  console.log("修改事件( index , value ): ", state.scoreIndex, props.value)
}

function mouseOver(i) {
  state.scoreIndex = Number(i)
  console.log("移动事件( i , index ): ", i, state.scoreIndex)
}

function mouseOut() {
  state.scoreIndex = props.value
  console.log("移出事件( index , value ): ", state.scoreIndex, props.value)
}

</script>

<style lang="css" scoped>
/* .rate {
  position: relative;
  display: block;
}

.rate>.hollow {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}

.rate>span {
  display: block;
  cursor: pointer;
  overflow: hidden;
} */


.show {
  display: flex;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

.show>span {
  cursor: pointer;
}
</style>