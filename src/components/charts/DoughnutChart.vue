<template>
  <div class="Doughnut">
    <Doughnut :data="DoughnutData" :options="DoughnutOptions" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, toRefs } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import { IOrange } from "../../interfaces/OrangeInterface";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default defineComponent({
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    Field: String,
  },
  setup(props) {
    const { Field } = toRefs(props);
    const filteredOrangeData = inject<Ref<IOrange[]>>("filteredOrangeData");

    if (!filteredOrangeData) {
      throw new Error("filteredOrangeData is not provided");
    }
    const DoughnutData = computed<ChartData<"doughnut", number[], unknown>>(
      () => {
        const fieldData = filteredOrangeData.value.flatMap((group) =>
          group.data.map((item: IOrange) => item[Field.value])
        );

        const counts = fieldData.reduce(
          (acc: Record<string, number>, value) => {
            const key = value.toString();
            acc[key] = (acc[key] || 0) + 1;
            return acc;
          },
          {}
        );

        const labels = Object.keys(counts);
        const data = Object.values(counts).map(Number);
        const backgroundColors = labels.map(
          () =>
            `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, 0.5)`
        );

        return {
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColors,
              borderWidth: 0.8,
            },
          ],
        };
      }
    );

    const DoughnutOptions = computed<ChartOptions<"doughnut">>(() => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: `Distribution of ${Field.value}`,
          color: "white",
        },
      },
    }));

    return { DoughnutData, DoughnutOptions };
  },
});
</script>

<style scoped>
.Doughnut {
  width: 350px;
}
</style>
