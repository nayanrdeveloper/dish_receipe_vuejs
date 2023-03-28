<template>
    <div class="flex p-8 justify-center">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-400 w-full" placeholder="Search for Meals"
            @change="searchMeals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-2xl">
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
        <div>

        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import store from '../store';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    console.log(keyword.value);
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})
</script>