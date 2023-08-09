<script setup lang="ts">
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

testFetch().then((data) => {
  console.info(data)
})

</script>

<template>
  <main>
    test
  </main>
</template>
