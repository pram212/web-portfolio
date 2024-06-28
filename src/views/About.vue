<script setup>
import BirthdayInfo from "../components/AboutComponents/BirthdayInfo.vue"
import LocationInfo from "../components/AboutComponents/LocationInfo.vue"
import PhoneInfo from "../components/AboutComponents/PhoneInfo.vue"
import EmailInfo from "../components/AboutComponents/EmailInfo.vue"
import ContentCard from "../components/ContentCard.vue"

</script>

<template>
    <ContentCard title="About Me">
        <section class="flex space-x-8 mb-7">
            <div class="min-h-fit flex-1">
                <img src="/foto-2.jpg" class="rounded-[35px] border-none shadow-lg" />
            </div>
            <div class="content w-[60%]">
                <section class="mb-4">
                    <h1 class="font-title">Who am i?</h1>
                    <p class="text-gray-500 dark:text-gray-400 leading-7 font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem eos enim totam
                        voluptate quos quaerat minus, illo error asperiores esse similique illum veniam laboriosam!
                        Illo
                        alias ratione facere quia.
                    </p>
                </section>
                <section class="mb-4">
                    <h1 class="font-title">Personal Info</h1>
                    <div class="grid grid-cols-2 gap-3">
                        <PhoneInfo/>
                        <LocationInfo/>
                        <EmailInfo/>
                        <BirthdayInfo/>
                    </div>
                </section>
            </div>
        </section>
    </ContentCard>
</template>