<script setup>
import PortfolioContent from "@components/Portfolio/PortfolioContent.vue"
import PortfolioSkeletonVue from "@components/Skeletons/PortfolioSkeleton.vue"
</script>

<template>
  <Suspense>
    <PortfolioContent />
    <template #fallback>
      <PortfolioSkeletonVue />
    </template>
  </Suspense>
</template>