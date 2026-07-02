import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Tel Input Component aur uski CSS ko import karein
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const app = createApp(App)

app.use(router)
// Plugin register karein taake har vue file me direct use ho sake
app.use(VueTelInput)

app.mount('#app')