<template>
  <p class="about-chart-text"  >
    {{ props.AboutText }}
  </p>
</template>
<script lang="ts" setup>
const props = defineProps({
  AboutText: {
    required: true,
    default: "",
  },
});
</script>

<style scoped>
.about-chart-text {
  color: white;
  width: 75%; 


  @media (min-width: 768px) { 
    width: 40%;
  }
}
</style>

