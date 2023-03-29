<template>
    <div>
        <a :href="href" target="_blank"
            class="px-3 py-2 rounded border border-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
            Youtube
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    href: String,
})
</script>