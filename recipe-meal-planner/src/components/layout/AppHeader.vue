<template>
  <div :class="className" class="mb-12 flex flex-row justify-between items-center">
    <div>
      <h1 class="text-4xl font-bold text-slate-900 mb-2">{{ title }}</h1>
      <p class="text-lg text-slate-600">{{ description }}</p>
    </div>

    <div class="w-35">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
  title: string
  description?: string
}>()
</script>
