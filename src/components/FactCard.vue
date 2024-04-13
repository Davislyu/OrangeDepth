<template>
  <div class="fact-item">
    <span class="fact-icon">🍊</span>
    <p>{{ props.fact_text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { IFactCardProps } from "../interfaces/FactCardPropsInterface.ts";

const props = defineProps<IFactCardProps>();
</script>

<style lang="scss" scoped>
.fact-item {
  max-width: 300px;
  height: 200px;
  margin: 1rem;
  padding: 1rem;
  background-color: #ffffff1c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.6px solid orange;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(70px);
  
  .fact-icon {
  font-size: 2rem;
  color: #ff9800;
  margin-bottom: 0.5rem;
}
}


</style>
