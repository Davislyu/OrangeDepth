<template>
  <header>
    <h1>Orange Project</h1>
    <video :src="orangeVideo" autoplay muted loop class="video-background">
      Your browser does not support the video tag.
    </video>
  </header>
</template>

<script lang="ts" setup>
import Image from "primevue/image";
import orangeVideo from "../../assets/orangeVideo.mp4";
</script>

<style scoped>
.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  z-index: -1;
}

header {
  position: relative;
  height: 70vh;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
}
h1 {
  position: absolute;
  color: orange;
  display: flex;
  margin-top: 5%;
  font-size: 4rem;
}
</style>
