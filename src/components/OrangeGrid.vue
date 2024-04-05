<template>
  <ag-grid-vue
    :rowData="typedProps.rowData"
    :columnDefs="typedProps.colDefs"
    class="ag-theme-quartz-dark"
    style="width: 92%; height: 100%"
  ></ag-grid-vue>
</template>

<script lang="ts" setup>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { defineProps } from "vue";
import { IOrange } from "../interfaces/OrangeInterface";

const props = defineProps({
  rowData: {
    type: Array,
    default: [],
  },
  colDefs: {
    type: Array,
    default: [],
  },
});
const typedProps = props as {
  rowData: IOrange[];
  colDefs: { field: string; headerName: string; filter?: boolean }[];
};
</script>

<style scoped>
.ag-theme-quartz-dark {
  --ag-header-height: 30px;
  --ag-header-foreground-color: white;
  --ag-header-background-color: rgba(241, 133, 0, 0.803);

  --ag-background-color: transparent;
  background-color: transparent !important;
  backdrop-filter: blur(15px);
}

.ag-theme-quartz-dark ::-webkit-scrollbar {
  width: 8px;
}

.ag-theme-quartz-dark ::-webkit-scrollbar-thumb {
  background-color: rgba(241, 133, 0, 0.8);
  border-radius: 4px;
}

.ag-theme-quartz-dark ::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.2);
}

.ag-theme-quartz-dark ::-webkit-scrollbar-corner {
  background-color: black;
}
.ag-theme-quartz {
  background-color: transparent !important;
}

::v-deep .ag-theme-quartz {
  background-color: transparent !important;
}

::v-deep .ag-cell {
  background-color: transparent !important;
}

::v-deep .ag-header-cell {
  background-color: transparent !important;
}
</style>
