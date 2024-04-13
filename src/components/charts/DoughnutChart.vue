<template>
  <div class="DoughnutChart">
    <Doughnut :data="DoughnutData" :options="DoughnutOptions" v-motion-pop-visible />
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
    Field: {
      type: String,
      required: true,
      default: 'defaultField' // Assuming a default field if none is provided
    },
  },
  setup(props) {
    const { Field } = toRefs(props);
    const filteredOrangeData = inject<Ref<IOrange[]>>("filteredOrangeData");

    if (!filteredOrangeData) {
      throw new Error("filteredOrangeData is not provided");
    }

    const DoughnutData = computed<ChartData<"doughnut", number[], unknown>>(() => {
      const fieldData = filteredOrangeData.value.flatMap((group) =>
        group.data.map((item: IOrange) => item[Field.value as keyof IOrange] as number) // Ensuring that Field.value is used as a key safely
      );

      const counts = fieldData.reduce((acc: Record<string, number>, value) => {
        const key = value ? value.toString() : 'Unknown'; // Default key for undefined values
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

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
    });

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


<style lang="scss" scoped>
@import "../../styles/_chartMixins.scss";
.DoughnutChart {
  @include doughnutChartStyling; 
}
</style>