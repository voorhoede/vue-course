<template>
  <iframe :src="src" />
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    default: "scr/App.vue",
  },
});

const src = computed(() => {
  return `https://stackblitz.com/edit/${props.id}?embed=1&file=${props.file}&hideNavigation=1`;
});
</script>


<style scoped>
iframe {
  width: 100%;
  height: 90%;
  border: 0;
}
</style>
