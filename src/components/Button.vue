<script setup lang="ts">
defineProps({
    desc: String
})
</script>
<template>
    <div class="flex w-fit gap-x-2 items-center bg-black text-white px-5 py-2 rounded-full text-xs font-body">
        {{ desc }}
        <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z" />
        </svg>
    </div>
</template>