<template>
  <section class="bg-white rounded-lg shadow-lg p-8 my-12 w-full">
    <h2 class="text-3xl font-bold text-[#1E3A8A] mb-8">Educations</h2>
    <ul class="space-y-4">
      <li
        v-for="(edu, idx) in educations"
        :key="idx"
        class="border-l-4 border-blue-300 pl-4"
      >
        <span class="font-semibold text-blue-800">{{ edu.school }}</span>
        <span class="text-gray-700 block">{{ edu.period }}</span>
        <ul class="list-disc ml-6 text-gray-700">
          <li v-for="(detail, dIdx) in edu.details" :key="dIdx">{{ detail }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'EducationsSection',
  data() {
    return {
      educations: [
        {
          school: 'Handelsschool Aalst',
          period: '2016 - 2022',
          details: [
            'Degree: High School',
            'Applied Informatics'
          ]
        },
        {
          school: 'Howest Bruges',
          period: '2022 - 2025',
          details: [
            'Professional Bachelor - Applied Computer Sciences',
            'Major: Software Engineer'
          ]
        }
      ]
    }
  }
}
</script>