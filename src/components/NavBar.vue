<template>
  <nav class="bg-blue-800 p-4 w-full">
    <div class="flex justify-between items-center w-full relative">
      <div class="text-white text-2xl font-bold custom-font mr-2 ml-4">
        <router-link to="/">STEPHEN BOMBEKE</router-link>
      </div>
      <div
        :class="[
          'flex-col custom800:flex-row custom800:flex custom800:items-center',
          menuOpen ? 'flex' : 'hidden',
          'absolute custom800:static left-0 w-full custom800:w-auto z-50 nav-dropdown text-center'
        ]"
      >
        <router-link
          to="/projects"
          class="block custom800:inline text-white hover:text-gray-300 px-3 font-semibold text-xl py-2"
          @click="closeMenu"
        >My Projects</router-link>
        <router-link
          to="/events"
          class="block custom800:inline text-white hover:text-gray-300 px-3 font-semibold text-xl py-2"
          @click="closeMenu"
        >Events</router-link>
        <router-link
          to="/international-experiences"
          class="block custom800:inline text-white hover:text-gray-300 px-3 font-semibold text-xl py-2"
          @click="closeMenu"
        >International Experiences</router-link>
      </div>
      <button
        class="custom800:hidden text-white focus:outline-none ml-2"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
@font-face {
  font-family: 'YourCustomFont';
  src: url('@/assets/fonts/Vermin Vibes 2 Soft.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: 'YourCustomFont', sans-serif;
}

nav {
  background-color: #1E3A8A;
}

/* Custom 800px breakpoint */
@media (min-width: 800px) {
  .custom800\:flex-row { flex-direction: row !important; }
  .custom800\:flex { display: flex !important; }
  .custom800\:items-center { align-items: center !important; }
  .custom800\:static { position: static !important; }
  .custom800\:w-auto { width: auto !important; }
  .custom800\:bg-transparent { background-color: transparent !important; }
  .custom800\:inline { display: inline !important; }
  .custom800\:hidden { display: none !important; }
}

.nav-dropdown {
  background-color: #1E3A8A;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  padding: 0.5rem 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 50;
}
@media (min-width: 800px) {
  .nav-dropdown {
    background-color: transparent;
    position: static;
    width: auto;
    padding: 0;
    left: unset;
    transform: unset;
  }
}
</style>