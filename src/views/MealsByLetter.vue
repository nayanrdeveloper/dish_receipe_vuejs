<template>
    <div class="flex gap-2 justify-center mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import MealCard from '../components/MealCard.vue';
import Meals from '../components/Meals.vue';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>