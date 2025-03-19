<script setup>
import { formatDate } from '../../helpers';
import { onMounted, ref, inject } from 'vue';
import courses from "../../resources/datas/courses.json"

// await new Promise(resolve => setTimeout(resolve, 500))

// const axios = inject('axios')

// const courses = ref(null)
// const res = await axios.get("/courses")
// courses.value = await res.data

</script>

<template>
    <div>
        <div class="flex space-x-3 w-full font-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-9 text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>

            <h2>Course</h2>
        </div>
        <!-- List -->
        <div class=" dark:border-neutral-700 dark:border-2 rounded-md p-4 mt-3 mb-5" v-for="(item, index) in courses" :key="index">
            <p class="text-gray-500 dark:text-gray-500 font-semibold">{{ formatDate(item.start) }} - {{ formatDate(item.end) }}</p>
            <p class="text-title-md my-1">{{ item.description }}</p>
            <p class="text-title-sm">{{ item.institution }}</p>
        </div>
    </div>
</template>