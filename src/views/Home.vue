<template>
    <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import Meals from '../components/Meals.vue';


const meals = ref([]);

onMounted(() => {
    for (let i = 0; i < 10; i++) {
        axiosClient.get('random.php')
            .then(({ data }) => {
                meals.value.push(data.meals[0])
            })
    }
})
</script>