<script setup>
import ContentCard from "../ContentCard.vue"
</script>

<template>
    <ContentCard title="Portfolio">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div v-for="(item, index) in 6" :key="index" class="bg-transparent mb-3 dark:border-2 overflow-hidden dark:border-neutral-600 rounded-md image-full w-full shadow-xl">
                <figure>
                    <div class="skeleton h-36 w-full rounded-none"></div>
                </figure>
                <div class="card-body bg-none">
                    <p class="skeleton h-5 w-1/2"></p>
                    <p class="skeleton h-8"></p>
                    <div class="card-actions justify-end">
                        <div class="skeleton h-8 w-24 items-end rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </ContentCard>
    
</template>