<script setup lang="ts">
import { ref } from 'vue'
import SelectField from '@/components/inputs/SelectField.vue'
import InputField from '@/components/inputs/InputField.vue'
import InputText from '@/components/inputs/InputText.vue'
import DefaultButton from '@/components/buttons/DefaultButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

const isFormDisabled = ref(true)
const isLocked = ref(true)
const confirmUnlock = ref(false)
const isEditing = ref(false)

const enableEditing = () => {
  isLocked.value = false
  confirmUnlock.value = false
  // isFormDisabled.value= false
  // isEditing.value = true
}

const enableEdit = () => {
  isFormDisabled.value= false
  isEditing.value = true
}
</script>

<template>
  <div class="employee-details-container relative">
    <section class="banner"></section>
    <section class="display-info">
      <div class="w-[85%] mx-auto">
        <div class="relative">
          <div
            class="w-[150px] h-[150px] bg-gray-300 border-[3px] border-gray-400 rounded-full absolute -top-[30px] overflow-hidden"
          >
            <svg viewBox="0 0 61.7998 61.7998" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g data-name="Layer 2" id="Layer_2">
                  <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
                    <circle cx="30.8999" cy="30.8999" fill="#58b0e0" r="30.8999"></circle>
                    <path
                      d="M23.255 38.68l15.907.146v15.602l-15.907-.147V38.68z"
                      fill="#302e33"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M53.478 51.993A30.813 30.813 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A34.072 34.072 0 0 1 15.9 57.919a31.036 31.036 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.113 8.47-5.475 8.47-10.15l12.79 6.282z"
                      fill="#857a6e"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M31.462 52.495c-3.342-5.472-9.388-6.287-11.359-6.6-5.42-.86-14.56-4.28-8.564-9.72 10.765-9.764 6.898-22.032 19.513-22.032 13.47 0 8.873 12.268 19.638 22.032 5.997 5.44-3.143 8.86-8.565 9.72a14.292 14.292 0 0 0-10.663 6.6z"
                      fill="#302e33"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M39.964 42.252c-1.125 4.01-4.008 6.397-8.598 6.207-3.94-.163-7.297-2.397-8.11-6.204z"
                      fill-rule="evenodd"
                      opacity="0.18"
                    ></path>
                    <path
                      d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                      fill="#ffe8be"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 0 1-1.472-7.658z"
                      fill="#f9dca4"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
                      fill="#f9dca4"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M19.113 25.706c-2.83-4.958-2.783-9.375-1.362-11.817 2.048-3.52 4.922-3.688 5.315-4.517 4.025-8.479 24.839-2.048 23.97 11.09a14.798 14.798 0 0 0-1.522-2.486s-.075 4.991-1.437 6.957c-1.64.464-15.061.239-20.053-9.948-4.006 2.268-5.06 7.015-4.91 10.72z"
                      fill="#969696"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M31.15 46.543c-2.66.022-15.617-4.022-12.61-26.045 0 0 .65 9.916 2.775 12.788 1.382 1.868 2.625 2.57 3.82.746 1.248-1.9 3.946-3.473 6.038-1.677 1.737-1.85 4.848-.212 6.084 1.677 1.195 1.823 2.44 1.123 3.822-.746 2.125-2.872 2.586-12.456 2.586-12.456 3.456 23.6-9.855 25.735-12.515 25.713z"
                      fill="#969696"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M26.527 36.802a7.118 7.118 0 0 1 4.568-2.096 7.29 7.29 0 0 1 4.503 2.099c-.788.525-5.874 1.737-9.071-.003z"
                      fill="#ffe8be"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M26.611 51.297a29.35 29.35 0 0 0-8.171-3.501c-4.778-.758-13.423-1.518-11.271-10.086C12.023 18.38 18.85 3.688 31.457 3.87c12.836.184 19.09 15.8 23.84 33.865 1.904 7.238-6.79 9.313-11.508 10.06A21.129 21.129 0 0 0 36 51.14c-6.963 4.765-1.812 4.7-9.389.158zm4.851 1.198a14.292 14.292 0 0 1 10.663-6.6c5.422-.86 14.562-4.28 8.565-9.72-10.765-9.764-6.167-22.032-19.638-22.032-12.615 0-8.748 12.268-19.513 22.032-5.997 5.44 3.143 8.86 8.564 9.72 1.97.313 8.017 1.127 11.36 6.6z"
                      fill="#7d7062"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M24.202 50.213s5.988 3.256 7.588 7.992c1.61-5.121 7.627-8.327 7.627-8.327S33.07 52.33 31.7 55.534c-.973-1.722-2.707-3.4-7.497-5.321z"
                      fill="#302e33"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="absolute right-0 top-[20px] flex flex-row justify-center items-center gap-1">
            <DefaultButton v-if="!isLocked && !isEditing" @click="enableEdit()" text="Edit" />
            <PrimaryButton v-if="isEditing" text="Save changes" />
            <button
              @click="confirmUnlock = true"
              class=" rounded-lg p-2 transition-all duration-100 cursor-pointer"
              :class="[
                { 'bg-red-500 hover:bg-red-600': isLocked },
                { 'bg-green-500 hover:bg-green-600': !isLocked }
              ]"
            >
              <svg
                v-if="isLocked"
                class="text-white"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>

              <svg v-else width="20px" height="20px" class="text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
          </div>
        </div>

        <div class="pt-[140px]">
          <div class="flex flex-row justify-between items-end">
            <h1 class="font-bold text-4xl mb-1">John Doe</h1>
            <div class="flex flex-row gap-1 items-center">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              Active
            </div>
          </div>

          <div class="flex flex-row justify-between items-center">
            <h2 class="text-xl text-gray-700">Frontend Developer</h2>
            <h2 class="text-gray-700 flex flex-row gap-2 items-center">
              <svg
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00621946 6.99724C0.00621946 5.72847 0.317192 4.55922 0.939138 3.48947C1.56108 2.41972 2.41315 1.57388 3.49534 0.951929C4.57752 0.329983 5.74678 0.012791 7.00311 0.000352045C8.25944 -0.0120869 9.4287 0.305106 10.5109 0.951929C11.5931 1.59875 12.4451 2.4446 13.0671 3.48947C13.689 4.53434 14 5.7036 14 6.99724C14 7.53212 13.8694 8.15406 13.6082 8.86308C13.347 9.5721 13.0173 10.2873 12.6193 11.0088C12.2212 11.7303 11.7672 12.4641 11.2572 13.2105C10.7472 13.9568 10.2497 14.6534 9.76455 15.3002C9.27943 15.947 8.82541 16.5192 8.40249 17.0168C7.97956 17.5143 7.64371 17.9186 7.39494 18.2296L7.00311 18.6587C6.9036 18.5592 6.77299 18.4099 6.61128 18.2109C6.44958 18.0119 6.11995 17.6201 5.62239 17.0354C5.12483 16.4508 4.66459 15.8662 4.24167 15.2816C3.81875 14.6969 3.32741 14.0128 2.76766 13.2291C2.20791 12.4455 1.74767 11.6992 1.38694 10.9901C1.02621 10.2811 0.696579 9.57832 0.398045 8.88174C0.0995113 8.18516 -0.0310973 7.55699 0.00621946 6.99724ZM2.33852 6.99724C2.33852 8.29089 2.79254 9.39173 3.70058 10.2998C4.60862 11.2078 5.70946 11.6618 7.00311 11.6618C8.29676 11.6618 9.3976 11.2078 10.3056 10.2998C11.2137 9.39173 11.6677 8.29089 11.6677 6.99724C11.6677 5.7036 11.2137 4.60897 10.3056 3.71337C9.3976 2.81777 8.29676 2.35753 7.00311 2.33265C5.70946 2.30777 4.60862 2.76801 3.70058 3.71337C2.79254 4.65873 2.33852 5.75335 2.33852 6.99724Z"
                  fill="#EF7171"
                />
              </svg>

              Manila, Philippines
            </h2>
          </div>

          <div class="flex flex-row justify-between items-center">
            <p class="text-gray-500">john.doe@example.com</p>
            <p class="text-gray-800">Full-time</p>
          </div>
        </div>
      </div>
    </section>

    <section class="all-forms"
      :class="{ 'brightness-50': confirmUnlock }"
    >
      <div v-show="isEditing" class="w-fit px-[30px] tracking-widest text-xs font-bold py-1 text-yellow-700 mx-auto rounded-bl-lg rounded-br-lg bg-yellow-200 ">EDITING</div>
      <div class="w-[85%] mx-auto pt-[70px]">
        <div class="mb-[100px]">
          <h3 class="font-bold text-sm text-gray-800 uppercase tracking-wide mb-[30px]">
            PERSONAL INFO
          </h3>

          <div class="flex flex-col gap-[15px]">
            <div class="grid grid-cols-2 gap-[15px]">
              <SelectField label="Gender" :disabled="isFormDisabled"/>
              <SelectField label="Civil Status" :disabled="isFormDisabled"/>
            </div>

            <InputField label="Address 1" :disabled="isFormDisabled" />
            <InputField label="Address 2" :disabled="isFormDisabled" />

            <div class="grid grid-cols-2 gap-[15px]">
              <SelectField label="Country" :disabled="isFormDisabled"/>
              <InputField label="Citizenship" :disabled="isFormDisabled"/>
            </div>
          </div>
        </div>

        <div class="mb-[100px]">
          <h3 class="font-bold text-sm text-gray-800 uppercase tracking-wide mb-[30px]">
            COMPANY INFO
          </h3>

          <div class="flex flex-col gap-[15px]">
            <div class="grid grid-cols-2 gap-[15px]">
              <SelectField label="Department" :disabled="isFormDisabled"/>
              <InputField label="Job Title" :disabled="isFormDisabled"/>
            </div>

            <InputField label="Date hired" type="date" :disabled="isFormDisabled"/>

            <div class="grid grid-cols-2 gap-[15px]">
              <SelectField label="Contract Status" :disabled="isFormDisabled"/>
              <InputField label="Enrollment Status" :disabled="isFormDisabled"/>
            </div>
          </div>
        </div>

        <div class="mb-[30px]">
          <h3 class="font-bold text-sm text-gray-800 uppercase tracking-wide mb-[30px]">
            DOCUMENTS
          </h3>

          <div class="flex flex-col gap-[15px]">
            <div class="grid grid-cols-2 gap-[15px]">
              <InputField label="SSS Number" :disabled="isFormDisabled"/>
              <InputField label="TIN Number" :disabled="isFormDisabled"/>
            </div>

            <div class="grid grid-cols-2 gap-[15px]">
              <InputField label="Pag-ibig" :disabled="isFormDisabled"/>
              <InputField label="Philhealth" :disabled="isFormDisabled"/>
            </div>
          </div>
        </div>

        <div class="mb-[30px]">
          <h3 class="font-bold text-sm text-gray-800 uppercase tracking-wide mb-[10px]">
            Attached Files
          </h3>

          <div class="flex flex-col gap-2">
            <div
              class="flex flex-row justify-between items-center w-full bg-gray-300 px-2 py-1 rounded"
              v-for="i in 5"
              :key="i"
            >
              <span class="text-gray-600 text-sm flex flex-row gap-1 items-center">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0594 7.56562L18.6844 3.19062C18.6023 3.10859 18.491 3.0625 18.375 3.0625H9.625C9.27703 3.0629 8.94342 3.20131 8.69736 3.44736C8.45131 3.69342 8.3129 4.02703 8.3125 4.375V6.5625H6.125C5.77703 6.5629 5.44342 6.70131 5.19736 6.94736C4.95131 7.19342 4.8129 7.52703 4.8125 7.875V23.625C4.8129 23.973 4.95131 24.3066 5.19736 24.5526C5.44342 24.7987 5.77703 24.9371 6.125 24.9375H18.375C18.723 24.9371 19.0566 24.7987 19.3026 24.5526C19.5487 24.3066 19.6871 23.973 19.6875 23.625V21.4375H21.875C22.223 21.4371 22.5566 21.2987 22.8026 21.0526C23.0487 20.8066 23.1871 20.473 23.1875 20.125V7.875C23.1875 7.75897 23.1414 7.64768 23.0594 7.56562ZM18.8125 23.625C18.8124 23.741 18.7662 23.8522 18.6842 23.9342C18.6022 24.0162 18.491 24.0624 18.375 24.0625H6.125C6.00901 24.0624 5.89781 24.0162 5.81579 23.9342C5.73377 23.8522 5.68763 23.741 5.6875 23.625V7.875C5.68763 7.75901 5.73377 7.64781 5.81579 7.56579C5.89781 7.48377 6.00901 7.43763 6.125 7.4375H14.6938L18.8125 11.5562V23.625ZM22.3125 20.125C22.3124 20.241 22.2662 20.3522 22.1842 20.4342C22.1022 20.5162 21.991 20.5624 21.875 20.5625H19.6875V11.375C19.6875 11.259 19.6414 11.1477 19.5594 11.0656L15.1844 6.69062C15.1023 6.60859 14.991 6.5625 14.875 6.5625H9.1875V4.375C9.18763 4.25901 9.23377 4.14781 9.31579 4.06579C9.39781 3.98377 9.50901 3.93763 9.625 3.9375H18.1938L22.3125 8.05621V20.125ZM15.3125 16.625C15.3125 16.741 15.2664 16.8523 15.1844 16.9344C15.1023 17.0164 14.991 17.0625 14.875 17.0625H9.625C9.50897 17.0625 9.39769 17.0164 9.31564 16.9344C9.23359 16.8523 9.1875 16.741 9.1875 16.625C9.1875 16.509 9.23359 16.3977 9.31564 16.3156C9.39769 16.2336 9.50897 16.1875 9.625 16.1875H14.875C14.991 16.1875 15.1023 16.2336 15.1844 16.3156C15.2664 16.3977 15.3125 16.509 15.3125 16.625ZM15.3125 20.125C15.3125 20.241 15.2664 20.3523 15.1844 20.4344C15.1023 20.5164 14.991 20.5625 14.875 20.5625H9.625C9.50897 20.5625 9.39769 20.5164 9.31564 20.4344C9.23359 20.3523 9.1875 20.241 9.1875 20.125C9.1875 20.009 9.23359 19.8977 9.31564 19.8156C9.39769 19.7336 9.50897 19.6875 9.625 19.6875H14.875C14.991 19.6875 15.1023 19.7336 15.1844 19.8156C15.2664 19.8977 15.3125 20.009 15.3125 20.125Z"
                    fill="#676767"
                  />
                </svg>

                requirement_1.pdf
              </span>

              <svg
                width="10"
                height="10"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 1L1 11.6667M1 1L11.6667 11.6667"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="confirmUnlock" class="w-[350px] min-h-[100px] bg-white absolute top-[500px] shadow-lg mx-auto left-[35%] p-5 rounded-lg flex flex-col gap-3">
      <h3>Enable editing?</h3>
      <InputText placeholder="Enter your password" type="password" />
      <PrimaryButton @click="enableEditing()" text="OK" class="ml-auto" />
    </div>
  </div>
</template>

<style scoped>
.employee-details-container {
  @apply w-full md:px-[100px];
}

.employee-details-container > .banner {
  @apply h-[200px] shadow-lg bg-red-500 rounded-tl-[150px] rounded-tr-[10px] bg-gradient-to-r from-yellow-100 via-teal-100 to-purple-300;
}

.employee-details-container > .display-info {
  @apply bg-white min-h-[200px] pb-[30px] border-b border-gray-100;
}

.employee-details-container > .all-forms {
  @apply bg-white min-h-[300px] ;
}
</style>
