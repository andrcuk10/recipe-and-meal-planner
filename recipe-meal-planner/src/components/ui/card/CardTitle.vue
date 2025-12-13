<template>
  <h3 :class="className" class="text-lg font-semibold">
    <slot></slot>
  </h3>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
