<template>
    <div class="mx-4 mt-5 space-y-5">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-400 w-full"
            placeholder="Search for Ingredients" />
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
            v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" class="shadow-md rounded-md p-4 block">
            <h1>{{ ingredient.strIngredient }}</h1>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';


const ingredients = ref([]);
const keyword = ref('');

const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
})

onMounted(() => {
    axiosClient.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
    });
});
</script>