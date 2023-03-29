<template>
    <div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients)

function searchMealGradients() {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
}

onMounted(() => {
    if (route.params.ingredient) {
        searchMealGradients();
    }
});
</script>