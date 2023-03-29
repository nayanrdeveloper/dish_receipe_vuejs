<template>
    <div class="bg-white shadow rounded-2xl">
        <router-link :to="{ name: `mealDetail`, params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-2xl w-full h-48 object-cover" />
        </router-link>
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis non, laudantium et
            corrupti esse.</p>
        <div class="p-3 flex space-x-3">
            <a :href="meal.strSource" target="_blank"
                class="px-3 py-2 rounded border border-red-400 hover:bg-red-400 hover:text-white transition-colors">
                Source
            </a>
            <a :href="meal.strYoutube" target="_blank"
                class="px-3 py-2 rounded border border-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                Youtube
            </a>
        </div>
    </div>
</template>

<script setup>

const { meal } = defineProps({
    meal: {
        type: Object,
        required: true,
    }
    // idMeal: Number,
    // strMealThumb: String,
    // strMeal: String,
    // strSource: String,
    // strYoutube: String,
})
</script>