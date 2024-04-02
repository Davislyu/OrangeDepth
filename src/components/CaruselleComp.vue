<template>
  <CCarousel controls>
    <CCarouselItem>
      <img
        class="d-block w-100"
        src="../assets/clothing/dress.png"
        alt="slide 1"
      />
    </CCarouselItem>
    <CCarouselItem>
      <img
        class="d-block w-100"
        src="../assets/clothing/dress.png"
        alt="slide 2"
      />
    </CCarouselItem>
    <CCarouselItem>
      <img
        class="d-block w-100"
        src="../assets/clothing/dress.png"
        alt="slide 3"
      />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from "@coreui/vue";
import "@coreui/coreui/dist/css/coreui.min.css";
</script>
