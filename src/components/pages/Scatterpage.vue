<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">OrangeScatter°</h1>
      <video
        :src="orangeVideo3"
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
        A scatter chart is like throwing a bunch of oranges onto a giant grid
        and seeing where they splatter. Each orange becomes a dot, with its
        position showing its size and juiciness.
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
        <MultiSelect
          v-model="selectedVarieties"
          :options="allVarieties"
          optionLabel="name"
          placeholder="Select varieties"
          display="chip"
        />
      </div>

      <div class="scatterCharts-container">
        <ScatterChart
          :chartData="filteredOrangeData"
          :xField="OrangeAttributesEnum.ripness"
          :yField="OrangeAttributesEnum.brix"
        />
        <ScatterChart
          :chartData="filteredOrangeData"
          :xField="OrangeAttributesEnum.harvestTime"
          :yField="OrangeAttributesEnum.ripness"
        />
        <ScatterChart
          :chartData="filteredOrangeData"
          :xField="OrangeAttributesEnum.size"
          :yField="OrangeAttributesEnum.quality"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo3 from "../../assets/orangeVideo3.mp4";
import arrowDown from "../../assets/arrowDown.png";
import ScatterChart from "../../components/charts/ScatterChart.vue";
import OrangeDataSetJson from "../../data/OrangeDataSet.json";
import { OrangeVarietyEnum } from "../../enums/orangeVarietyEnums";
import { OrangeAttributesEnum } from "../../enums/orangeAttributeEnums.ts";
import { IOrange } from "../../interfaces/OrangeInterface";
import { ref, computed, onMounted, watch } from "vue";
import MultiSelect from "primevue/multiselect";

const videoElement = ref<HTMLVideoElement | null>(null);
interface VarietyOption {
  name: string;
}

const OrangeDataSet = ref<IOrange[]>(OrangeDataSetJson);
const selectedVarieties = ref<VarietyOption[]>([]);
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
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// In your main component
onMounted(() => {
  console.log("Dataset:", OrangeDataSet.value);
});

watch(selectedVarieties, (newVal) => {
  console.log("Selected Varieties:", newVal);
});
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
  justify-content: center;
}

.p-multiselect {
  background-color: transparent;
  border: 1px solid transparent;
}

.p-multiselect:hover {
  background-color: transparent;
}

.p-multiselect:not(p.diabled).p-focus {
  box-shadow: none;
}
</style>
