<script setup>
defineProps({
    title: String,
    value: String
})
</script>

<template>
    <div class="flex justify-between font-medium">
        <span>{{ title }}</span>
        <span>{{ value }}%</span>
    </div>
    <progress class="progress w-full progress-error" :value="value" max="100"></progress>
</template>