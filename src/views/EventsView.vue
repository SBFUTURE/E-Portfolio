<template>
  <NavBar />
  <section id="events" class="bg-blue-50 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8 text-center">Recent Events & Insights</h2>

      <div v-for="(blog, index) in blogs.slice().reverse()" :key="blog.id" class="blog-post mb-12 bg-white shadow-lg rounded-lg p-6">
        <!-- Blog Title -->
        <h3 class="text-3xl font-bold text-[#1E3A8A] mb-4">{{ blog.title }}</h3>
        <p class="italic text-[#1E3A8A] mb-4">{{ blog.date }}</p>
        <!-- Blog Introduction -->
        <div class="mb-4">
          <img :src="blog.introImage" alt="Event Introduction" class="w-full h-auto rounded-lg mb-6" />
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
          title: "Insights from the Colt Customer Event: AI & Cybersecurity",
          date:"17 October 2024",
          introImage: "@/assets/intro-image.jpg", // Example image for intro
          introduction: `
            On October 17th, I had the pleasure of attending the Colt Customer Event, hosted in collaboration with Omdia. 
            This event brought together a wide range of industry experts to explore the intersection of artificial intelligence (AI) and cybersecurity. 
            As businesses face an increasingly complex digital landscape, the role of AI in enhancing cybersecurity strategies has never been more critical.
          `,
        },
        {
          id: 2,
          title: "Exploring Baserow: A Game-Changer for Data Storage",
          date: "22 October 2024",
          introImage: "@/assets/baserow-intro-image.jpg", // Example image for intro
          introduction: `
            At Howest University in October 2024, I had the privilege of attending a Tech&Meet session that introduced me to Baserow, an innovative open-source platform designed for building and managing databases without needing any prior coding knowledge. Baserow aims to simplify database creation and empower individuals from all backgrounds, whether you're a developer or not, to manage data effortlessly. During the event, 
            I was fascinated by how this tool makes complex tasks like data management and automation accessible to everyone, regardless of their technical skill set. 
          `,
        },
        {
          id: 3,
          title: "Exploring the Future of Cybersecurity with Belgian Cyber Command",
          date:"12 November 2024",
          introImage: "@/assets/cybercommand-event.jpg",
          introduction: `
            Cybersecurity is more critical than ever in our digital world, and few understand its complexities better than those on the front lines. On November 12, 2024, we had the incredible opportunity to welcome Colonel Gunther Godefridis, Director for Development & Readiness at Belgian Cyber Command, for an exclusive Tech&Meet session at Howest Campus Brugge. His insights into the evolving threats and defense strategies in cyberspace left a lasting impact on all attendees.
          `,
        },
        {
          id: 4,
          title: "Exploring the OpenShift Galaxy: A Hands-On Challenge at Hack The Future",
          date: "19 November 2024",
          introImage: "@/assets/openshift-galaxy.jpg",
          introduction: `
            On 19 November 2024, we participated in Hack The Future, a hands-on tech event that brought together students and professionals 
            for a day of real-world challenges. One of the highlights was the OpenShift Galaxy track — a space-themed challenge centered 
            around container security, Linux, and Red Hat OpenShift.
          `,
        },

        {
          id: 5,
          title: "Innovating with Robotics & AI: Insights from Jo Lernout",
          date: "3 December 2024",
          introImage: "@/assets/jo-lernout-event.jpg",
          introduction: `
            At Howest University, we had the privilege of welcoming Jo Lernout to our campus for an inspiring session on robotics, AI, and entrepreneurship. 
            Known for his deep expertise and entrepreneurial mindset, Jo shared valuable insights on innovation, perseverance, and the challenges of bringing groundbreaking ideas to life.
          `,
        },
        {
          id: 6,
          title: "Google SRE: Understanding Site Reliability Engineering",
          date: "4 December 2024",
          introImage: "@/assets/sre-event.jpg",
          introduction: `
            In December 2024, we had the opportunity to attend an insightful guest lecture on Site Reliability Engineering (SRE), presented by Stefaan V. and Tijl Van den Broeck from Google. 
            This session shed light on what SRE truly is, how it differs from DevOps, and why it plays a crucial role in ensuring system reliability and business continuity.
          `,
        },
        {
          id: 7,
          title: "AI, the Reality Behind the Hype",
          date: "10 December 2024",
          introImage: "@/assets/ai-event.jpg", 
          introduction: `
            Artificial Intelligence (AI) has become an integral part of our daily lives. From smart assistants to complex industrial applications, 
            AI is often portrayed as the driving force behind the future of technology. But where do we draw the line between reality and hype? 
            What is AI truly capable of, and how does it impact our society beyond the buzzwords?
            In December 2024, during a Tech&Meet session at Howest Brugge, we had the pleasure of exploring this very question with an expert in the field.
          `
        },
        {
          id: 8,
          title: "Hacking for Good: Lessons from 'Hack the Government' Winner Robbe Verwilghen",
          date: "17 December 2024",
          introImage: "@/assets/hackthegov-intro.jpg",
          introduction: `
            As one of the final Tech&Meet presentations of 2024 at Howest University, we had the privilege of welcoming Robbe Verwilghen, 
            a talented ethical hacker and the winner of the Hack the Government event hosted by the Center for Cybersecurity Belgium (CCB). 
            His talk was not only insightful but also truly inspiring, offering valuable lessons for aspiring cybersecurity professionals.
          `,
        },
        {
          id: 9,
          title: "Intern Ignite Event – Deloitte",
          date: "20 February 2025",
          introImage: "@/assets/deloitte-ignite.jpg",
          introduction: `
            On Thursday, 20 February, we had the opportunity to attend an exciting event at Deloitte’s Zaventem office. 
            The afternoon kicked off with engaging sessions, inspiring talks, and a hands-on challenge that gave us a unique look into Deloitte’s culture and workplace.
          `,
        },






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
