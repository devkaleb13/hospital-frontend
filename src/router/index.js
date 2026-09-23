import { createRouter, createWebHistory } from 'vue-router'
import Landingpage from '@/component/LandingPage.vue'
import Login from '@/component/Login.vue'
import Patients from '@/component/Patients.vue'
import Profile from '@/component/Profile.vue'
import Signup from '@/component/Signup.vue'
import ViewPatient from '@/component/ViewPatient.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Landingpage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/patients',
      component: Patients
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path:'/Signup',
      component: Signup
    },
  
  {
    path:'/viewpatient',
    component: ViewPatient

  }],

})

export default router
