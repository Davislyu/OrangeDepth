<template>
  <div class="BarChart">
    <Bar :data="barData" :options="barOptions" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, toRefs } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    Field: String,
  },
  setup(props) {
    const { Field } = toRefs(props);
    const filteredOrangeData = inject("filteredOrangeData");

    if (!filteredOrangeData) {
      throw new Error("filteredOrangeData is not provided");
    }

    const barData = computed(() => {
      const labels = filteredOrangeData.value.map((group) => group.variety);
      const data = filteredOrangeData.value.map((group) => {
        const sum = group.data.reduce(
          (acc, item) => acc + Number(item[Field.value]),
          0
        );
        return sum / group.data.length;
      });
      const backgroundColors = filteredOrangeData.value.map(
        () => `hsl(${Math.random() * 360}, 60%, 75%)`
      );

      return {
        labels,
        datasets: [
          {
            label: `Average ${Field.value}`,
            data,
            backgroundColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      };
    });

    const barOptions = computed(() => ({
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: `Average ${Field.value} by Variety`,
          color: "white",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: `Average ${Field.value}`,
            color: "white",
          },
          ticks: {
            color: "white",
          },
        },
        x: {
          title: {
            display: true,
            text: "Variety",
            color: "white",
          },
          ticks: {
            color: "white",
          },
        },
      },
    }));

    return { barData, barOptions };
  },
});
</script>

<style scoped>
.BarChart {
  width: 100%;
  max-width: 600px;
}
</style>
