<template>
  <div class="scatter">
    <Scatter :data="ScatterData" :options="ScatterOptions" />
  </div>
</template>

<script lang="ts">
import { defineProps, computed, toRefs } from "vue";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "vue-chartjs";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
  name: "ScatterChart",
  components: {
    Scatter,
  },
  props: {
    varieties: Array,
    chartData: Array,
    xAxisTitle: String,
    yAxisTitle: String,
    xField: String,
    yField: String,
  },
  setup(props) {
    const { chartData, xField, yField, xAxisTitle, yAxisTitle } = toRefs(props);

    const ScatterData = computed(() => ({
      datasets: chartData.value.map((group) => ({
        label: group.variety,
        data: group.data.map((d) => ({
          x: d[xField.value],
          y: d[yField.value],
        })),
        pointRadius: 5,
      })),
    }));

    const ScatterOptions = computed(() => ({
      scales: {
        x: { title: { display: true, text: xAxisTitle.value } },
        y: { title: { display: true, text: yAxisTitle.value } },
      },
      responsive: true,
    }));

    return { ScatterData, ScatterOptions };
  },
};
</script>
