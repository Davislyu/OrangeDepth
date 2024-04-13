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
      const datasets = [
        {
          label: `Average ${Field.value}`,
          data: filteredOrangeData.value.map(
            (group) =>
              group.data.reduce(
                (acc, item) => acc + Number(item[Field.value]),
                0
              ) / group.data.length
          ),
          backgroundColor: filteredOrangeData.value.map(
            () => `hsl(${Math.random() * 360}, 60%, 75%)`
          ),
          borderColor: "white",
          borderWidth: 1,
        },
      ];

      return {
        labels: filteredOrangeData.value.map((group) => group.variety),
        datasets,
      };
    });

    const barOptions = computed(() => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
          labels: {
            color: "white",
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: `Average ${Field.value} by Variety`,
          color: "white",
          font: {
            size: 18,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
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

<style lang="scss" scoped>
@import "../../styles/_chartMixins.scss";
.BarChart {
  @include barChartStyling;  
}
</style>
