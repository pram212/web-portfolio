<script setup>
import LocationInfo from './LocationInfo.vue'
import EmailInfo from './EmailInfo.vue'
import { ref } from 'vue'
// import biodata from "../../resources/datas/biodatas.json";
// import contact from "../../resources/datas/contacts.json";
import { supabase } from "../../lib/supabaseClient";
// await new Promise(resolve => setTimeout(resolve, 500))

const biodata = ref([])
const contact = ref([])

const resBiodata = await supabase.from('biodatas').select()
biodata.value = resBiodata.data[0]

const resContact = await supabase.from('contacts').select()
contact.value = resContact.data[0]

// // axios setup base-url
// const axiosSetup = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL })

// // get profile info
// const profile = ref(null)
// const fetchProfile = await axiosSetup.get(import.meta.env.VITE_APP_API_URL + "/biodata")
// profile.value = await fetchProfile.data

// // get contact info
// const contact = ref(null)
// const fetchContact = await axiosSetup.get(import.meta.env.VITE_APP_API_URL + "/contacts")
// contact.value = await fetchContact.data

</script>

<template>
    <section class="md:flex md:space-x-8 mb-7">
        <div class="min-h-fit md:flex-1 mb-5">
            <img :src="biodata.photo2" class="rounded-[35px] border-none shadow-lg" />
        </div>
        <div class="content md:w-[60%]">
            <section class="mb-4">
                <h1 class="font-title">Who am i?</h1>
                <p class="text-muted md:leading-7" v-html="biodata.summary"></p>
            </section>
            <section class="mb-4">
                <h1 class="font-title">Contact</h1>
                <div class="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0">
                    <LocationInfo :address="contact.address" />
                    <EmailInfo :email="contact.email" />
                </div>
            </section>
        </div>
    </section>
</template>