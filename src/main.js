import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";

import VueScrollTo from "vue-scrollto";

import "../src/scss/variables.scss";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(router).use(VueScrollTo).mount("#app");
