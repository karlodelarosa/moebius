<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BaseLayout from '@/components/layout/BaseLayout.vue'
</script>

<template>
  <nav>

  </nav>
  <BaseLayout>
    <template #main-content>
      <main>
        <RouterView />
      </main>
    </template>
  </BaseLayout>
  
</template>

<style scoped>

</style>
