import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SponsorPage from '../views/SponsorPage.vue'
import SchedulePage from '../views/SchedulePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: SponsorPage
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage
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
  history: createWebHashHistory(),
  routes
})

export default router
