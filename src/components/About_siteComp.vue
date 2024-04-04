<template>
  <section class="about-container">
    <div class="logo">
      <img class="logo" :src="LogoImage2" alt="logoImage" />
    </div>
    <div class="about_siteContent">
      <h2 class="about-header">About This Website</h2>
      <p class="about-text">{{ props.about_text }}</p>
    </div>
  </section>
</template>
<script setup>
import Panel from "primevue/panel";
import { defineProps } from "vue";
import LogoImage from "../assets/orangeLogo.png";
import LogoImage2 from "../assets/website_logo.png";

const props = defineProps({
  about_text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@media screen and (max-width: 1500px) {
  .about-container {
    display: flex;
    flex-direction: column;
  }
}

.about-header {
  margin-top: 2%;
  font-weight: 150;
}
.about-container {
  color: whitesmoke;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  gap: 2rem;
}
.about-text {
  margin-left: 10%;
  margin-right: 10%;
  line-height: 1.7rem;
}
.logo {
  width: 600px;
  height: 600px;
}
</style>
