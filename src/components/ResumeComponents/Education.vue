<script setup>
defineProps({ data: Object })
</script>

<template>
    <div>
        <div class="flex space-x-3 w-full font-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-9 text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <h2>Education</h2>
        </div>
        <!-- List -->
        <div class=" dark:border-neutral-700 dark:border-2 rounded-md p-4 mt-3 mb-5 max-h-fit" v-for="(item, index) in data" :key="index">
            <p class="text-gray-500 dark:text-gray-500 font-semibold">{{ item.start }} - {{ item.end }}</p>
            <p class="text-title-md my-1">{{ item.title }}</p>
            <p class="text-title-sm">{{ item.institution }}</p>
        </div>
    </div>
</template>