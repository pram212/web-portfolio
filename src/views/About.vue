<script setup>
import ContentCard from "../components/ContentCard.vue"
import ProfileInfo from "../components/About/ProfileInfo.vue";
import ProfileInfoSkeleton from "../components/Skeletons/ProfileInfoSkeleton.vue";
import ClientInfo from "../components/About/ClientInfo.vue";
import ClientSkeleton from "../components/Skeletons/ClientSkeleton.vue";

</script>

<template>
    <ContentCard title="About Me">
        <Suspense>
            <ProfileInfo/>
            <template #fallback>
                <ProfileInfoSkeleton/>
            </template>
        </Suspense>

        <Suspense>
            <ClientInfo/>
            <template #fallback>
                <ClientSkeleton/>
            </template>
        </Suspense>
    </ContentCard>
</template>