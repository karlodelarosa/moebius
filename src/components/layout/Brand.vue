<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({
  brandName: {
    type: String,
    default: "BRAND NAMEX",
  },
});

const { brandName } = toRefs(props);
</script>

<template>
  <div class="brand">
    {{ brandName }}
  </div>
</template>

<style scoped>
.brand {
  @apply rounded py-2 tracking-[5px] text-center text-lg font-bold mb-3;
}
</style>
