<template>
  <div class="homepage-container">
    <HeaderComp title="OrangeScatter°" :videoSource="orangeVideo3">
      <template v-slot:extra-content>
        <AboutChart :AboutText="AboutText" />
      </template>
    </HeaderComp>
    <div class="content">
      <VarietySelection v-model="selectedVarieties" :options="allVarieties" />
      <div class="charts-container">
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
      <ChartExplanationComp :ChartExplanationObj="chartExplanationObj" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo3 from "../../assets/orangeVideo3.mp4";
import ScatterChart from "../../components/charts/ScatterChart.vue";
const chartExplanationObj = reactive<IChartExplanationObj>({
  explanationText:
    "Dive into the zesty world of our scatter charts, where every dot tells a tantalizing tale of citrus saga! 🍊 Let's embark on a flavor-filled journey:",
  summaryList: [
    {
      key: "Ripeness vs. Brix:",
      description:
        "Uncover the sweet secrets of citrus success. It's like matchmaking for your fruit bowl!",
    },
    {
      key: "Harvest Time vs. Ripeness:",
      description:
        "Witness the love story of time and tenderness, a chronicle of citrus serendipity.",
    },
    {
      key: "Size vs. Quality:",
      description:
        "Behold the grandeur of girth and greatness. Remember, in the orchard of opulence, every orange is outstanding!",
    },
    {
      key: "pH vs. Brix:",
      description:
        "Sip the science of sour and sweet, a tangy tango of taste that’s perfectly balanced.",
    },
    {
      key: "Softness vs. Ripeness:",
      description:
        "Feel the soft whispers of ripeness, where every squeeze tells a story.",
    },
  ],
  footerSentence:
    "Revel in the riot of colors and flavors as our charts peel away the mysteries of oranges, serving you the juiciest gossip from the grove!",
});

import {
  VarietySelection,
  ChartExplanationComp,
  IChartExplanationObj,
  HeaderComp,
  OrangeDataSetJson,
  OrangeVarietyEnum,
  OrangeAttributesEnum,
  IOrange,
  ref,
  computed,
  provide,
  AboutChart,
  reactive,
} from "../../index.ts";
interface VarietyOption {
  name: string;
}

interface VarietyOption {
  name: string;
}

const OrangeDataSet = ref<IOrange[]>(OrangeDataSetJson);

const defaultVarieties = [
  OrangeVarietyEnum.Jaffa,
  OrangeVarietyEnum.BloodOrange,
  OrangeVarietyEnum.Hamlin,
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
  "        A scatter chart is like throwing a bunch of oranges onto a giant gridand seeing where they splatter. Each orange becomes a dot, with itsposition showing its size and juiciness."
);
</script>

<style lang="scss" scoped>
@import "../../styles/_chartPageMixins.scss";

@include chartPageStyling;

</style>
