<script setup>
import Navbar from './components/Navbar.vue'
import NavbarMobile from './components/NavbarMobile.vue'
import Sidebar from './components/Sidebar.vue';
import { onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark)

onMounted(() => {

})

</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <NavbarMobile @theme-toggle="toggleDark()" />
      <div class="min-h-screen overflow-y-scroll bg-day dark:bg-night lg:px-24 bg-red-500">
        <Navbar @theme-toggle="toggleDark()"></Navbar>
        <main class="max-h-fit py-10">
          <RouterView />
        </main>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <!-- Sidebar content here -->
      <Sidebar />
    </div>
  </div>
</template>
