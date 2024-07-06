<template>
  <div>
    <ul>
      <li @click="showName(item)" v-for="(item, index) in list" :key="item.id">{{ index + 1 }}---{{ item.name }}</li>
    </ul>

    <button v-on:mouseleave="handle">确认</button>
  </div>
</template>

<script setup>
const list = [
  {
    id: 1,
    name: '稻香'
  },
  {
    id: 2,
    name: '彩虹'
  },
  {
    id: 3,
    name: '七里香'
  },
  {
    id: 4,
    name: '青花瓷'
  },
  {
    id: 5,
    name: '夜曲'
  }
]

const handle = function () {
  console.log('确认')
}
const showName = function (item) {
  console.log(item.name)
}

</script>

<style lang="css" scoped></style>