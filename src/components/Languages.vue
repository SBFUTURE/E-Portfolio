<template>
  <section class="bg-white rounded-lg shadow-lg p-8 my-12 w-full">
    <h2 class="text-3xl font-bold text-[#1E3A8A] mb-8 text-center">Languages</h2>
    <ul class="space-y-4">
      <li
        v-for="(lang, idx) in languages"
        :key="idx"
        class="border-l-4 border-blue-300 pl-4"
      >
        <span class="font-semibold text-blue-800">{{ lang.name }}</span>
        <span class="text-gray-700 block">{{ lang.level }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LanguagesSection',
  data() {
    return {
      languages: [
        { name: 'Dutch', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'French', level: 'Basics' }
      ]
    }
  }
}
</script>