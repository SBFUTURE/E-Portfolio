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
        <img v-if="event.introImage" :src="event.introImage" alt="Event Introduction" class="w-1/2 max-h-50  mx-auto rounded-lg mb-6" />
        <h2 class="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-8">{{ event.title }}</h2>
        <p class="text-gray-700 mb-4">{{ event.introduction }}</p>
        
        <!-- Full Event Content -->
        <div class="space-y-6 text-gray-700">
          <div v-for="(section, index) in event.sections" :key="index" class="space-y-4">
            <h3 class="text-1xl md:text-2xl font-semibold text-[#1E3A8A]">{{ section.title }}</h3>
            <img v-if="section.image" :src="section.image" alt="Event Section" class="w-1/2  rounded-lg mb-4" />
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading event details...</p>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import baserowImg from '@/assets/images/events/Baserow/Event-Baserow.jpeg';
import coltIntroImg from '@/assets/images/events/colt-event/IntroImage.png';
import coltTeamPicture from '@/assets/images/events/colt-event/TeamPicture.png';
import droneSession from '@/assets/images/events/colt-event/DroneEvent.png';
import cyberIntro from '@/assets/images/events/CyberCommand/CyberCommandIntro.jpeg';
import introHtf from '@/assets/images/events/HackTheFuture/IntroHTF.png';
import badgeHtf from '@/assets/images/events/HackTheFuture/badgeHTF.png';
import roboIntro from '@/assets/images/events/Robotics/roboIntro.jpeg'
import googleIntro from '@/assets/images/events/Google-SRE/GoogleIntro.jpeg';
import aiIntro from '@/assets/images/events/AI-Hype/AiIntro.jpeg';
import hackIntro from '@/assets/images/events/Hacking/hackIntro.jpeg';
import workshopIntro from '@/assets/images/events/Workshop/workshopIntro.jpeg';
export default {

  name: 'EventDetailView',
  components: {
    NavBar,
    Footer
  },
  props: ['id'],

  setup(props) {
    const router = useRouter();
    const event = ref(null);

    const fetchEventDetails = () => {
      const events = [
            {
              "id": 1,
              "title": "Insights from the Colt Customer Event 2024: AI & Cybersecurity",
              "introImage": coltIntroImg,
              "introduction": "The Colt Customer Event provided in-depth discussions on how AI is transforming cybersecurity. We explored how businesses can effectively integrate AI while managing its associated risks. AI is not only revolutionizing the way cybersecurity threats are detected but also posing new challenges in securing networks and maintaining compliance.",
              "sections": [
                {
                  "title": "AI and Cybersecurity: Insights from the Colt Event",
                  "content": "On October 17th, I had the privilege of attending the Colt Customer Event, held in collaboration with Omdia. This event brought together a wide range of industry experts to explore the intersection of AI and cybersecurity. It provided insights into how AI is enhancing cybersecurity strategies."
                },
                {
                  "title": "Exploring AI's Impact on Cybersecurity",
                  "content": "AI is transforming how cybersecurity measures are implemented. From detecting threats faster to automating risk management, AI offers innovative solutions. However, the complexity of implementing AI solutions while maintaining security and compliance is a challenge."
                },
                {
                  "title": "Networking with Industry Peers",
                  "image": coltTeamPicture,
                  "content": "One of the best parts of the event was the networking opportunities. Connecting with peers from other industries provided a valuable exchange of ideas, experiences, and best practices for integrating AI in cybersecurity."
                },
                {
                  "title": "Drone Initiation: A Fun Activity",
                  "image": droneSession,
                  "content": "Beyond the deep discussions, the event featured a drone initiation session. Participants competed in an obstacle course with drones, and my team was lucky enough to win the tournament!"
                },
                {
                  "title": "Looking Ahead in Cybersecurity",
                  "content": "The event reinforced the criticalmportance of integrating AI into cybersecurity strategies while carefully considering its risks. I look forward to seeing how AI continues to shape the future of cybersecurity."
                }
              ]
            },
            {
              "id": 2,
              "title": "Exploring Baserow: A Game-Changer for Data Storage",
              "introImage": baserowImg,
              "introduction": "Baserow allows users to build databases without writing any code, using a simple, user-friendly interface. The demo I saw made it clear that deploying a Docker container and setting up a database can be done within minutes. Furthermore, the ability to integrate automation into your data management is a huge bonus. I’m excited to see what this platform can do in the future.",
              "sections": [
                {
                  "title": "Introduction to Baserow",
                  "content": "Baserow is an innovative open-source platform designed to help users manage databases with no coding required. It allows users to build, design, and manage databases effortlessly with a clean and intuitive interface."
                },
                {
                  "title": "Real-World Applications",
                  "content": "From small businesses to large enterprises, Baserow makes it easy for any organization to adopt database management tools. During the demo, we saw how you can deploy Docker containers and set up the database within minutes. The platform is ideal for teams that need to store and organize data without relying on expensive, complex solutions."
                },
                {
                  "title": "Future of Data Management",
                  "content": "Looking ahead, Baserow has the potential to revolutionize the way databases are built and managed. With its open-source nature and user-centric design, Baserow promises to make managing data easier, more efficient, and accessible to everyone."
                }
              ]
            },
            {
              "id": 3,
              "title": "Exploring Cybersecurity with Belgian Cyber Command",
              "introImage": cyberIntro,
              "introduction": "Cybersecurity is more critical than ever in our digital world, and few understand its complexities better than those on the front lines. On November 12, 2024, we had the incredible opportunity to welcome Colonel Gunther Godefridis, Director for Development & Readiness at Belgian Cyber Command, for an exclusive Tech&Meet session at Howest Campus Brugge. His insights into the evolving threats and defense strategies in cyberspace left a lasting impact on all attendees.",
              "sections": [
                {
                  "title": "Cybersecurity at the Heart of National Defense",
                  "content": "As our world becomes increasingly digital, cyber threats continue to evolve—ranging from disinformation and espionage to full-scale cyberattacks. Colonel Godefridis provided an insightful look into the crucial role of Belgian Cyber Command in defending national security. From safeguarding Defense networks and weapon systems to intelligence-driven cyber operations, Cyber Command stands at the forefront of digital protection."
                },
                {
                  "title": "Key Takeaways from the Event",
                  "content": "During the session, Colonel Godefridis shared valuable insights on several critical topics:\n<ul>\n<li><strong>Understanding the Mission:</strong> The Colonel elaborated on how Cyber Command protects Belgium’s Defense infrastructure from growing cyber threats.</li>\n<li><strong>Collaboration is Key:</strong> Emphasizing the importance of partnerships across academia, industry, and government to strengthen Belgium’s cyber resilience.</li>\n<li><strong>A Vision for the Future:</strong> With over 20 years of military experience, Colonel Godefridis shared how Belgium is preparing for future challenges in the evolving landscape of cyber warfare.</li>\n</ul>"
                },
                {
                  "title": "A Night of Engagement and Inspiration",
                  "content": "The audience was captivated by Colonel Godefridis’ expertise and inspiring stories from the field. A lively Q&A session followed, where students and professionals alike seized the opportunity to ask pressing questions about cybersecurity in the modern era. The event not only provided invaluable knowledge but also sparked meaningful discussions about the future of cyber defense and digital security in Belgium."
                },
                {
                  "title": "Looking Ahead",
                  "content": "Cybersecurity is an ever-evolving field, and learning from experts like Colonel Godefridis helps bridge the gap between defense strategies and the next generation of cybersecurity professionals. As technology advances, so do the threats, making it vital for academia, industry, and government to collaborate closely. Stay tuned for more Tech&Meet sessions as we continue to explore the ever-evolving world of technology and innovation!"
                }
              ]
            },
            {
              id: 4,
              title: "Exploring the OpenShift Galaxy: A Hands-On Challenge at Hack The Future",
              introImage: introHtf,
              introduction: "On 19 November 2024, we participated in Hack The Future, a hands-on tech event that brought together students and professionals for a day of real-world challenges. One of the highlights was the OpenShift Galaxy track — a space-themed challenge centered around container security, Linux, and Red Hat OpenShift.",
              sections: [
                {
                  title: "What Was OpenShift Galaxy?",
                  content: "The challenge simulated a mission aboard a spaceship — isolated from the internet and relying solely on local resources. Our objective was to set up a scalable EDR (Endpoint Detection and Response) solution using OpenShift, focused on securing container workloads. We deployed an ELK stack (Elasticsearch, Logstash, Kibana) inside an air-gapped OpenShift cluster to monitor and visualize security-related events, pushing our problem-solving and Kubernetes skills to new levels."
                },
                {
                  title: "Key Concepts and Technologies",
                  content: "We worked hands-on with several key technologies: Linux Containers: The foundation of our workloads. Red Hat OpenShift: Our Kubernetes platform for deploying and managing infrastructure. ELK Stack: Used to collect, process, and visualize security events. Security Monitoring: Logging and alerting systems helped us detect anomalies in real-time. We also learned to work completely offline, pulling container images from local registries and solving challenges without external documentation."
                },
                {
                  title: "The Hands-On Experience",
                  image: badgeHtf,
                  content: "This challenge gave us a unique opportunity to: Set up and configure the ELK stack within an air-gapped OpenShift cluster. Route container logs to Logstash and build dashboards in Kibana.Secure workloads in an isolated Kubernetes environment. Troubleshoot system issues using only our skills and teamwork. The hands-on aspect made the experience highly engaging and allowed us to apply our knowledge under real-world constraints."
                },
                {
                  title: "Final Thoughts",
                  content: "OpenShift Galaxy was not just a technical challenge — it was a powerful learning experience. It helped reinforce the importance of observability, container security, and resilience in cloud-native environments. We left with a stronger understanding of Kubernetes and the tools needed to protect and monitor modern infrastructure.\n\nHuge thanks to the Hack The Future organizers for crafting such a memorable and impactful event!"
                }
              ]
            },
            {
              id: 5,
              title: "Innovating with Robotics & AI: Insights from Jo Lernout",
              introImage: roboIntro,
              introduction: `
                At Howest University, we had the privilege of welcoming Jo Lernout to our campus for an inspiring session on robotics, AI, and entrepreneurship. Known for his deep expertise and entrepreneurial mindset, Jo shared valuable insights on innovation, perseverance, and the challenges of bringing groundbreaking ideas to life.
              `,
              sections: [
                {
                  title: "The Intersection of Technology & Entrepreneurship",
                  content: `
                    Throughout the session, Jo Lernout emphasized how technology and business go hand in hand when it comes to making a real impact. His journey, filled with both innovation and challenges, served as a powerful lesson for students eager to dive into the tech industry.
                  `
                },
                {
                  title: "AI in Action: The AI Dog Demonstration",
                  content: `
                    To conclude the session, attendees were treated to an exciting demonstration of an AI-powered robotic dog. This interactive showcase illustrated the capabilities of modern AI in robotics, leaving students fascinated by the potential applications of such technology.
                  `
                },
                {
                  title: "Final Thoughts",
                  content: `
                    This session was a reminder that technology is most powerful when combined with vision and persistence.
                    Whether in AI, robotics, or any other field, success comes to those who are willing to innovate, push through challenges, and think beyond the ordinary.
                  `
                }
              ]
            },
            {
              "id": 6,
              "title": "Google SRE: Understanding Site Reliability Engineering",
              "introImage": googleIntro,
              "introduction": "In December 2024, we had the opportunity to attend an insightful guest lecture on Site Reliability Engineering (SRE), presented by Stefaan V. and Tijl Van den Broeck from Google. This session shed light on what SRE truly is, how it differs from DevOps, and why it plays a crucial role in ensuring system reliability and business continuity.",
              "sections": [
                {
                  "title": "What is SRE?",
                  "content": "One of the key takeaways from the lecture was how SRE focuses on reliability, availability, and operational efficiency. While DevOps is centered around development and operations, SRE takes a broader approach, defining global objectives that dictate system performance and availability.\n\nA major part of SRE is setting clear agreements with clients, ensuring that services meet the necessary performance levels while maintaining a healthy balance between reliability and innovation."
                },
                {
                  "title": "Key Concepts in SRE",
                  "content": "During the lecture, several fundamental concepts were discussed, including:\n\nSLO (Service-Level Objective) – Defines the target level of reliability for a service.\nSLA (Service-Level Agreement) – A formal commitment between service providers and clients regarding uptime and performance.\nError Budget – The allowable threshold for system failures before actions are required.\n\nThese concepts help businesses optimize uptime while managing acceptable levels of failure, ensuring a strategic approach to reliability rather than over-engineering every aspect."
                },
                {
                  "title": "Hands-on Experience: The SRE Lab",
                  "content": "One of the highlights of the lecture was a practical SRE lab, where we got a taste of what it's like to troubleshoot and manage system reliability issues in real-time. This hands-on exercise made the theoretical aspects of SRE more tangible, allowing us to experience the decision-making process of an SRE engineer firsthand."
                },
                {
                  "title": "Final Thoughts",
                  "content": "This guest lecture provided a clear and structured perspective on SRE, demonstrating its significance in modern IT operations. Learning about error budgets, service objectives, and the balance between reliability and agility has given us a deeper appreciation for the critical role SRE plays in today’s tech-driven businesses.\n\nA huge thanks to Stefaan V. and Tijl Van den Broeck for sharing their expertise and giving us a glimpse into the world of Google's Site Reliability Engineering!"
                }
              ]
            },
            {
              "id": 7,
              "title": "AI: The Reality Behind the Hype",
              "introImage": aiIntro,
              "introduction": "Artificial Intelligence (AI) has become an integral part of our daily lives. From smart assistants to complex industrial applications, AI is often portrayed as the driving force behind the future of technology. But where do we draw the line between reality and hype? What is AI truly capable of, and how does it impact our society beyond the buzzwords?",
              "sections": [
                {
                  "title": "Unpacking AI: What’s Real and What’s Just Hype?",
                  "content": "In December 2024, during a Tech&Meet session at Howest Brugge, we had the pleasure of exploring this very question with an expert in the field. Ir. Wim Delvaux, a civil engineer in Computer Science (KU Leuven), shared his unique perspective as a Solutions Architect at De Lijn and part-time lecturer at HOGENT. With an extensive background in product development and consultancy at companies like Cisco and Kone, Delvaux provided a grounded view of AI’s true capabilities and limitations."
                },
                {
                  "title": "Key Takeaways from the Event",
                  "content": "AI as a Tool, Not a Miracle – Delvaux emphasized that AI, despite its rapid advancement, is ultimately an instrument—a powerful one, but not a magical solution that works independently of human input.\n\nThe Overload of AI Tools – The growing number of AI-powered solutions can feel overwhelming. Many AI systems offer similar functionalities with slight variations, making it difficult to determine which tools provide real value versus those that are simply riding the AI wave.\n\nThe Future of AI – While AI continues to evolve, the challenge lies in using it effectively rather than just following trends. The discussion highlighted the importance of AI being leveraged for meaningful advancements in industries rather than flooding the market with redundant tools."
                },
                {
                  "title": "A Personal Reflection",
                  "content": "This event resonated with me because it addressed a question I often ask myself: how revolutionary is AI really today? While AI is undeniably a powerful instrument, I sometimes find the sheer volume of AI solutions frustrating—so many similar tools with minor differences, making it hard to choose the right one. However, I remain optimistic about the future of technology. AI has the potential to bring incredible benefits, and I look forward to seeing how it continues to shape the production and innovation landscape in the coming years."
                },
                {
                  "title": "Looking Ahead",
                  "content": "As AI continues to develop, separating reality from hype will be more important than ever. Sessions like this help foster a deeper understanding of AI’s real impact and how we can best integrate it into our world.\n\nStay tuned for more Tech&Meet events as we continue to explore groundbreaking technological advancements!"
                }
              ]
            },
            {
              "id": 8,
              "title": "Hacking for Good: Lessons from 'Hack the Government' Winner Robbe Verwilghen",
              "date": "March 2024",
              "introImage": hackIntro,
              "introduction": "As one of the final Tech&Meet presentations of 2024 at Howest University, we had the privilege of welcoming Robbe Verwilghen, a talented ethical hacker and the winner of the Hack the Government event hosted by the Center for Cybersecurity Belgium (CCB). His talk was not only insightful but also truly inspiring, offering valuable lessons for aspiring cybersecurity professionals.",
              "sections": [
                {
                  "title": "A Pentester’s Perspective: Real-World Experience & Practical Advice",
                  "content": "Robbe Verwilghen stood out as a speaker because he didn’t just talk about theories—he shared real-world experiences. As an experienced penetration tester, he provided practical advice for those looking to start in cybersecurity, emphasizing that you don’t need to be an expert from day one. One of the highlights of his talk was his showcase of real bugs he had discovered. What made these examples so fascinating was that they weren’t based on highly complex or unattainable knowledge. Instead, they demonstrated that with curiosity, persistence, and a strong foundational understanding, anyone can make impactful discoveries in cybersecurity."
                },
                {
                  "title": "Key Takeaways from the Session",
                  "content": "Start Where You Are – You don’t need to be an expert to begin. Start small, build your skills, and keep learning. Perseverance is Key – More than talent or intelligence, dedication and persistence will set you apart in cybersecurity. Hacking is Not Rocket Science – Ethical hacking is a structured approach. While advanced knowledge helps, many impactful discoveries come from a deep understanding of the basics and methodical testing. Stay Humble & Keep Learning – Even the best hackers continue to learn. Robbe emphasized the importance of staying humble and always being open to growth."
                },
                {
                  "title": "Final Thoughts",
                  "content": "This session was one of the most engaging Tech&Meet events I’ve attended. Seeing a real-world pentester share his journey, practical insights, and success story from the Hack the Government competition reinforced the idea that passion and perseverance can take you far in the cybersecurity field. As technology evolves, ethical hackers like Robbe Verwilghen play a crucial role in keeping systems secure. His story serves as a reminder that anyone willing to put in the effort can make an impact in this field. Looking forward to more sessions like this that bridge the gap between education and real-world experience!"
                }
              ]
            },
            {
              id: 9,
              title: "Ethical Hacking Workshop – Handelsschool Aalst",
              introImage: workshopIntro,
              introduction: "Cybersecurity is more vital than ever in today’s world. On 28 January, we had the pleasure of giving an ethical hacking workshop to the students of the Handelsschool in Aalst, focusing on practical, hands-on techniques for discovering and understanding common web vulnerabilities.",
              sections: [
                {
                  title: "Interactive Pentesting in the Classroom",
                  content: "Together with Evarist Verstraete, we hosted an ethical hacking session for 6th-year Application and Data Management students. The goal was to give them a real-world taste of penetration testing—right in the classroom."
                },
                {
                  title: "Core Topics in Cybersecurity",
                  content: "We introduced and demonstrated vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), and Insecure Direct Object References (IDOR). Each topic was accompanied by hands-on examples, allowing students to understand both how the attacks work and how to defend against them."
                },
                {
                  title: "Safe, Controlled & Educational",
                  content: "The workshop was conducted in a controlled lab environment, ensuring students could explore these concepts ethically and safely. Their curiosity and engagement made the experience both fun and impactful."
                },
                {
                  title: "Inspiring the Next Generation",
                  content: "Cybersecurity is a growing field with enormous importance. Events like these help spark interest and plant the seeds for future careers in ethical hacking and cyber defense. A big thank you to Handelsschool Aalst for welcoming us and making this possible!"
                }
              ]
            },
            {
              id: 10,
              title: "Intern Ignite Event – Deloitte",
              introduction: "On Thursday, 20 February, we had the opportunity to attend an exciting event at Deloitte’s Zaventem office. The afternoon was packed with breakout sessions, interactive activities, and opportunities to connect with professionals across the company.",
              sections: [
                {
                  title: "An Energizing Start",
                  content: "The event began at 1:00 PM with registration and name tag pickup, setting the tone for a well-organized and professional afternoon. Soon after, attendees were directed to their first breakout sessions."
                },
                {
                  title: "Keynote on Teamwork and Growth",
                  content: "One of the most inspiring moments of the event was a keynote focused on the power of teamwork and the importance of pushing personal limits. The speaker’s story and message sparked motivation among all attendees."
                },
                {
                  title: "Exploring Deloitte through a Challenge",
                  content: "We participated in an interactive scavenger hunt-style challenge that took us around Deloitte’s Zaventem building. Each checkpoint had questions about the company, helping us learn more about its operations, values, and culture in a playful and engaging way."
                },
                {
                  title: "One-on-One Sessions with Deloitters",
                  content: "Later in the afternoon, we engaged in speed-dating sessions with Deloitte employees from various departments. These short one-on-one conversations gave us insights into their day-to-day roles and valuable advice on starting a career in consulting or tech."
                },
                {
                  title: "Closing with Pizza & Networking",
                  content: "The day ended on a high note with a pizza buffet around 4:30 PM. It created a relaxed atmosphere for networking with other interns, as well as Deloitte coaches, managers, and directors. The event wrapped up around 6:00 PM, leaving us with meaningful connections and valuable knowledge."
                }
              ]
            },

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
