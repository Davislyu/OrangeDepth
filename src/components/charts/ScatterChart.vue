<template>
  <div class="scatter">
    <Scatter :data="ScatterData" :options="ScatterOptions" />
  </div>
</template>

<script lang="ts">
import { defineProps, computed, toRefs, inject } from "vue";
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
    xField: String,
    yField: String,
  },
  setup(props) {
    const { xField, yField } = toRefs(props);
    const filteredOrangeData = inject("filteredOrangeData");
    const ScatterData = computed(() => ({
      datasets: filteredOrangeData.value.map((group) => ({
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
        x: {
          title: { display: true, text: xField.value, color: "white" },
          grid: { color: "gray" },
        },
        y: {
          title: { display: true, text: yField.value, color: "white" },
          grid: { color: "gray" },
        },
      },
      responsive: true,
    }));

    return { ScatterData, ScatterOptions };
  },
};
</script>

<style scoped>
.scatter {
  width: 650px;
}
</style>
