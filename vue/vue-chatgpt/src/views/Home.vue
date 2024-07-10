<template>
  <div class="flex flex-col  h-screen relative">

    <div class="nav flex flex-nowrap flexed w-full items-baseline px-3 py-2 bg-gray-100 z-10">

      <div class="text-xl font-bold">Chat</div>
      <div class="ml-4 text-xs text-gray-500">自然语言模型人工智能对话</div>
      <Button :label="state.isConfig ? '登录' : '设置'" @click="openPosition('topright')" size="small"
        class="ml-auto px-2 py-1 text-xs" severity="contrast" outlined />
    </div>

    <div class="flex-1 mx-2 mt-20 mb-2">
      <div v-for="item of state.messageList.filter((v) => v.role != 'system')"
        :class="`flex group px-2 py-3 rounded-lg ${item.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`">
        <div :class="item.role === 'assistant' ? 'order-2 flex flex-col' : 'order-1 flex flex-col'">
          <div class="rounded-full border-2 inline-block w-8 h-8">
            <img src="../assets/robot.png" class="w-8 mx-auto my-auto rounded-full" v-if="item.role === 'assistant'">
            <img src="../assets/user.png" class="w-8 mx-auto my-auto rounded-full" v-if="item.role === 'user'">
          </div>
          <span class="mx-auto text-sm h-8">{{ item.role === 'assistant' ? 'Bot' : 'User' }}</span>
        </div>
        <div
          :class="`${item.role !== 'assistant' ? 'order-1 mr-2 ml-4' : 'order-2 ml-2 mr-4'} mt-12 rounded-lg overflow-hidden shadow border-gray-500 shadow-gray-300 p-1`">
          <MdPreview editorId="preview-only" :modelValue="item.content" />
        </div>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-3 bg-gray-100" v-if="!state.isConfig">
      <div class="mb-2 text-sm text-gray-500 ml-4">请输入消息内容: </div>

      <div class="flex">
        <input v-model="messageContent" class="input flex-1 rounded-2xl h-12 pl-8" type="text" placeholder="Message"
          @keydown.enter="sendMessage" :disabled="state.isTalking">
        <button class="btn ml-4 w-20 bg-black rounded-2xl h-12 text-white" @click="sendMessage"
          :disabled="state.isTalking">{{ state.isTalking ? '⬜️' : '发送' }}</button>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-3 bg-gray-100" v-if="state.isConfig">
      <h1 class="text-center text-3xl text-black">请先在右上角设置信息</h1>
    </div>

    <!-- 设置弹窗 -->
    <Dialog v-model:visible="visible" header="编辑信息" :position="position" :modal="true" :draggable="false">
      <span class="text-surface-500 dark:text-surface-400 block mb-8">
        <h4 class="font-bold text-sm">API填写规范:</h4>
        <p class="text-sm">https://api.openai.com/v1/chat/completions</p>
        <p class="text-sm">https://api.openai.com/v1</p>
        <h4 class="font-bold text-sm">如果你拿到的接口是上面的样子,那么APIhost就填"https://api.openai.com"</h4>
      </span>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">API host</label>
        <InputText id="username" class="flex-auto" autocomplete="off" v-model="state.APIhost" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="APIkey" class="font-semibold w-24">API key</label>
        <InputText id="APIkey" class="flex-auto" autocomplete="off" v-model="state.APIkey" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="取消" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="保存" @click="visible = false; saveSet()" class="bg-black"></Button>
      </div>
    </Dialog>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated } from 'vue'
import { chat } from '../libs/gpt'
// markdown 插件
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
// PrimeVue 组件库
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'


const defaultList = [
  {
    role: 'assistant',
    content: "推荐测试APIhost: https://api.chatanywhere.tech \n 测试APIkey: 凭Github账户可用免费领取一个无限额度的key\n[chatanywhere大佬Github库](https://github.com/chatanywhere/GPT_API_free)"
  },
  {
    role: 'system',
    content: `
      1.回复的篇幅应该尽可能的长，内容尽可能的详细。
      2. 应该从中国大陆的角度去分析问题。
      3. 同时你的角色是专业的架构师，精通html5 css3 JavaScript node vue c/c++ java shell lua 鸿蒙应用开发 Linux后端维护 微信小程序开发师。
      4. 能够给我专业化的指导。你对话题应该发表自己的意见。
      5. 在回复我有关编程的相关知识时，必须给出相应的案例及注释，在遇到相对较难的知识点，你想要给出更长更详细的内容，以帮助我更好的学习。
      6. 在案例中出现的字符串应该是中文，并且应该加入适当的注释。
      7. 需要提供知识点出现的文档，并尽可能多主要以中文网站为主，但外语网站也行。
      8. 当我问的问题有可能存在问题时，你应该纠正，并询问我问的问题，是你(chatgpt)认为的问题吗？
      9. 在回答我相关内容时，你可以向我推荐其他有关联的知识点，在回复我时需要采用正式的语气。
      10. 在回答我时严格按照我的要求，尤其是涉及到文章和短文时。
      11. 回答编程类问题时一定要考虑周全，并严格按照我提供环境或者效果去实现。
      12. 我提问时会尽量简短，你需要抓住我说的话里面的关键词。
      13. 使用markdown形式回复
      `
  }
]

// isConfig 为true为api-key设置 false为聊天
const state = reactive({
  APIhost: '',
  APIkey: '',
  isConfig: true,
  isTalking: false,
  messageList: defaultList
})


onUpdated(() => {
  if (state.APIkey !== '') {
    localStorage.setItem("APIkey", state.APIkey)
  }
  if (state.APIhost !== '') {
    localStorage.setItem("APIhost", state.APIhost)
  }
  saveSet()

  const len = state.messageList.length
  const maxLen = 128
  if (len > maxLen) {
    const newList = state.messageList.slice(len - maxLen / 2 + 1)
    state.messageList = newList
  } else {
    if (state.APIkey) {
      localStorage.setItem("messageList", JSON.stringify(state.messageList))
    }
  }
})


onMounted(() => {
  if (localStorage.getItem('APIkey') && localStorage.getItem('APIhost')) {
    state.APIkey = localStorage.getItem('APIkey')
    state.APIhost = localStorage.getItem('APIhost')
    state.isConfig = false
  }
  if (localStorage.getItem('messageList')) {
    state.messageList = JSON.parse(localStorage.getItem('messageList'))
  }
})

const messageContent = ref('')

const sendMessage = async function () {
  const message = messageContent.value.trim()
  if (!state.isTalking) {
    try {
      state.isTalking = true
      state.messageList.push({
        role: 'user',
        content: message
      })
      const data = await chat(state.messageList.slice(1), state.APIhost, state.APIkey)
      if (data !== false && data !== '') {
        state.messageList.push({
          role: 'assistant',
          content: data
        })
        console.log(state.messageList)
      } else {
        state.messageList.pop()
      }
    } catch (e) {
      state.messageList.pop()
      console.log(e)
    } finally {
      state.isTalking = false
      messageContent.value = ''
    }
  }
}

const saveSet = () => {
  // localStorage.setItem('APIkey', APIkey)
  if (state.APIkey.trim() !== '' && state.APIhost.trim() !== '') {
    state.isConfig = false
  } else {
    state.isConfig = true
  }
}


const ClearMessageHistory = () => {
  localStorage.removeItem("messageList")
  state.messageList = defaultList
}

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
}
</script>

<style lang="css" scoped>
.input:focus {
  outline: none;
}

.nav {
  position: fixed;
  top: 0;
}
</style>