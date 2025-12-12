<template>
  <header class="w-full border-b bg-white shadow-sm">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <!-- LEFT - LOGO -->
      <RouterLink
        :to="{ name: 'Home' }"
        class="text-2xl font-bold tracking-tight text-[var(--primary-green)]"
      >
        Recipe Planner
      </RouterLink>

      <!-- RIGHT - LINKS DESKTOP -->
      <div
        class="hidden md:flex items-center space-x-8 font-medium text-[var(--text-secondary-color)] text-700"
      >
        <RouterLink
          v-for="item in links"
          :key="item.name"
          :to="item.to"
          class="hover:text-[var(--primary-green)] transition-colors"
          active-class="text-[var(--primary-green)] font-semibold"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- HAMBURGER BUTTON (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white border-t shadow-inner px-4 py-3 space-y-3 text-[var(--text-secondary-color)] text-700"
      >
        <RouterLink
          v-for="item in links"
          :key="item.name"
          :to="item.to"
          class="block py-1 text-lg font-medium hover:text-[var(--text-secondary-color)] transition-colors"
          active-class="text-[var(--primary-green)] font-semibold"
          @click="closeMenu"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

const links = [
  { name: 'Početna', to: { name: 'Home' } },
  { name: 'Recepti', to: { name: 'Recipes' } },
  { name: 'Nedeljni jelovnik', to: { name: 'Meal Plan' } },
  { name: 'Lista kupovine', to: { name: 'Shopping List' } },
]
</script>

<style>
/* MOBILE MENU TRANSITION */
.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
