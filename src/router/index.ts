import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TimeTrackerDashboard from '../views/TimeTrackerDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/time-tracker',
      name: 'time_tracker',
      component: TimeTrackerDashboard
    }
  ]
})

export default router
