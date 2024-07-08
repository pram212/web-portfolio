<script setup>
defineProps({
    url: String,
    text: String
})

</script>

<template>
    <router-link 
        class="btn px-6 border-none bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:hover:text-white hover:text-white font-semibold"
        :to="url"
    >
        <slot></slot>
    </router-link>
</template>