<template>
  <div class="homepage-container">
    <HeaderComp title="OrangeDataset°" :videoSource="orangeVideo">
      <template v-slot:extra-content>
        <AboutChart :AboutText="AboutText" />
      </template>
    </HeaderComp>
    <div class="content">
      <OrangeGrid :colDefs="colDefs" :rowData="rowData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo from "../../assets/orangeVideo2.mp4";
import OrangeGrid from "../OrangeGrid.vue";
const OrangeDatSet = ref<IOrange[]>(OrangeDataSetJson);
import {
  HeaderComp,
  OrangeDataSetJson,
  IOrange,
  ref,
  AboutChart,
} from "../../index.ts";

const rowData = ref(OrangeDatSet.value);

const colDefs = ref([
  { field: "Size (cm)", headerName: "Size (cm)", filter: true },
  { field: "Weight (g)", headerName: "Weight (g)" },
  { field: "Brix (Sweetness)", headerName: "Brix (Sweetness)" },
  { field: "pH (Acidity)", headerName: "pH (Acidity)" },
  { field: "Softness (1-5)", headerName: "Softness (1-5)" },
  { field: "HarvestTime (days)", headerName: "HarvestTime (days)" },
  { field: "Ripeness (1-5)", headerName: "Ripeness (1-5)" },
  { field: "Color", headerName: "Color" },
  { field: "Variety", headerName: "Variety" },
  { field: "Blemishes (Y/N)", headerName: "Blemishes (Y/N)" },
  { field: "Quality (1-5)", headerName: "Quality (1-5)" },
]);
const AboutText = ref<string>(
  "Uncover the juicy secrets of our dataset, where every orange is a number-crunching delight! From size to sweetness, our stats go beyond the peel. It’s data with a zesty twist, served fresh for your analytical appetite!"
);
</script>

<style scoped>


.content {
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
