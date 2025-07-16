import { createApp } from 'vue'
import './styles/app.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
