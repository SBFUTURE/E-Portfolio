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
            <a href="https://www.linkedin.com/in/stephen-bombeke-0084382b4/" class="text-[#1E3A8A] hover:text-blue-800 flex items-center" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/SBFUTURE" class="text-[#1E3A8A] hover:text-blue-800 flex items-center" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> GitHub
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="@/assets/HeroPictures/profile.jpeg" alt="Profile" class="w-72 h-72 rounded-full shadow-lg object-cover" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  // Import the specific icons you need
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';

  // Add icons to the library
  library.add(faGithub, faLinkedin, faEnvelope);
  export default {
    components: {
      FontAwesomeIcon,
    }
  };
  </script>
  