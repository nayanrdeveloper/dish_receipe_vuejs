import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealByLetter", data.meals);
  });
}

export function searchMealsByIngredients({ commit }, ingredients) {
  axiosClient.get(`filter.php?i=${ingredients}`).then(({ data }) => {
    commit("setMealByIngredients", data.meals);
  });
}
