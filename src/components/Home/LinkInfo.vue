<script setup>
import { onMounted, ref, inject } from "vue";
import socialMedia from "../../resources/datas/links.json";

// await new Promise(resolve => setTimeout(resolve, 500))

// instance axios setup from main
const axios = inject("axios")

console.log(socialMedia);


const links = ref(null);

// if (import.meta.env.VITE_USE_SERVICE) {
//   console.log("aktif");
//   const fetchLink = await axios.get("/links");
//   links.value = await fetchLink.data;
// } else {
//   links.value = socialMedia
// }

</script>

<template>
  <div class="flex justify-center space-x-5 mb-7">
    <a
      target="_blank"
      v-for="(item, index) in socialMedia"
      :key="index"
      :href="item.url"
      class="bg-transparent dark:bg-neutral-800 p-[10px] rounded-md hover:btn-primary"
    >
      <img :src="item.svg" class="h-8 w-8" alt="">
      <svg class="h-8 w-8" v-html="item.svg"></svg>
    </a>
  </div>
</template>