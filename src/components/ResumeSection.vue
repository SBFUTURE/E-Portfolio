<template>
  <section class="bg-blue-200 rounded-lg shadow-lg p-8 w-full">
    <h2 class="text-3xl font-bold text-[#1E3A8A] mb-2 text-center">Experience & Education</h2>
    <div class="flex flex-col md:flex-row md:gap-8">
      <div class="flex-1 flex flex-col">
        <Experience />
      </div>
      <div class="flex-1 flex flex-col md:justify-between">
        <Languages />
        <EducationsSection />
      </div>
    </div>
  </section>
</template>

<script>
import Experience from './Experience.vue'
import Languages from './Languages.vue'
import EducationsSection from './Educations.vue'

export default {
  name: 'ResumeSection',
  components: {
    Experience,
    Languages,
    EducationsSection
  }
}
</script>