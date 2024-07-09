<template>
  <div :style="fontStyle">
      <div class="rate" @mouseout="mouseOut">
          <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
          <span class="hollow" :style="fontWidth">
              <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
          </span>
      </div>
  </div>
</template>
<script setup>
// 新的需求 添加主题，不同风格得星星
import { ref, defineProps, computed, defineEmits } from 'vue';
// 自身的状态 
let props = defineProps({
  value: Number,
  theme: { type: String, default: 'orange'}
})

let width = ref(props.value)
let fontWidth = computed(() => `width: ${width.value}em;`);

let themeObj = {
  orange: '#fa541c',
  blue: '#40a9ff',
  green: '#73d13d',
  black: '#000',
  red: '#f5222d',
  yellow: '#fadb14'
}

const fontStyle = computed(() => {
  return `color: ${themeObj[props.theme]}`
})

let emits = defineEmits(["update-rate"])

const onRate = (num) => {
  emits("update-rate", num)
}

function mouseOver(i) {
  width.value = i;
} 

function mouseOut() {
  width.value = props.value;
}
</script>
<style>
  .rate {
      position: relative;
      display: block;
  }
  .rate span{
      display: inline-block;
      width: 1rem;
      height: 22px;
      cursor: pointer;
      overflow: hidden;
  }
  .rate > span.hollow {
      position: absolute;
      display:block;
      top:0;
      left:0;
      width:0;
      overflow:hidden;
  }
</style>