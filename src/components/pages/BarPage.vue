<template>
  <div class="homepage-container">
    <HeaderComp title="OrangeBar°" :videoSource="orangeVideo5">
      <template v-slot:extra-content>
        <AboutChart :AboutText="AboutText" />
      </template>
    </HeaderComp>
    <div class="content">
      <VarietySelection v-model="selectedVarieties" :options="allVarieties" />
      <div class="scatterCharts-container">
        <BarChart :Field="OrangeAttributesEnum.quality" />
        <BarChart :Field="OrangeAttributesEnum.brix" />
        <BarChart :Field="OrangeAttributesEnum.ripness" />
        <BarChart :Field="OrangeAttributesEnum.weight" />
        <BarChart :Field="OrangeAttributesEnum.ph" />
      </div>
      < <ChartExplanationComp :ChartExplanationObj="chartExplanationObj" />
    </div>
  </div>
</template>

<script lang="ts" setup>
//personal
import orangeVideo5 from "../../assets/orangeVideo5.mp4";
import BarChart from "../../components/charts/BarChart.vue";
//General imports
import {
  VarietySelection,
  IChartExplanationObj,
  reactive,
  ChartExplanationComp,
  HeaderComp,
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

const defaultVarieties = [
  OrangeVarietyEnum.Jaffa,
  OrangeVarietyEnum.Ambiance,
  OrangeVarietyEnum.BloodOrange,
  OrangeVarietyEnum.CaliforniaValencia,
  OrangeVarietyEnum.StarRuby,
  OrangeVarietyEnum.SatsumaMandarin,
];
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
  "A Bar chart is like stacking up slices of an orange, with each bar representing a distinct flavor found within the fruit. Each bar in the Bar chart is like a unique taste of the orange, showing how sweet, sour, or tangy each section is in comparison to the others. The height of each bar reveals the proportion of that flavor, giving a visual representation of the orange's diverse flavor profile."
);
const chartExplanationObj = reactive<IChartExplanationObj>({
  explanationText:
    "Explore the flavorful world of our Bar charts, where each bar reveals the juicy secrets of oranges! 🍊 Delight in the vibrant tapestry of citrus varieties and tastes.",
  summaryList: [
    {
      key: "Quality Analysis:",
      description:
        "Delve into the quality variance among our orange varieties, showcasing the rigorous standards and attention to detail in every bar.",
    },
    {
      key: "Sweetness Scale (Brix):",
      description:
        "Taste the sweetness levels as our bar charts break down the Brix values, from the mildly sweet to the sugary delights of peak ripeness.",
    },
    {
      key: "Ripeness Ratio:",
      description:
        "Track the ripeness stages, with bars indicating how each variety evolves from just ripe to fully luscious.",
    },
    {
      key: "Weight Distribution:",
      description:
        "Evaluate the weight differences, illustrating the range from light to heavy oranges, captured in each bar.",
    },
    {
      key: "Acidity Profile (pH):",
      description:
        "Experience the spectrum of acidity as our charts illustrate the pH levels, from the tangy zest to the mellow smoothness.",
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
