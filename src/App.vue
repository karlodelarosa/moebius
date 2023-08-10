<script setup lang="ts">
import { computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { useRoute, RouterView } from "vue-router";
import BaseLayout from "@/components/layout/BaseLayout.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
isDark.value = false;

const route = useRoute();
const pageTitle = computed(() => route.meta.title || "Default Title");
</script>

<template>
  <BaseLayout>
    <template #main-content>
      <main class="p-2">
        <h1
          class="mb-[15px] text-2xl font-medium border-b border-gray-300 pb-1"
        >
          {{ pageTitle }}
        </h1>
        <RouterView />
      </main>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
