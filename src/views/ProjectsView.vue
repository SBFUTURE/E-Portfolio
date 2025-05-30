<template>
  <NavBar />
  <section id="projects" class="bg-blue-50 py-20">
    <div class="container mx-auto px-6">
      <!-- Main projects Card -->
      <div v-if="projects" class="bg-white rounded-lg shadow-lg p-8 mb-8">

        <!-- projects Title -->
        <img v-if="projects.introImage" :src="projects.introImage" alt="projects Introduction" class="w-1/2 max-h-50  mx-auto rounded-lg mb-6" />
        <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8">{{ projects.title }}</h2>
        <p class="text-gray-700 mb-4">{{ projects.introduction }}</p>
        
        <!-- Full projects Content -->
        <div class="space-y-6 text-gray-700">
          <div v-for="(section, index) in projects.sections" :key="index" class="space-y-4">
            <h3 class="text-2xl font-semibold text-[#1E3A8A]">{{ section.title }}</h3>
            <img v-if="section.image" :src="section.image" alt="projects Section" class="w-1/2  rounded-lg mb-4" />
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading projects details...</p>
      </div>
    </div>
  </section>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'ProjectsView',
    components: {
        NavBar
    },
    data(){
        return {
            blogs: [
                {

                }
            ]
        }
    }
}
</script>