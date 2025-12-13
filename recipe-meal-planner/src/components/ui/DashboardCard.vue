<template>
  <!-- Card -->
  <div
    class="p-4 rounded-lg border border-slate-200 hover:shadow-lg bg-white transition-shadow group"
  >
    <!-- Card Header -->
    <div class="pb-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-slate-900">{{ cardTitle }}</h3>
      </div>
      <p>{{ cardDescription }}</p>
    </div>

    <!-- Card Content -->
    <div class="space-y-4">
      <slot name="card-content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cardTitle?: string
  cardDescription?: string
}>()
</script>
