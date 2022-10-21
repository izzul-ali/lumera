<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
<template>
    <div @click="toTop()"
        :class=" y > 200 ? 'fixed bottom-7 right-5 bg-[#319197] rounded-full p-2 cursor-pointer' : ''">
        <svg width="20" height="20" color="black" viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
    </div>
</template>