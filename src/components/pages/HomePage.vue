<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">Orange Project</h1>
      <video
        :src="orangeVideo"
        autoplay
        muted
        loop
        class="video-background"
        playsinline
      >
        Your browser does not support the video tag.
      </video>
      <div class="overlay"></div>
      <p class="header-keepScrolling-message">
        <span> <InputIcon class="pi pi-chevron-down"> </InputIcon> </span
        >Squeeze every drop by scrolling Down!
        <span> <InputIcon class="pi pi-chevron-down"> </InputIcon> </span>
      </p>
    </header>

    <div class="content">
      <Fieldset />
      <h2>Interesting Facts about Oranges</h2>
      <div class="facts-container">
        <FactCard
          v-for="fact in facts"
          :key="fact.fact_id"
          :fact_text="fact.fact_text"
        />
      </div>

      <div class="caruselle-container"><CaruselleComp /></div>
      <div class="banner">
        <IconField iconPosition="left">
          <InputIcon class="pi pi-envelope"> </InputIcon>
          <InputText class="email-input" placeholder="Enter Email" />
        </IconField>
        <Button label="Subscribe" class="p-button-rounded p-button-warning" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import orangeVideo from "../../assets/orangeVideo.mp4";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { Ifact } from "../../interfaces/FactInterface";
import FactCard from "../../components/FactCard.vue";
import { reactive } from "vue";
import CaruselleComp from "../CaruselleComp.vue";
import Fieldset from "../FieldsetComp.vue";

const facts = reactive<Ifact[]>([
  {
    fact_id: 1,
    fact_text:
      "One orange provides more than 100% of your daily vitamin Crequirement.",
  },
  {
    fact_id: 2,
    fact_text:
      "One orange provides more than 100% of your daily vitamin C requirement.",
  },
  {
    fact_id: 3,
    fact_text: "The word orange comes from the Sanskrit word naranga",
  },
]);
</script>

<style>
.carousel-inner {
  border-radius: 10px;
}
.header-keepScrolling-message {
  display: flex;
  gap: 1rem;
  color: white;
}
.caruselle-container {
  width: 70%;
  margin-left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
}
.video-background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -10000000;
}

.header-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  text-align: center;
  margin-top: 20%;
  position: relative;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.homepage-container {
  height: 100vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}
.content {
  text-align: center;
  margin-top: 1%;
}

.facts-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.banner .p-inputtext {
  margin-right: 1rem;
}
.fact-icon {
  font-size: 2rem;
  display: inline-block;
}
.p-inputtext:focus {
  outline: none;
  box-shadow: none; /* Remove any box shadow if present */
}

/* Optionally, if you want to remove the border entirely and make it seamless with the background */

.email-input:focus {
  background-color: transparent;
  border: 1px solid orange;
  outline: none;
}
.email-input:hover {
  border: 1px solid orange;
  outline: none;
}
.email-input {
  background-color: transparent;
  border-radius: 9px;
}
</style>
