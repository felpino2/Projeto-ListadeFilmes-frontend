import { createRouter, createWebHistory } from 'vue-router'
import HOME from "../views/HOME.vue";
import WELCOME from "../views/WELCOME.vue";
import ACCOUNT from "../views/ACCOUNT.vue";
import LOGIN from "@/views/LOGIN.vue";
import MOVIE from "@/views/MOVIE.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WELCOME
    },
    {
      path: '/home',
      component: HOME
    },
    {
      path: '/register',
      component: ACCOUNT
    },
    {
      path: '/login',
      component: LOGIN
    },
    {
      path: '/movie',
      component: MOVIE
    }
  ]
})

export default router
