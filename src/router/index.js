import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SponsorPage from '../views/SponsorPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'

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
    path: '/community',
    name: 'community partners',
    component: () => import("../views/CommunityPartners.vue")
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
    path: '/faq',
    name: 'Faq',
    component: () => import("../views/FaqSection.vue")
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import("../views/AboutUs.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
