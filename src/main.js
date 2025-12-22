import { createApp } from "vue"
import "@assets/style.css"
import App from "./App.vue"
import router from "./router"
import apiClient from "./plugins/axios"
import i18n from "./lang"


const app = createApp(App)
app.use(router)
app.use(i18n)
app.provide("axios", apiClient)
app.mount("#app")