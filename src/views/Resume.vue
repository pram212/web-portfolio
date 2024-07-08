<script setup>
import ContentCard from "../components/ContentCard.vue"
import EducationSection from "../components/ResumeComponents/Education.vue"
import ExperienceSection from "../components/ResumeComponents/Experience.vue"
import CourseSection from "../components/ResumeComponents/Course.vue"
import ProgressBar from "../components/Progress.vue"

const educations = [
    {
        start: '2014', 
        end: '2017', 
        title: 'Accosiate Degree', 
        institution: 'Stebank Islam Mr. Sjafruddin Prawiranegara, Jakarta, Indonesia'
    },
    {
        start: '2010', 
        end: '2012', 
        title: 'Senior High School', 
        institution: 'SMAN 1 Cililin, Bandung, Indonesia'
    },
]

const experiences = [
    {
        start: '2023', 
        end: 'Present', 
        title: 'Fullstack Developer', 
        institution: 'PT Melkhior Teknologi'
    },
    {
        start: '2022', 
        end: '2023', 
        title: 'Software Engineer', 
        institution: 'PT Mandala Dwipantara Proteksi'
    },
]

const courses = [
    {
        start: 'April 2021', 
        end: 'Mei 2021', 
        title: 'Laravel Web Development Course', 
        institution: 'Sanbercode'
    },
    {
        start: '2022', 
        end: '2023', 
        title: 'Laravel x Vue js Course', 
        institution: 'Eduwork'
    },
]

const skills = [
    { tech: 'Laravel', value: 90 },
    { tech: 'Tailwind CSS', value: 70 },
    { tech: 'Vue.js', value: 70 },
    { tech: 'PHP', value: 80 },
    { tech: 'Mysql', value: 80 },
    { tech: 'Javascript', value: 80 },
    { tech: 'HTML', value: 90 },
    { tech: 'CSS', value: 80 },
    { tech: 'Bootstrap', value: 90 },
    { tech: 'jQuery', value: 90 },
    { tech: 'Node.js', value: 60 },
    { tech: 'Express.js', value: 60 },
]

const knowledges = ['programming', 'accounting', 'database', 'front end', 'banking',]

</script>

<template>
    <ContentCard title="Resume">
        <!-- section 1 -->
        <section class="md:grid md:grid-cols-3 md:gap-x-3 pt-6">
            <EducationSection :data="educations" />
            <ExperienceSection :data="experiences" />
            <CourseSection :data="courses" />
        </section>
        <section class="md:grid md:grid-cols-2 md:gap-x-3 pt-6">
            <div class="px-2 mb-5">
                <h1 class="mb-4 flex space-x-3 font-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-9 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Skill</span>
                </h1>
                <ul>
                    <li v-for="(item, index) in skills" :key="index">
                        <ProgressBar :title="item.tech" :value="item.value" />
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="text-2xl font-medium mb-4 text-title">Knowledge</h1>
                <div>
                    <button type="button" class="btn btn-primary btn-sm mr-2 mb-2 capitalize"
                        v-for="(item, index) in knowledges" :key="index">{{ item }}</button>
                </div>
            </div>
        </section>
    </ContentCard>
</template>