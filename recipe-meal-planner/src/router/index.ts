import HomePage from '@/views/HomePage.vue'
import MealPlanPage from '@/views/MealPlanPage.vue'
import RecipePage from '@/views/RecipePage.vue'
import RecipesPage from '@/views/RecipesPage.vue'
import ShoppingListPage from '@/views/ShoppingListPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesPage,
  },
  {
    path: '/recipes/:id',
    name: 'recipe',
    component: RecipePage,
  },
  {
    path: '/meal-plan',
    name: 'meal-plan',
    component: MealPlanPage,
  },
  {
    path: '/shopping-list',
    name: 'shopping-list',
    component: ShoppingListPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
