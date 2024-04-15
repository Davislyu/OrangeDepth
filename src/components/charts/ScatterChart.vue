<template>
  <div class="ScatterChart">
    <Scatter :data="ScatterData" :options="ScatterOptions" v-motion-pop-visible />
  </div>
</template>

<script lang="ts">
import { computed, toRefs, inject, Ref } from "vue";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "vue-chartjs";
import { IOrange } from "../../interfaces/OrangeInterface"; 

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
  name: "ScatterChart",
  components: {
    Scatter,
  },
  props: {
    xField: String,
    yField: String,
  },
  setup(props) {
    const { xField, yField } = toRefs(props);
    const filteredOrangeData = inject<Ref<IOrange[]>>("filteredOrangeData");

    if (!filteredOrangeData) {
      throw new Error("filteredOrangeData is not provided");
    }

    const ScatterData = computed(() => ({
      datasets: filteredOrangeData.value.map((group) => {
        return {
          label: group.variety,
          data: group.data.map((d: { [x: string]: any }) => ({
            x: d[xField.value as keyof IOrange],
            y: d[yField.value as keyof IOrange],
          })),
          pointRadius: 5,
          backgroundColor: group.data.map(
            () => `hsl(${Math.random() * 360}, 100%, 75%)`
          ),
          borderColor: group.Color,
        };
      }),
    }));

    const ScatterOptions = computed(() => ({
      scales: {
        x: {
          title: { display: true, text: xField.value, color: "white" },
          grid: { color: "gray" },
        },
        y: {
          title: { display: true, text: yField.value, color: "white" },
          grid: { color: "gray" },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      responsive: true,
    }));

    return { ScatterData, ScatterOptions };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_chartMixins.scss";
.ScatterChart {
  @include scatterChartStyling; 
}
</style>

