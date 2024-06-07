import { createRouter, createWebHistory } from 'vue-router'
import HOME from "../views/HOME.vue";
import WELCOME from "../views/WELCOME.vue";
import LISTS from "../views/LISTS.vue";
import ACCOUNT from "../views/ACCOUNT.vue";
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
      path: '/lists',
      component: LISTS
    },
    {
      path: '/login',
      component: ACCOUNT
    }
  ]
})

export default router
