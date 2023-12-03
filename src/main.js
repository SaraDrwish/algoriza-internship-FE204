import "./assets/main.css";

import { createApp } from "vue";
import "../src/assets/tailwind.css";

// import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// // import { pinia, setupStore } from "./stores/store";
// // app.use(pinia);
// // setupStore();

// import { setupSearchHotelDetailesStore } from "./stores/SearchHotelDes";
// setupSearchHotelDetailesStore();

// app.use(createPinia());

app.use(router);
app.mount("#app");
