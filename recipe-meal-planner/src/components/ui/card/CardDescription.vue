<template>
  <p :class="className" class="text-sm text-slate-600 mb-1">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
