<template>
  <div class="flex flex-col  h-screen">

    <div class="flex flex-nowrap flexed w-full items-baseline top-0 px-6 py-4 bg-gray-100">

      <div class="text-2xl font-bold">ChatGPT</div>
      <div class="ml-4 text-sm text-gray-500">基于OpenAI的ChatGPT自然语言的模型人工智能对话</div>

      <div class="ml-auto px-3 py-2 text-sm cursor-pointer hover:bg-white rounded-md" v-if="!state.isConfig"
        @click="clickConfig()">注销</div>
    </div>

    <div class="flex-1 mx-2 mt-20 mb-2">
      <div v-for="item of state.messageList.filter((v) => v.role != 'system')"
        :class="`flex group px-4 py-3 rounded-lg ${item.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`">
        <div :class="item.role === 'assistant' ? 'order-2 flex flex-col' : 'order-1 flex flex-col'">
          <div class="rounded-full border-2 inline-block w-12 h-12">
            <img :src="item.role === 'user' ? '/src/assets/user.png' : '/src/assets/robot.png'" alt=""
              class="w-10 mx-auto my-auto rounded-full">
          </div>
          <span class="mx-auto size-8 h-8">{{ item.role === 'assistant' ? 'Bot' : 'User' }}</span>
        </div>
        <div
          :class="`${item.role !== 'assistant' ? 'order-1 mr-4 ml-20' : 'order-2 ml-4 mr-20'} mt-12 bg-gray-100 px-6 py-2 rounded-lg`"
          v-html="item.content"></div>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
      <div class="mb-2 text-sm text-gray-500 ml-4">{{ state.isConfig ? "请输入API key:" : "请输入消息内容: " }}</div>

      <div class="flex">
        <input v-model="messageContent" class="input flex-1 rounded-2xl h-12 pl-8"
          :type="state.isConfig ? 'password' : 'text'" :placeholder="state.isConfig ? 'sk-xxxxxx' : 'Message'"
          @keydown.enter="sandOrSave()">
        <button class="btn ml-4 w-20 bg-black rounded-2xl h-12 text-white" @click="sandOrSave()"
          :disabled="state.isTalking">{{ state.isConfig ? "保存" : state.isTalking ? '⬜' : '发送'
          }}</button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated } from 'vue'
import { chat } from '../libs/gpt'

// isConfig 为true为api-key设置 false为聊天
const state = reactive({
  key: '',
  isConfig: true,
  isTalking: false,
  messageList: [
    {
      role: 'system',
      content: '你是人工智能客服,请尽可能简洁回答问题,回答的输出结果为html5格式,回答内容较长时注意换行'
    },
    {
      role: 'assistant',
      content: "你好，我是AI语言模型，我可以提供一些常用服务和信息，例如：<br><br>1. 翻译：我可以把中文翻译成英文，英文翻译成中文，还有其他一些语言翻译，比如法语、日语、西班牙语等。<br><br>2. 咨询服务：如果你有任何问题需要咨询，例如健康、法律、投资等方面，我可以尽可能为你提供帮助。<br><br>3. 闲聊：如果你感到寂寞或无聊，我们可以聊一些有趣的话题，以减轻你的压力。<br><br>请告诉我你需要哪方面的帮助，我会根据你的需求给你提供相应的信息和建议。<br>"
    }
  ]
})


onUpdated(() => {
  if (state.key !== '') {
    localStorage.setItem("APIkey", state.key)
  }
  const len = state.messageList.length
  const maxLen = 128
  if (len > maxLen) {
    const newList = state.messageList.slice(len - maxLen / 2 + 1)
    state.messageList = newList
  } else {
    localStorage.setItem("messageList", JSON.stringify(state.messageList))
  }
})


onMounted(() => {
  if (localStorage.getItem('APIkey')) {
    state.key = localStorage.getItem('APIkey')
    state.isConfig = false
  }
  if (localStorage.getItem('messageList')) {
    state.messageList = JSON.parse(localStorage.getItem('messageList'))
  }
})

const messageContent = ref('')

const sandOrSave = function () {
  if (!messageContent.value.length) { return }

  const key = messageContent.value.trim()

  if (state.isConfig) {
    // 保存key
    if (saveAPIkey(key)) {
      state.isConfig = false
    }
    messageContent.value = ''
  } else {
    // 发送消息
    sendMessage()
  }

}

const sendMessage = async function () {
  const message = messageContent.value.trim()
  if (!state.isTalking) {
    try {
      state.isTalking = true
      const messages = [
        ...state.messageList,
        {
          role: 'user',
          content: message
        }
      ]

      const data = await chat(messages, state.key)

      if (data !== false) {

        state.messageList.push({
          role: 'user',
          content: message
        })

        state.messageList.push({
          role: 'assistant',
          content: data
        })
        console.log(state.messageList)
      }

    } catch (e) {

      console.log(e)

    } finally {

      state.isTalking = false
      messageContent.value = ''

    }
  }
}

const saveAPIkey = (APIkey) => {

  localStorage.setItem('APIkey', APIkey)
  state.key = APIkey
  return true

}


const clickConfig = () => {
  state.isConfig = true
  messageContent.value = ''
  state.key = ''
  localStorage.removeItem("APIkey")
}

</script>

<style lang="css" scoped>
.input:focus {
  outline: none;
}
</style>