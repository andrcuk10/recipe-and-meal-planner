<script setup lang="ts">
import AppNavigation from './components/layout/AppNavigation.vue'
</script>

<template>
  <AppNavigation></AppNavigation>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
