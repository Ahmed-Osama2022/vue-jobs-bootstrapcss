import CardView from '@/views/CardView.vue';
import JobView from '@/views/Jobs/JobView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import Test from '@/views/Test.vue';
import { createRouter, createWebHistory } from 'vue-router';
import JobsView from '@/views/Jobs/JobsView.vue';
import AddJobView from '@/views/Jobs/AddJobView.vue';
import EditJobView from '@/views/Jobs/EditJobView.vue';

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
    /**
     * For the jobs
     */
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      // path: '/jobs/:id(\\d+)', // This will only match numeric IDs
      name: 'job',
      component: JobView,
    },
    {
      path: '/jobs/add', // This will only match numeric IDs
      name: 'add-job',
      component: AddJobView,
    },
    {
      path: '/jobs/edit/:id', // This will only match numeric IDs
      name: 'edit-job',
      component: EditJobView,
    },
  ],
});

export default router;
