<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import NavbarMobile from './components/NavbarMobile.vue'
import { onMounted, ref, onUpdated } from 'vue'
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark)

onMounted(() => {
  
})

</script>

<template>
  <NavbarMobile/>
  <div class="min-h-screen bg-day dark:bg-night lg:px-24 bg-red-500">
    <Navbar @theme-toggle="toggleDark()"></Navbar>
    <main class="max-h-fit py-10">
      <RouterView />
    </main>
  </div>
</template>
