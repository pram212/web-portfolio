<script setup>
import ContentCard from "@components/ContentCard.vue"
</script>

<template>
    <ContentCard :title="$t('elements.about_page.header')">
        <section class="md:flex md:space-x-8 mb-7">
            <div class="min-h-fit md:flex-1 mb-5">
                <img src="/foto2.jpg" class="rounded-[35px] border-none shadow-lg" />
            </div>
            <div class="content md:w-[60%]">
                <section class="mb-4">
                    <h1 class="font-title">{{ $t('elements.about_page.who_am_i') }}</h1>
                    <p class="text-muted md:leading-7">{{ $t('content.about_me.description') }}</p>
                </section>
                <section class="mb-4">
                    <h1 class="font-title">{{ $t('elements.about_page.contact.title') }}</h1>
                    <div class="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0">
                        <div class="flex space-x-2">
                            <div class="btn bg-white text-red-400 dark:bg-base-300 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">
                                    {{ $t('elements.about_page.contact.location') }}
                                </p>
                                <p class="font-medium text-black dark:text-white">{{ $t('content.about_me.location') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <div class="btn bg-white text-sky-300 dark:bg-base-300 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">
                                    {{ $t('elements.about_page.contact.email') }}
                                </p>
                                <p class="font-medium text-black dark:text-white">
                                    pramono6236@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </ContentCard>
</template>