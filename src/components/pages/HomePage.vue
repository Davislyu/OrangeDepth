<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">OrangeDepth°</h1>
      <video
        :src="orangeVideo"
        autoplay
        muted
        loop
        class="video-background"
        playsinline
        ref="videoElement"
      >
        Your browser does not support the video tag.
      </video>
      <div class="overlay"></div>
      <div class="downMessage">
        <p class="header-keepScrolling-message">
          <span> <img class="downImg" :src="arrowDown" alt="#" /> </span>Squeeze
          every drop by scrolling Down!
          <span><img class="downImg" :src="arrowDown" alt="#" /> </span>
        </p>
      </div>
    </header>
    <div class="content">
      <About_siteComp :about_text="aboutSiteText" />

      <div class="facts-container">
        <FactCard
          v-for="fact in paginatedFacts"
          :key="fact.fact_id"
          :fact_text="fact.fact_text"
          v-motion-slide-visible-left
        />
      </div>

      <Button
        label="Refresh"
        @click="nextPage"
        severity="warning"
        outlined
        class="button-refresh"
      />
      <div class="merch-container">
        <div class="merch-text">
          <h1>Our exclusive AI generated merch</h1>
          <p>
            Discover our exclusive AI-generated merchandise collection, where
            the zest of oranges meets the precision of data charts! Dive into a
            wardrobe where every piece is a splash of citrus sunshine,
            meticulously blended with the analytical prowess of data
            visualization. Our clothing line is not just apparel; it's a
            statement for those who revel in the tangy touch of oranges and the
            sharp insights of charts.
          </p>
        </div>
        <div class="caruselle-container">
          <CaruselleComp
            :images="[
              shirt,
              shirt2,
              shirt3,
              shirt4,
              shoes,
              shoes2,
              shoes3,
              socks,
              hat,
              umbrella,
              pants,
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import orangeVideo from "../../assets/orangeVideo.mp4";
import { Ifact } from "../../interfaces/FactInterface";
import FactCard from "../../components/FactCard.vue";
import { reactive, ref, computed, onMounted } from "vue";
import CaruselleComp from "../CaruselleComp.vue";
import About_siteComp from "../About_siteComp.vue";

import arrowDown from "../../assets/arrowDown.png";
import shirt from "../../assets/clothing/shirt.png";
import shirt2 from "../../assets/clothing/shirt2.png";
import shirt3 from "../../assets/clothing/shirt3.png";
import shirt4 from "../../assets/clothing/shirt4.png";
import pants from "../../assets/clothing/pants.png";
import socks from "../../assets/clothing/socks.png";
import umbrella from "../../assets/clothing/umbrella.png";
import shoes from "../../assets/clothing/shoes.png";
import shoes3 from "../../assets/clothing/shoes3.png";
import shoes2 from "../../assets/clothing/shoes2.png";
import hat from "../../assets/clothing/hat.png";

const videoElement = ref<HTMLVideoElement | null>(null);
const currentPage = ref(0);
const pageSize = 3;
const aboutSiteText = ref(
  "Welcome to the juiciest website this side of the orange grove! This little slice of the internet was hand-squeezed with a whole lot of love, orange juice, and an unhealthy obsession with citrus fruits. But don't let the playful peel fool you – beneath the zesty exterior lies a serious commitment to helping you master the art of working with datasets and charts. We're talking ag-grid mastery and chart.js wizardry, all served up with a refreshing twist of orange goodness. Imagine being able to slice and dice data like a pro, creating visualizations so tantalizing, they'll make your taste buds (and your boss) do a happy dance. And the best part? You'll learn it all while basking in the warm, citrusy glow of our orange-infused content. So, whether you're a data ninja in training o      just someone who appreciates a good dose of vitamin C (both the nutrient and the coding variety), you've come to the right place. Grab a glass of your favorite orange juice, kick back, and get ready to embark on a journey that's equal parts educational and deliciously entertaining. Just remember, if you ever feel like you're losing your zest, take a deep breath and repeat after us: I am the orange overlord, and data is my juicy domain! Now, let's get squeezing! (But not too hard, we don't want any pulp in our code.)"
);
const facts = reactive<Ifact[]>([
  {
    fact_id: 1,
    fact_text:
      "Oranges are a rich source of vitamin C, which is essential for the immune system.",
  },
  {
    fact_id: 2,
    fact_text: "The orange is a hybrid between pomelo and mandarin.",
  },
  {
    fact_id: 3,
    fact_text: "Oranges originated around 4000 B.C. in Southeast Asia.",
  },
  {
    fact_id: 4,
    fact_text: "The fruit  used to describe the color.",
  },
  {
    fact_id: 5,
    fact_text: "There are over 600 varieties of oranges worldwide.",
  },
  {
    fact_id: 6,
    fact_text: "Brazil is the largest producer of oranges in the world.",
  },
  {
    fact_id: 7,
    fact_text: "Oranges are the largest citrus fruit in the world.",
  },
  {
    fact_id: 8,
    fact_text:
      "An orange tree can grow to reach 30 feet and live for over a hundred years.",
  },
  {
    fact_id: 9,
    fact_text:
      "Almost one-third of the world’s orange supply comes from Brazil.",
  },
  {
    fact_id: 10,
    fact_text:
      "Orange peels are rich in nutrients, including fiber, vitamin C, and plant compounds like polyphenols.",
  },
  {
    fact_id: 11,
    fact_text:
      "Oranges grow on evergreen flowering trees. These trees have a lifespan of over 50 years! Hence, an orange tree can provide its fruits to multiple generations.",
  },
  {
    fact_id: 12,
    fact_text:
      "Orange is just a modified berry! And just like other berries, oranges also have three fleshy layers with two or more seeds. They also develop from just one flower with one ovary.",
  },
]);
const paginatedFacts = computed(() => {
  const start = currentPage.value * pageSize;
  return facts.slice(start, start + pageSize);
});
onMounted(() => {
  if (videoElement.value) {
    videoElement.value.playbackRate = 0.8;
  }
});

function nextPage() {
  if ((currentPage.value + 1) * pageSize < facts.length) {
    currentPage.value++;
  } else {
    currentPage.value = 0;
  }
}
</script>

<style scoped>
* {
  font-weight: 100;
}

.header-keepScrolling-message {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
}

.downImg {
  width: 35px;
  height: 35px;
}

.downMessage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 2px;
  position: relative;
  color: #fff;
  font-size: 4rem;
  font-weight: 100;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
}
.header-title:after,
.header-title:before {
  content: " ";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 0px solid #fff;
  transition: all 1s;
}

.header-title:after {
  top: -1px;
  left: -1px;
  border-top: 2px solid orange;
  border-left: 2px solid orange;
}

.header-title:before {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid orange;
  border-right: 2px solid orange;
}

.header-title:hover {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.header-title:hover:before,
.header-title:hover:after {
  width: 100%;
  height: 100%;
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
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}
.content {
  text-align: center;
}

.facts-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
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
  box-shadow: none;
}

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

.merch-container {
  color: whitesmoke;
  backdrop-filter: blur(20px);
  gap: 2rem;
  margin-top: 1rem;
}
.merch-text {
  margin-left: 10%;
  margin-right: 10%;
  line-height: 3rem;
  padding: 2rem;
}
</style>
