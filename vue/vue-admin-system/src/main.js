import { createApp } from 'vue'
import { createPinia } from 'pinia'
// * as 引入全部组件库
import * as ElementPlusIconVue from '@element-plus/icons-vue'

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElIcon
} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component)
}



app.use(createPinia())
app.use(router)
app.use(ElButton)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)
app.use(ElCheckbox)
app.use(ElLink)
app.use(ElIcon)
app.mount('#app')
