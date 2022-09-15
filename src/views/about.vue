<script setup lang="ts">
import { useHead } from "@vueuse/head";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

useHead({
    title: 'Lumera | About',
    meta: [
        {
            name: 'description',
            content: 'Lumera about page'
        }
    ]
})
</script>

<template>
    <Header/>
    <section class="my-20 p-5 font-body text-center">
        <div class="space-y-3">
            <h2 class="text-sm text-teal-600">About Us</h2>
            <h1 class="text-3xl font-title tracking-wide">We're a <br> distributed team</h1>
            <p class="text-sm text-gray-700 dark:text-gray-500">We have offices all around the world.</p>
        </div>

        <div class="my-10 space-y-1">
            <h2 class="text-base font-semibold">Support</h2>
            <p class="text-sm">Our friendly team is here to help</p>
            <p class="text-sm text-teal-700">support@lumera.com</p>
        </div>

        <div class="space-y-1">
            <h2 class="text-base font-semibold">Sales</h2>
            <p class="text-sm">Questions or queries? Get in touch!</p>
            <p class="text-sm text-teal-700">sales@lumera.com</p>
        </div>
        
        <div class="mt-10 space-y-1">
            <h2 class="text-base font-semibold">Phone</h2>
            <p class="text-sm">Mon-Fri from 8am to 5am</p>
            <p class="text-sm text-teal-700">+1(775) 93735-39245</p>
        </div>
    </section>

    <Footer/>
</template>