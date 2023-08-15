<script setup lang="ts">
import InputField from '@/components/inputs/InputField.vue'
import TextareaField from '@/components/inputs/TextareaField.vue'
import SelectField from '@/components/inputs/SelectField.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { Input } from 'postcss'
</script>
<template>
  <div class="flex flex-col gap-[20px]">
    <section class="w-2/3 bg-white rounded-lg p-5 shadow-lg">
      <div class="mb-[20px]">
        <h2 class="font-bold text-sm">PERSONAL INFO</h2>
      </div>

      <div class="grid grid-col-12 grid-flow-col gap-[10px] mb-[15px]">
        <div>
          <InputField label="Last name" />
        </div>
        <div>
          <InputField label="First name" />
        </div>
        <div>
          <InputField label="Middle name" />
        </div>
      </div>

      <div class="mb-[15px]">
        <InputField label="Address 1" />
        <InputField label="Address 2" />
      </div>

      <div class="flex flex-row gap-[10px] mb-[15px]">
        <InputField label="Birthdate" type="date" class="w-1/2" />
        <SelectField label="Gender" class="w-1/2" />
      </div>

      <div class="grid grid-col-12 grid-flow-col gap-[10px] mb-[15px]">
        <SelectField label="Civil Status" />
        <SelectField label="Citezenship" />
      </div>

      <div class="flex justify-end">
        <PrimaryButton text="Save Personal Info" />
      </div>
    </section>

    <section class="w-2/3 bg-white rounded-lg p-5 shadow-lg">
      <div class="mb-[20px]">
        <h2 class="font-bold text-sm">COMPANY INFO</h2>
      </div>

      <div class="grid grid-col-12 grid-flow-col gap-[10px] mb-[15px]">
        <div>
          <SelectField label="Department" />
        </div>
        <div>
          <SelectField label="Job Title" />
        </div>
      </div>

      <div class="grid grid-col-12 grid-flow-col gap-[10px] mb-[15px]">
        <InputField type="date" label="Date Hired" />
      </div>

      <div class="grid grid-col-12 grid-flow-col gap-[10px] mb-[15px]">
        <div>
          <SelectField label="Contract Status" />
        </div>
        <div>
          <SelectField label="Employee Status" />
        </div>
      </div>

      <div class="flex justify-end">
        <PrimaryButton text="Save Company Info" />
      </div>
    </section>

    <section class="w-2/3 bg-white rounded-lg p-5 shadow-lg">
      <div class="mb-[20px]">
        <h2 class="font-bold text-sm">EMPLOYMENT DOCUMENTS</h2>
      </div>

      <div class="flex flex-col gap-[10px] mb-[15px]">
        <div class="flex flex-col gap-[10px]">
          <div class="flex flex-row gap-[10px]">
            <InputField label="SSS Number" class="w-1/2" />
            <InputField label="TIN" class="w-1/2" />
          </div>
          <div class="flex flex-row gap-[10px]">
            <InputField label="PAG IBIG" class="w-1/2" />
            <InputField label="PHILHEALTH" class="w-1/2" />
          </div>
        </div>
        <div>
          <!-- <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attach Files</h2> -->
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <PrimaryButton text="Save changes" />
      </div>
    </section>
  </div>
</template>
