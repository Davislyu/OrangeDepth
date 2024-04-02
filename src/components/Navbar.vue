<template>
  <div class="navbar-conatiner"><Menubar :model="items" /></div>
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

<style>
.navbar-conatiner {
  width: 100%;
  position: fixed;
}

.p-menuitem-link:hover {
  background-color: rgba(255, 255, 255, 0.52);
  border-radius: 9px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.p-menuitem-text,
.p-menuitem-icon {
  color: white;
}

.p-menubar {
  background-color: transparent;
}

.p-menubar.p-component {
  background-color: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid transparent;
}

.p-menuitem-content {
  background-color: transparent;
}

.p-menuitem-content:hover {
  background-color: transparent;
  border-radius: 20px;
}

.p-menuitem-active {
  border-radius: 20px;
}

.p-submenu-list,
#pv_id_1.p-menubar-root-list {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.p-menuitem-link {
  text-decoration: none !important;
}

.p-menuitem-link:focus {
  outline: none;
}
</style>
