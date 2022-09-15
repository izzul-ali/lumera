<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './Navbar.vue';
import { onClickOutside } from '@vueuse/core'

const openSidebar = ref(false)

const closeNavbar = () => {
    openSidebar.value = false
}

const target = ref(null)
onClickOutside(target, closeNavbar)

</script>
<template>
    <header ref="target" :class="openSidebar ? 'shadow-none': ''"
        class="sm:flex sm:justify-between fixed top-0 left-0 right-0 shadow shadow-gray-300 bg-[#ffeee6] dark:bg-gray-800 dark:shadow-none dark:text-white flex justify-between items-center p-4">
        <div class="flex items-center gap-x-1">
            <svg class="dark:text-teal-600 text-teal-500" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86a4.42 4.42 0 0 0-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4c.01.86-.17 1.7-.54 2.51zm3.07 1.56l-1.3-.74c.52-.92.78-1.98.78-3.15c0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07c0 1.43-.33 2.74-.98 3.89zm3.14 1.32l-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69c0-1.51-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31c0 1.74-.44 3.54-1.33 5.35z" />
            </svg>
            <h1 class="text-xl font-title">Lumera</h1>
        </div>

        <button @click="openSidebar = !openSidebar" class="focus:outline-none sm:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M10 18q-.425 0-.712-.288Q9 17.425 9 17t.288-.712Q9.575 16 10 16h10q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Zm6 5q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h10q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Z" />
            </svg>
        </button>

        <Navbar @close-navbar="closeNavbar()" :openSidebar="openSidebar" />
    </header>
</template>