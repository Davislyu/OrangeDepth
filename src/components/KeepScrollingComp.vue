<template>
  <div class="downMessage" v-motion-slide-visible-once-right>
    <p class="header-keepScrolling-message">
      <span> <img class="downImg" :src="arrowDown" alt="#" /> </span>Squeeze
      every drop by scrolling Down!
      <span><img class="downImg" :src="arrowDown" alt="#" /> </span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import arrowDown from "../assets/arrowDown.png";
</script>

<style lang="scss" scoped>
.downMessage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  .header-keepScrolling-message {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-weight: 300;
  
  .downImg {
  width: 35px;
  height: 35px;
}
}
}


</style>
