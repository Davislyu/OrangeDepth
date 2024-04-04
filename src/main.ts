import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // or your chosen theme
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { MotionPlugin } from "@vueuse/motion";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import Dataset from "./components/pages/DatasetPage.vue";
import { AgGridVue } from "ag-grid-vue3";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/Dataset", component: Dataset },
  ],
});
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
app.component("ag-grid-vue", AgGridVue);
