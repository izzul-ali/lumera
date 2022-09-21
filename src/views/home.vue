<script setup lang="ts">
import { useHead } from "@vueuse/head";
import Button from '../components/Button.vue';
import ToTopBtn from '../components/ToTopBtn.vue';

useHead({
    title: 'Lumera | Home',
    meta: [
        {
            name: 'description',
            content: 'Lumera official website'
        }
    ]
})
</script>

<template>
    <section class="mb-10 mt-20 p-5">
        <h1 class="text-3xl font-semibold font-body tracking-wide leading-tight">Reformed Life and Pensions Policy
            Administration</h1>
        <p class="my-3 mb-5 text-xs font-body font-thin tracking-wide text-gray-800 dark:text-gray-400">We provide
            safe,
            continuous digital
            transformation for
            Europe's Life and Pensions industry.</p>
        <Button desc="Learn more" />
    </section>

    <section class="font-body p-5">
        <div class="space-y-2">
            <p class="text-xl font-semibold">300+</p>
            <p class="text-xs">Coverage</p>
        </div>
        <hr class="bg-black my-5">
        <div class="grid grid-cols-2 justify-betwen">
            <div class="space-y-2">
                <p class="text-xl font-semibold">50+</p>
                <p class="text-xs">Customer</p>
            </div>
            <div class="space-y-2">
                <p class="text-xl font-semibold">25+</p>
                <p class="text-xs">Partners</p>
            </div>
        </div>
    </section>

    <section class="pr-5 my-16 rounded overflow-hidden">
        <img src="../assets/work1.jpg" alt="work1">
    </section>

    <section class="text-xl font-title">
        <div
            class="hover:bg-black hover:text-white transition-all duration-300 flex gap-x-4 p-5 justify-between items-center">
            <h2>01</h2>
            <h2 class="flex-1">Drive Continuous <br> Compliance</h2>
        </div>
        <div
            class="hover:bg-black hover:text-white transition-all duration-300 flex gap-x-4 p-5 justify-between items-center">
            <h2>02</h2>
            <h2 class="flex-1">Reduce Costs <br> and Complexity</h2>
        </div>
        <div
            class="hover:bg-black hover:text-white transition-all duration-300 flex gap-x-4 p-5 justify-between items-center">
            <h2>03</h2>
            <h2 class="flex-1">Build Innovative <br> Products</h2>
        </div>
        <div
            class="hover:bg-black hover:text-white transition-all duration-300 flex gap-x-4 p-5 justify-between items-center">
            <h2>04</h2>
            <h2 class="flex-1">Differentiates <br> the Business</h2>
        </div>
    </section>

    <section class="my-16 p-5">
        <h2 class="text-2xl mb-10 font-semibold font-body">Insights</h2>
        <img src="../assets/work2.jpg" alt="work2">
        <h3 class="text-xl font-body font-semibold my-5 leading-normal">Adding award-winning <br> digital engagement
        </h3>
        <p class="text-xs font-body tracking-wide mb-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Corporis aut, repellat repudiandae eos ducimus nulla.</p>
        <Button desc="Learn more" />
    </section>

    <section class="p-5">
        <h2 class="text-2xl font-body font-semibold">Our technologi <br> and services</h2>
        <p class="text-xs my-5 tracking-wide font-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Molestias ad tempore, aliquam magnam, ullam dolor non accusamus blanditiis eligendi nulla hic eveniet
            fugiat. Excepturi, laboriosam.</p>
        <div class="flex items-center gap-x-4">
            <router-link to="/" class="underline text-sm font-body text-green-700">Learn more</router-link>
            <svg width="20" height="20" color="green" viewBox="0 0 16 16">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
        </div>
    </section>

    <section class="mt-16 mb-5 pl-5 rounded overflow-hidden">
        <img src="../assets/work3.jpg" alt="work3">
    </section>

    <section class="p-5 mb-20">
        <Button desc="let's get connected" />
    </section>

    <ToTopBtn />
</template>