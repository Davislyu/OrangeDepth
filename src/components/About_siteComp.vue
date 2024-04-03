<template>
  <section class="about-container">
    <h3 class="about-header">About This Website</h3>
    <p class="about-text">
      Welcome to the juiciest website this side of the orange grove! This little
      slice of the internet was hand-squeezed with a whole lot of love, orange
      juice, and an unhealthy obsession with citrus fruits. But don't let the
      playful peel fool you – beneath the zesty exterior lies a serious
      commitment to helping you master the art of working with datasets and
      charts. We're talking ag-grid mastery and chart.js wizardry, all served up
      with a refreshing twist of orange goodness. Imagine being able to slice
      and dice data like a pro, creating visualizations so tantalizing, they'll
      make your taste buds (and your boss) do a happy dance. And the best part?
      You'll learn it all while basking in the warm, citrusy glow of our
      orange-infused content. So, whether you're a data ninja in training or
      just someone who appreciates a good dose of vitamin C (both the nutrient
      and the coding variety), you've come to the right place. Grab a glass of
      your favorite orange juice, kick back, and get ready to embark on a
      journey that's equal parts educational and deliciously entertaining. Just
      remember, if you ever feel like you're losing your zest, take a deep
      breath and repeat after us: "I am the orange overlord, and data is my
      juicy domain!" Now, let's get squeezing! (But not too hard, we don't want
      any pulp in our code.)
    </p>
  </section>
</template>
<script setup>
import Panel from "primevue/panel";
</script>

<style scoped>
.about-container {
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.about-text {
  margin-left: 10%;
  margin-right: 10%;
  line-height: 3rem;
}
</style>
