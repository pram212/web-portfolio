<script setup>
import ContentCard from "@components/ContentCard.vue"
import Link from "@components/Link.vue"

import { Carousel, Slide } from "vue3-carousel"
import { useRoute } from "vue-router"
import { useI18n } from 'vue-i18n'
import { computed } from "vue"

import "vue3-carousel/dist/carousel.css"

const route = useRoute()

const { tm } = useI18n()
const project = computed(() => tm('content.projects')[route.params.id])

</script>

<template>
  <ContentCard title="Portfolio Detail">
    <div>
      <div class="flex items-center justify-center mb-5">
        <h3 class="text-2xl uppercase font-semibold text-red-500">
          {{ project.title }}
        </h3>
      </div>

      <figure class="bg-transparent">
        <Carousel :autoplay="3000" :items-to-show="1" :wrap-around="true"
          class="mb-10 bg-gradient-to-b from-white to-purple-200  dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 rounded-lg shadow-lg">
          <Slide v-for="(item, index) in project.images" :key="index">
            <div class="carousel__item">
              <img :src="item.src" alt="image portfolio" class="h-96 object-contain" />
            </div>
          </Slide>
        </Carousel>
      </figure>

      <div class="mt-4">
        <table>
          <tr>
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.type') }} </td>
            <td class="text-gray-700 dark:text-white">: {{ project.type }}</td>
          </tr>
          <tr>
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.domain') }} </td>
            <td class="text-gray-700 dark:text-white">: {{ project.domain }}</td>
          </tr>
          <tr>
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.architecture') }} </td>
            <td class="text-gray-700 dark:text-white">: {{ project.architecture }}</td>
          </tr>
          <tr>
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.team') }} </td>
            <td class="text-gray-700 dark:text-white">: {{ project.team }}</td>
          </tr>
          <tr>
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.role') }} </td>
            <td class="text-gray-700 dark:text-white">: {{ project.role }}</td>
          </tr>
          <tr v-if="project.demo">
            <td class="capitalize font-semibold text-error">{{ $t('elements.work_page.work_detail.live_demo') }} </td>
            <td>
              <a target="_blank" :href="project.demo?.url">{{ project.demo?.url}}</a>
            </td>
          </tr>
        </table>
      </div>

      <div class="divider divider-error"></div>
      <!-- name of each tab group should be unique -->
       <div>
         <div role="tablist" class="tabs tabs-bordered overflow-x-auto">
           <input type="radio" role="tab" name="my_tabs_3" class="tab text-error font-semibold text-nowrap capitalize" :aria-label="$t('elements.work_page.work_detail.overview')" checked="checked" />
           <div role="tabpanel" class="tab-content p-6">
             <p v-for="value in project.description" class="text-black dark:text-white mb-4 prose prose-sm max-w-none prose-strong:text-black dark:prose-strong:text-white space-y-2 prose-ol:ml-5">
               {{ value }}
             </p>
           </div>
   
           <input type="radio" role="tab" name="my_tabs_3" class="tab text-error font-semibold text-nowrap capitalize"
             :aria-label="$t('elements.work_page.work_detail.contributions')" />
           <div role="tabpanel" class="tab-content p-6">
             <ul>
               <li v-for="value in project.contributions"
                 class="text-black dark:text-white mb-4 prose prose-sm max-w-none prose-strong:text-black dark:prose-strong:text-white space-y-2 prose-ol:ml-5">
                 {{ value }}
               </li>
             </ul>
           </div>
   
           <input type="radio" role="tab" name="my_tabs_3" class="tab text-error font-semibold text-nowrap capitalize" :aria-label="$t('elements.work_page.work_detail.technologies')" />
           <div role="tabpanel" class="tab-content p-6">
             <div class="flex flex-wrap gap-2">
               <span v-for="(tech, index) in project.technologies.split(',')" :key="index"
                 class="btn btn-base-300 text-white font-semibold">
                 {{ tech }}
               </span>
             </div>
           </div>
   
         </div>
       </div>

      <div class="flex justify-end">
        <Link to="/portfolio" class="mb-4 text-right">{{ $t('elements.buttons.back_to_portfolio') }}</Link>
      </div>

    </div>
  </ContentCard>
</template>