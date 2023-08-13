<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSignupStepsStore } from '@/stores/signup/steps'
import { SIGN_UP_STEPS } from '@/js/BaseConstants'

import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

import UserIcon from '@/components/icons/UserIcon.vue'
import PersonalInfo from '@/components/icons/PersonalInfo.vue'
import ReviewIcon from '@/components/icons/ReviewIcon.vue'
import ConfirmationIcon from '@/components/icons/ConfirmationIcon.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'

const stepIcons = reactive([
  { component: () => UserIcon },
  { component: () => PersonalInfo },
  { component: () => ReviewIcon },
  { component: () => ConfirmationIcon }
])

const signupStepStore = useSignupStepsStore()

const stepItems = ref([
  {
    title: 'Organization',
    description: 'Enter Company details'
  },
  {
    title: 'Personal Information',
    description: 'Fill up relevant personal information'
  },
  {
    title: 'Confrim details',
    description: 'Review and confirm your information'
  },
  {
    title: 'Setup complete',
    description: 'Account setup complete'
  }
])
</script>

<template>
  <ol
    class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <li class="mb-10 ml-6 last:mb-0" v-for="(step, index) in stepItems" :key="index">
      <span
        class="absolute flex items-center justify-center w-8 h-8 border border-gray-300 bg-gray-50 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
        :class="[
          { 'bg-gray-300': signupStepStore.GET_step === index },
          { 'bg-green-200 border-none': signupStepStore.GET_step > index }
        ]"
      >
        <template v-if="signupStepStore.GET_step > index">
          <CheckIcon />
        </template>

        <template v-else>
          <Component :is="stepIcons[index].component()" />
        </template>
      </span>
      <h3 class="font-medium leading-tight">{{ step.title }}</h3>
      <p class="text-sm">{{ step.description }}</p>
    </li>
  </ol>
</template>
