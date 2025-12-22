<script setup>
import ContentCard from "@components/ContentCard.vue";
import PortfolioDetailContent from "@components/Portfolio/PortfolioDetailContent.vue";
import PortfolioDetailSkeleton from "@components/Skeletons/PortfolioDetailSkeleton.vue";
</script>

<template>
  <ContentCard title="Portfolio Detail">
    <Suspense>
        <PortfolioDetailContent />
        <template #fallback>
            <PortfolioDetailSkeleton/>
        </template>
    </Suspense>
  </ContentCard>
</template>