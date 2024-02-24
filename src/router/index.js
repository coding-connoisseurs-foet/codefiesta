import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import("../views/SponsorPage.vue")
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import("../views/SchedulePage.vue")
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import("../views/SpeakerPage.vue")
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import("../views/AboutUs.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
