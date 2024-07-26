<template>
  <div class=" w-5/6 mx-auto py-20 mt-20 bg-slate-100 rounded-md">

    <form @submit.prevent="onSubmit">
      <h1 class="text-2xl font-bold text-center mb-5">如风雨沐丷</h1>
      <!-- 接口地址 -->
      <input type="text" placeholder="https://api.openai.com" v-model="url"
        class="w-3/4 mx-auto block py-2 px-4 rounded-md border bg-slate-100 mb-5 border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent">
      <!-- Key -->
      <input placeholder="请输入Key" v-model="key"
        class="w-3/4 mx-auto block py-2 px-4 rounded-md border bg-slate-100 mb-5 border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
        type="password">
      <!-- 提交按钮 -->
      <button type="submit"
        class="show w-3/4 mx-auto block py-2 px-4 rounded-md bg-slate-400 text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:border-transparent"
        :disabled="submitBtn">提交</button>
    </form>

    <div v-if="models.length">

      <div class="w-5/6 mt-8 mx-auto">
        <ul>
          <li :class="`show rounded-md p-2 m-1 inline-block ${item.status ? 'bg-black text-white' : ' bg-gray-300'}`"
            v-for="item in models" @click="item.status = !item.status"><span>{{
              item.model }}</span></li>
        </ul>
      </div>

      <!-- 选中预览框 -->
      <div class="show w-5/6 mx-auto bg-gray-300 min-h-40 mt-5 p-4 rounded-2xl mb-4">{{ modelsCopy }}</div>
      <div class="w-5/6 mx-auto flex justify-between">
        <button class="show w-2/5 ml-2 text-center text-white bg-black p-2 rounded-xl transition-all tr"
          @click="allCheckedChange">{{
            allChecked ? '全不选' : '全选' }}</button>
        <button class="w-2/5 mr-2 text-center text-white bg-black p-2 rounded-xl" @click="Copy">复制选中</button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const url = ref('')
const key = ref('')
const submitBtn = ref(false)
const models = ref([])
const allChecked = ref(false)

const allCheckedChange = () => {
  allChecked.value = !allChecked.value
  models.value.forEach(item => {
    item.status = allChecked.value
  })
}

const modelsCopy = computed(() => {
  const res = []
  models.value.forEach(item => {
    if (item.status === true) {
      res.push(item.model)
    }
  })
  return res.toString()
})

const Copy = () => {
  navigator.clipboard.writeText(modelsCopy.value)
  alert('复制成功')
}

const onSubmit = () => {
  if (url.value.trim() === '' || key.value.trim() === '') {
    alert('接口地址和Key不能为空')
    return
  }

  submitBtn.value = true
  axios.get(url.value.trim() + '/v1/models', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key.value.trim()
    }
  })
    .then(res => res.data.data)
    .then(data => {
      models.value = data.map(item => {
        return { model: item.id, status: false }
      })
    })
  submitBtn.value = false
}
</script>

<style lang="css" scoped>
.show {
  transition: all 0.5s;
}
</style>