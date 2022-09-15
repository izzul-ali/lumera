import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import Router from './router'

const head = createHead()

createApp(App)
.use(Router)
.use(head)
.mount('#app')