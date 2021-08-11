import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/pages/index.vue') },
  { path: '/projects', component: () => import('@/pages/projects.vue') },
  { path: '/gallery', component: () => import('@/pages/gallery.vue') },
];

const config = createRouter({
  history: createWebHistory(),
  routes,
});

export default config;
