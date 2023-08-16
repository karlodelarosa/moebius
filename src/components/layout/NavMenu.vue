<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const isOpenNotif = ref(false)
const toggleNotification = () => {
  isOpenNotif.value = !isOpenNotif.value
}

const isOpenProfile = ref(false)
const toggleProfile = () => {
  isOpenProfile.value = !isOpenProfile.value
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 dark:border-none border border-gray-300">
    <div class="w-full flex flex-wrap items-center justify-end mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <!-- <li>
            <a
              href="/user-management"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent dark:text-white dark:hover:bg-gray-800"
              aria-current="page"
              >User Management</a
            >
          </li> -->
          <!-- <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent dark:text-white dark:hover:bg-gray-800"
              aria-current="page"
              >Settings</a
            >
          </li> -->
          <li class="flex items-center justify-center">
            <button
              @click="toggleNotification()"
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              class="inline-flex hover:bg-gray-100 transition-all duration-100 p-2 rounded-full items-center relative text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              :class="{ 'bg-gray-200': isOpenNotif }"
              type="button"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path
                  d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"
                />
              </svg>
              <div
                class="absolute top-1 right-1 inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full dark:border-gray-900"
              ></div>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNotification"
              class="z-20 absolute right-[70px] top-[55px] w-full max-w-sm shadow-lg border border-gray-300/80 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-800 dark:divide-gray-700"
              :class="{ hidden: !isOpenNotif }"
              aria-labelledby="dropdownNotificationButton"
            >
              <div
                class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
              >
                Notifications
              </div>
              <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <a
                  v-for="i in 3"
                  :key="i"
                  href="#"
                  class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0"></div>
                  <div class="w-full pl-3">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      New message from
                      <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>:
                      "Hey, what's up? All set for the presentation?"
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              >
                <div class="inline-flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path
                      d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                    />
                  </svg>
                  View all
                </div>
              </a>
            </div>
          </li>
          <li>
            <button
              @click="toggleProfile()"
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              :class="{ 'focus:ring-black': isOpenProfile }"
              class="relative flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="https://source.unsplash.com/random/200x200?sig=2"
                alt="user photo"
              />
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownAvatar"
              :class="{ hidden: !isOpenProfile }"
              class="w-[200px] absolute top-[50px] right-[20px] border border-gray-100 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <div
                class="px-4 py-3 text-sm text-gray-900 dark:text-white flex flex-row gap-2 items-center"
              >
                <div class="w-[40px] h-[40px] overflow-hidden">
                  <img
                    class="border-2 border-gray-300 rounded-full"
                    src="https://source.unsplash.com/random/200x200?sig=2"
                    alt="user photo"
                  />
                </div>
                <div>
                  <div>Karlo Dela Rosa</div>
                  <div class="font-medium truncate">Admin</div>
                </div>
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >User Management</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
              </ul>
              <div class="py-2">
                <a
                  href="/sign-up"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
