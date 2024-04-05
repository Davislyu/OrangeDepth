<template>
  <div class="nav"><Navbar /></div>
  <router-view />
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
.nav {
  position: absolute;
  width: 100vw;
  z-index: 1000;
}

html {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: rgba(241, 133, 0, 0.8) rgba(0, 0, 0, 0.2);
}
/* For Chrome, Edge, and Safari */
html::-webkit-scrollbar {
  width: 8px;
}

html::-webkit-scrollbar-thumb {
  background-color: rgba(241, 133, 0, 0.8);
  border-radius: 4px;
}

html::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
