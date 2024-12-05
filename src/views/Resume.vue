<script setup>
import ContentCard from "../components/ContentCard.vue"
import EducationSection from "../components/ResumeComponents/Education.vue"
import ExperienceSection from "../components/ResumeComponents/Experience.vue"
import CourseSection from "../components/ResumeComponents/Course.vue"
import Skill from "../components/ResumeComponents/Skill.vue"
import Knowledge from "../components/ResumeComponents/Knowledge.vue"
import EducationSkeleton from "../components/Skeletons/EducationSkeleton.vue"
import ExperienceSkeletonVue from "../components/Skeletons/ExperienceSkeleton.vue"
import CourseSkeletonVue from "../components/Skeletons/CourseSkeleton.vue"
import SkillSkeletonVue from "../components/Skeletons/SkillSkeleton.vue"
</script>

<template>
    <ContentCard title="Resume">
        <!-- section 1 -->
        <section class="md:grid md:grid-cols-3 md:gap-x-3 pt-6">
            <Suspense>
                <EducationSection/>
                <template #fallback>
                    <EducationSkeleton></EducationSkeleton>
                </template>
            </Suspense>
            
            <Suspense>
                <ExperienceSection/>
                <template #fallback>
                    <ExperienceSkeletonVue/>
                </template>
            </Suspense>
            <Suspense>
                <CourseSection/>
                <template #fallback>
                    <CourseSkeletonVue/>
                </template>
            </Suspense>

        </section>
        <section class="md:grid md:grid-cols-2 md:gap-x-3 pt-6">
            <Suspense>
                <Skill/>
                <template #fallback>
                    <SkillSkeletonVue/>
                </template>
            </Suspense>
            
            <Knowledge></Knowledge>
        </section>
    </ContentCard>
</template>