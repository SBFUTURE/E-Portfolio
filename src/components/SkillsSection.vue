<template>
    <section id="skills" class="bg-white py-20 overflow-hidden">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-6">Skills</h2>
        <div class="marquee-container">
          <div class="marquee-content">
            <div v-for="(logo, index) in logos" :key="'original-' + index" class="logo-item mx-6">
              <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2 transition-transform transform hover:scale-110" />
              <span class="text-[#1E3A8A] text-lg font-semibold">{{ logo.name }}</span>
            </div>
            <div v-for="(logo, index) in logos" :key="'clone-' + index" class="logo-item mx-6">
              <img :src="logo.img" alt="Skill Logo" class="w-32 h-32 object-contain mb-2 transition-transform transform hover:scale-110" />
              <span class="text-[#1E3A8A] text-lg font-semibold">{{ logo.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      logos: Array
    }
  };
  </script>
  
  <style scoped>
  .marquee-container {
    overflow: hidden;
    width: 100%;
  }
  .marquee-content {
    display: flex;
    width: max-content;
    animation: marquee-scroll 30s linear infinite;
  }
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .logo-item {
    text-align: center;
  }
  </style>
  