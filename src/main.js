import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

const factor = window.devicePixelRatio == 1 ? 1 : 1.6 / window.devicePixelRatio
document.querySelector("html").style.zoom = factor
