<script setup lang="ts">
import { computed } from 'vue'
import { SIDEBAR_ITEMS } from '@/js/BaseConstants'
import { useRouter, useRoute } from 'vue-router'
import Brand from '@/components/layout/atoms/Brand.vue'

const router = useRouter()
const route = useRoute()

const path = computed(() => route.name)

const redirect = (url: any) => {
  router.push(url)
}
</script>

<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-900">
      <Brand brand-name="BRAND NAME" />

      <ul class="space-y-2 font-medium">
        <li v-for="items in SIDEBAR_ITEMS" @click="redirect(items.redirection)">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-400 dark:hover:bg-gray-800 group"
            :class="{ 'bg-teal-400 hover:bg-teal-500': path === items.name }"
          >
            <span class="ml-3 text-teal-900">{{ items.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
