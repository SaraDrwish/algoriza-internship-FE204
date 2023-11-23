import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../components/HomePageCompos/HomePage.vue';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/homepage',
    //   name: 'homepage',
    //   component: homePage,
    // },
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

    // {
    //   path: '/:catchAll(.*)',
    //   name: 'not found',
    //   component:NotFound,
    // },

  ]
})

export default router
