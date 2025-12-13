<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- {/* Header */} -->
      <AppHeader title="Lista kupovine" description="0 / 3 stavki kupljeno">
        <ButtonItem class-name="bg-transparent border-slate-200 hover:bg-slate-100">
          Preuzmi
        </ButtonItem>
      </AppHeader>
    </div>
  </div>
</template>
