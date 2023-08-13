<script setup lang="ts">
import { ref } from 'vue'
import SignInLoadingScreen from '@/components/overlay/SignInLoadingScreen.vue'
import Db from '@/core/infrastructure/db/Db'

const testDb = new Db()

const testFetch = async () => {
  const { data, error }: any = await testDb.db().from('company').select()

  if (error) {
    console.info(error.message)
    return
  }

  return data
}

const finalData = ref([])

testFetch().then((data) => {
  finalData.value = data
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 3000)
</script>

<template>
  <Transition leave-active-class="animate__animated animate__fadeOut">
    <SignInLoadingScreen v-if="loading" />
  </Transition>
</template>
