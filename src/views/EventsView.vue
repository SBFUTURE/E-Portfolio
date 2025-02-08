<template>
  <NavBar />
  <section id="events" class="bg-blue-50 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8 text-center">Recent Events & Insights</h2>

      <div v-for="(blog, index) in blogs" :key="index" class="blog-post mb-12 bg-white shadow-lg rounded-lg p-6">
        <!-- Blog Title -->
        <h3 class="text-3xl font-bold text-[#1E3A8A] mb-4">{{ blog.title }}</h3>

        <!-- Blog Introduction -->
        <p v-if="!blog.showFullContent" class="text-gray-700 mb-4">{{ blog.introduction }}</p>

        <!-- Full Blog Content (hidden initially) -->
        <div v-if="blog.showFullContent" class="text-gray-700 mb-4 space-y-4">
          <div class="space-y-2">
            <h4 class="text-2xl font-semibold text-[#1E3A8A]">AI and Cybersecurity: Insights from the Colt Customer Event</h4>
            <p>On October 17th, I had the privilege of attending the Colt Customer Event, held in partnership with Omdia. The event provided valuable insights into the intersection of artificial intelligence (AI) and cybersecurity, featuring presentations from leading experts in the field. We discussed how AI is transforming cybersecurity and the importance of implementing responsible, ethical frameworks to ensure secure AI deployment.</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-2xl font-semibold text-[#1E3A8A]">Exploring AI's Impact on Cybersecurity</h4>
            <p>As AI continues to revolutionize cybersecurity, businesses must balance its immense potential with the challenges it brings. At the event, we explored the role AI plays in detecting threats, enhancing network security, and improving compliance. However, it’s also clear that AI introduces new vulnerabilities and complexities, making careful integration essential to mitigating risk.</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-2xl font-semibold text-[#1E3A8A]">Networking and Collaboration with Industry Peers</h4>
            <p>Networking with fellow professionals from various industries was one of the highlights of the event. It provided a valuable opportunity to exchange ideas, share experiences, and discuss best practices for incorporating AI into cybersecurity strategies. These conversations deepened my understanding of the current challenges and the forward-thinking solutions organizations are exploring to stay ahead of emerging threats.</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-2xl font-semibold text-[#1E3A8A]">The Drone Initiation: A Fun and Engaging Activity</h4>
            <p>In addition to insightful discussions, the event featured an exciting drone initiation session. Participants had the chance to try their hand at flying drones, navigating through an obstacle course. My team was thrilled to win the tournament, adding a fun, interactive element to the event that made it even more memorable.</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-2xl font-semibold text-[#1E3A8A]">Takeaways and Looking Ahead</h4>
            <p>The Colt Customer Event, in partnership with Omdia, was an invaluable experience that highlighted the growing importance of AI in cybersecurity. It provided insights into the risks and rewards of adopting AI, and the importance of a thoughtful, ethical approach to its implementation. I left the event with a deeper understanding of AI's impact and the strategies businesses must adopt to navigate this evolving landscape.</p>
            <p>If you’re interested in exploring any of these topics further, or have any questions, feel free to reach out to your account manager or respond to the email from Colt. I look forward to attending future Colt events and continuing to learn from industry leaders and peers alike.</p>
          </div>
        </div>

        <!-- Read More / Show Less Toggle -->
        <button @click="toggleContent(index)" class="bg-[#1E3A8A] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 mt-4">
          {{ blog.showFullContent ? 'Show Less' : 'Read More' }}
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
          title: "Insights from the Colt Customer Event 2024: AI & Cybersecurity",
          introduction: `On October 17th, I participated in the Colt Customer Event, held in partnership with Omdia. The event offered a deep dive into AI’s role in cybersecurity, with valuable insights shared by industry experts. Networking with peers and the engaging drone initiation session made this a memorable and insightful experience.`,
          fullContent: `The Colt Customer Event, in collaboration with Omdia, provided in-depth discussions on how AI is transforming cybersecurity. We explored how businesses can effectively integrate AI while managing its associated risks. AI is not only revolutionizing the way cybersecurity threats are detected but also posing new challenges in securing networks and maintaining compliance. 

            One key takeaway from the event was the importance of creating responsible, ethical AI frameworks. Ensuring transparency, accountability, and proper risk management are critical to successfully deploying AI in cybersecurity.

            Networking with peers from various companies was another highlight, as it allowed us to discuss practical challenges, share experiences, and learn from one another. The event also featured a fun and interactive drone initiation session. Participants formed teams to fly drones through a challenging obstacle course, and my team emerged victorious!

            Overall, the Colt Customer Event was a valuable opportunity to deepen my understanding of AI’s role in cybersecurity and to connect with like-minded professionals. Looking ahead, I’m excited to apply the insights gained and stay engaged with the ongoing conversation around AI, cybersecurity, and digital transformation.`
        }
      ]
    };
  },
  methods: {
    toggleContent(index) {
      this.blogs[index].showFullContent = !this.blogs[index].showFullContent;
    }
  }
};
</script>

<style scoped>
/* Optional: Additional styling if needed, but Tailwind should handle most of it */
</style>
