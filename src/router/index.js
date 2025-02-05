import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import EventsView from '@/views/EventsView.vue'
import InterExperiencesView from '@/views/InterExperiencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/international-experiences',
      name: 'international-experiences',
      component: InterExperiencesView,

    }
  ],
})

export default router
