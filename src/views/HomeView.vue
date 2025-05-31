<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <SkillsSection :logos="logos" />
      <ResumeSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';
import Footer from '@/components/Footer.vue';
import html5Logo from '@/assets/SkillsPictures/html5Logo.png';
import blazorLogo from '@/assets/SkillsPictures/blazorLogo.png';
import javaLogo from '@/assets/SkillsPictures/javaLogo.png';
import mongoLogo from '@/assets/SkillsPictures/MongoDb.png';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ResumeSection,
    Footer
  },
  data() {
    return {
      logos: [
        { img: html5Logo, name: 'HTML' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', name: 'CSS' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', name: 'Vue.js' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png', name: 'Laravel' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', name: 'Python (AI Dev)' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg', name: 'Docker' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg', name: 'Linux' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', name: 'Node.js' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', name: 'JavaScript' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', name: 'Git' },
        { img: mongoLogo, name: 'MongoDB' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', name: 'SQL' },
        { img: blazorLogo, name: 'Blazor' },
        { img: javaLogo, name: 'Java' },
      ]
    };
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>