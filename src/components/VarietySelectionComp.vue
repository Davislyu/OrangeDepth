<template>
  <div class="varietySelection">
    <h2 class="varietySelection-message">
      Don't be a sour <span>lemon</span>, pick your orange varieties!
    </h2>
    <MultiSelect
      :model-value="modelValue"
      @update:model-value="onUpdate"
      :options="options"
      option-label="name"
      placeholder="Select varieties"
      display="chip"
    />
  </div>
</template>

<script setup lang="ts">
import { MultiSelect } from "../index.ts";
import { defineProps, defineEmits } from "vue";

interface VarietyOption {
  name: string;
}

const props = defineProps({
  modelValue: Array as PropType<VarietyOption[]>,
  options: Array as PropType<VarietyOption[]>,
});

const emits = defineEmits(["update:modelValue"]);

const onUpdate = (newValue: VarietyOption[]) => {
  emits("update:modelValue", newValue);
};
</script>

<style lang="scss" scoped>
.varietySelection {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .varietySelection-message {
  color: gray;
  font-weight: 100;
}
.varietySelection-message span{
  color: rgba(255, 255, 0, 0.675);
  


  &:hover{
    cursor:url("../assets/lemon.png"),auto;
  }
}
}




.p-multiselect {
  background-color: transparent;
  border: 1px solid transparent;
  max-width: 100%;
  
  .p-multiselect:hover {
  background-color: transparent;
}

.p-multiselect:not(p.disabled).p-focus {
  box-shadow: none;
}
}


</style>
