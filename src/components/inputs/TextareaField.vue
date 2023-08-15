<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Label'
  },
  placeholder: {
    type: String,
    required: true,
    default: ''
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
  <div class="group">
    <label
      for="email"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :class="{ 'text-red-600': hasError }"
    >
      {{ label }}
    </label>

    <textarea
      class="bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :class="{ 'border border-red-600 bg-red-50 text-red-600': hasError }"
      :placeholder="placeholder"
      :disabled="disabled"
      required
    ></textarea>

    <Transition
      enter-active-class="animate__animated animate__slideDown"
      leave-active-class="animate__animated animate_slidUp"
    >
      <div
        v-if="hasError"
        class="text-sm text-red-600 flex flex-row gap-1 items-center justify-start"
      >
        <svg
          class="fill-red-600"
          width="12px"
          height="12px"
          viewBox="0 -0.5 24 24"
          id="meteor-icon-kit__solid-exclamation-triangle"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7744 1.41218L23.4802 20.0771C23.9898 21.0571 23.6085 22.2646 22.6285 22.7742C22.3435 22.9224 22.027 22.9998 21.7058 22.9998H2.29425C1.18968 22.9998 0.29425 22.1044 0.29425 20.9998C0.29425 20.6786 0.371621 20.3621 0.519817 20.0771L10.2256 1.41218C10.7352 0.432187 11.9427 0.0508554 12.9227 0.560452C13.2874 0.75009 13.5848 1.04749 13.7744 1.41218ZM10.5 9.49981V13.9998C10.5 14.8282 11.1716 15.4998 12 15.4998C12.8284 15.4998 13.5 14.8282 13.5 13.9998V9.49981C13.5 8.67138 12.8284 7.99981 12 7.99981C11.1716 7.99981 10.5 8.67138 10.5 9.49981ZM12 19.9998C12.8284 19.9998 13.5 19.3282 13.5 18.4998C13.5 17.6714 12.8284 16.9998 12 16.9998C11.1716 16.9998 10.5 17.6714 10.5 18.4998C10.5 19.3282 11.1716 19.9998 12 19.9998Z"
            ></path>
          </g>
        </svg>
        Email must be something
      </div>
    </Transition>
  </div>
</template>
