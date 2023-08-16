<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Default Button'
  }
})
</script>

<template>
  <button
    type="submit"
    class="text-gray-700 px-[20px] py-[7px] border border-gray-200 bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{ text }}
  </button>
</template>
