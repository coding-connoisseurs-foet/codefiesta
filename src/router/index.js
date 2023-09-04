import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EventsPage from '../views/EventsPage.vue'
import SponsorPage from '../views/SponsorPage.vue'
import TeamPage from '../views/TeamPage.vue'
import SchedulePage from '../views/SchedulePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage
  },
  {
    path: '/events',
    name: 'events',
    component: EventsPage
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: SponsorPage
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
