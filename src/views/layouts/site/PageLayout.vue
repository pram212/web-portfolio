<script setup>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import { useDark, useToggle } from '@vueuse/core';
import { ref, onMounted, onUpdated, onBeforeUpdate } from 'vue';

const isDark = useDark();
const showSidebar = ref(false)

const themeToggle = useToggle(isDark)
const sidebarToggle = () => showSidebar.value = !showSidebar.value

</script>

<template>
    <div class="drawer drawer-end bg-day dark:bg-night">
        <input id="my-drawer" type="checkbox" :checked="showSidebar" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <Navbar @theme-toggle="themeToggle()" @sidebar-toggle="sidebarToggle()" :showSidebar="showSidebar"></Navbar>
            <div class="flex flex-col min-h-screen bg-day dark:bg-night lg:px-8">
                <main class="flex-grow lg:py-10 p-3">
                    <RouterView />
                </main>
            </div>
        </div>
        <div class="drawer-side bg-transparent mt-16">
            <!-- Sidebar content here -->
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <Sidebar @theme-toggle="themeToggle()" @sidebar-toggle="sidebarToggle()" />
        </div>
    </div>
</template>
