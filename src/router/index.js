import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import HomePageComposSigned from '../components/HomePageComposSigned/HomePageComposSigned.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/SignIn.vue'),
    },
     {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/signedhome',
      name: 'signedhome',
      component:HomePageComposSigned  ,
    },

    // {
    //   path: '/:catchAll(.*)',
    //   name: 'not found',
    //   component:NotFound,
    // },

  ]
})

export default router
