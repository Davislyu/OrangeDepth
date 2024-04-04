<template>
  <div class="nav"><Navbar /></div>
  <router-view />
  <!-- This will render the component corresponding to the current route -->
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
.nav {
  position: absolute;
  width: 100vw;
  z-index: 1000;
}
</style>
