<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from '@/components/inputs/InputText.vue'

const router = useRouter()
const addEmployee = () => {
  router.push('/employee/add')
}

const viewDetails = () => {
  router.push('/employee/details')
}

const isOpenFilter = ref(false)
const toggleFilter = () => {
  isOpenFilter.value =!isOpenFilter.value
}
</script>

<template>
  <div class="w-full">
    <div class="w-full mb-2 flex flex-row justify-between">
      <div class="w-1/3">
        <InputText placeholder="Search ..." />
      </div>

      

      <div class="flex flex-row gap-3 items-center">
        <!-- <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Smart Search</span>
        </label> -->
        <div class="relative">
          <button
            @click="toggleFilter()"
            id="dropdownHelperButton"
            data-dropdown-toggle="dropdownHelper"
            class="text-gray-800 bg-white border border-gray-200 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Quick Filter
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
            class="z-10 shadow-lg absolute right-0 bg-white divide-y divide-gray-100 rounded-lg w-60 dark:bg-gray-700 dark:divide-gray-600"
            :class="{ 'hidden': !isOpenFilter }"
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
                      <div>New Employee</div>
                      <p
                        id="helper-checkbox-text-1"
                        class="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Employees that were added less than 6-months ago
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
                      <div>Active Account</div>
                      <p
                        id="helper-checkbox-text-2"
                        class="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Active employee as of this moment
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
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Employee Name</th>
            <th scope="col" class="px-6 py-3">Mobile</th>
            <th scope="col" class="px-6 py-3">Department</th>
            <th scope="col" class="px-6 py-3">Job Title</th>
            <th scope="col" class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="viewDetails()"
            v-for="i in 8"
            :key="i"
            class="border-b cursor-pointer dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 active:scale-[99%] transition-all duration-100"
            :class="[{ 'bg-gray-50': i % 2 === 0 }, { 'bg-white': i % 2 === 1 }]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Dela Rosa, Karlo Rodriguez
            </th>
            <td class="px-6 py-4">+639090990909</td>
            <td class="px-6 py-4">System Development</td>
            <td class="px-6 py-4">Senior Developer</td>
            <td class="px-6 py-4 flex flex-row gap-1 items-center">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              Active
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
