import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})