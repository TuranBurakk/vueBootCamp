import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import AppHeader from '@/components/AppHeader.vue'

const app = createApp(App)

app.component('app-header', AppHeader)

app.mount('#app')
