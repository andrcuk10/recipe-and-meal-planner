<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardItem from '@/components/ui/card/CardItem.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
</script>

<template>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- {/* Header */} -->
    <AppHeader
      title="Dobrodošli!"
      description="Upravljaj svojim receptima, planiraj obroke i kreiraj liste kupovine na jednom mjestu"
    ></AppHeader>

    <!-- {/* Main Cards Grid */} -->
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardHeader class-name="pb-4">
          <CardTitle className="text-slate-900">Recepti</CardTitle>
          <CardDescription>Kreiraj i upravljaj tvojim receptima</CardDescription>
        </CardHeader>
        <CardContent class-name="space-y-4">
          <p class="text-2xl font-bold text-slate-900">0</p>
          <div class="flex gap-2">
            <RouterLink :to="{ name: 'Recipes' }" class="flex-1">
              <ButtonItem class-name="bg-transparent border-slate-200 hover:bg-slate-100">
                Pregledaj
              </ButtonItem>
            </RouterLink>
            <RouterLink :to="{ name: 'Recipes' }" class="flex-1">
              <ButtonItem class-name="bg-emerald-600 hover:bg-emerald-700 text-white"
                >Novi</ButtonItem
              >
            </RouterLink>
          </div>
        </CardContent>
      </CardItem>

      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardHeader class-name="pb-4">
          <CardTitle className="text-slate-900">Nedeljni jelovnik</CardTitle>
          <CardDescription>Planiraj obroke za narednu nedelju</CardDescription>
        </CardHeader>
        <CardContent class-name="space-y-4">
          <p class="text-2xl font-bold text-slate-900">0 / 7</p>
          <RouterLink :to="{ name: 'Meal Plan' }" class="flex-1">
            <ButtonItem class-name="bg-600 bg-[var(--primary-blue)] hover:bg-blue-700 text-white"
              >Planiraj nedelju</ButtonItem
            >
          </RouterLink>
        </CardContent>
      </CardItem>

      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardHeader class-name="pb-4">
          <CardTitle className="text-slate-900">Lista kupovine</CardTitle>
          <CardDescription>Pregledaj šta trebam da kupim</CardDescription>
        </CardHeader>
        <CardContent class-name="space-y-4">
          <p class="text-2xl font-bold text-slate-900">0</p>
          <RouterLink :to="{ name: 'Shopping List' }" class="flex-1">
            <ButtonItem
              class-name="bg-600 bg-[var(--primary-orange)] hover:bg-orange-700 text-white"
              >Moja lista</ButtonItem
            >
          </RouterLink>
        </CardContent>
      </CardItem>
    </div>

    <!-- {/* Quick Stats Section */} -->
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardDescription>Ukupno receptata</CardDescription>
        <p class="text-3xl font-bold text-slate-900">0</p>
      </CardItem>

      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardDescription>Rezervisani obroci</CardDescription>
        <p class="text-3xl font-bold text-slate-900">0</p>
      </CardItem>

      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardDescription>Stavki na listi</CardDescription>
        <p class="text-3xl font-bold text-slate-900">0</p>
      </CardItem>

      <CardItem
        class-name="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
      >
        <CardDescription>Procenjena kupovina</CardDescription>
        <p class="text-3xl font-bold text-emerald-600">$0</p>
      </CardItem>
    </div>
  </div>
</template>
