<script setup>
import { computed } from 'vue'
import ContentCard from "@components/ContentCard.vue"
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
const resume = computed(() => tm('content.resume'))

const dynamicBadgeColor = (level) => {
    if (level.toLowerCase() === 'advanced') return 'badge-success'
    if (level.toLowerCase() === 'experience') return 'badge-warning'
    if (level.toLowerCase() === 'basic') return 'badge-error'
    else return 'badge-primary'
}

</script>

<template>
    <ContentCard :title="$t('elements.resume_page.header')">
        <!-- section 1 -->
        <section class="md:grid md:grid-cols-3 md:gap-x-3 pt-6">
            <div>
                <div class="flex space-x-3 w-full font-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-9 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <h2>{{ $t('elements.resume_page.education') }}</h2>
                </div>
                <!-- List -->
                <div class=" dark:border-neutral-700 dark:border-2 rounded-md p-4 mt-3 mb-5 max-h-fit"
                    v-for="(item, index) in resume.education" :key="index">
                    <p class="text-gray-500 dark:text-gray-500 font-semibold">{{ item.year }}</p>
                    <p class="text-title-md my-1">{{ item.degree }}</p>
                    <p class="text-title-sm">{{ item.institution }}</p>
                </div>

            </div>
            <div>
                <div class="flex space-x-3 w-full font-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-9 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    <h2>{{ $t('elements.resume_page.experience') }}</h2>
                </div>
                <!-- List -->
                <div class=" dark:border-neutral-700 dark:border-2 rounded-md p-4 mt-3 mb-5"
                    v-for="(item, index) in resume.experience" :key="index">
                    <p class="text-gray-500 dark:text-gray-500 font-semibold">
                        {{ item.year }}
                    </p>
                    <p class="text-title-md my-1">{{ item.position }}</p>
                    <p class="text-title-sm">{{ item.company }}</p>
                </div>
            </div>

            <div>
                <div class="flex space-x-3 w-full font-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-9 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>

                    <h2>{{ $t('elements.resume_page.course') }}</h2>
                </div>
                <!-- List -->
                <div class=" dark:border-neutral-700 dark:border-2 rounded-md p-4 mt-3 mb-5"
                    v-for="(item, index) in resume.course" :key="index">
                    <p class="text-gray-500 dark:text-gray-500 font-semibold">{{ item.year }}</p>
                    <p class="text-title-md my-1">{{ item.course_name }}</p>
                    <p class="text-title-sm">{{ item.platform }}</p>
                </div>
            </div>
        </section>

        <section class="pt-6">
            <div class="px-2 mb-5">
                <h1 class="mb-4 flex space-x-3 font-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-9 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>{{ $t('elements.resume_page.skill') }}</span>
                </h1>
                <div class="divider divider-error"></div>
                <div class="md:grid md:grid-cols-3 md:gap-y-4">
                    <div v-for="(item, index) in resume.skill" :key="index" class="text-black dark:text-white">
                        <h1 class="uppercase font-semibold">{{ index }}</h1>
                        <ul class="list-[square] pl-5">
                            <li v-for="(data, i) in item" :key="i" class="mb-2">
                                <span class="mr-3">{{ data.skill_name }}</span>
                                <span class="badge capitalize" :class="dynamicBadgeColor(data.level)">{{ data.level
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </ContentCard>
</template>