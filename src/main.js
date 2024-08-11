import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

let factor = 1
if (window.devicePixelRatio == 2) {
  factor = 1.6 / window.devicePixelRatio
}
document.querySelector("html").style.zoom = factor
