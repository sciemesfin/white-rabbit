import { createRouter, createWebHistory } from 'vue-router'
import Albums from '../views/Albums.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'albums',
      component:Albums
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favorites.vue')
    }
  ]
})

export default router
