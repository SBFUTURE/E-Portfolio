<template>
    <section id="hero" class="flex items-center justify-center bg-white py-16">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-5xl font-extrabold text-[#1E3A8A]">Stephen Bombeke</h1>
          <p class="text-gray-600 text-lg mt-4">Software Engineer | IT Enthusiast | Tech Innovator</p>
          <p class="text-gray-500 mt-4">
            Passionate about software development, AI, and IT solutions. Always eager to learn new technologies and build innovative projects.
          </p>
          <div class="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="#" class="text-[#1E3A8A] hover:text-blue-800 flex items-center">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2" /> LinkedIn
            </a>
            <a href="#" class="text-[#1E3A8A] hover:text-blue-800 flex items-center">
              <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> GitHub
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="@/assets/profile.jpeg" alt="Profile Picture" class="w-72 h-72 rounded-full shadow-lg object-cover" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default {
    components: {
      FontAwesomeIcon,
    }
  };
  </script>
  