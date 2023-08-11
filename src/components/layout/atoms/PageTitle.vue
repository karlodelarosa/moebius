<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "NO TITLE",
  },
});
</script>

<template>
  <h1
    class="mb-[15px] text-2xl font-medium border-b border-gray-300 pb-1 dark:text-white"
  >
    {{ title }}
  </h1>
</template>
