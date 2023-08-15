<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
    default: 'Placeholder'
  },
  type: {
    type: String,
    required: true,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const hasError = ref(false)
</script>

<template>
  <input
    :type="type"
    id="email"
    class="bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :class="{ 'border border-red-600 bg-red-50 text-red-600': hasError }"
    :placeholder="placeholder"
    :disabled="disabled"
    required
  />
</template>
