<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'

const modules = [Pagination, Navigation, Autoplay]
</script>
<template>
    <Swiper :space-between="30" :centered-slides="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false
    }" :pagination="{
        clickable: true
    }" :navigation="false" :modules="modules">
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
        <swiper-slide class="p-10 mb-5">
            <p class="font-sans text-xs tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt quam enim eligendi repellendus id reiciendis fugiat laudantium sit accusamus?</p>
        </swiper-slide>
       
    </Swiper>
</template>