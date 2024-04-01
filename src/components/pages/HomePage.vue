<template>
  <div class="homepage-container">
    <header>
      <h1>Orange Project</h1>
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
    </header>

    <div class="content">
      <h2>Interesting Facts about Oranges</h2>
      <div class="facts-container">
        <FactCard
          v-for="fact in facts"
          :key="fact.fact_id"
          :fact_text="fact.fact_text"
        />
      </div>

      <div class="banner">
        <InputText placeholder="Enter your email" />
        <Button label="Subscribe" class="p-button-rounded p-button-warning" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo from "../../assets/orangeVideo.mp4";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { Ifact } from "../../interfaces/FactInterface";
import FactCard from "../../components/FactCard.vue";
import { reactive } from "vue";

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

<style scoped>
.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
}

header {
  position: relative;
  height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
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
  padding: 2rem;
  text-align: center;
  background-color: #133337;
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
</style>
