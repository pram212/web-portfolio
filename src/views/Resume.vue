<script setup>
import ContentCard from "../components/ContentCard.vue"
import EducationSection from "../components/ResumeComponents/Education.vue"
import ExperienceSection from "../components/ResumeComponents/Experience.vue"
import CourseSection from "../components/ResumeComponents/Course.vue"
import Skill from "../components/ResumeComponents/Skill.vue"
import Knowledge from "../components/ResumeComponents/Knowledge.vue"
</script>

<template>
    <ContentCard title="Resume">
        <!-- section 1 -->
        <section class="md:grid md:grid-cols-3 md:gap-x-3 pt-6">
            <EducationSection/>
            <ExperienceSection/>
            <CourseSection/>
        </section>
        <section class="md:grid md:grid-cols-2 md:gap-x-3 pt-6">
            <Skill></Skill>
            <Knowledge></Knowledge>
        </section>
    </ContentCard>
</template>