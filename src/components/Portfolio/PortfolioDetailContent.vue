<script setup>
import { Carousel, Slide } from "vue3-carousel";
import { ref, inject, onMounted, computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import { formatDate } from "@/helpers.js";
import { useRoute } from "vue-router";
import { supabase } from "@/lib/supabaseClient";
import Link from "@components/Link.vue";

const route = useRoute();
const portfolio = ref([])
const { data } = await supabase.from('portfolios').select().eq('id', route.params.id)
portfolio.value = data[0]

// const portfolio = computed(() => {
//   return portfolios.find(p => p.id === parseInt(route.params.id));
// })

// const axios = inject("axios");
// const portfolio = ref(null);
// const route = useRoute();

// const response = await axios.get(`/portfolios/${route.params.id}`);
// portfolio.value = await response.data;


</script>

<template>
  <div>
    <div class="flex items-center justify-center mb-5">
      <h3 class="text-2xl uppercase font-semibold text-red-500">
        {{ portfolio.project_title }}
      </h3>
    </div>
    <div class="divider divider-error"></div>
    <figure class="bg-transparent">
      <Carousel :autoplay="3000" :items-to-show="1" :wrap-around="true" class="mb-10 bg-gradient-to-b from-white to-purple-200  dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 rounded-lg shadow-lg">
        <Slide v-for="(item, index) in JSON.parse(portfolio.images)" :key="index">
          <div class="carousel__item">
            <img :src="item" alt="image portfolio" class="h-96"/>
          </div>
        </Slide>
      </Carousel>
    </figure>

    <div class="mt-4">
      <p class="capitalize text-title">
        <span class="font-semibold">{{ $t('elements.work_page.work_detail.project_category') }}</span> :
        <span>{{ portfolio.category }}</span>
      </p>
      <p class="capitalize text-title">
        <span class="font-semibold">{{ $t('elements.work_page.work_detail.platform') }}</span> :
        <span>{{ portfolio.platform }}</span>
      </p>
      <p class="capitalize text-title">
        <span class="font-semibold">{{ $t('elements.work_page.work_detail.project_date') }}</span> :
        <span>
          {{ formatDate(portfolio.start) }} - {{ formatDate(portfolio.end) }}</span>
      </p>
      <p class="text-title" v-if="portfolio.demo">
        <span class="font-semibold">{{ $t('elements.work_page.work_detail.live_demo') }}</span> :
        <a target="_blank" :href="portfolio.demo?.url">{{
          portfolio.demo?.url
        }}</a>
      </p>
    </div>

    <div class="divider divider-error"></div>

    <div class="my-4 w-full">
      <p class="text-black dark:text-white mb-4 prose prose-sm max-w-none prose-strong:text-black dark:prose-strong:text-white space-y-2 prose-ol:ml-5"
        v-html="portfolio.description"></p>
    </div>

    
    <div class="flex justify-end">
      <Link to="/portfolio" class="mb-4 text-right">{{ $t('elements.buttons.back_to_portfolio') }}</Link>
    </div>
    
  </div>
</template>