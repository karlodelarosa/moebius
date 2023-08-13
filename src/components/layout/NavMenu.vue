<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 dark:border-none border border-gray-300">
    <div class="w-full flex flex-wrap items-center justify-end mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/user-management"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent dark:text-white dark:hover:bg-gray-800"
              aria-current="page"
              >User Management</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent dark:text-white dark:hover:bg-gray-800"
              aria-current="page"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="/sign-up"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent dark:text-white dark:hover:bg-gray-800"
              aria-current="page"
              >Sign up</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
