<script setup>
import { onMounted, ref, inject } from "vue";

await new Promise(resolve => setTimeout(resolve, 500))

// instance axios setup from main
const axios = inject("axios")

const links = ref(null);
const fetchLink = await axios.get("/links");
links.value = await fetchLink.data;

</script>

<template>
  <div class="flex justify-center space-x-5 mb-7">
    <a
      v-for="(item, index) in links"
      :key="index"
      :href="item.url"
      class="bg-transparent dark:bg-neutral-800 p-[10px] rounded-md hover:btn-primary"
    >
      <svg class="h-6 w-6" v-html="item.svg"></svg>
    </a>
  </div>
</template>