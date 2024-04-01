import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
const app = createApp(App);
app.use(PrimeVue);
