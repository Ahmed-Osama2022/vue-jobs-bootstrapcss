import CardView from '@/components/CardView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import Test from '@/views/Test.vue';
import { createRouter, createWebHistory } from 'vue-router';

/**
 * Decalre the routes
 */
const router = createRouter({
  // history: createWebHistory(import.meta.url)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/card/:id',
      name: 'card',
      component: CardView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
