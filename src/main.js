import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";

import "../src/scss/variables.scss";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// createApp(App).mount("#app");
createApp(App).use(store).use(router).mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router"; // Import your router configuration here

// createApp(App).use(router).mount("#app");
