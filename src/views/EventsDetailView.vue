<template>
  <NavBar />
  <section id="event-detail" class="bg-blue-50 py-20">
    <div class="container mx-auto px-6">
      <!-- Main Event Card -->
      <div v-if="event" class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <!-- Back Arrow Button Inside Card -->
        <div class="mb-6 flex items-center">
          <button 
            @click="goBack"
            class="flex items-center text-[#1E3A8A] hover:text-blue-800 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Events
          </button>
        </div>

        <!-- Event Title -->
        <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8">{{ event.title }}</h2>
        <img :src="event.introImage" alt="Event Introduction Image" class="w-full h-auto rounded-lg mb-6" />
        <p class="text-gray-700 mb-4">{{ event.introduction }}</p>
        
        <!-- Full Event Content -->
        <div class="space-y-6 text-gray-700">
          <div v-for="(section, index) in event.sections" :key="index" class="space-y-4">
            <h3 class="text-2xl font-semibold text-[#1E3A8A]">{{ section.title }}</h3>
            <img :src="section.image" alt="Event Section Image" class="w-full h-auto rounded-lg mb-4" />
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading event details...</p>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'EventDetailView',
  components: {
    NavBar
  },
  props: ['id'],  // Accept the 'id' prop from the route

  setup(props) {
    const router = useRouter();  // Initialize Vue Router
    const event = ref(null);

    const fetchEventDetails = () => {
      const events = [
        {
          id: 1,
          title: "Exploring Baserow: A Game-Changer for Data Storage",
          introImage: "@/assets/baserow-intro-image.jpg",
          introduction: `
            Baserow allows users to build databases without writing any code, using a simple, user-friendly interface. 
            The demo I saw made it clear that deploying a Docker container and setting up a database can be done within minutes.
            Furthermore, the ability to integrate automation into your data management is a huge bonus. I’m excited to see what this platform can do in the future.
          `,
          sections: [
            {
              title: "Introduction to Baserow",
              image: "@/assets/baserow-intro-image.jpg",
              content: `
                Baserow is an innovative open-source platform designed to help users manage databases with no coding required. 
                It allows users to build, design, and manage databases effortlessly with a clean and intuitive interface.
              `
            },
            {
              title: "Real-World Applications",
              image: "@/assets/baserow-use-case.jpg",
              content: `
                From small businesses to large enterprises, Baserow makes it easy for any organization to adopt database management tools. 
                During the demo, we saw how you can deploy Docker containers and set up the database within minutes. The platform is ideal for teams that need to store and organize data without relying on expensive, complex solutions.
              `
            },
            {
              title: "Future of Data Management",
              image: "@/assets/baserow-future.jpg",
              content: `
                Looking ahead, Baserow has the potential to revolutionize the way databases are built and managed. 
                With its open-source nature and user-centric design, Baserow promises to make managing data easier, more efficient, and accessible to everyone.
              `
            }
          ]
        },
        {
          id: 2,
          title: "Insights from the Colt Customer Event 2024: AI & Cybersecurity",
          introImage: "@/assets/intro-image.jpg",
          introduction: `
            The Colt Customer Event provided in-depth discussions on how AI is transforming cybersecurity. 
            We explored how businesses can effectively integrate AI while managing its associated risks. 
            AI is not only revolutionizing the way cybersecurity threats are detected but also posing new challenges in securing networks and maintaining compliance.
          `,
          sections: [
            {
              title: "AI and Cybersecurity: Insights from the Colt Event",
              image: "@/assets/event-ai-cybersecurity.jpg",
              content: `
                On October 17th, I had the privilege of attending the Colt Customer Event, held in collaboration with Omdia. 
                This event brought together a wide range of industry experts to explore the intersection of AI and cybersecurity. 
                It provided insights into how AI is enhancing cybersecurity strategies.
              `
            },
            {
              title: "Exploring AI's Impact on Cybersecurity",
              image: "@/assets/ai-cybersecurity.jpg",
              content: `
                AI is transforming how cybersecurity measures are implemented. From detecting threats faster to automating risk management, 
                AI offers innovative solutions. However, the complexity of implementing AI solutions while maintaining security and compliance is a challenge.
              `
            },
            {
              title: "Networking with Industry Peers",
              image: "@/assets/networking-session.jpg",
              content: `
                One of the best parts of the event was the networking opportunities. Connecting with peers from other industries provided 
                a valuable exchange of ideas, experiences, and best practices for integrating AI in cybersecurity.
              `
            },
            {
              title: "Drone Initiation: A Fun Activity",
              image: "@/assets/drone-session.jpg",
              content: `
                Beyond the deep discussions, the event featured a drone initiation session. 
                Participants competed in an obstacle course with drones, and my team was lucky enough to win the tournament!
              `
            },
            {
              title: "Looking Ahead in Cybersecurity",
              image: "@/assets/future-cybersecurity.jpg",
              content: `
                The event reinforced the critical importance of integrating AI into cybersecurity strategies while carefully considering 
                its risks. I look forward to seeing how AI continues to shape the future of cybersecurity.
              `
            }
          ]
        }
      ];

      // Ensure the id is a number and find the event from the list
      event.value = events.find(e => e.id === Number(props.id));
    };

    // Fetch event data on component mount
    onMounted(fetchEventDetails);

    // Go back to the events page
    const goBack = () => {
      router.push({ name: 'events' });  // Ensure the route name matches the events page route
    };

    return { event, goBack };
  }
};
</script>

<style scoped>
/* Optional: Additional styling if needed */
</style>
