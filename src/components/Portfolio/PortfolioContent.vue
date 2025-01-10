<script setup>
import { formatDate } from "../../helpers";
import { onMounted, ref, inject } from "vue";
import ContentCard from "../ContentCard.vue";

// await new Promise(resolve => setTimeout(resolve, 500))

const axios = inject("axios");

const portfolios = ref(null);

const response = await axios.get("/portfolios");
portfolios.value = await response.data;

</script>

<template>
  <ContentCard title="Portfolio">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div
        v-for="(item, index) in portfolios"
        :key="index"
        class="bg-transparent mb-3 dark:border-2 overflow-hidden dark:border-neutral-600 rounded-md image-full w-full shadow-xl"
      >
        <figure>
          <img
            :src="
              Array.isArray(item.images)
                ? item.images[0]
                : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            "
            alt="project images"
          />
        </figure>
        <div class="card-body bg-none">
          <p class="text-muted font-semibold">{{ item.type }}</p>
          <h2 class="card-title text-title">{{ item.name }}</h2>
          <div class="card-actions justify-end">
            <router-link :to="'portfolio/' + item.id" class="btn btn-sm btn-primary">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </ContentCard>

</template>