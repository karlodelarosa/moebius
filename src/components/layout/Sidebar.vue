<script setup lang="ts">
import { SIDEBAR_ITEMS } from '@/js/BaseConstants'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const redirect = (url) => {
    router.push(url)
}

</script>

<template>
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        
        <div class="bg-gray-900 rounded py-2 text-white tracking-[5px] text-center text-lg font-bold mb-3">
            BRAND NAME
        </div>
        
        <ul class="space-y-2 font-medium">
            <li v-for="items in SIDEBAR_ITEMS" @click="redirect(items.redirection)">
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="ml-3">{{ items.name }}</span>
                </a>
            </li>
        </ul>
       </div>
    </aside>
</template>