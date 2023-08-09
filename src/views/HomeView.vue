<script setup lang="ts">
import { ref } from 'vue'
import { PostgrestResponse } from '@supabase/supabase-js'
import Db from '@/core/infrastructure/db/Db';

const testDb = new Db();

const testFetch = async () => {
  const { data, error }: any = await testDb.db()
    .from('company')
    .select()

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



</script>

<template>
  
</template>
