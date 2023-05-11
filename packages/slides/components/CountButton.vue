<template>
  <div class="mb-4">
    <p>Count: {{ count }}</p>
    <button class="border p-2" @click="count++">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>