<template>
  <header class="header-container">
    <h1 class="header-title" v-motion-fade  >{{ props.title }}</h1>
    <video
      :src="props.videoSource"
      autoplay
      muted
      loop
      class="video-background"
      playsinline
      ref="videoElement"
    >
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
    <slot name="extra-content"></slot>
    <KeepScrollingComp />
  </header>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { KeepScrollingComp } from "../index";

const props = defineProps({
  title: String,
  videoSource: String,
});

const videoElement = ref<HTMLVideoElement | null>(null);
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .header-title {
    text-align: center;
    margin-top: 20%;
    padding: 2px;
    position: relative;
    color: #fff;
    font-size: 2.4rem; 
    font-weight: 150;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    &:after,
    &:before {
      content: " ";
      width: 10px;
      height: 10px;
      position: absolute;
      border: 0px solid #fff;
      transition: all 1s;
    }

    &:after {
      top: -1px;
      left: -1px;
      border-top: 2px solid orange;
      border-left: 2px solid orange;
    }

    &:before {
      bottom: -1px;
      right: -1px;
      border-bottom: 2px solid orange;
      border-right: 2px solid orange;
    }

    &:hover {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;

      &:before,
      &:after {
        width: 100%;
        height: 100%;
      }
    }
  }

  .video-background {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -10000000;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
}
</style>

