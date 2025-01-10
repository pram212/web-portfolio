<script setup>
import ContentCard from "../ContentCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import { ref, inject, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { formatDate } from "../../helpers";
import { useRoute } from "vue-router";
import moment from "moment";

const axios = inject("axios");
const portfolio = ref(null);
const route = useRoute();

const response = await axios.get(`/portfolios/${route.params.id}`);
portfolio.value = await response.data;

</script>

<template>
    <div>
        <div class="flex items-center">
          <h3 class="text-lg font-bold text-red-500 mx-auto">
            {{ portfolio.name }}
          </h3>
        </div>
        <div class="divider divider-error"></div>
        <figure class="bg-neutral-700">
          <Carousel
            :autoplay="5000"
            :items-to-show="1"
            :wrap-around="true"
            class="mb-10"
          >
            <Slide v-for="(item, index) in portfolio.images" :key="index">
              <div class="carousel__item">
                <img :src="item" alt="" class="h-72 mx-auto" />
              </div>
            </Slide>
          </Carousel>
        </figure>

        <div class="mt-4">
          <p class="capitalize text-title">
              <span class="font-semibold">Type</span> :
              <span>{{ portfolio.type }}</span>
            </p>
            <p class="capitalize text-title">
              <span class="font-semibold">Date</span> :
              <span>
                  {{ formatDate(portfolio.start) }} - {{ formatDate(portfolio.end) }}</span
              >
            </p>
            <p class="text-title" v-if="portfolio.demo">
              <span class="font-semibold">Demo</span> :
              <a target="_blank" :href="portfolio.demo?.url">{{
                portfolio.demo?.url
              }}</a>
            </p>
        </div>

        <div class="divider divider-error"></div>
    
        <div class="text-title capitalize my-4">
          <p class="text-title mb-4" v-html="portfolio.description"></p>
        </div>

        <div class="divider divider-error"></div>
    
        <div class="lg:grid grid-cols-2">
            <p class="text-title">
              <span class="font-semibold">Tech Stack</span>
              :
              <ul class="list-disc">
                <li v-for="(item, index) in portfolio.tech" :key="index">
                  {{ item }}
                </li>
              </ul>
            </p>
        
            <p class="text-title">
              <span class="font-semibold">Modules</span>
              <ul class="list-disc">
                <li v-for="(item, index) in portfolio.modules" :key="index">
                  {{ item }}
                </li>
              </ul>  
            </p>
        </div>
    </div>
</template>