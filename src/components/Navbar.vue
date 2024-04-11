<template>
  <div class="navbar-conatiner"><Menubar :model="items" /></div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => router.push("/"),
  },
  {
    label: "Dataset",
    icon: "pi pi-table",
    command: () => router.push("/dataset"),
  },
  {
    label: "Charts",
    icon: "pi pi-bullseye",
    items: [
      {
        label: "Scatter",
        icon: "pi pi-chart-scatter",
        command: () => router.push("/Charts/Scatter"),
      },
      {
        label: "Doughnut",
        icon: "pi pi-chart-pie",
        color: "red",
        command: () => router.push("/charts/Doughnut"),
      },

      {
        label: "Bar",
        icon: "pi pi-chart-bar",
        command: () => router.push("/charts/Bar"),
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
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 9px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
}

.p-menuitem-link {
  text-decoration: none !important;
}

.p-menuitem-link:focus {
  outline: none;
}
</style>
