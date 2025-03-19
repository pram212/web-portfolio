<script setup>
import { formatDate } from "../../helpers";
import { onMounted, ref, inject, computed } from "vue";
import ContentCard from "../ContentCard.vue";
import portfolios from "../../resources/datas/portfolios.json"

const projects = computed(() => {
  return portfolios.map(project => ({
    ...project, // Menyalin semua properti project
    images: JSON.parse(project.images) // Convert string ke array
  }))
})

</script>

<template>
  <ContentCard title="Portfolio">
    <div class="md:grid md:grid-cols-3 md:gap-4 space-y-3 md:space-y-0">
      <div
        class="card bg-transparent dark:bg-base-300 w-full shadow-xl"
        v-for="(item, index) in projects"
        :key="index"
      >
        <figure class="h-36 overflow-hidden">
          <img
            :src="
              Array.isArray(item.images)
                ? item.images[0]
                : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            "
            alt="Preview Image"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-title">{{ item.project_title }}</h2>
          <p class="text-title text-wrap">
            {{ item.type }}
          </p>
          <div class="card-actions justify-end">
            <router-link
              :to="'portfolio/' + item.id"
              class="btn btn-sm btn-primary"
              >Learn More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </ContentCard>
</template>