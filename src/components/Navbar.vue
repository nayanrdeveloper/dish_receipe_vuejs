<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5">
            Home
        </router-link>
        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }"
                class="px-2 h-full hover:bg-purple-200 rounded-md py-1 inline-flex justify-center transition-colors">
                Search Meals
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="px-2 h-full hover:bg-purple-200 rounded-md py-1 inline-flex justify-center transition-colors">
                Meals By Letter Meals
            </router-link>
            <router-link :to="{ name: 'ingredient' }"
                class="px-2 h-full hover:bg-purple-200 rounded-md py-1 inline-flex justify-center transition-colors">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>

<script setup>
</script>