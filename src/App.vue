<template>
  <div class="nav"><Navbar /></div>
  <HomePage />
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/pages/HomePage.vue";
</script>

<style scoped>
.nav {
  position: absolute;
  width: 100vw;
  z-index: 1000;
}
</style>
