<template>
  <div class="homepage-container">
    <HeaderComp title="OrangeDoughnut°" :videoSource="orangeVideo4">
      <template v-slot:extra-content>
        <AboutChart :AboutText="AboutText" />
      </template>
    </HeaderComp>
    <div class="content">
      <VarietySelection v-model="selectedVarieties" :options="allVarieties" />

      <div class="scatterCharts-container">
        <DoughnutChart :Field="OrangeAttributesEnum.quality" />
        <DoughnutChart :Field="OrangeAttributesEnum.softness" />
        <DoughnutChart :Field="OrangeAttributesEnum.ripness" />
        <DoughnutChart :Field="OrangeAttributesEnum.color" />
      </div>
      <ChartExplanationComp :ChartExplanationObj="ChartExplanationObj" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo4 from "../../assets/orangeVideo4.mp4";
import DoughnutChart from "../../components/charts/DoughnutChart.vue";
import {
  VarietySelection,
  ChartExplanationComp,
  IChartExplanationObj,
  HeaderComp,
  reactive,
  OrangeDataSetJson,
  OrangeVarietyEnum,
  OrangeAttributesEnum,
  IOrange,
  ref,
  computed,
  provide,
  AboutChart,
} from "../../index.ts";

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
const AboutText = ref<string>(
  "A Doughnut chart is like slicing up an orange into different wedges,with each Doughnutce representing a distinct flavor found within the fruit. Each wedge of the Doughnut chart is like a unique taste of the orange, showing how sweet, sour, or tangy each section is in comparison to the whole. The size of each slice reveals the proportion of that flavor, giving a visual taste test of the orange's diverse flavor profile."
);
const ChartExplanationObj = reactive<IChartExplanationObj>({
  explanationText:
    "Explore the flavorful world of our Doughnut charts, where each slice reveals the juicy secrets of oranges! 🍊 Delight in the vibrant tapestry of citrus varieties and tastes.",
  summaryList: [
    {
      key: "Quality Distribution:",
      description:
        "Explore the spectrum of quality across our orange varieties, revealing the high standards and meticulous care in every segment.",
    },
    {
      key: "Color Diversity:",
      description:
        "Feast your eyes on the colorful palette of nature as we dissect the hues, from the deep greens of unripe fruit to the vibrant oranges of peak ripeness.",
    },
    {
      key: "Ripeness Levels:",
      description:
        "Gauge the stages of maturity and readiness for consumption, showing how each variety progresses from tart to tantalizingly sweet.",
    },
    {
      key: "Softness Spectrum:",
      description:
        "Feel the texture range with a visual touch, illustrating the journey from firm to tender as each orange reaches its peak softness.",
    },
  ],
  footerSentence:
    "Revel in the riot of colors and flavors as our charts peel away the mysteries of oranges, serving you the juiciest gossip from the grove!",
});
</script>

<style scoped>
* {
  font-weight: 100;
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
</style>
