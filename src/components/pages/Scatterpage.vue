<template>
  <div class="homepage-container">
    <header class="header-container">
      <h1 class="header-title">OrangeScatter°</h1>
      <video
        :src="orangeVideo3"
        muted
        loop
        class="video-background"
        playsinline
        ref="videoElement"
      >
        Your browser does not support the video tag.
      </video>

      <div class="overlay"></div>
      <p class="about-scatter-text">
        A scatter chart is like throwing a bunch of oranges onto a giant grid
        and seeing where they splatter. Each orange becomes a dot, with its
        position showing its size and juiciness. If the bigger oranges cluster
        towards the top right, they're the real juicy ones! But if the dots are
        all over the place, size doesn't matter – you'll just have to squeeze
        'em all to find out!
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
      <section>
        <ScatterChart
          :varieties="['Valencia', 'Navel']"
          :chartData="filteredOrangeData"
          xAxisTitle="Size (cm)"
          yAxisTitle="Brix (Sweetness)"
          :xField="'Size (cm)'"
          :yField="'Brix (Sweetness)'"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import orangeVideo3 from "../../assets/orangeVideo3.mp4";
import arrowDown from "../../assets/arrowDown.png";
import ScatterChart from "../../components/charts/ScatterChart.vue";
import OrangeDataSetJson from "../../data/OrangeDataSet.json";
import { IOrange } from "../../interfaces/OrangeInterface";
import { ref, onMounted, computed } from "vue";

const videoElement = ref<HTMLVideoElement | null>(null);
const OrangeDatSet = ref<IOrange[]>(OrangeDataSetJson);

const orangeData = ref<IOrange[]>([]);
const varieties = ["Valencia", "Navel"];

const filteredOrangeData = computed(() => {
  return varieties.map((variety) => ({
    variety,
    data: OrangeDatSet.value.filter((orange) => orange.Variety === variety),
  }));
});

onMounted(() => {
  OrangeDatSet.value.forEach((orange: IOrange) => {
    orangeData.value.push(orange);
  });
});
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

.about-scatter-text {
  color: white;
  width: 40%;
}

.downImg {
  width: 35px;
  height: 35px;
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
  background-color: white;
}
</style>
