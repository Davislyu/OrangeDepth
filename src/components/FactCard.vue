<template>
  <div class="fact-item">
    <span class="fact-icon">🍊</span>
    <p>{{ props.fact_text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IFactCardProps } from "../interfaces/FactCardPropsInterface.ts";

const props = defineProps<IFactCardProps>();
</script>
<style scoped>
span {
  font-size: 2rem;
}
</style>
