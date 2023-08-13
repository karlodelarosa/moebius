<script setup lang="ts">
import { useSignupStepsStore } from '@/stores/signup/steps'
import InputField from '@/components/inputs/InputField.vue'
import DropdownField from '@/components/inputs/DropdownField.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
// import DefaultButton from '@/components/buttons/DefaultButton.vue'

const signupStepStore = useSignupStepsStore()
</script>
<template>
  <div class="w-2/3">
    <div
      v-if="signupStepStore.GET_step === 0"
      class="w-full mb-[20px] p-[30px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <div class="mb-6">
        <InputField class="mb-[20px]" label="Organization" placeholder="Enter Company name" />
        <DropdownField
          label="Company size"
          :data-items="['0-20', '10-50', '50-100', 'More than 100']"
        />
      </div>
    </div>
    <div
      v-if="signupStepStore.GET_step === 1"
      class="w-full mb-[20px] p-[30px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <div class="mb-6">
        <div class="flex flex-row gap-2 mb-3">
          <InputField label="First name" class="w-1/2" />
          <InputField label="Last name" class="w-1/2" />
        </div>
        <InputField class="mb-[20px]" label="Email" type="email" placeholder="example@gmail.com" />
        <DropdownField label="Designation" :data-items="['Manager', 'Supervisor', 'Regular']" />
      </div>
    </div>
    <div
      v-if="signupStepStore.GET_step === 2"
      class="w-full mb-[20px] p-[30px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <div>
        <div class="text-center mb-[20px]">
          <p class="text-2xl font-medium">We're getting there!</p>
          <p class="text-gray-500 text-sm">Please review your details before continuing</p>
        </div>

        <div class="flex flex-col gap-2 items-center bg-gray-200 rounded py-[30px] mb-[30px]">
          <div
            class="relative w-[60px] h-[60px] bg-teal-500 rounded-full flex items-center justify-center"
          >
            <span class="font-medium text-white text-2xl"> K </span>
            <div
              class="absolute flex items-center justify-center w-[20px] h-[20px] bottom-0 right-0 bg-black/50 rounded-full cursor-pointer"
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-2xl font-medium">ComG Inc.</h1>
            <p class="text-gray-500">Karlo Dela Rosa <span class="text-sm">(Manager)</span></p>
            <a href="mailto:karlo@gmail.com" class="underline text-blue-500">karlo@gmail.com</a>
          </div>
        </div>

        <div class="w-full">
          <button
            class="mx-auto bg-white hover:bg-gray-200 transition-all duration-100 border border-gray-300 rounded-lg p-2 flex flex-row gap-1 items-center text-sm"
          >
            <EditIcon /> Edit
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="signupStepStore.GET_step === 3"
      class="w-full mb-[20px] p-[30px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <div class="flex flex-col gap-y-[20px] items-center justify-center">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 72 72"
          id="emoji"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="color">
              <path
                fill="#f1b31c"
                stroke="none"
                d="M31.843,18.7784c-3.5265-6.9338-11.9304-9.884-19.0352-6.571S2.5611,23.8546,5.6059,31.013L31.843,18.7784z"
              ></path>
              <path
                fill="#FCEA2B"
                stroke="none"
                d="M13.2039,12.1558c3.1295-1.4593,6.5101-1.7007,9.6158-0.9244c-0.8834,0.2213-1.7593,0.525-2.6158,0.9244 c-6.1756,2.8798-9.3513,9.5527-8.0783,15.9501L6.002,30.9614C2.9572,23.803,6.099,15.4689,13.2039,12.1558z"
              ></path>
              <path
                fill="#F1B31C"
                stroke="none"
                d="M66.6602,30.9614c3.0448-7.1584-0.0971-15.4926-7.2019-18.8056s-15.5087-0.3628-19.0352,6.571 L66.6602,30.9614z"
              ></path>
              <path
                fill="#FCEA2B"
                stroke="none"
                d="M59.4583,12.1558c-3.1295-1.4593-6.5101-1.7007-9.6158-0.9244c0.8834,0.2213,1.7593,0.525,2.6158,0.9244 c6.1756,2.8798,9.3513,9.5527,8.0783,15.9501l6.1236,2.8555C69.705,23.803,66.5632,15.4689,59.4583,12.1558z"
              ></path>
              <ellipse
                cx="19.2951"
                cy="31.4579"
                rx="2"
                ry="1.9708"
                fill="#ea5a47"
                stroke="none"
              ></ellipse>
              <ellipse
                cx="44.2951"
                cy="33.4579"
                rx="2"
                ry="1.9708"
                fill="#8967aa"
                stroke="none"
              ></ellipse>
              <ellipse
                cx="40.2951"
                cy="55.4579"
                rx="2"
                ry="1.9708"
                fill="#FCEA2B"
                stroke="none"
              ></ellipse>
            </g>
            <g id="hair"></g>
            <g id="skin"></g>
            <g id="skin-shadow"></g>
            <g id="line">
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M31.843,18.7784c-3.5265-6.9338-11.9304-9.884-19.0352-6.571S2.5611,23.8546,5.6059,31.013L31.843,18.7784z"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M66.6602,30.9614c3.0448-7.1584-0.0971-15.4926-7.2019-18.8056s-15.5087-0.3628-19.0352,6.571L66.6602,30.9614z"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M36.3613,30.3421c-0.4363,0.257-0.8402,0.5878-1.1941,0.9918c-1.8345,2.0941-1.6323,5.3611,0.4517,7.297"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M35.4667,38.5125c0.4084,0.2994,0.7771,0.669,1.0888,1.1064c1.6156,2.2673,1.0872,5.4977-1.1802,7.2151"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M20.956,42.9535c-0.4954,0.1047-0.9836,0.2898-1.4477,0.5601c-2.4057,1.4013-3.2539,4.5627-1.8945,7.0613"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M17.5073,50.4141c0.2919,0.4138,0.5237,0.8816,0.68,1.3954c0.8098,2.6637-0.7193,5.5578-3.4155,6.4641"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M53.4927,38.6198c0.4774,0.1689,0.937,0.4165,1.3616,0.7455c2.2007,1.7052,2.6261,4.9507,0.9502,7.249"
              ></path>
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M55.9312,46.4689c-0.3437,0.3719-0.6351,0.8051-0.8575,1.294c-1.1528,2.5341-0.0173,5.6041,2.5364,6.8569"
              ></path>
            </g>
          </g>
        </svg>
        <div class="text-center">
          <h2 class="text-2xl mb-2">Welcome!</h2>
          <p class="text-gray-500">Congratulations! You have successfully created an account.</p>
        </div>

        <div>
          <PrimaryButton @click="signupStepStore.next()" text="Setup password to continue" />
        </div>
      </div>
    </div>

    <div
      v-if="signupStepStore.GET_step === 4"
      class="w-full flex flex-col gap-y-[10px] mb-[20px] p-[30px] bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <div class="mb-[15px] flex flex-col items-center justify-center text-center px-[50px]">
        <svg
          width="170px"
          height="170px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M385.86 647.77C341 607 261.3 383.16 322.21 255.55S497.47 97.32 577.57 133.4 730.33 348.85 725 453.59s-69.16 192.08-131.3 201.47-207.84-7.29-207.84-7.29z"
              fill="#7FB870"
            ></path>
            <path
              d="M372.65 299.23s-46.39 70.25 18.56 326.09L411.1 628s-50.38-242.61-38.45-328.77zM441.58 267.42s-41.09 111.35 17.23 357.9L478.7 628s-49.05-274.42-37.12-360.58zM513.16 262.12s-37.12 119.3 5.3 355.25l19.88 1.33s-10.6-251.87-25.18-356.58zM576.79 252.84s1.33 249.2-4 365.85l19.88 2.65s14.61-188.23-15.88-368.5zM633.79 278s87.49 141.83-1.47 340.67l-19.88 2.65S668.25 508.67 633.79 278z"
              fill="#458E6B"
            ></path>
            <path
              d="M561.54 173.3l-14.91-79.53 39.77 37.78 35.79-67.6 6.96 72.57 56.67-11.93-63.63 67.6-60.65-18.89z"
              fill="#FFEB05"
            ></path>
            <path
              d="M331.78 664h370.44v223.56a66.49 66.49 0 0 1-66.49 66.49H398.27a66.49 66.49 0 0 1-66.49-66.49V664z"
              fill="#F5CAC5"
            ></path>
            <path d="M261.83 608.14l510.34 0 0 73.21-510.34 0 0-73.21Z" fill="#F5CAC5"></path>
            <path
              d="M735.57 681.34H298.43a36.71 36.71 0 0 1-36.6-36.6h510.34a36.71 36.71 0 0 1-36.6 36.6z"
              fill="#C7A19D"
            ></path>
            <path
              d="M413.62 730.32c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.76 18.07-6.63 18.17 3.4zM483.11 776.44c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.76 18.06-6.63 18.17 3.4zM602.15 730.32c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.76 18.02-6.63 18.17 3.4zM654.88 784.4c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.77 18.06-6.64 18.17 3.4zM404.69 835.41c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.76 18.06-6.63 18.17 3.4zM474.17 897.44c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.89-11.76 18.07-6.63 18.17 3.4zM569.36 835.41c0.13 12.94-18.17 18.17-18.17 18.17S533 848.48 533 835.41c0-10 10.46-14.38 18.17-3.4 5.9-11.76 18.09-6.63 18.19 3.4zM653.9 897.44c0.13 12.94-18.17 18.17-18.17 18.17s-18.17-5.1-18.17-18.17c0-10 10.46-14.38 18.17-3.4 5.88-11.76 18.07-6.63 18.17 3.4z"
              fill="#3B5174"
            ></path>
          </g>
        </svg>
        <h2 class="text-3xl mb-1">Hello again!</h2>
        <p class="text-sm text-gray-500">Setup your password to complete sign up process.</p>
      </div>

      <div class="flex flex-col mb-[15px]">
        <!-- <InputField label="" type="email" placeholder="karlo@gmail.com" /> -->
        <InputField label="" type="password" placeholder="Enter password" />
        <InputField label="" type="password" placeholder="Confirm password" />
      </div>

      <div class="w-full">
        <PrimaryButton size="lg" @click="signupStepStore.next()" text="Finish setup" />
      </div>
    </div>

    <div v-if="![3, 4].includes(signupStepStore.GET_step)" class="w-full">
      <PrimaryButton @click="signupStepStore.next()" size="lg" text="Next" />
    </div>
  </div>
</template>
