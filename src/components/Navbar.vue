<template>
  <Menubar :model="items" />
</template>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Dataset",
    icon: "pi pi-table",
  },
  {
    label: "Charts",
    icon: " pi pi-bullseye ",

    items: [
      {
        label: "Scatter",
        icon: "pi pi-chart-scatter",
      },
      {
        label: "Pie",
        icon: "pi pi-chart-pie",
        color: "red",
      },
      {
        label: "Line",
        icon: "pi pi-chart-line",
      },

      {
        label: "Bar",
        icon: "pi pi-chart-bar",
      },
    ],
  },
]);
</script>
