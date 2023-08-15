<script setup lang="ts">
import { useRouter } from 'vue-router'
import InputText from '@/components/inputs/InputText.vue'
import SelectField from '@/components/inputs/SelectField.vue'
import InputField from '@/components/inputs/InputField.vue'
import EditIcon from '@/components/icons/EditIcon.vue'

const router = useRouter()
const addEmployee = () => {
  router.push('/employee/add')
}

const viewDetails = () => {
  router.push('/employee/details')
}
</script>

<template>
  <div class="w-full">
    <div class="w-full mb-2 flex flex-row justify-between">
      <div class="w-1/3">
        <InputText placeholder="Search employee" />
      </div>

      <div class="flex flex-row gap-3">
        <div class="relative">
          <button
            id="dropdownHelperButton"
            data-dropdown-toggle="dropdownHelper"
            class="text-gray-800 bg-white border border-gray-200 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            August 2023
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            id="dropdownHelper"
            class="z-10 hidden shadow-lg absolute right-0 bg-white divide-y divide-gray-100 rounded-lg w-60 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHelperButton"
            >
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input
                      id="helper-checkbox-1"
                      aria-describedby="helper-checkbox-text-1"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                      for="helper-checkbox-1"
                      class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>Enable notifications</div>
                      <p
                        id="helper-checkbox-text-1"
                        class="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Some helpful instruction goes over here.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input
                      id="helper-checkbox-2"
                      aria-describedby="helper-checkbox-text-2"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                      for="helper-checkbox-2"
                      class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>Enable 2FA auth</div>
                      <p
                        id="helper-checkbox-text-2"
                        class="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Some helpful instruction goes over here.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input
                      id="helper-checkbox-3"
                      aria-describedby="helper-checkbox-text-3"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                      for="helper-checkbox-3"
                      class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>Subscribe newsletter</div>
                      <p
                        id="helper-checkbox-text-3"
                        class="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Some helpful instruction goes over here.
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            @click="addEmployee()"
            class="w-[40px] h-[40px] bg-blue-700 rounded-full flex items-center justify-center"
          >
            <svg
              class="text-white"
              width="27px"
              height="27px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M12 6V18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="w-full bg-white p-3 rounded-lg shadow-lg mb-3 flex flex-row items-center gap-2">
        <div>
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                fill="#b0b0b0"
              ></path>
            </g>
          </svg>
        </div>

        <div class="w-full flex flex-row items-center justify-between">
          <div>
            <h2 class="text-xl uppercase font-bold">John Doe</h2>
            <p class="text-sm font-normal">Frontend Developer</p>
          </div>

          <div>
            <p class="text-sm font-normal text-gray-500">Development Team</p>
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Time In</th>
            <th scope="col" class="px-6 py-3">Time out</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="viewDetails()"
            v-for="i in 12"
            :key="i"
            class="border-b cursor-pointer dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 active:scale-[99%] transition-all duration-100"
            :class="[{ 'bg-gray-50': i % 2 === 0 }, { 'bg-white': i % 2 === 1 }]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ i < 10 ? '0' + i : i }} August, 2023
            </th>
            <td class="px-6 py-4">7:00 AM</td>
            <td class="px-6 py-4">4:00 PM</td>
            <td class="px-6 py-4 flex flex-row gap-1 items-center justify-end">
              <EditIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
