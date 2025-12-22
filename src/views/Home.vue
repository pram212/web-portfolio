<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const links = [
  {
    "name": "linkedin",
    "url": "https://www.linkedin.com/in/pramono-82a0721b9",
    "svg": "/icons/linkedin-svgrepo-com.svg",
    "color": "#0077B5",
  },
  {
    "name": "github",
    "url": "https://github.com/pram212",
    "svg": "/icons/github-142-svgrepo-com.svg",
    "color": "black",
  },
  {
    "name": "gitlab",
    "url": "https://gitlab.com/pramono6236",
    "svg": "/icons/gitlab-svgrepo-com.svg",
    "color": "#E24329",
  }
]

</script>

<template>
    <div class="flex items-center justify-center mt-24 lg:mt-0 text-center animate-fade-down ">
        <div>
            <div class="block">
                <div class="avatar shadow-2xl rounded-full">
                    <div class="rounded-full w-[250px] h-[250px] 2xl:w-[250px] 2xl:h-[250px]">
                        <img src="/foto.jpg" />
                    </div>
                </div>
                <h3 class="mt-4 mb-1 text-3xl font-semibold text-gray-900 dark:text-white capitalize">
                    Pramono
                </h3>
                <p class="mb-4 text-muted text-lg">Software Engineer | Fullstack Developer | Frontend Developer</p>
            </div>

            <div class="flex justify-center space-x-5 mb-7">
                <a target="_blank" v-for="(item, index) in links" :key="index" :href="item.url"
                    class="bg-transparent dark:bg-neutral-800 p-[10px] rounded-md hover:btn-primary">
                    <img :src="item.svg" class="h-8 w-8" alt="">
                </a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam modi soluta laudantium amet sapiente delectus quisquam distinctio pariatur illum aliquid totam doloribus tempore labore, velit qui deleniti accusantium animi non!</p>
            <!-- <a v-if="locale === 'id'" href="/cv/CV_ID.pdf" target="blank" class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px]">Download CV</a>
            <a v-else href="/cv/CV_EN.pdf" target="blank" class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px]">Download CV</a> -->
        </div>
    </div>
</template>