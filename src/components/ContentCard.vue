<script setup>
defineProps({
    title : { type: String, required: true }
})
</script>
<template>
    <div class="container animate-fade-down animate-delay-0 animate-once">
        <div class="rounded-t-3xl pt-4 py-10 px-5 md:px-16 bg-gradient-to-b from-white via-purple-200 to-sky-200  dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900">
            <div class="flex w-full flex-col">
                <div class="divider divider-start divider-error md:w-1/2 text-title text-[37px] font-serif font-semibold mb-10 mt-11">
                    {{ title }}
                </div>
                <slot></slot>
            </div>
        </div>
        <div class="rounded-b-3xl bg-neutral-950 py-5 flex justify-center">
            &copy; 2024 All Right Reserved by Pramono
        </div>
    </div>
</template>