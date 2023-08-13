import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TimeTrackerDashboard from '../views/TimeTrackerDashboard.vue'
import UserManagement from '../views/UserManagement.vue'
import OrganizationSetup from '../views/OrganizationSetup.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: true, title: 'Dashboard' }
    },
    {
      path: '/time-tracker',
      name: 'time_tracker',
      component: TimeTrackerDashboard,
      meta: { layout: true, title: 'Time tracker' }
    },
    {
      path: '/user-management',
      name: 'user_management',
      component: UserManagement,
      meta: { layout: true, title: 'User Management' }
    },
    {
      path: '/organization-setup',
      name: 'organization_setup',
      component: OrganizationSetup,
      meta: { layout: false }
    },
    {
      path: '/sign-up',
      name: 'sign_up',
      component: SignUp,
      meta: { layout: false, title: 'Sign Up' }
    },
    {
      path: '/sign-in',
      name: 'sign_in',
      component: SignIn,
      meta: { layout: false, title: 'Sign In' }
    }
  ]
})

export default router
