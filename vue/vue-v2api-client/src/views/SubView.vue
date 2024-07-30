<template>

  <div
    :class="`flex flex-col items-center justify-center h-screen py-20 ${mobile ? 'overflow-hidden' : 'overflow-y-auto'}`"
    ref="page">
    <ul class="w-5/6 mx-auto">
      <li class="text-center">
        <div class="mt-24 w-48 h-48 overflow-hidden rounded-full mx-auto"><img class="w-full" src="../assets/author.png"
            alt=""></div>
        <p class="text-2xl w-full mx-auto font-bold my-6 text-center">自定义一下参数吧!</p>
        <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">文件:
          </span>选择从哪个节点库获取节点,如果你不清楚请不要修改默认值!
        </p>
        <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">类型: </span>订阅链接的类型默认v2ray,暂时未适配Clash!
        </p>
        <p class="text-left text-sm w-full mx-auto mb-2"><span class="font-bold">规则: </span>规则参数,如果你没有获得专属的规则,请不要填写此项!
        </p>
        <p class="text-left text-sm w-full mx-auto mb-6"><span class="font-bold">数量:
          </span>默认值为all,当填写的数量大于节点库节点数量时返回最大数量节点,不填或者不合法默认返回1个节点!</p>

        <div
          class="text-center flex align-middle w-full mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 mb-4">
          <p class="w-3/12 text-lg leading-10">File </p><input type="text" placeholder="请输入节点库参数!"
            class="block flex-1 bg-white bg-opacity-30  backdrop-blur-md text-black rounded-full px-4 py-2  focus:outline-none"
            v-model="file">
        </div>

        <div
          class="text-center flex align-middle w-full mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 mb-4">
          <p class="w-3/12 text-lg leading-10">Type </p><input type="text" placeholder="请输入类型参数!"
            class="block flex-1 bg-white bg-opacity-30  backdrop-blur-md text-black rounded-full px-4 py-2  focus:outline-none"
            v-model="type">
        </div>

        <div
          class="text-center flex align-middle w-full mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 mb-4">
          <p class="w-3/12 text-lg leading-10">Name </p><input type="text" placeholder="请输入规则参数!"
            class="block flex-1 bg-white bg-opacity-30  backdrop-blur-md text-black rounded-full px-4 py-2  focus:outline-none"
            v-model="name">
        </div>

        <div
          class="text-center flex align-middle w-full mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-full px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 mb-8">
          <p class="w-3/12 text-lg leading-10">Number </p><input type="text" placeholder="请输入节点数量!"
            class="block flex-1 bg-white bg-opacity-30  backdrop-blur-md text-black rounded-full px-4 py-2  focus:outline-none"
            v-model="number">
        </div>


        <p
          class="bg-black bg-opacity-30 backdrop-filter backdrop-blur-md text-black rounded-xl px-4 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 focus:outline-none h-20 mb-4 text-wrap overflow-hidden text-ellipsis">
          {{ link }}
        </p>

        <button
          class="bg-black bg-opacity-80 backdrop-filter backdrop-blur-md text-white rounded-xl px-20 py-2 hover:bg-opacity-50 hover:shadow-lg transition duration-300 focus:outline-none mb-20"
          @click="copy">复制订阅链接
        </button>
      </li>
    </ul>
  </div>

</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import isMobileDevice from '@/lib/isMobileDevice'
import BScroll from '@better-scroll/core'

const page = ref(null)
const host = "https://v2api.rfym.live"
const file = ref('all')
const type = ref('v2ray')
const name = ref('')
const number = ref('all')
const mobile = ref(false)
const link = computed(() => {
  const res = []
  if (file.value !== '') {
    res.push(`file=${file.value}`)
  }
  if (type.value !== '') {
    res.push(`type=${type.value}`)
  }
  if (name.value !== '') {
    res.push(`name=${name.value}`)
  }
  if (number.value !== '') {
    res.push(`number=${number.value}`)
  }
  return `${host}/?${res.join('&')}`
})
const copy = () => {
  navigator.clipboard.writeText(link.value)
}

onMounted(() => {
  if (isMobileDevice()) {
    mobile.value = true
    nextTick(() => {
      new BScroll(page.value, {
        click: true
      })
    })
  }
})

</script>

<style lang="css" scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>