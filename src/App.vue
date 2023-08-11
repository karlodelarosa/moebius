<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import PageTitle from '@/components/layout/atoms/PageTitle.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

isDark.value = false

const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Default Title')
const hasLayout = computed(() => route.meta.layout)
</script>

<template>
  <template v-if="hasLayout">
    <BaseLayout>
      <template #main-content>
        <main class="p-2">
          <PageTitle :title="pageTitle" />
          <RouterView v-slot="{ Component }">
            <transition appear enter-active-class="animate__animated animate__fadeIn">
              <component :is="Component"></component>
            </transition>
          </RouterView>
        </main>
      </template>
    </BaseLayout>
  </template>

  <template v-else>
    <RouterView v-slot="{ Component }">
      <transition appear enter-active-class="animate__animated animate__fadeIn">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </template>
</template>

<style></style>
