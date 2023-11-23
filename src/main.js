import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../src/assets/tailwind.css"

// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'
// app.component('VueDatePicker', VueDatePicker);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
