<template>
  <div>
    <NavBar />
    <div class="flex flex-col items-center min-h-screen bg-gray-100 pt-16 px-4">
      <!-- Profile Card -->
      <div class="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6 mt-8">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile Picture" 
            class="w-32 h-32 rounded-full shadow-lg md:mr-6" 
          />
          <div class="text-center md:text-left mt-4 md:mt-0">
            <h1 class="text-3xl font-bold text-blue-900">Stephen Bombeke</h1>
            <p class="text-gray-600 text-lg mt-2">Software Engineer | IT Enthusiast | Tech Innovator</p>
            <p class="text-gray-500 mt-4">
              Passionate about software development, AI, and IT solutions. Always eager to learn new technologies and build innovative projects.
            </p>

            <!-- Social Accounts (LinkedIn & GitHub) -->
            <div class="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" class="text-blue-700 hover:text-blue-900 flex items-center">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2" /> LinkedIn
              </a>
              <a href="#" class="text-blue-700 hover:text-blue-900 flex items-center">
                <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> GitHub
              </a>
            </div>

            <!-- Contact Information (Email & Phone) -->
            <div class="flex flex-col items-center md:items-start mt-6 space-y-4">
              <a href="mailto:Stephen.Bombeke@gmail.com" class="text-blue-700 hover:text-blue-900 flex items-center">
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" /> Stephen.Bombeke@gmail.com
              </a>
              <span class="text-blue-700 hover:text-blue-900 flex items-center">
                <font-awesome-icon :icon="['fas', 'phone-alt']" class="mr-2" /> +32 476 701 410
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Slider -->
      <div class="w-full bg-white shadow-lg rounded-2xl p-6 mt-8">
        <h2 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Skills</h2>

        <!-- Skill Slider Container -->
        <div class="overflow-hidden">
          <div class="skills-slider">
            <div 
              v-for="(logo, index) in logos" 
              :key="'original-' + index" 
              class="flex-shrink-0 skill-card-wrapper"
            >
              <div class="skill-card text-center">
                <img :src="logo.img" alt="Skill Logo" class="skill-logo" />
                <span class="skill-name text-blue-700">{{ logo.name }}</span> <!-- Apply text-blue-700 here -->
              </div>
            </div>

            <!-- Clone the items for continuous scroll -->
            <div 
              v-for="(logo, index) in logos" 
              :key="'clone-' + index" 
              class="flex-shrink-0 skill-card-wrapper"
            >
              <div class="skill-card text-center">
                <img :src="logo.img" alt="Skill Logo" class="skill-logo" />
                <span class="skill-name text-blue-700">{{ logo.name }}</span> <!-- Apply text-blue-700 here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faPhoneAlt, faLinkedin, faGithub);

import html5Logo from '@/assets/html5Logo.png'; // Local asset
import CLogo from '@/assets/CLogo.png'; // Local asset
import blazorLogo from '@/assets/blazorLogo.png'; // Local asset
import javaLogo from '@/assets/javaLogo.png'; // Local asset

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FontAwesomeIcon
  },
  data() {
    return {
      logos: [
        { img: html5Logo, name: 'HTML' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", name: 'CSS' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", name: 'Vue.js' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png", name: 'Laravel' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name: 'Python (AI Dev)' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", name: 'Docker' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg", name: 'Linux' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", name: 'Node.js' },
        { img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", name: 'JavaScript' },
        { img: blazorLogo, name: 'Blazor' },
        { img: javaLogo, name: 'Java' }
      ]
    };
  }
}
</script>

<style scoped>
/* General Styling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Skill Card Wrapper */
.skill-card-wrapper {
  position: relative;
  margin-right: 16px; /* Space between items */
}

/* Skill Card Styling */
.skill-card {
  background: #f3f4f6;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 140px; /* Increased width to fit text */
  height: 120px; /* Adjusted height to prevent excessive size */
}

.skill-card:hover {
  transform: scale(1.05);  /* Smaller hover effect */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

.skill-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Prevent Text Wrapping */
.skill-name {
  white-space: nowrap;
  font-size: 12px;  /* Adjust font size to fit text */
  text-align: center;
}

/* Infinite Scroll Animation */
.skills-slider {
  display: flex;
  animation: scroll-slider 20s linear infinite;  /* Adjust duration as needed */
}

@keyframes scroll-slider {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);  /* Slide by half the width of the container */
  }
}

/* Accent Color Styling */
.bg-blue-custom {
  background-color: #1E3A8A; /* Primary deep blue */
}

.text-blue-custom {
  color: #1E3A8A; /* Primary deep blue */
}

.text-blue-hover:hover {
  color: #1E3A8A; /* Hover effect with primary color */
}

.bg-blue-hover:hover {
  background-color: #1E3A8A; /* Background color on hover */
}

.text-blue-dark {
  color: #1A2C7D; /* Darker blue variant */
}

.text-blue-light {
  color: #3B82F6; /* Lighter blue variant */
}
</style>
