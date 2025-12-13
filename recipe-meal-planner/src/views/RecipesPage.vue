<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
</script>

<template>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- {/* Header */} -->
    <AppHeader title="Recepti" description="Upravljaj svojom bazom receptata">
      <RouterLink :to="{ name: 'Recipes' }" class="flex-1">
        <ButtonItem class-name="bg-emerald-600 hover:bg-emerald-700 text-white"
          >Novi recept</ButtonItem
        >
      </RouterLink>
    </AppHeader>

    <!-- {/* Search Bar */} -->
  </div>
</template>
