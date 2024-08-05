<script setup>
import ContentCard from "../components/ContentCard.vue"
import { contact } from "../resources/data"
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref(contact);

onMounted(() => {
    if (import.meta.env.VITE_USE_SERVICE=='TRUE') {
        const apiBaseUrl = import.meta.env.VITE_APP_API_URL
        axios.get(`${apiBaseUrl}/contacts`)
            .then((response) => data.value = response.data )
            .catch( (error) => console.log('gagal fetch data contact: ', error) )
    }
})
</script>

<template>
    <content-card title="Contact">
        <div class="md:grid md:grid-cols-2 md:gap-x-6 space-y-8">
            <!-- contacts -->
            <div class="contact-items space-y-4">
                <!-- phone -->
                <div class="flex items-center rounded-md p-4 bg-transparent dark:bg-neutral-800">
                    <div class="flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>
                        <div>
                            <h1 class="text-title text-lg font-medium">Phone :</h1>
                            <p class="text-lg text-muted">{{ data.phone }}</p>
                        </div>
                    </div>
                </div>
                <!-- email -->
                <div class="flex items-center rounded-md p-4 bg-transparent dark:bg-neutral-800">
                    <div class="flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>

                        <div>
                            <h1 class="text-title text-lg font-medium">Email :</h1>
                            <p class="text-lg text-muted">{{ data.email }}</p>
                        </div>
                    </div>
                </div>
                <!-- address -->
                <div class="flex items-center rounded-md p-4 bg-transparent dark:bg-neutral-800">
                    <div class="flex space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div>
                            <h1 class="text-title text-lg font-medium">Address :</h1>
                            <p class="text-lg text-muted">{{ data.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- message -->
            <div class="dark:border-2 dark:border-neutral-700 rounded-md p-4">
                <p class="text-2xl text-muted">I'm always open to discussing product</p>
                <p class="text-title text-2xl">design work or partnerships.</p>
                <div class="divider"></div>
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text text-muted font-semibold">Name *</span>
                    </div>
                    <input type="text" class="input input-bordered input-ghost w-full max-w-xs" required/>
                </label>
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text text-muted font-semibold">Email *</span>
                    </div>
                    <input type="email" class="input input-bordered input-ghost w-full max-w-xs" required />
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text text-muted font-semibold">Message *</span>
                    </div>
                    <textarea class="textarea textarea-bordered input-ghost h-24" required></textarea>
                </label>

                <button class="btn btn-primary btn-sm mt-3 bg-white">Submit</button>
            </div>
        </div>
    </content-card>
</template>