<script setup lang="ts">
import { useDark } from '@vueuse/core'

defineProps({
    openNavbar: Boolean
})

const darkMode = useDark()
</script>
<template>
    <nav :class="openNavbar ? 'block' : 'hidden'"
        class="sm:block sm:relative sm:top-0 sm:py-0 sm:shadow-none bg-[#ffeee6] dark:bg-gray-800 dark:text-gray-300 dark:shadow-none shadow shadow-gray-300 left-0 right-0 py-5 absolute top-12 font-body text-sm">
        <ul class="w-2/4 mx-auto sm:flex sm:space-x-5 sm:w-full sm:items-center">
            <router-link to="/">
                <li @click="$emit('closeNavbar')"
                    class="hover:text-teal-500 py-3 mb-3 sm:py-0 sm:mb-0 dark:border-b border-gray-700">
                    Home</li>
            </router-link>
            <router-link to="/about">
                <li @click="$emit('closeNavbar')"
                    class="hover:text-teal-500 py-3 mb-3 sm:py-0 sm:mb-0 dark:border-b border-gray-700">
                    About</li>
            </router-link>
            <router-link to="">
                <li @click="$emit('closeNavbar')"
                    class="hover:text-teal-500 py-3 mb-3 sm:py-0 sm:mb-0 dark:border-b border-gray-700">
                    Contact</li>
            </router-link>
            <router-link to="">
                <li @click="$emit('closeNavbar')"
                    class="hover:text-teal-500 py-3 mb-3 sm:py-0 sm:mb-0 dark:border-b border-gray-600">
                    Carrers</li>
            </router-link>
            <li
                class="mt-5 px-3 py-2 sm:mt-0 dark:bg-gray-700 sm:dark:bg-inherit rounded-xl group flex text-xs items-center justify-between">
                <p class="text-gray-700 sm:hidden dark:text-gray-300 group-hover:text-teal-500">Appearance</p>
                <div @click="darkMode = !darkMode" class="focus:outline-none">
                    <svg v-if="!darkMode" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z" />
                    </svg>

                    <svg v-else width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                    </svg>
                </div>
            </li>
        </ul>
    </nav>
</template>