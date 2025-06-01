<template>
  <NavBar />
  <section id="projects" class="bg-blue-50 py-20">
     <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8 text-center">My International Experiences</h2>
    <div class="container mx-auto px-6">
      <!-- Loop Through All Projects -->
      <div v-for="(project, i) in projects" :key="i" class="bg-white rounded-lg shadow-lg p-8 mb-12">
        
        <!-- Project Title & Intro -->
       <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
        <h2 class="text-xl md:text-3xl font-semibold text-[#1E3A8A] break-words">{{ project.title }}</h2>
        <span class="text-sm md:text-base text-gray-500 mt-1 md:mt-0 md:ml-4 whitespace-nowrap">{{ project.date }}</span>
      </div>
        <img v-if="project.introImage" :src="project.introImage" alt="Project " class="w-full mx-auto rounded-lg mb-6"  />
        <p class="text-gray-700 mb-4 whitespace-pre-line">{{ project.introduction }}</p>

        <!-- Project Sections -->
        <div class="space-y-6 text-gray-700">
          <div v-for="(section, index) in project.sections" :key="index" class="space-y-4">
            <h3 class="text-1xl md:text-2xl font-semibold text-[#1E3A8A]">{{ section.title }}</h3>
            <img v-if="section.image" :src="section.image" alt="Section " class="w-1/2 rounded-lg mb-4" />
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>

      <div v-if="!projects.length">
        <p>Loading project details...</p>
      </div>
    </div>
  </section>
  <Footer />
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import hdm from '@/assets/images/inter-experiences/stuttgart.jpg';
import valencia from '@/assets/images/inter-experiences/valencia.jpeg';
import dublin from '@/assets/images/inter-experiences/dublin.jpeg';

export default {
  name: 'ProjectsView',
  components: {
    NavBar,
    Footer
  },
data() {
  return {
    projects: [
      {
        title: 'Brandy – Valencia',
        date: '25/06/2023 – 02/07/2023',
        introImage: valencia,
        introduction: 'At the end of the school year, I had the incredible opportunity to be selected for an international project in Valencia, Spain, called BrandY—a business simulation game co-funded by the Erasmus+ program.',
        sections: [
          {
            title: 'The BrandY Experience',
            content: 'This was part of an intensive week organized by HOWEST University of Applied Sciences, gathering students and educators from across Europe, all part of the Dukenet Network. Over the course of this unforgettable week, we dove into BrandY, a serious marketing game designed to simulate real-world business challenges. The atmosphere was electric—teams were formed across nationalities, and every day brought new challenges that tested our strategic thinking, teamwork, and creativity.'
          },
          {
            title: 'Technical Responsibilities',
            content: 'My team was responsible for working on the final version of the BrandY game, which used a Svelte frontend and a Laravel backend. For many of us, including myself, this was our first hands-on experience with Svelte, making it both a learning opportunity and a real-world development task.'
          },
          {
            title: 'Challenges & Achievements',
            content: 'The most demanding part was navigating an already complex codebase while trying to implement feedback from both students and teachers. But despite the initial hurdles, we pulled through—adding new features, squashing bugs, and seeing the platform evolve in real time.'
          },
          {
            title: 'Reflections & Gratitude',
            content: 'It was a challenging yet immensely rewarding experience. Not only did it sharpen my technical skills, but it also showed me the power of teamwork, cross-cultural collaboration, and agile problem-solving under pressure. A huge thank you to everyone involved in this program—your energy and dedication made the week truly special. And a special shoutout to Lieven Theys for his stellar coordination throughout the event.'
          },
          {
            title: 'Looking Forward',
            content: 'We’re excited about how far the BrandY project has come, and even more excited about where it\'s headed. Here’s to many more collaborations that break boundaries and spark innovation!'
          }
        ]
      },
      {
        title: 'Stuttgart HDM University – AI Summer Games',
        date: '30/06/2024 – 06/07/2024',
        introImage: hdm,
        introduction: 'From City Tours to Free Cheers: First Meetings in Stuttgart',
        sections: [
          {
            title: 'First Meetings in Stuttgart',
            content: 'On Sunday afternoon, we kicked off our in-person experience with a guided tour of Stuttgart, starting at Schlossplatz. From the top floor of the Kunstmuseum, we took in views of the city’s landmarks and learned about Stuttgart’s geography, history, and the world’s first TV tower. The tour continued to the Old Castle, where we explored the city’s origins and symbols. Although the market hall was closed, we explored the Dorotheen Quartier and ended the walk at the Staatstheater park with some friendly conversation and snacks.\n\nLater that evening, we gathered at Mata Hari, a local bar, where our lecturer Ms. Elisabeth treated us to drinks. A fun icebreaker game and the England vs. Slovakia match made for a lively and welcoming first night.'
          },
          {
            title: 'Kicking Off the AI Summer Games',
            content: 'The week officially began Monday morning with a team-based challenge launch. We were introduced to the AI Summer Games, then engaged in a team-building activity called Two Lies, One Truth, which helped us bond and share laughs.\n\nIn the afternoon, we dove into Supervised Learning, getting hands-on with one of the core techniques in machine learning. That evening, we enjoyed the Belgium vs. France match and later played a friendly game of football in the Fanzone, wrapping up the day with some fun and fresh air.'
          },
          {
            title: 'Learning and Local Flavors',
            content: 'Tuesday focused on regression, nearest neighbours, and penalization techniques in supervised learning. We explored how these models work and how to prevent overfitting.\n\nThe afternoon brought a change of plans due to the weather, replacing our hike with a scenic tram ride to Santiago de Chile Place. Dinner was at Sophie’s Brauhaus, with traditional dishes like Spaetzle and Maultaschen. We ended the day watching Austria vs. Turkey at Schlossplatz.'
          },
          {
            title: 'AI Security, Computer Vision & Automotive History',
            content: 'On Wednesday, we explored AI security and computer vision. We learned how NIDS protects networks and how visual data drives decision-making in AI systems.\n\nInstead of hiking to Bärenschlössle, we visited the Mercedes-Benz Museum. The evening was free—some played football, others enjoyed the local pubs.'
          },
          {
            title: 'Creativity, Projects & Media Night',
            content: 'Thursday began with a focus on transformer models and retrieval-augmented generation (RAG). We applied these concepts in a group project.\n\nIn the afternoon, we attended HDM’s Media Night, a showcase of student films and live performances. We closed the day at Café Mata Hari over drinks and discussions.'
          },
          {
            title: 'Celebrating Achievements and Football Fever',
            content: 'Friday opened with final presentations of our AI projects. The award ceremony recognized our work. Afterwards, we had a pizza party, then watched the Spain vs. Germany quarter final.\n\nThough Germany lost, we ended the night exploring Stuttgart’s nightlife—marking the perfect close to a week of learning, teamwork, and memories.'
          }
        ]
      },
      {
        title: 'Exploring Dublin: A Week of Tech, Culture & Innovation',
        date: '05/02/2024 – 09/02/2024', 
        introImage: dublin, 
        introduction: 'A week of discovery through cutting-edge tech companies, Irish culture, and team experiences.',
        sections: [
          {
            title: 'Monday: Arrival & City Exploration',
            content: 'We kicked off our Dublin adventure early Monday morning, meeting at Zaventem Airport at 7:15 AM. After arriving at our hotel around 2:00 PM and enjoying a quick lunch, we headed out for a guided city walk starting at the intersection of Ormond Quay Lower. Our first cultural stop was Trinity College Dublin, Ireland’s oldest university. We explored the campus and visited the Book of Kells exhibition—an iconic 9th-century manuscript renowned for its ornate illustrations and historical value.'
          },
          {
            title: 'Tuesday: Immersive Visits to Oracle & Microsoft',
            content: 'After breakfast at 7:00 AM, we gathered at 7:50 AM for a 3 km walk to the Oracle offices. Due to the rain, some of us opted for an Uber—arriving dry, unlike a few of our more adventurous classmates! At Oracle, guest speakers introduced us to the company’s operations and innovations in AI and cloud computing. We took part in a short workshop where we presented case studies involving cloud and AI integration. In the afternoon, we headed to Microsoft. After lunch, a Howest speaker gave a session on cloud technologies, followed by a talk from a Microsoft researcher focused on AI. We concluded with a guided tour of the building, which included panoramic views from the top floor. We wrapped up the evening with dinner at a local pizzeria and some great conversations in a nearby pub.'
          },
          {
            title: 'Wednesday: Sports & 5G at Athlone',
            content: 'We took a day trip to Athlone, where we were introduced to Gaelic football, one of Ireland’s most popular sports. After learning the basics, we took part in hands-on exercises led by university staff. In the afternoon, we visited Ericsson, where we learned about the development of 5G technology and emerging concepts around 6G. The sessions were both informative and forward-looking. Afterward, we returned to Dublin and enjoyed a night out at a cozy bar, reflecting on the day’s unique mix of sports and science.'
          },
          {
            title: 'Thursday: Meta & Guinness – Innovation Meets Tradition',
            content: 'Thursday began with a visit to Meta, where company representatives gave insights into their roles and the company’s broader mission. We gained a clearer understanding of Meta’s global impact, especially in the areas of communication and digital experiences. In the afternoon, we toured the Guinness Storehouse Museum, diving into the history and cultural significance of Ireland’s most famous stout. The interactive exhibits and rooftop bar added a lively finish. We ended the night in a local pub, accompanied by live music and great company—an authentic Irish experience.'
          },
          {
            title: 'Friday: Closing the Week at Google',
            content: 'Our final day featured a visit to Google, where several guest speakers shared their roles, day-to-day responsibilities, and insights into the company’s work culture and opportunities. An interactive Q&A allowed students to engage directly with the team, wrapping up the week on an informative and inspiring note.'
          }
        ]
      },
    ]
  };
},
};
</script>
