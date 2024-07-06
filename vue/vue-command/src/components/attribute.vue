<template>
  <div>
    <img v-bind:src="pic" alt="">
    <a :href="url">百度</a>

    <!-- <h2 @click="handle" :class="name">你干嘛</h2> -->
    <!-- <h2 @click="handle" :class="{ 'red': active }">你干嘛</h2> -->
    <h2 @click="handle" :class="[active ? 'green' : 'red']">你干嘛</h2>
    <h2 @click="handle" :class="['green', 'red']">你干嘛</h2>


    <input type="text" @input="onChange" :value="val">
    <h4 @click="valChange">{{ val }}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const pic = 'https://gips2.baidu.com/it/u=1651586290,17201034&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f600_800'
const url = 'https://www.baidu.com'

// let name = ref('')

// const handle = function () {
//   name.value = 'red'
// }

let active = ref(false)

const handle = function () {
  active.value = !active.value
}


let val = ref('')
const onChange = function (e) {
  console.log(e.target.value)
  val.value = e.target.value
}

const valChange = function () {
  val.value += "你干嘛"
}
</script>

<style lang="css" scoped>
img {
  width: 200px;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>