
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import { Area, ActionSheet } from 'vant'
import 'vant/lib/index.css'
import * as echarts from 'echarts'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(Area)
app.use(ActionSheet)