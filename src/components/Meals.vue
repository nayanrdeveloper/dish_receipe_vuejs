<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import MealCard from './MealCard.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Object,
    }
})
</script>