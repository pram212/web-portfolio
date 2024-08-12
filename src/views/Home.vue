<script setup>
import { biodata, socialMedia } from "../resources/data"
import axios from 'axios';
import { onMounted, ref } from 'vue';

const profile = ref(biodata);
const links = ref(socialMedia);

onMounted(() => {
    if (import.meta.env.VITE_USE_SERVICE=='TRUE') {
        const apiBaseUrl = import.meta.env.VITE_APP_API_URL
        axios.get(`${apiBaseUrl}/biodata`)
            .then((response) => profile.value = response.data )
            .catch( (error) => console.log('gagal fetch data education: ', error) )

        axios.get(`${apiBaseUrl}/links`)
            .then((response) => links.value = response.data )
            .catch( (error) => console.log('gagal fetch data link: ', error) )
    }
})
</script>

<template>
    <div class="mx-auto text-center animate-fade-down">
        <Suspense>
            <div class="avatar shadow-2xl rounded-full">
                <div class="rounded-full w-[250px] h-[250px] 2xl:w-[250px] 2xl:h-[250px]">
                    <img :src="profile.photo" />
                </div>
            </div>
        </Suspense>
        <h3 class="mt-4 mb-1 text-3xl font-semibold text-gray-900 dark:text-white capitalize">
            {{ profile.name }} {{ profile.degree }}
        </h3>
        <p class="mb-4 text-muted text-lg">{{ profile.title }}</p>
        <div class="flex justify-center space-x-5 mb-7">
            <a v-for="(item, index) in links" :key="index" :href="item.url" class="bg-transparent dark:bg-neutral-800 p-[10px] rounded-md hover:btn-primary">
                <svg class="h-6 w-6" v-html="item.svg"></svg>
            </a>
        </div>
        <!-- <a href="" class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px]">Download CV</a> -->
    </div>
</template>