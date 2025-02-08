<template>
  <NavBar />
  <section id="events" class="bg-blue-50 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8 text-center">Recent Events & Insights</h2>

      <div v-for="(blog, index) in blogs" :key="index" class="blog-post mb-12 bg-white shadow-lg rounded-lg p-6">
        <!-- Blog Title -->
        <h3 class="text-3xl font-bold text-[#1E3A8A] mb-4">{{ blog.title }}</h3>

        <!-- Blog Introduction -->
        <div class="mb-4">
          <img :src="blog.introImage" alt="Event Introduction Image" class="w-full h-auto rounded-lg mb-6" />
          <p class="text-gray-700 mb-4">{{ blog.introduction }}</p>
        </div>

        <!-- Read More Button - Navigate to Event Detail Page -->
        <button @click="goToEventDetailView(blog.id)" class="bg-[#1E3A8A] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 mt-4">
          Read More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "EventsView",
  components: {
    NavBar
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Exploring Baserow: A Game-Changer for Data Storage",
          introImage: "@/assets/baserow-intro-image.jpg", // Example image for intro
          introduction: `
            At Howest University in November 2024, I had the privilege of attending a Tech&Meet session that introduced me to Baserow, an innovative open-source platform designed for building and managing databases without needing any prior coding knowledge. Baserow aims to simplify database creation and empower individuals from all backgrounds, whether you're a developer or not, to manage data effortlessly. During the event, 
            I was fascinated by how this tool makes complex tasks like data management and automation accessible to everyone, regardless of their technical skill set. 
          `,
          fullContent: `
            Baserow allows users to build databases without writing any code, using a simple, user-friendly interface. 
            The demo I saw made it clear that deploying a Docker container and setting up a database can be done within minutes. 
            Furthermore, the ability to integrate automation into your data management is a huge bonus. I’m excited to see what this platform can do in the future.
          `,
        },
        {
          id: 2,
          title: "Insights from the Colt Customer Event 2024: AI & Cybersecurity",
          introImage: "@/assets/intro-image.jpg", // Example image for intro
          introduction: `
            On October 17th, I had the pleasure of attending the Colt Customer Event, hosted in collaboration with Omdia. 
            This event brought together a wide range of industry experts to explore the intersection of artificial intelligence (AI) and cybersecurity. 
            As businesses face an increasingly complex digital landscape, the role of AI in enhancing cybersecurity strategies has never been more critical.
          `,
          fullContent: `
            The Colt Customer Event provided in-depth discussions on how AI is transforming cybersecurity. 
            We explored how businesses can effectively integrate AI while managing its associated risks. 
            AI is not only revolutionizing the way cybersecurity threats are detected but also posing new challenges in securing networks and maintaining compliance.
          `,
        }
      ]
    };
  },
  methods: {
      goToEventDetailView(id) {
      this.$router.push({ name: 'eventDetailView', params: { id } });  // Ensure the route name matches
    }
  }
};
</script>
