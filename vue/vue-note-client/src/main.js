
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Form, Field, CellGroup, Icon } from 'vant'
import 'lib-flexible/flexible.js'
import './assets/reset.css'
import 'vant/lib/index.css'


const app = createApp(App)
app.use(Icon)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Button)
app.use(router)
app.mount('#app')
