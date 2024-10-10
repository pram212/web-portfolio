<script setup>
import BirthdayInfo from "../components/AboutComponents/BirthdayInfo.vue"
import LocationInfo from "../components/AboutComponents/LocationInfo.vue"
import EmailInfo from "../components/AboutComponents/EmailInfo.vue"
import ContentCard from "../components/ContentCard.vue"
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { clients, biodata, contact } from "../resources/data"
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { formatDate } from "../helpers"

const profile = ref(biodata);
const contactData = ref(contact);
const clientsData = ref(clients);

onMounted(() => {
    if (import.meta.env.VITE_USE_SERVICE=='TRUE') {
        const apiBaseUrl = import.meta.env.VITE_APP_API_URL
        // get biodata from api
        axios.get(`${apiBaseUrl}/biodata`)
            .then((response) => profile.value = response.data )
            .catch( (error) => console.log('gagal fetch data biodata: ', error) )
        // get contact from api
        axios.get(`${apiBaseUrl}/contacts`)
            .then((response) => contactData.value = response.data )
            .catch( (error) => console.log('gagal fetch data contact: ', error) )
        // get clients from api
        axios.get(`${apiBaseUrl}/clients`)
            .then((response) => clientsData.value = response.data )
            .catch( (error) => console.log('gagal fetch data client: ', error) )
    }
})

</script>

<template>
    <ContentCard title="About Me">
        <section class="md:flex md:space-x-8 mb-7">
            <div class="min-h-fit md:flex-1 mb-5">
                <img :src="profile.photo2" class="rounded-[35px] border-none shadow-lg" />
            </div>
            <div class="content md:w-[60%]">
                <section class="mb-4">
                    <h1 class="font-title">Who am i?</h1>
                    <p class="text-muted md:leading-7" v-html="profile.summary"></p>
                </section>
                <section class="mb-4">
                    <h1 class="font-title">Personal Info</h1>
                    <div class="md:grid md:grid-cols-2 md:gap-3 space-y-2">
                        <LocationInfo :address="contactData.address"/>
                        <EmailInfo :email="contactData.email"/>
                        <BirthdayInfo :birthday="formatDate(profile.birthday, 'DD MMM YYYY')"/>
                    </div>
                </section>
            </div>
        </section>
        <section class="px-10 md:px-0">
            <h1 class="font-title text-center md:my-6">Clients</h1>
            <Carousel :autoplay="2000" :items-to-show="3" :wrap-around="true" class="mb-10">
                <Slide v-for="(item, index) in clientsData" :key="index">
                    <div class="carousel__item p-6">
                        <img :src="item.logo" :alt="item.company">
                    </div>
                </Slide>
            </Carousel>
        </section>
    </ContentCard>
</template>