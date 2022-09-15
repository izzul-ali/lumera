<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Header from '../components/Header.vue';

const Footer = defineAsyncComponent({
    loader: () => import('../components/Footer.vue')
})
</script>
<template>
    <Header />
    <slot />
    <Footer />
</template>