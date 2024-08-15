import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

const app = createApp(App)
// install 方法 => vue 与 其他生态的桥梁
app.use(store)
app.mount('#app')
