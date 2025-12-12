<template>
  <div class="p-4 bg-white rounded-lg border border-slate-200">
    <p class="text-sm text-slate-600 mb-1">{{ statTitle }}</p>
    <p class="text-3xl font-bold text-slate-900">
      <slot name="statValue"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  statTitle?: string
}>()
</script>
