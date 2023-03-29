import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealDetail from "../views/MealDetail.vue";
import MealsByName from "../views/MealsByName.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Guest from "../components/Guest.vue";
import Ingredient from "../components/Ingredient.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredient",
        name: "ingredient",
        component: Ingredient,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetail",
        component: MealDetail,
      },
    ],
  },
  {
    path: "/guest",
    name: "guest",
    component: Guest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
