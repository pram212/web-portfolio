<script setup>
import FaceBook from '../components/Fb.vue'
import Github from '../components/Github.vue'
import Linkedin from '../components/Linkedin.vue'
</script>

<template>
    <div class="mx-auto text-center">
        <div class="avatar shadow-2xl rounded-full">
            <div class="rounded-full w-[200px] h-[200px] 2xl:w-[200px] 2xl:h-[200px]">
                <img src="/foto.jpg" />
            </div>
        </div>
        <h3 class="mt-2 mb-1 text-5xl font-semibold text-gray-900 dark:text-white capitalize">pramono</h3>
        <p class="mb-4 text-gray-600 dark:text-gray-500 font-medium text-lg">Web Developer</p>
        <div class="flex justify-center space-x-5 mb-7">
            <a href="" class="bg-base-100 p-[10px] rounded-md hover:btn-primary">
                <FaceBook />
            </a>
            <a href="" class="bg-base-100 p-[10px] rounded-md hover:btn-primary">
                <Github />
            </a>
            <a href="" class="bg-base-100 p-[10px] rounded-md hover:btn-primary">
                <Linkedin />
            </a>
        </div>
        <a href="" class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px]">Download CV</a>
    </div>
</template>