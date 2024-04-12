<template>
  <div class="charts-explanation">
    <p class="explanation-text">
      {{ props.ChartExplanationObj.explanationText }}
    </p>
    <ul class="summary-list">
      <li v-for="item in props.ChartExplanationObj.summaryList" :key="item.key">
        <span class="key-term">{{ item.key }}</span> {{ item.description }}
      </li>
    </ul>
    <p>{{ props.ChartExplanationObj.footerSentence }}</p>
  </div>
</template>

<script setup lang="ts">
import { IChartExplanationObj } from "../index.ts";
import { PropType } from "vue";
const props = defineProps({
  ChartExplanationObj: {
    type: Object as PropType<IChartExplanationObj>,
    default: {},
  },
});
</script>

<style scoped>
.key-term {
  color: #dbaf11;
  font-size: 1.4rem;
}

.charts-explanation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: transparent;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.explanation-text {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  text-decoration: underline;
}

.summary-list {
  list-style: none;
  padding: 0;
}

.summary-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.4rem;
  text-indent: -0.7rem;
}

.summary-list li::before {
  content: "🍊";
  padding-right: 10px;
}
</style>
