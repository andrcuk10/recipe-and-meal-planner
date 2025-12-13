<template>
  <!-- Card -->
  <div :class="className" class="rounded-lg border">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
