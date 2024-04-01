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
.fact-item {
  max-width: 300px;
  margin: 1rem;
  padding: 1rem;
  background-color: #ffffff80;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.6px solid orange;
}

.fact-icon {
  font-size: 2rem;
  color: #ff9800;
  margin-bottom: 0.5rem;
}

.fact-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.04);
  transition: 0.3s;
}
</style>
