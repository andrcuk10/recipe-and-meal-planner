<template>
  <div class="text-sm text-red-600">{{ error }}</div>
</template>

<script setup lang="ts">
defineProps<{
  error?: string
}>()
</script>
