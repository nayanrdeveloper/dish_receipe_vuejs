<template>
    <div class="flex p-8 justify-center">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-400 w-full" placeholder="Search for Meals"
            @change="searchMeals" />
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';
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
    else {
        store.commit('setSearchedMeals', [])
    }
})
</script>