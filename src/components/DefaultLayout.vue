<template>
    <div class="bg-gray-100 h-full">
        <Navbar />
    </div>
    <main>
        <router-view />
    </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
</script>