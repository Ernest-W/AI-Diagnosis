import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/global.css';
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
