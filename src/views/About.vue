<script setup>
import BirthdayInfo from "../components/AboutComponents/BirthdayInfo.vue"
import LocationInfo from "../components/AboutComponents/LocationInfo.vue"
import PhoneInfo from "../components/AboutComponents/PhoneInfo.vue"
import EmailInfo from "../components/AboutComponents/EmailInfo.vue"
import ContentCard from "../components/ContentCard.vue"
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { clientImages, profile } from "../resources/data"

</script>

<template>
    <ContentCard title="About Me">
        <section class="md:flex md:space-x-8 mb-7">
            <div class="min-h-fit md:flex-1 mb-5">
                <img :src="profile.foto2" class="rounded-[35px] border-none shadow-lg" />
            </div>
            <div class="content md:w-[60%]">
                <section class="mb-4">
                    <h1 class="font-title">Who am i?</h1>
                    <p class="text-muted md:leading-7">{{ profile.bio }}</p>
                </section>
                <section class="mb-4">
                    <h1 class="font-title">Personal Info</h1>
                    <div class="md:grid md:grid-cols-2 md:gap-3 space-y-2">
                        <PhoneInfo :phoneNumber="profile.phone" />
                        <LocationInfo :address="profile.address"/>
                        <EmailInfo :email="profile.email"/>
                        <BirthdayInfo :birthday="profile.birthday"/>
                    </div>
                </section>
            </div>
        </section>
        <section class="px-10 md:px-0">
            <h1 class="font-title text-center md:my-6">Clients</h1>
            <Carousel :autoplay="2000" :items-to-show="3" :wrap-around="true" class="mb-10">
                <Slide v-for="(item, index) in clientImages" :key="index">
                    <div class="carousel__item p-6">
                        <img :src="item" alt="">
                    </div>
                </Slide>
            </Carousel>
        </section>
    </ContentCard>
</template>