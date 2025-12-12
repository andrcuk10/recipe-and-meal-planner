import HomePage from '@/views/HomePage.vue'
import MealPlanPage from '@/views/MealPlanPage.vue'
import RecipePage from '@/views/RecipePage.vue'
import RecipesPage from '@/views/RecipesPage.vue'
import ShoppingListPage from '@/views/ShoppingListPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesPage,
  },
  {
    path: '/recipes/:id',
    name: 'Recipe',
    component: RecipePage,
  },
  {
    path: '/meal-plan',
    name: 'Meal Plan',
    component: MealPlanPage,
  },
  {
    path: '/shopping-list',
    name: 'Shopping List',
    component: ShoppingListPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
