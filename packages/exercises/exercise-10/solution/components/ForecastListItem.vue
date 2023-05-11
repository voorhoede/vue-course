<template>
  <li class="forecast-item">
    <h3 class="forecast-title">{{ name }}</h3>
    <div class="forecast-emoji">{{ emoji }}</div>
    <p class="forecast-text">High: {{ high }}°C</p>
    <p class="forecast-text">Avg: {{ averageTemperature }}°C</p>
    <p class="forecast-text">Low: {{ low }}°C</p>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    low: {
      type: Number,
      required: true,
    },
  },
  computed: {
    averageTemperature() {
      return ((this.high + this.low) / 2).toFixed(1);
    },
  }
};
</script>

<style>
.forecast-item {
  display: flex;
  flex-direction: column;
  min-width: 180px;
  padding: 32px;
  gap: 16px;
  border-radius: 16px;
  background-color: #1b1a1d;
  text-align: center;
}

.forecast-emoji {
  font-size: 56px;
}
</style>
