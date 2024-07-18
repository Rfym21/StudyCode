import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElButton)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)
app.use(ElCheckbox)
app.use(ElLink)
app.mount('#app')
