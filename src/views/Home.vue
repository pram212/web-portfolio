<script setup>
import LinkSkeletonVue from "../components/Skeletons/LinkSkeleton.vue";
import HeroSkeletonVue from "../components/Skeletons/HeroSkeleton.vue";
import LinkInfo from "../components/Home/LinkInfo.vue"
import Hero from "../components/Home/Hero.vue"

</script>

<template>
    <div class="mx-auto text-center animate-fade-down">
        <Suspense>
            <Hero></Hero>
            <template #fallback>
                <HeroSkeletonVue/>
            </template>
        </Suspense>

        <Suspense>
            <LinkInfo></LinkInfo>
            <template #fallback>
                <LinkSkeletonVue></LinkSkeletonVue>
            </template>
        </Suspense>
        <!-- <a href="" class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px]">Download CV</a> -->
    </div>
</template>