<template>
  <div class="homepage-container">
    <HeaderComp title="OrangeScatter°" :videoSource="orangeVideo3">
      <template v-slot:extra-content>
        <AboutChart :AboutText="AboutText" />
      </template>
    </HeaderComp>
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
        <ScatterChart
          :xField="OrangeAttributesEnum.ripness"
          :yField="OrangeAttributesEnum.brix"
        />
        <ScatterChart
          :xField="OrangeAttributesEnum.harvestTime"
          :yField="OrangeAttributesEnum.ripness"
        />
        <ScatterChart
          :xField="OrangeAttributesEnum.size"
          :yField="OrangeAttributesEnum.quality"
        />
        <ScatterChart
          :xField="OrangeAttributesEnum.ph"
          :yField="OrangeAttributesEnum.brix"
        />
        <ScatterChart
          :xField="OrangeAttributesEnum.softness"
          :yField="OrangeAttributesEnum.ripness"
        />
      </div>
      <div class="charts-explanation">
  <p class="explanation-text">
    Dive into the zesty world of our scatter charts, where every dot tells a tantalizing tale of citrus saga! 🍊 Let's embark on a flavor-filled journey:
    <ul class="summary-list" >
      <li><strong>Ripeness vs. Brix:</strong> Uncover the sweet secrets of citrus success. It's like matchmaking for your fruit bowl!</li>
      <li><strong>Harvest Time vs. Ripeness:</strong> Witness the love story of time and tenderness, a chronicle of citrus serendipity.</li>
      <li><strong>Size vs. Quality:</strong> Behold the grandeur of girth and greatness. Remember, in the orchard of opulence, every orange is outstanding!</li>
      <li><strong>pH vs. Brix:</strong> Sip the science of sour and sweet, a tangy tango of taste that’s perfectly balanced.</li>
      <li><strong>Softness vs. Ripeness:</strong> Feel the soft whispers of ripeness, where every squeeze tells a story.</li>
    </ul>
    Revel in the riot of colors and flavors as our charts peel away the mysteries of oranges, serving you the juiciest gossip from the grove!
  </p>
</div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo3 from "../../assets/orangeVideo3.mp4";
import ScatterChart from "../../components/charts/ScatterChart.vue";
import {
  HeaderComp,
  OrangeDataSetJson,
  OrangeVarietyEnum,
  OrangeAttributesEnum,
  IOrange,
  ref,
  computed,
  provide,
  MultiSelect,
  AboutChart,
} from "../../index.ts";
interface VarietyOption {
  name: string;
}

interface VarietyOption {
  name: string;
}

const OrangeDataSet = ref<IOrange[]>(OrangeDataSetJson);


const defaultVarieties = [OrangeVarietyEnum.Jaffa, OrangeVarietyEnum.BloodOrange,OrangeVarietyEnum.Hamlin];
const selectedVarieties = ref<VarietyOption[]>(
  defaultVarieties.map(variety => ({ name: variety }))
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

const AboutText = ref<string>("        A scatter chart is like throwing a bunch of oranges onto a giant gridand seeing where they splatter. Each orange becomes a dot, with itsposition showing its size and juiciness.")
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
  content: '🍊';
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
  list-style: none;
  padding: 0;
}

.summary-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.4rem;
  text-indent: -0.7rem;
}

.summary-list li::before {
  content: "🍊";
  padding-right: 10px;
}

.summary-list strong {
  color: #dbaf11;
  font-size: 1.3rem;
}

</style>
