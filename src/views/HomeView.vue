<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <NavBar />

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section v-fade class="flex items-center justify-center bg-white py-16">
        <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-center md:text-left">
            <h1 class="text-5xl font-extrabold text-[#1E3A8A]">Stephen Bombeke</h1>
            <p class="text-gray-600 text-lg mt-4">
              Software Engineer | IT Enthusiast | Tech Innovator
            </p>
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
            <img 
              src="@/assets/profile.jpeg" 
              alt="Profile Picture" 
              class="w-72 h-72 rounded-full shadow-lg object-cover" 
            />
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section v-fade class="bg-blue-50 py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-6">About Me</h2>
          <p class="text-gray-700 max-w-2xl mx-auto">
            With years of experience in software engineering, I specialize in building scalable and efficient applications. My expertise spans full-stack development, cloud computing, and AI-driven solutions.
          </p>
        </div>
      </section>

      <!-- Skills Section (Slider with white background) -->
      <section v-fade class="bg-white py-20 overflow-hidden">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-6">Skills</h2>
          <div class="marquee-container">
            <div class="marquee-content">
              <div v-for="(logo, index) in logos" :key="'original-' + index" class="logo-item mx-6">
                <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2 transition-transform transform hover:scale-110" />
                <span class="text-[#1E3A8A] text-lg font-semibold">{{ logo.name }}</span>
              </div>
              <!-- Duplicate set for continuous scroll -->
              <div v-for="(logo, index) in logos" :key="'clone-' + index" class="logo-item mx-6">
                <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2 transition-transform transform hover:scale-110" />
                <span class="text-[#1E3A8A] text-lg font-semibold">{{ logo.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Get In Touch Section (Styled like About Me) -->
      <section v-fade class="bg-blue-50 py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-6">Get In Touch</h2>
          <p class="text-gray-700 max-w-2xl mx-auto mb-6">
            Feel free to reach out for collaborations, job opportunities, or just a friendly chat about technology!
          </p>
          <div class="flex justify-center">
            <a href="mailto:Stephen.Bombeke@gmail.com" class="bg-[#1E3A8A] text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300">
              <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" /> Email Me
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-[#1E3A8A] text-white py-6">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p class="mb-4 md:mb-0">&copy; 2025 Stephen Bombeke. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-300">Privacy Policy</a>
          <a href="#" class="hover:text-gray-300">Terms of Service</a>
          <a href="mailto:Stephen.Bombeke@gmail.com" class="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
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
/* Fade-in / fade-out transitions */
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

/* Marquee Styles */
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
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.logo-item {
  flex-shrink: 0;
  text-align: center;
}
.logo-item img {
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
}
.logo-item span {
  display: block;
  color: #1E3A8A;
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
}
.logo-item:hover img {
  transform: scale(1.1);
}

/* Get In Touch Section Styled Like About Me */
.bg-blue-50 {
  background-color: #eff6ff;
}

button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #1E3A8A;
}
</style>
