<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">OrangeDataset°</h1>
      <video
        :src="orangeVideo"
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
      <p class="about-dataset-text">
        Uncover the juicy secrets of our dataset, where every orange is a
        number-crunching delight! From size to sweetness, our stats go beyond
        the peel. It’s data with a zesty twist, served fresh for your analytical
        appetite!
      </p>
      <div class="downMessage">
        <p class="header-keepScrolling-message">
          <span> <img class="downImg" :src="arrowDown" alt="#" /> </span>Squeeze
          every drop by scrolling Down!
          <span><img class="downImg" :src="arrowDown" alt="#" /> </span>
        </p>
      </div>
    </header>
    <div class="content">
      <OrangeGrid :colDefs="colDefs" :rowData="rowData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo from "../../assets/orangeVideo2.mp4";
import arrowDown from "../../assets/arrowDown.png";
import OrangeGrid from "../OrangeGrid.vue";
import OrangeDataSetJson from "../../data/OrangeDataSet.json";
const OrangeDatSet = ref<IOrange[]>(OrangeDataSetJson);
import { IOrange } from "../../interfaces/OrangeInterface";
import { ref } from "vue";

const videoElement = ref<HTMLVideoElement | null>(null);

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
</script>

<style scoped>
* {
  font-weight: 100;
}

.header-keepScrolling-message {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
}

.downImg {
  width: 35px;
  height: 35px;
}

.about-dataset-text {
  color: white;
  width: 40%;
}

.downMessage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.header-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  text-align: center;
  margin-top: 20%;
  padding: 2px;
  position: relative;
  color: #fff;
  font-size: 4rem;
  font-weight: 100;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
}
.header-title:after,
.header-title:before {
  content: " ";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 0px solid #fff;
  transition: all 1s;
}

.header-title:after {
  top: -1px;
  left: -1px;
  border-top: 2px solid orange;
  border-left: 2px solid orange;
}

.header-title:before {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid orange;
  border-right: 2px solid orange;
}

.header-title:hover {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.header-title:hover:before,
.header-title:hover:after {
  width: 100%;
  height: 100%;
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
.content {
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.fact-icon {
  font-size: 2rem;
  display: inline-block;
}

.merch-container {
  color: whitesmoke;
  backdrop-filter: blur(20px);
  gap: 2rem;
  margin-top: 1rem;
}
.merch-text {
  margin-left: 10%;
  margin-right: 10%;
  line-height: 3rem;
  padding: 2rem;
}
</style>
