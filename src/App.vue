<script setup>
import Navbar from './components/Navbar.vue'
import NavbarMobile from './components/NavbarMobile.vue'
import Sidebar from './components/Sidebar.vue';
import { useDark, useToggle } from '@vueuse/core';
import { ref, onMounted, onUpdated, onBeforeUpdate } from 'vue';

const isDark = useDark();
const showSidebar = ref(false)

const themeToggle = useToggle(isDark)
const sidebarToggle = () => showSidebar.value = !showSidebar.value

onMounted(() => {
})

</script>

<template>
  <div class="drawer drawer-end bg-day dark:bg-night">
    <input id="my-drawer-4" type="checkbox" :checked="showSidebar" class="drawer-toggle"/>
    <div class="drawer-content">
      <!-- Page content here -->
      <NavbarMobile @sidebar-toggle="sidebarToggle()" @theme-toggle="themeToggle()"/>
      <div class="min-h-screen overflow-y-scroll bg-day dark:bg-night lg:px-24 bg-red-500">
        <Navbar @theme-toggle="themeToggle()"></Navbar>
        <main class="max-h-fit lg:py-10 p-3">
          <RouterView />
        </main>
      </div>
    </div>
    <div class="drawer-side bg-transparent mt-20">
      <!-- Sidebar content here -->
      <Sidebar @theme-toggle="themeToggle()"/>
    </div>
  </div>
</template>
