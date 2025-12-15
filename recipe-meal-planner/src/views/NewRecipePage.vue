<script setup lang="ts">
import ButtonItem from '@/components/ui/ButtonItem.vue'
import CardItem from '@/components/ui/card/CardItem.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CreateRecipeForm from '@/components/ui/form/CreateRecipeForm.vue'
</script>
<template>
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RouterLink :to="{ name: 'Recipes' }" class="flex-1">
        <ButtonItem
          class-name="text-emerald-600 bg-transparent border-slate-200 hover:bg-slate-100"
        >
          Nazad na recepte
        </ButtonItem>
      </RouterLink>

      <CardItem class-name="p-4 my-4 rounded-lg border border-slate-200 shadow-lg bg-white  group">
        <CardHeader class-name="pb-4">
          <CardTitle className="text-slate-900">Kreiraj novi recept </CardTitle>
          <CardDescription>Unesi sve detalje o tvom receptu </CardDescription>
        </CardHeader>

        <CardContent>
          <h2 class="text-xl font-medium">Osnovne informacije</h2>
          <CreateRecipeForm></CreateRecipeForm>
        </CardContent>
      </CardItem>
    </div>
  </div>
</template>
