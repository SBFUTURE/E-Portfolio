<template>
    <section id="contact" class="bg-blue-50 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-6">Get In Touch</h2>
        <p class="text-gray-700 max-w-2xl mx-auto mb-6">
          Feel free to reach out for collaborations, job opportunities, or just a friendly chat about technology!
        </p>
        <div class="flex justify-center">
          <a href="mailto:Stephen.Bombeke@gmail.com" class="bg-[#1E3A8A] text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" /> Email Me
          </a>
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
  