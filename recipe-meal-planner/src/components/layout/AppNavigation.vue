<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Početna</RouterLink>
    <RouterLink :to="{ name: 'recipes' }">Recepti</RouterLink>
    <RouterLink :to="{ name: 'meal-plan' }">Nedeljni jelovnik</RouterLink>
    <RouterLink :to="{ name: 'shopping-list' }">Lista kupovine</RouterLink>
  </nav>
</template>
