<script setup>
import { onMounted, ref, inject } from "vue";
import socialMedia from "../../resources/datas/links.json";

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
    </a>
  </div>
</template>