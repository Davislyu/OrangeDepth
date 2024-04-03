<template>
    <div class="carousel">
      <div class="carousel-container">
        <div class="carousele-slider" v-for="(image, index) in images" :key="index">
          <img v-if="isCurrentIndex(index)" :src="image" :alt="'Image ' + index" class="carousel-image">
        </div>
      </div>
      <div class="arrows">      <i @click="prevImage" class="pi pi-chevron-left" style="font-size: 2rem"></i>
      <i @click="nextImage" class="pi pi-chevron-right" style="font-size: 2rem"></i></div>


    </div>
  </template>
  
  
  
  
  <script setup>
  import { defineProps,ref } from 'vue';
  import 'primeicons/primeicons.css'
  const props = defineProps({
    images: Array
  });
  const currentIndex = ref(0);
  
  function nextImage() {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }
  
  function prevImage() {
    currentIndex.value = (currentIndex.value + props.images.length - 1) % props.images.length;
  }
  
  function isCurrentIndex(index) {
    return index === currentIndex.value;
  }
  </script>
  

<style>
.carousel{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.carousel-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
 

}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
}

.arrows{
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
}
</style>
