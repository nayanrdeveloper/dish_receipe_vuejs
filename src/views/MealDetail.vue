<template>
    {{ meal }}
    <div class="w-[800px] mx-auto">
        <h1>{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" />
        <div class="grid grid-cols-3">
            <p>Category : {{ meal.strCategory }}</p>
            <p>Tags: {{ meal.strTags }}</p>
            <p>Area: {{ meal.strArea }}</p>
        </div>
        <div class="my-3">
            <p>{{ meal.strInstructions }}</p>
        </div>
        <div class="grid grid-cols-2 mt-5">
            <div>
                <h2 class="font-semibold text-2xl">Ingredients</h2>
                <ul class="mt-2">
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="font-semibold text-2xl">Measure</h2>
                <ul class="mt-2">
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="my-5">
                <YoutubeBtn :href="meal.strYoutube" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeBtn from '../components/YoutubeBtn.vue';

const meal = ref({});
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {};
        })
})
</script>