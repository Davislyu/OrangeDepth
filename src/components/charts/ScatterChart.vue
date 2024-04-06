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
    chartData: Array,
    xField: String,
    yField: String,
    xAxisTitle: String,
    yAxisTitle: String,
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
        backgroundColor: group.color,
        borderColor: group.color,
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

<style scoped>
.scatter {
  width: 450px;
  height: 450px;
  display: flex;
}
</style>
