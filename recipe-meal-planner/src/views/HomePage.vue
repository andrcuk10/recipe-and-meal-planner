<script setup lang="ts">
import ButtonItem from '@/components/ui/ButtonItem.vue'
import DashboardCard from '@/components/ui/DashboardCard.vue'
import QuickStat from '@/components/ui/QuickStat.vue'
</script>

<template>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- {/* Header */} -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-slate-900 mb-2">Dobrodošli!</h1>
      <p class="text-lg text-slate-600">
        Upravljaj svojim receptima, planiraj obroke i kreiraj liste kupovine na jednom mjestu
      </p>
    </div>

    <!-- {/* Main Cards Grid */} -->
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <DashboardCard card-title="Recepti" card-description="Kreiraj i upravljaj tvojim receptima">
        <template #card-content>
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
        </template>
      </DashboardCard>

      <DashboardCard
        card-title="Nedeljni jelovnik"
        card-description="Planiraj obroke za narednu nedelju"
      >
        <template #card-content>
          <p class="text-2xl font-bold text-slate-900">0 / 7</p>
          <RouterLink :to="{ name: 'Meal Plan' }" class="flex-1">
            <ButtonItem class-name="bg-600 bg-[var(--primary-blue)] hover:bg-blue-700 text-white"
              >Planiraj nedelju</ButtonItem
            >
          </RouterLink>
        </template>
      </DashboardCard>

      <DashboardCard card-title="Lista kupovine" card-description="Pregledaj šta trebam da kupim">
        <template #card-content>
          <p class="text-2xl font-bold text-slate-900">0</p>
          <RouterLink :to="{ name: 'Shopping List' }" class="flex-1">
            <ButtonItem
              class-name="bg-600 bg-[var(--primary-orange)] hover:bg-[var(--primary-orange)] hover:bg-700 text-white"
              >Moja lista</ButtonItem
            >
          </RouterLink>
        </template>
      </DashboardCard>
    </div>

    <!-- {/* Quick Stats Section */} -->
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <QuickStat stat-title="Ukupno receptata">
        <template #statValue> 0 </template>
      </QuickStat>
      <QuickStat stat-title="Rezervisani obroci">
        <template #statValue> 0 </template>
      </QuickStat>
      <QuickStat stat-title="Stavki na listi">
        <template #statValue> 0 </template>
      </QuickStat>
      <QuickStat stat-title="Procenjena kupovina">
        <template #statValue>
          <span class="text-3xl font-bold text-emerald-600">$0</span>
        </template>
      </QuickStat>
    </div>
  </div>
</template>
