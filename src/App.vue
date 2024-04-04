<template>
  <div class="nav"><Navbar /></div>
  <router-view />
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
