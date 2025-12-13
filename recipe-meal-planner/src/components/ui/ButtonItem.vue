<template>
  <button
    class="w-full p-2 rounded-lg border cursor-pointer font-medium text-md"
    :class="className"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
