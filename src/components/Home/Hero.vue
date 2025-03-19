<script setup>
import { onMounted, ref, inject } from "vue";
import { biodata } from "../../resources/data";
// await new Promise(resolve => setTimeout(resolve, 500))

// declared axios setup from main
const axios = inject("axios")

const data = ref(null);
if (import.meta.env.VITE_USE_SERVICE) {
  console.log("aktif");
  
  const fetchLink = await axios.get("/biodata");
  data.value = await fetchLink.data;
} else {
  data.value = biodata
}

</script>

<template>
  <div class="block">
    <div class="avatar shadow-2xl rounded-full">
      <div class="rounded-full w-[250px] h-[250px] 2xl:w-[250px] 2xl:h-[250px]">
        <img :src="data.photo" />
      </div>
    </div>
    <h3
      class="mt-4 mb-1 text-3xl font-semibold text-gray-900 dark:text-white capitalize"
    >
      {{ data.name }}
    </h3>
    <p class="mb-4 text-muted text-lg">{{ data.title }}</p>
  </div>
</template>