<script setup>
import { onMounted, ref, inject } from "vue";
// import biodata from "../../resources/datas/biodatas.json"
import { supabase } from "../../lib/supabaseClient";
// await new Promise(resolve => setTimeout(resolve, 500))

const biodata = ref([])

const { data } = await supabase.from('biodatas').select()
biodata.value = data[0]

</script>

<template>
  <div class="block">
    <div class="avatar shadow-2xl rounded-full">
      <div class="rounded-full w-[250px] h-[250px] 2xl:w-[250px] 2xl:h-[250px]">
        <img :src="biodata.photo" />
      </div>
    </div>
    <h3 class="mt-4 mb-1 text-3xl font-semibold text-gray-900 dark:text-white capitalize">
      {{ biodata.name }}
    </h3>
    <p class="mb-4 text-muted text-lg">{{ biodata.title }}</p>
  </div>
</template>