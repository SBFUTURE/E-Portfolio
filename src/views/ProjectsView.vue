<template>
  <NavBar />
  <section id="projects" class="bg-blue-50 py-20">
    <div class="w-full"> 
      <h2 class="text-4xl font-semibold text-[#1E3A8A] mb-8 text-center">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-8 px-16">
       <div v-for="(project, index) in projects.slice().reverse()" :key="project.id" class="project-post bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <!-- Project Title -->
            <h3 class="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-2">{{ project.title }}</h3>
            <p class="italic text-sm text-[#1E3A8A] mb-2">{{ project.date }}</p>
            <!-- Technology Badges -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technology.split(',')"
                :key="tech"
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-blue-200"
              >
                {{ tech.trim() }}
              </span>
            </div>
            <!-- Project Content -->
            <div class="mb-4">
              <img v-if="project.introImage" :src="project.introImage" alt="Project" class="w-full h-auto rounded-lg mb-6" />
              <p class="text-gray-700 mb-4 whitespace-pre-line">{{ project.content }}</p>
            </div>
             <!-- GitHub Link -->
            <div v-if="project.gitlink" class="mt-auto">
              <a :href="project.gitlink" target="_blank" rel="noopener" class="inline-block text-blue-700 hover:underline font-semibold">
                View on GitHub
              </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: "ProjectsView",
  components: {
    NavBar
  },
  data() {
    return {
      projects: [
        {
          id:1,
          title:'Battleship',
          technology: 'Java, Javascript, CSS, HTML',
          date:'2nd Semester',
          gitlink:'https://github.com/SBFUTURE/Battleship-project1-howest',
          content: `One of the most exciting projects from my first year was developing a full-stack web version of the classic Battleship board game.
                  We built the backend in Java and the frontend using JavaScript, HTML, and CSS.

                  To enhance gameplay, we introduced unique modes like Salvo and move-and-shoot, and designed a consistent visual theme with sound effects and animations. The interface made it easy for users to play against friends or match with random opponents, while real-time updates and strategic shot tracking kept players engaged throughout each match.

                  On the technical side, building the backend gave us hands-on experience with clean architecture principles and strict API adherence—our first real encounter with the complexity of full-stack development.

                  The end result surpassed our expectations and gave us a strong sense of accomplishment, along with the confidence to take on more ambitious projects in the future.`
        },
        {
          id:2,
          title:'Adria Project',
          technology: 'Vue.JS, Java (NGINX), HTML, TailwindCSS',
          date:'3th Semester',
          gitlink:'https://github.com/SBFUTURE/adria-project-howest',
          content: `One of our major projects involved designing a smart transportation app aimed at improving connectivity within and between colonies. With easy access to transport, the goal was to strengthen the community by making it simpler for people to visit each other.

                    The app includes an interactive map that allows users to select starting points and destinations. Based on this, the app displays all available transport methods for the route. Users can filter through options and, upon selecting one, receive a complete overview of the journey. Real-time GPS tracking lets users monitor the progress of their trips directly within the app.

                    A personal dashboard shows users statistical insights about their travel history, such as trip duration and frequency. The app collects and processes various types of data, including user IDs, personal details, purchase history, and travel data. It also pulls information from registered transportation companies, such as company details, ticket availability, and vehicle capacity.

                    To enhance usability, the app focuses on one-stop booking for multiple transportation types, offering a simple and efficient experience. Users receive real-time updates on schedules, can compare fares for better cost efficiency, and get smart, eco-friendly travel recommendations. GPS integration supports smooth navigation, while route optimization helps save time and reduce waiting periods.

                    `
        },
        {
          id:3,
          title:'Deck Builder - Magic The Gathering',
          technology: '.NET, Blazor',
          date:'4th Semester',
          gitlink:'https://github.com/SBFUTURE/magic-the-gathering-deck-builder',
          content:`For this project, I developed a web application inspired by Magic: The Gathering, using .NET for the backend and Blazor for the frontend. The app allows users to create, manage, and organize custom card decks by saving cards into personal collections.

              We used Microsoft SQL Server to handle the storage and retrieval of card data, making it easy to filter and search by attributes like name, type, or color. On the frontend, Blazor was used to build a responsive and interactive user experience. To manage user-specific data such as saved decks, MongoDB was implemented to ensure scalable and efficient storage.

              A key learning objective was mastering API development in .NET. This included working with minimal APIs, traditional WebAPIs, and GraphQL, which helped deepen my understanding of backend integration and data handling.

              This project brought together several essential skills—API design, database integration, and frontend development—into one cohesive experience. It strengthened my confidence in using the .NET ecosystem and prepared me for tackling more advanced development challenges in the future.`
        },
        // {
        //   id:4,
        //   title: 'Malware VM bypass',
        //   date:'4th Semester',
        //   content:``
        // },
        {
          id:5,
          title:'Football La liga Match predictor',
          technology:'Python, Javascript, Vue.js, TailwindCSS',
          date:'4th Semester',
          gitlink:'https://github.com/SBFUTURE/la-liga-predictor',
          content:`In this project, our team developed a web-based application to predict match outcomes (win, draw, or loss) in Spain’s La Liga. We began by creating a custom dataset through web scraping, collecting detailed statistics about each club’s performance—including wins, losses, draws, goals scored and conceded, formations, and other key metrics.

                    The backend data analysis and model training were done using Python in Jupyter Notebook. After exploring and cleaning the data, we split it into training and test sets and trained a Random Forest Classifier. We then optimized the model using GridSearchCV to improve prediction accuracy.

                    Important features used in the model included the home team, opponent, formation, match location (home/away), cumulative goal difference, and recent match results. The most predictive factors were the outcomes of the last three matches (wins, draws, losses). The final model achieved a test accuracy of 77.1%, along with strong precision, recall, and F1 scores—indicating it was a reliable predictor.

                    On the frontend, we built a clean and responsive user interface using Vue.js and Tailwind CSS. The model itself was deployed using TensorFlow.js, allowing predictions to be made directly in the browser for a seamless user experience.

                    This project provided a complete full-stack experience—combining data scraping, machine learning, and modern frontend technologies—to deliver an engaging and functional predictive tool.`
        },
        {
          id:6,
          title: 'Online Ordering System - Native Android App',
          technology:'Kotlin',
          date:'4th Semester',
          gitlink:'https://github.com/SBFUTURE/online-order-system-native-mobile',
          content:`For this project, we built an Android online ordering system using Kotlin and Jetpack Compose. The app connects to a Laravel-based web API that powers an existing online ordering system. Since the API was hosted locally during development, we used Node.js as a bridge to transfer data between the Android app and the Laravel backend.

                  The main challenge was that the app couldn’t access the Laravel API directly on localhost due to network isolation between the emulator and the local server. To solve this, Node.js acted as an intermediary server to forward requests from the app to the Laravel API and send back the responses. While not suitable for production, this solution worked well for local development and testing.

                  The app met all the required features. It had more than four screens and used the Jetpack Navigation component for smooth screen transitions. We used Jetpack Compose for building the UI, including a scrollable list, buttons, text, and images. The app also included both menu-based and bottom navigation for improved usability.

                  We followed the recommended Android architecture using ViewModel and state management with Compose. A Room database was implemented to store user data locally. API communication was handled using Retrofit, and we scheduled background tasks using WorkManager. We also used two implicit intents, such as sending emails or opening a map.

                  The app was tested thoroughly, reaching over 90% code coverage to ensure stability. A custom Material Design theme and app icon were added to give the app a polished look. The final APK was generated successfully.

                  In addition to the core features, we explored self-learning topics like push notifications and simple canvas animations to enhance the user experience.

                  Overall, this project gave us valuable experience in full-stack mobile development and taught us how to handle real-world problems like API access and architecture design in Kotlin apps.

                  `
        },
        {
          id:7,
          title: 'Online Ordering System - WebFrameworks',
          technology: 'Laravel, Javascript, Vue.JS, HTML, TailwindCSS, Vuetify',
          date: '4th Semester',
          gitlink:'https://github.com/SBFUTURE/online-order-system-laravel-vue',
          content:`This project involved creating an online ordering platform for a local snack bar (frituur). The goal was to build a user-friendly web application where customers could place online orders and administrators could manage products and view incoming orders. The platform was built using HTML and CSS for layout, combined with Laravel and Vue.js for backend logic and dynamic frontend interaction.

                  The application was designed for two main types of users: customers and administrators. Customers can register and log in, browse the menu with detailed product information, select items to order, choose between pickup or delivery, and complete payments through secure gateways. They can also view their order history and receive real-time updates on their order status.

                  For administrators, the platform offers a secure login to an admin dashboard where they can manage the product catalog by adding, editing, or deleting items. They can also view and update order statuses, manage payment records, generate sales reports, and handle user account permissions.

                  Technically, the frontend experience was powered by Vue.js for a responsive and interactive interface, while the backend logic and API handling were managed using Laravel. Data was stored securely in a MySQL or PostgreSQL database, and payment integration was planned using services like Stripe or PayPal. Security features such as HTTPS, authentication, authorization, and data encryption were also considered.

                  The project followed a structured route system with prefixes to group related endpoints efficiently. A wireframe was also designed using Figma to plan out the UI/UX flow of both the customer and admin experiences.

                  Overall, this project gave us experience with full-stack web development, user management, secure payments, and building a responsive UI using modern frameworks.`
        },
        {
          id:8,
          title:'Self Learning Path',
          technology:'Python, .NET, Vue.JS, HTML, TailwindCSS',
          date:'5th Semester',
          gitlink:'https://github.com/SBFUTURE/self-learning-path',
          content:`This project, developed for Delaware, focused on building an AI-powered platform designed to help teams achieve certifications through personalized learning paths. Leveraging Retrieval-Augmented Generation (RAG), the platform tailors learning content based on each team member’s role and skill level, enhancing the efficiency and relevance of the learning experience.

                  The backend was built using .NET to ensure a stable, scalable system, while the frontend employed Vue.js to deliver a responsive and intuitive user interface. As users progress through their personalized learning paths, the AI dynamically adapts the content to match their pace and development.

                  To boost engagement, the platform integrates gamification features such as progress tracking and rewards. Additionally, managers have access to a dedicated dashboard to monitor their team’s progress, facilitating targeted support and guidance throughout the certification journey.

                  Overall, this project combined AI-driven technology, modern web frameworks, and thoughtful user experience design to create a smart, supportive learning tool that promotes professional growth within teams at Delaware.

                  `
        }
        
        
      ]
    }
  },
};
</script>
