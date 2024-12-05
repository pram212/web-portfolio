import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import apiClient from './plugins/axios';

const app = createApp(App)
app.use(router)
app.provide("axios", apiClient)
app.mount("#app")

// createApp(App).use(router).mount('#app')

