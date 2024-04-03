import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; // or your chosen theme
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { MotionPlugin } from "@vueuse/motion";
const app = createApp(App);
app.use(PrimeVue);
app.use(MotionPlugin);
app.mount("#app");
