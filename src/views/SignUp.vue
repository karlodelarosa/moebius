<script setup lang="ts">
import SignUpForm from '@/modules/signup/SignUpForm.vue'
import SignUpSteps from '@/modules/signup/SignUpSteps.vue'
</script>

<template>
  <div class="w-full min-h-screen grid grid-cols-2 bg-white dark:bg-gray-700">
    <div class="col w-full h-full flex items-center justify-center">
      <SignUpSteps />
    </div>
    <div class="col bg-teal-300 w-full h-full flex flex-col items-center justify-center">
      <SignUpForm />
    </div>
  </div>
</template>
