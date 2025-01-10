<script setup>
import { onMounted, ref, inject } from "vue";
// await new Promise(resolve => setTimeout(resolve, 500))

// declared axios setup from main
const axios = inject("axios")

const biodata = ref(null);
const fetchLink = await axios.get("/biodata");
biodata.value = await fetchLink.data;

</script>

<template>
  <div class="avatar shadow-2xl rounded-full">
    <div class="rounded-full w-[250px] h-[250px] 2xl:w-[250px] 2xl:h-[250px]">
      <img :src="biodata.photo" />
    </div>
  </div>
  <h3
    class="mt-4 mb-1 text-3xl font-semibold text-gray-900 dark:text-white capitalize"
  >
    {{ biodata.name }} {{ biodata.degree }}
  </h3>
  <p class="mb-4 text-muted text-lg">{{ biodata.title }}</p>
</template>