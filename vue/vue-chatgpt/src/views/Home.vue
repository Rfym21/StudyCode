<template>
  <div class="flex flex-col  h-screen relative overflow-y-auto">

    <!-- 顶栏部分 -->
    <div class="nav flex flex-nowrap flexed w-full items-center px-3 py-2 bg-gray-100 z-10">
      <!-- <Button label="聊天列表" @click="NavVisible = true" size="small" class="mr-4 px-2 py-1 text-xs" severity="contrast"
        outlined /> -->
      <button class="w-12 h-10 rounded-lg hover:bg-gray-200 px-2 py-1" @click="NavVisible = true"><img
          src="../assets/ico/nav-left.png" alt="" class=" w-8 h-8"></button>

      <div class="text-xl font-bold flex-1 text-center">{{
        state.model.name || 'gpt-3.5-turbo' }}</div>

      <button class="w-12 h-10 rounded-lg hover:bg-gray-200 px-2 py-1" @click="openPosition('topright')"><img
          src="../assets/ico/nav-right.png" alt="" class="mx-auto my-auto w-6 h-6"></button>
      <!-- <Button :label="state.isConfig ? '登录' : '设置'" @click="openPosition('topright')" size="small"
        class="ml-2 px-2 py-1 text-xs" severity="contrast" outlined /> -->
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

    <!-- 中间信息渲染区域 -->
    <div class="flex-1 mx-2 mt-20 mb-2">
      <div v-for="item of state.messageList[state.messagesIndex].messages.filter((v) => v.role != 'system')"
        :class="`flex group px-2 py-3 rounded-lg ${item.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`"
        v-if="state.messageList[state.messagesIndex]">
        <div :class="item.role === 'assistant' ? 'order-2 flex flex-col' : 'order-1 flex flex-col'">
          <div class="rounded-full border-2 inline-block w-8 h-8">
            <img src="../assets/ico/robot.png" class="w-8 mx-auto my-auto rounded-full" v-if="item.role === 'assistant'">
            <img src="../assets/ico/user.png" class="w-8 mx-auto my-auto rounded-full" v-if="item.role === 'user'">
          </div>
          <span class="mx-auto text-sm h-8">{{ item.role === 'assistant' ? 'Bot' : 'User' }}</span>
        </div>
        <div
          :class="`${item.role !== 'assistant' ? 'order-1 mr-2 ml-4' : 'order-2 ml-2 mr-4'} mt-12 rounded-lg overflow-hidden shadow border-gray-500 shadow-gray-300 p-1`">
          <MdPreview editorId="preview-only" :modelValue="item.content" />
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

    <!-- 底栏部分 -->
    <div class="sticky bottom-0 w-full p-3 bg-gray-100" v-if="!state.isConfig">
      <div class="mb-2 text-sm text-gray-500 ml-4">请输入消息内容: </div>

      <div class="flex">
        <input v-model="state.messageContent" class="input flex-1 rounded-2xl h-12 pl-8" type="text" placeholder="Message"
          @keydown.enter="sendMessage" :disabled="state.isTalking">
        <button class="btn ml-4 w-20 bg-black rounded-2xl h-12 text-white" @click="sendMessage"
          :disabled="state.isTalking">{{ state.isTalking ? '⬜️' : '发送' }}</button>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-3 bg-gray-100" v-if="state.isConfig">
      <h1 class="text-center text-3xl text-black">请先在右上角设置信息</h1>
    </div>
    <!-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

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

      <div class="flex items-center gap-4 mb-4">
        <label for="APIkey" class="font-semibold w-24">API key</label>
        <InputText id="APIkey" class="flex-auto" autocomplete="off" v-model="state.APIkey" />
      </div>

      <div class="flex items-center gap-4 mb-8">
        <label for="APIkey" class="font-semibold w-24">聊天模型</label>
        <Select v-model="state.model" :options="state.modelList" optionLabel="name" placeholder="选择一个模型"
          class="flex-auto" />
      </div>

      <div class="flex justify-end gap-2">
        <Button type="button" label="取消" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="保存" @click="visible = false; saveSet()" class="bg-black"></Button>
      </div>
    </Dialog>
    <!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->

    <!-- 侧边栏 -->

    <Drawer v-model:visible="NavVisible">
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar image="/src/assets/images/avatar.png" class="mr-2" size="xlarge" shape="circle" />
          <h1 class="font-bold text-3xl">如风雨沐丷</h1>
        </div>
      </template>

      <div class="container my-5">
        <div
          :class="`w-full flex item-center rounded-lg hover:bg-gray-100 px-2 py-2 my-2 cursor-pointer ${i === state.messagesIndex ? 'bg-gray-100' : ''}`"
          v-for="(item, i) in state.messageList" :key="i" @click="state.messagesIndex = i">

          <p class="text-black text-sm font-bold flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis pl-2 mr-2 leading-8"
            v-if="!titleChangeStatus">{{ item.title
            }}</p>

          <input type="text"
            class="text-black text-sm font-bold flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis pl-2 rounded-lg mr-2"
            v-if="titleChangeStatus" v-model="item.title" @blur="titleChangeStatus = false">

          <span class="text-bold text-sm block w-8 h-8 px-1 py-1 mr-1 hover:bg-gray-200 rounded-lg"
            @click="titleChangeStatus = true"><img src="../assets/ico/edit.png" alt=""></span>
          <span class="text-bold text-xl block w-8 h-8 px-1 py-1 hover:bg-rose-200 rounded-lg"
            @click="deleteMessages(i)"><img src="../assets/ico/delete.png" alt="" class="w-6 h-6"></span>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-2">
          <Button label="新建聊天" icon="pi pi-user" class="flex-auto" outlined @click="newMessages"></Button>
          <Button label="清空记录" icon="pi pi-sign-out" class="flex-auto" severity="danger" @click.stop="ClearMessageHistory"
            text></Button>
        </div>
      </template>
    </Drawer>

    <!--------------------------------------------------------------------------------------------------------------------------------------------- -->

    <a name="chat"></a>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated, watch } from 'vue'
// import { chat } from '../libs/gpt'
import newChat from '../api/chat.js'
import getLlm from '../api/getLlm.js'
import debounce from '../libs/debounce.js'
// markdown 插件
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
// PrimeVue 组件库
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Drawer from 'primevue/drawer'
import Avatar from 'primevue/avatar'

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const state = reactive({
  APIhost: '',
  APIkey: '',
  isConfig: true,
  isTalking: false,
  messageContent: '',
  messagesIndex: 0,
  messageList: [],
  model: reactive({
    name: 'gpt-3.5-turbo',
    code: 0
  }),
  modelList: [],
  defaultList: [
    {
      role: 'assistant',
      content: "推荐测试APIhost: https://api.chatanywhere.tech \n 测试APIkey: 凭Github账户可用免费领取一个无限额度的key\n[chatanywhere大佬Github库](https://github.com/chatanywhere/GPT_API_free)"
    },
    {
      role: 'system',
      content: `
    ## 回答要求细化整理与扩展

    ### 篇幅与内容
    1. **回复篇幅**：回复应尽可能长，内容尽可能详细。详细分析问题，提供背景知识，解释相关概念，给出实际案例，并提供深入的见解。
    2. **内容角度**：从中国大陆的角度分析问题，考虑当地的行业标准、技术趋势和政策法规。

    ### 专业角色与技能
    3. **角色定位**：有10年以上经验的专业全栈架构师，能够从全局视角规划和设计系统架构。
    4. **技能范围**：
        - **前端技术**：HTML5, CSS3, JavaScript, Node.js, Vue.js, React.js, Angular.js, Uni-app, Flutter, Electron
        - **后端技术**：C/C++, Java, Shell, Lua, Python, Go, Rust, PHP
        - **数据库**：MySQL, MongoDB, Redis, Memcached
        - **服务器与容器**：Nginx, Apache, Docker, Kubernetes
        - **版本控制与CI/CD**：Git, SVN, Jenkins, Jira, Confluence
        - **其他技术**：鸿蒙应用开发, Linux系统管理, 微信小程序开发

    ### 指导与意见
    5. **专业指导**：提供专业化的指导，包括最佳实践、设计模式、性能优化、安全措施等。根据具体情况给出详细的实施步骤和注意事项。
    6. **发表意见**：针对提问发表自己的专业意见，提供优缺点分析，结合实际经验给出建议。

    ### 案例与注释
    7. **案例详尽**：提供相应的案例及注释，案例应包含完整代码、详细步骤、运行结果和分析。
    8. **详细解释**：遇到较难知识点时，提供更长更详细的内容，包括理论背景、应用场景、常见问题及解决方案。
    9. **中文示例**：案例中的字符串应为中文，并加入适当注释，确保易于理解。

    ### 参考文档
    10. **文档资源**：提供知识点相关文档，主要以中文网站为主，外语网站也可接受。列出相关书籍、在线教程、官方文档和技术博客等资源，帮助用户进一步学习。

    ### 纠正与建议
    11. **问题纠正**：发现问题时应纠正，并确认用户的问题是否正确。针对用户的提问提供澄清和补充信息，确保用户理解正确。
    12. **关联知识**：回答相关内容时，推荐其他有关联的知识点，帮助用户建立系统的知识体系。例如，介绍相关技术的基础知识、进阶技巧和实际应用场景。
    13. **正式语气**：采用正式语气回复，确保专业和权威。

    ### 编程问题
    14. **环境考虑**：回答编程类问题时，严格按照用户提供的环境或效果去实现，确保回答具有实际可操作性。考虑不同开发环境和平台的差异，提供适配方案。
    15. **全面考虑**：回答编程类问题时，全面考虑需求，确保解决方案不仅能实现功能，还能满足性能、安全性、可维护性等要求。

    ### 回答格式
    16. **关键词抓取**：抓住用户提问中的关键词，确保回答针对性强，能够直接解决用户的问题。
    17. **Markdown格式**：使用Markdown形式回复，保证排版清晰，重点突出，代码段、引用、列表等格式规范，提升阅读体验。
      `
    }
  ]
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
  }

  if (state.APIkey && state.APIhost) {
    localStorage.setItem("messageList", JSON.stringify(state.messageList))
  }

})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
watch(() => state.APIkey, () => {
  const updateAllLlm = debounce(getAllLlm, 1000)
  updateAllLlm()
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
watch(() => state.messageList[state.messagesIndex], () => {
  const toBottom = debounce(scrollBottom, 1000)
  toBottom()
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
watch(() => state.messageList.length, () => {
  if (state.messageList.length === 0) {
    state.messageList.push({ title: "Define Chat", messages: state.defaultList })
  }
  state.messagesIndex = state.messageList.length - 1
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
onMounted(async () => {
  if (state.messageList.length === 0) {
    state.messageList.push({ title: "New Chat", messages: state.defaultList })
  }

  if (localStorage.getItem('APIkey') && localStorage.getItem('APIhost')) {
    state.APIkey = localStorage.getItem('APIkey')
    state.APIhost = localStorage.getItem('APIhost')
    state.isConfig = false
  }
  if (localStorage.getItem('messageList')) {
    state.messageList = JSON.parse(localStorage.getItem('messageList'))
  }
  scrollBottom()
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 发送消息
const sendMessage = async function () {
  const message = state.messageContent.trim()
  if (!state.isTalking) {
    try {
      state.isTalking = true
      state.messageList[state.messagesIndex].messages.push({
        role: 'user',
        content: message
      })

      scrollBottom()
      console.log(state.messagesIndex)
      const data = await newChat(state.messageList[state.messagesIndex].messages.slice(1), state.APIhost, state.APIkey, state.model.name, state.token)
      if (data !== false && data !== '') {
        state.messageList[state.messagesIndex].messages.push({
          role: 'assistant',
          content: data
        })
        console.log(state.messageList)
      } else {
        state.messageList[state.messagesIndex].messages.pop()
      }
    } catch (e) {
      state.messageList[state.messagesIndex].messages.pop()
      console.log(e)
    } finally {
      state.isTalking = false
      state.messageContent = ''
      scrollBottom()
    }
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 获取所有模型
const getAllLlm = async () => {
  const Data = await getLlm(state.APIhost, state.APIkey)
  if (Data) {
    state.modelList = Data.map((item, index) => ({ name: item, code: index }))
    state.model = state.modelList[0]
  }
}
// 新建聊天
const newMessages = () => {
  state.messageList.push({ title: "New Chat", messages: state.defaultList })
  state.messagesIndex = state.messageList.length - 1
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 判断是否填写完整
const saveSet = () => {
  if (state.APIkey.trim() !== '' && state.APIhost.trim() !== '') {
    state.isConfig = false
  } else {
    state.isConfig = true
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 清空聊天记录
const ClearMessageHistory = () => {
  localStorage.removeItem("messageList")
  state.messageList = [{ title: "Define Chat", messages: state.defaultList }]
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 设置侧边栏
const NavVisible = ref(false);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 设置弹窗
const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 滚动到底部
const scrollBottom = () => {
  location.hash = 'chat'
  setTimeout(() => {
    location.hash = ''
  }, 100)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 修改聊天标题
const titleChangeStatus = ref(false)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 删除当前聊天
const deleteMessages = (i) => {
  if (i === state.messageList.length - 1) {
    state.messagesIndex = state.messageList.length - 2
  }
  state.messageList.splice(i, 1)
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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