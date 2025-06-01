<template>
  <section class="bg-white rounded-lg shadow-lg p-8 my-12 w-full">
    <h2 class="text-3xl font-bold text-[#1E3A8A] mb-8">Experiences</h2>
    <ul class="space-y-4">
      <li
        v-for="(exp, idx) in experiences"
        :key="idx"
        class="border-l-4 border-blue-300 pl-4"
      >
        <span class="font-semibold text-blue-800">{{ exp.title }}</span>
        <span class="text-gray-700 block">{{ exp.period }}</span>
        <ul class="list-disc ml-6 text-gray-700">
          <li v-for="(task, tIdx) in exp.tasks" :key="tIdx">{{ task }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          title:'Internship - Deloitte',
          period:'10-02-2025 – 23-05-2025',
          tasks: [
            'Part of Delivery Team',
            'Assisting in building vertical features within Odoo',
            'Learning Odoo platform (Functional & Technical)',
            'Assisting with general tasks that are on the backlog'
          ]
        },
        {
          title: 'Frituur Ledeberg - Student job',
          period: '01-10-2020 - Present',
          tasks: [
            'Preparing Orders',
            'Cashier',
            'Training student workers',
            'Baking fries'
          ]
        },
        {
          title: 'Garage Valckenier - Ninove - Student job',
          period: '03-07-2023 – 18-08-2023',
          tasks: [
            'IT-Department',
            'Software Development (Java, JavaScript, CSS, HTML)'
          ]
        },
        {
          title: 'Garage Valckenier - Ninove/Zottegem - Student job',
          period: '04-03-2023 - 30-06-23',
          tasks: [
            'Warehouse Management',
            'Preparing cars for sale',
            'Inspections'
          ]
        },
        {
          title: 'Techne-IT - Roosdaal (Internship)',
          period: '07-02-2022 - 18-02-2022',
          tasks: [
            'Development Websites (WordPress, HTML, CSS, JavaScript, PHP)',
            'Server management'
          ]
        },
        {
          title: 'Carrefour Market Roosdaal - Student job',
          period: '01-01-2020 – 01-09-2021',
          tasks: [
            'Warehouse Management',
            'Cashier',
            'Stocking shelves'
          ]
        }
      ]
    }
  }
}
</script>