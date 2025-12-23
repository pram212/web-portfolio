<script setup>
import { computed } from "vue"
import ContentCard from "@components/ContentCard.vue"
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const projects = computed(() => tm('content.projects'))

</script>

<template>
  <ContentCard :title="$t('elements.work_page.header')">

    <div class="md:grid md:grid-cols-3 md:gap-4 space-y-3 md:space-y-0">
      <div class="card bg-transparent dark:bg-base-300 w-full shadow-xl" v-for="(item, index) in projects" :key="index">
        <figure class="h-36 overflow-hidden">
          <img :src="Array.isArray(item.images)
            ? item.images[0]['src']
            : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            " alt="Preview Image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-title">{{ item.title }}</h2>
          <p class="text-title text-wrap">
            {{ item.type }}
          </p>
          <div class="card-actions justify-end">
            <router-link :to="'portfolio/' + index" class="btn btn-sm btn-primary">{{ $t('elements.buttons.read_more') }}</router-link>
          </div>
        </div>
      </div>
    </div>

  </ContentCard>
</template>