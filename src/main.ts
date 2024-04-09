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
import Scatterpage from "./components/pages/Scatterpage.vue";
import PiePage from "./components/pages/PiePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/Dataset", component: Dataset },
    { path: "/Charts/Scatter", component: Scatterpage },
    { path: "/Charts/Pie", component: PiePage },
  ],
});
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
app.component("ag-grid-vue", AgGridVue);
