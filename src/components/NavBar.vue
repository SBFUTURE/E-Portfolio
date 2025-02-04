<template>
  <nav class="bg-blue-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold custom-font">
        <router-link to="/">STEPHEN BOMBEKE</router-link>
      </div>
      <div>
        <router-link to="/about" class="text-white hover:text-gray-300 px-3 font-semibold text-xl">About Us</router-link>
        <router-link to="/blog" class="text-white hover:text-gray-300 px-3 font-semibold text-xl">Blogs</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script needed for this simple navbar
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
  background-color: #1E3A8A; /* Attractive blue color */
}
</style>