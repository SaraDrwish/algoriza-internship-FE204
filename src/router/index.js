import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import HomePageComposSigned from '../components/HomePageComposSigned/HomePageComposSigned.vue';
import NotFound from '../components/NotFound.vue';
import SearchResults from '../components/SearchResultspageCompo/SearchResults.vue';
import ProdDetails from '../components/ProdDetailscompo/ProductDetail.vue';
import Checkout from '../components/CheckoutCompo/Checkout.vue';
import MyTrips from '../components/MyTripsCompo/MyTrips.vue'


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
      component: HomePageComposSigned,
    },
     {
      // path: '/searchres',
      path: '/searchres/:id',
      name: 'searchres',
      component:  SearchResults ,
    },
    {
      // path: '/prodetails/:id',
      path: '/prodetails',
      name: 'prodetails',
      component:  ProdDetails ,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component:  Checkout  ,
    },
    {
      path: '/mytrips',
      name: 'mytrips',
      component:  MyTrips  ,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component:NotFound,
    },

  ]
})

export default router
