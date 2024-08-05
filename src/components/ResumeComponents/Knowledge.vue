<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { knowledges } from "../../resources/data";

const data = ref(knowledges);

onMounted(() => {
    if (import.meta.env.VITE_USE_SERVICE=='TRUE') {
        // const apiBaseUrl = import.meta.env.VITE_APP_API_URL
        // axios.get(`${apiBaseUrl}/knowledges`)
        //     .then((response) => data.value = response.data )
        //     .catch( (error) => console.log('gagal fetch data skill: ', error) )
    }
})

</script>

<template>
    <div>
        <h1 class="text-2xl font-medium mb-4 text-title">Knowledge</h1>
        <div>
            <button type="button" class="btn btn-primary btn-sm mr-2 mb-2 capitalize"
                v-for="(item, index) in data" :key="index">{{ item }}</button>
        </div>
    </div>
</template>