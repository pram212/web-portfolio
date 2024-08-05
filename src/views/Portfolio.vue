<script setup>
import ContentCard from "../components/ContentCard.vue"
import { portfolios } from "../resources/data"
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import moment from 'moment';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const detail = ref(Object)
const data = ref(null);

const getDetail = (index) => {
    detail.value = data.value[index]
    console.log(detail.value);

}

const dateConvert = (dateString) => moment(dateString).format('MMM YYYY')

onMounted(() => {
    if (import.meta.env.VITE_USE_SERVICE == 'TRUE') {
        const apiBaseUrl = import.meta.env.VITE_APP_API_URL
        axios.get(`${apiBaseUrl}/portfolios`)
            .then((response) => data.value = response.data)
            .catch((error) => console.log('gagal fetch data portfolio: ', error))
    } else {
        data.value = portfolios
    }
})

</script>

<template>
    <ContentCard title="Portfolio">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div v-for="(item, index) in data" :key="index"
                class="bg-transparent mb-3 dark:border-2 overflow-hidden dark:border-neutral-600 rounded-md image-full w-full shadow-xl">
                <figure>
                    <img :src="Array.isArray(item.images)
                        ? item.images[0]
                        : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'"
                        alt="project images" />
                </figure>
                <div class="card-body bg-none">
                    <p class="text-muted font-semibold">{{ item.type }}</p>
                    <h2 class="card-title text-title">{{ item.name }}</h2>
                    <div class="card-actions justify-end">
                        <label class="btn btn-sm btn-primary" for="modal_detail" @click="getDetail(index)">Learn
                            More</label>
                    </div>
                </div>
            </div>
        </div>
    </ContentCard>

    <!-- detail portfolio modal -->
    <input type="checkbox" id="modal_detail" class="modal-toggle" />
    <dialog id="modal_detail" class="modal modal-bottom bg-white bg-opacity-30">
        <div
            class="modal-box bg-gradient-to-b from-purple-200 to-white dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 m-0 rounded-none lg:px-24 ">
            <form method="dialog">
                <label for="modal_detail" class="btn btn-sm btn-circle btn-ghost absolute right-7">✕</label>
            </form>
            <div class="flex items-center">
                <h3 class="text-lg font-bold text-red-500 mx-auto">{{ detail.name }}</h3>
            </div>
            <div class="divider divider-error"></div>

            <div class="md:grid md:grid-cols-2 mx-auto mb-4 gap-2 text-title">
                <div>
                    <p class="capitalize text-title">
                        <span class="font-semibold">Type</span> : <span>{{ detail.type }}</span>
                    </p>
                    <p class="capitalize text-title">
                        <span class="font-semibold">Date</span> : <span>{{ dateConvert(detail.start) }} - {{ dateConvert(detail.end) }}</span>
                    </p>
                </div>
                <div>
                    <p class="capitalize text-title">
                        <span class="font-semibold">Client</span> : <span>{{ detail.client }}</span>
                    </p>
                    <p class="capitalize text-title">
                        <span class="font-semibold">Demo</span> : <span>{{ detail.demo?.url }}</span>
                    </p>
                </div>
            </div>

            <p class="text-title mb-4" v-html="detail.description"></p>

            <figure class="bg-neutral-700">
                <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="true" class="mb-10">
                    <Slide v-for="(item, index) in detail.images" :key="index">
                        <div class="carousel__item">
                            <img :src="item" alt="" class="h-96 mx-auto">
                        </div>
                    </Slide>
                </Carousel>
            </figure>

            <p class="capitalize text-title">
                <span class="font-semibold">Tech</span>
                : <span>
                    {{ Array.isArray(detail.tech) ? detail.tech.join(", ") : '' }}
                </span>
            </p>

            <p class="capitalize text-title">
                <span class="font-semibold">Modules</span>
                : <span>
                    {{ Array.isArray(detail.modules) ? detail.modules.join(", ") : '' }}
                </span>
            </p>
        </div>
    </dialog>

</template>