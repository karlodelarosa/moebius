<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Primary Button'
  },
  size: {
    type: String,
    required: false,
    default:'sm'
  }
})

const { size } = toRefs(props)
const buttonSize = ref('w-fit')

switch (size.value) {
  case'sm':
  buttonSize.value = 'w-fit'
    break
  case 'lg':
    buttonSize.value = 'w-full'
    break
  default:
    break
}
</script>

<template>
  <button
    type="submit"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    :class="buttonSize"
  >
    {{ text }}
  </button>
</template>
