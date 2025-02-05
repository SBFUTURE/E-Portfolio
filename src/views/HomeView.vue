<template>
  <div class="bg-gray-50">
    <NavBar />
    
    <!-- Hero Section -->
    <section v-fade class="flex items-center justify-center min-h-screen bg-white">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-5xl font-extrabold text-gray-900">Stephen Bombeke</h1>
          <p class="text-gray-600 text-lg mt-4">
            Software Engineer | IT Enthusiast | Tech Innovator
          </p>
          <p class="text-gray-500 mt-4">
            Passionate about software development, AI, and IT solutions. Always eager to learn new technologies and build innovative projects.
          </p>
          <div class="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="#" class="text-blue-600 hover:text-blue-800 flex items-center">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2" /> LinkedIn
            </a>
            <a href="#" class="text-blue-600 hover:text-blue-800 flex items-center">
              <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> GitHub
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Profile Picture" 
            class="w-72 h-72 rounded-full shadow-lg object-cover" 
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section v-fade class="bg-gray-100 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-semibold text-gray-900 mb-6">About Me</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          With years of experience in software engineering, I specialize in building scalable and efficient applications. My expertise spans full-stack development, cloud computing, and AI-driven solutions.
        </p>
      </div>
    </section>

    <!-- Skills Carousel -->
    <section v-fade class="bg-white py-20 overflow-hidden">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-semibold text-gray-900 mb-6">Skills</h2>
        <div class="marquee-container">
          <div class="marquee-content">
            <div v-for="(logo, index) in logos" :key="'original-' + index" class="logo-item mx-6">
              <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2" />
              <span class="text-gray-700 text-lg">{{ logo.name }}</span>
            </div>
            <!-- Duplicate set for continuous scroll -->
            <div v-for="(logo, index) in logos" :key="'clone-' + index" class="logo-item mx-6">
              <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2" />
              <span class="text-gray-700 text-lg">{{ logo.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section v-fade class="bg-gray-100 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly chat about technology!
        </p>
        <div class="mt-6">
          <a href="mailto:Stephen.Bombeke@gmail.com" class="text-blue-600 hover:text-blue-800 flex items-center justify-center text-lg">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" /> Email Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import html5Logo from '@/assets/html5Logo.png';
import blazorLogo from '@/assets/blazorLogo.png';
import javaLogo from '@/assets/javaLogo.png';

library.add(faLinkedin, faGithub, faEnvelope);

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FontAwesomeIcon
  },
  directives: {
    fade: {
      mounted(el) {
        // Initially set the element as hidden.
        el.classList.add('fade-out');
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('fade-in');
              el.classList.remove('fade-out');
            } else {
              el.classList.remove('fade-in');
              el.classList.add('fade-out');
            }
          });
        }, { threshold: 0.2 });
        // Store observer instance on element for potential cleanup.
        el._observer = observer;
        observer.observe(el);
      },
      unmounted(el) {
        if (el._observer) {
          el._observer.disconnect();
        }
      }
    }
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
};
</script>

<style scoped>
/* Fade-in / fade-out transitions for elements using the v-fade directive */
.fade-out {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Existing Animation Keyframes (if used elsewhere) */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes scale-in {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
.animate-slide-up {
  animation: slide-up 1s ease-out;
}
.animate-scale-in {
  animation: scale-in 1s ease-out;
}

/* Slider (Marquee) Styles */
.marquee-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.marquee-content {
  display: flex;
  width: max-content;
  animation: marquee-scroll 15s linear infinite;
}
@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.logo-item {
  flex-shrink: 0;
  width: auto;
}
</style>
