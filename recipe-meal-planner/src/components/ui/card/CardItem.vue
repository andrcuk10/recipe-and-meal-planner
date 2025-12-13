<template>
  <!-- Card -->
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
