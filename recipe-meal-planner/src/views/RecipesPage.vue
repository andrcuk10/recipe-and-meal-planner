<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardItem from '@/components/ui/card/CardItem.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import type { Recipe } from '@/types/recipe'
import { ref } from 'vue'

// Mock data - kasnije će biti iz baze
const mockRecipes = ref<Recipe[]>([
  {
    id: 1,
    name: 'Piletina sa povrćem',
    servings: 4,
    prepTime: 20,
    cookTime: 30,
    difficulty: 'Srednje',
  },
  {
    id: 2,
    name: 'Salata od paradajza',
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    difficulty: 'Lako',
  },
])

// const search = ref<string>('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- {/* Header */} -->
    <AppHeader title="Recepti" description="Upravljaj svojom bazom receptata">
      <RouterLink :to="{ name: 'Recipes' }">
        <ButtonItem class-name="px-3 bg-emerald-600 hover:bg-emerald-700 text-white"
          >Novi recept</ButtonItem
        >
      </RouterLink>
    </AppHeader>

    <!-- {/* Search Bar */} -->

    <!-- { /* Recipes Cards */} -->
    <div v-if="mockRecipes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardItem
        v-for="recipe in mockRecipes"
        :key="recipe.id"
        class="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden group"
      >
        <div
          class="h-40 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center"
        >
          <div class="text-center">
            <p class="text-4xl">🍽️</p>
            <p class="text-sm text-slate-600 mt-2">{{ recipe.name }}</p>
          </div>
        </div>

        <div class="p-4">
          <CardHeader>
            <CardTitle className="text-slate-900">{{ recipe.name }}</CardTitle>
            <CardDescription className="flex gap-4 text-xs mt-2">
              <span>⏱️ {{ recipe.prepTime + recipe.cookTime }} min</span>
              <span>👥 {{ recipe.servings }} porcija</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div class="flex gap-2">
              <span
                class="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
              >
                {{ recipe.difficulty }}
              </span>
            </div>

            <div className="flex gap-2">
              <ButtonItem class-name="w-full bg-transparent border-slate-200 hover:bg-slate-100">
                Pregled
              </ButtonItem>
              <ButtonItem class-name="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >Dodaj</ButtonItem
              >
            </div>
          </CardContent>
        </div>
      </CardItem>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-slate-600 mb-4">Nema pronađenih recepata</p>
      <RouterLink :to="{ name: 'Home' }">
        <ButtonItem class-name="px-4 bg-emerald-600 hover:bg-emerald-700 text-white"
          >Kreiraj novi recept</ButtonItem
        >
      </RouterLink>
    </div>
  </div>
</template>
