<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">OrangeDoughnut°</h1>
      <video
        :src="orangeVideo4"
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
      <p class="about-scatter-text">
        A Doughnut chart is like slicing up an orange into different wedges,
        with each Doughnutce representing a distinct flavor found within the
        fruit. Each wedge of the Doughnut chart is like a unique taste of the
        orange, showing how sweet, sour, or tangy each section is in comparison
        to the whole. The size of each slice reveals the proportion of that
        flavor, giving a visual taste test of the orange's diverse flavor
        profile.
      </p>
      <div class="downMessage">
        <p class="header-keepScrolling-message">
          <span> <img class="downImg" :src="arrowDown" alt="#" /> </span>
          Squeeze every drop by scrolling Down!
          <span><img class="downImg" :src="arrowDown" alt="#" /> </span>
        </p>
      </div>
    </header>
    <div class="content">
      <div class="varietySelection">
        <h2 class="varietySelection-message">
          Don't be a sour lemon, pick your orange varieties!
        </h2>
        <MultiSelect
          v-model="selectedVarieties"
          :options="allVarieties"
          optionLabel="name"
          placeholder="Select varieties"
          display="chip"
        />
      </div>

      <div class="scatterCharts-container">
        <DoughnutChart :Field="OrangeAttributesEnum.quality" />
        <DoughnutChart :Field="OrangeAttributesEnum.softness" />
        <DoughnutChart :Field="OrangeAttributesEnum.ripness" />
        <DoughnutChart :Field="OrangeAttributesEnum.color" />
      </div>
      <div class="charts-explanation">
        <p class="explanation-text">
          Explore the flavorful world of our Doughnut charts, where each slice
          reveals the juicy secrets of oranges! 🍊 Delight in the vibrant
          tapestry of citrus varieties and tastes.
        </p>
        <ul class="summary-list">
          <li>
            <strong>Quality Distribution:</strong> Explore the spectrum of
            quality across our orange varieties, revealing the high standards
            and meticulous care in every segment.
          </li>
          <li>
            <strong>Color Diversity:</strong> Feast your eyes on the colorful
            palette of nature as we dissect the hues, from the deep greens of
            unripe fruit to the vibrant oranges of peak ripeness.
          </li>
          <li>
            <strong>Ripeness Levels:</strong> Gauge the stages of maturity and
            readiness for consumption, showing how each variety progresses from
            tart to tantalizingly sweet.
          </li>

          <li>
            <strong>Softness Spectrum:</strong> Feel the texture range with a
            visual touch, illustrating the journey from firm to tender as each
            orange reaches its peak softness.
          </li>
        </ul>
        <p>
          Revel in the riot of colors and flavors as our charts peel away the
          mysteries of oranges, serving you the juiciest gossip from the grove!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo4 from "../../assets/orangeVideo4.mp4";
import arrowDown from "../../assets/arrowDown.png";
import DoughnutChart from "../../components/charts/DoughnutChart.vue";
import OrangeDataSetJson from "../../data/OrangeDataSet.json";
import { OrangeVarietyEnum } from "../../enums/orangeVarietyEnums";
import { OrangeAttributesEnum } from "../../enums/orangeAttributeEnums.ts";
import { IOrange } from "../../interfaces/OrangeInterface";
import { ref, computed, provide } from "vue";
import MultiSelect from "primevue/multiselect";

const videoElement = ref<HTMLVideoElement | null>(null);
interface VarietyOption {
  name: string;
}

const OrangeDataSet = ref<IOrange[]>(OrangeDataSetJson);

const defaultVarieties = [OrangeVarietyEnum.Jaffa];
const selectedVarieties = ref<VarietyOption[]>(
  defaultVarieties.map((variety) => ({ name: variety }))
);

const allVarieties = ref(
  Object.values(OrangeVarietyEnum).map((variety) => ({ name: variety }))
);

const filteredOrangeData = computed(() => {
  return selectedVarieties.value.map((selected) => {
    return {
      variety: selected.name,
      data: OrangeDataSet.value.filter(
        (orange) => orange.Variety === selected.name
      ),
      color: getRandomColor(),
    };
  });
});
provide("filteredOrangeData", filteredOrangeData);

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
</script>

<style scoped>
* {
  font-weight: 100;
}
.varietySelection-message {
  color: gray;
}
.charts-explanation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: transparent;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.explanation-text {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
}

.explanation-text ul {
  list-style-type: none;
  padding: 0;
}

.explanation-text li {
  margin-bottom: 0.5rem;
  padding-left: 1.4rem;
  text-indent: -0.7rem;
}

.explanation-text li::before {
  content: "🍊";
  padding-right: 10px;
}

.explanation-text strong {
  color: #000d1a;
  font-size: 1.3rem;
}

.header-keepScrolling-message {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
}

.about-scatter-text {
  color: white;
  width: 40%;
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
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  backdrop-filter: blur(90px);
}
.scatterCharts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
}
.varietyCheckBoxes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  background: red;
}
.varietySelection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.p-multiselect {
  background-color: transparent;
  border: 1px solid transparent;
  max-width: 100%;
}

.p-multiselect:hover {
  background-color: transparent;
}

.p-multiselect:not(p.diabled).p-focus {
  box-shadow: none;
}
.summary-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>
