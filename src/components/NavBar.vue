<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">
       <router-link to="/">E-Portfolio</router-link>
      </div>
      <div>
        <router-link to="/" class="text-gray-300 hover:text-white px-3">Home</router-link>
        <router-link to="/about" class="text-gray-300 hover:text-white px-3">About Us</router-link>
        <router-link to="/blog" class="text-gray-300 hover:text-white px-3">Blog</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import router from '@/router';

// No script needed for this simple navbar
</script>

<style scoped>
nav {
  background-color: #2d3748;
}
</style>