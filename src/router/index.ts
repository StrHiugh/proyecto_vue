import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablaCitas from '../components/TablaCitas.vue';
import TablaDoctores from '../components/TablaDoctor.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tablacitas',
      name: 'citas',
      component: TablaCitas,
    },
    {
      path: '/tabladoctor',
      name: 'doctores',
      component: TablaDoctores,
    },
  ],
})

export default router
