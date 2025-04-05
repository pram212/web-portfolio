<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
// import axios from 'axios'
import { ref } from 'vue'
// import clients  from '../../resources/datas/clients.json'
import { supabase } from "../../lib/supabaseClient";
// await new Promise(resolve => setTimeout(resolve, 500))

const clients = ref([])
const { data } = await supabase.from('clients').select()
clients.value = data

// const axiosSetup = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL })

// // get contact info
// const clients = ref(null)
// const fetchClient = await axiosSetup.get(import.meta.env.VITE_APP_API_URL + "/clients")
// client.value = await fetchClient.data

</script>

<template>
    <section class="px-10 md:px-0">
        <h1 class="font-title text-center md:my-6">Clients</h1>
        <Carousel :autoplay="2000" :items-to-show="3" :wrap-around="true" class="mb-10">
            <Slide v-for="(item, index) in clients" :key="index">
                <div class="carousel__item p-6">
                    <img :src="item.logo" :alt="item.company">
                </div>
            </Slide>
        </Carousel>
    </section>
</template>