import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/index.vue';
import Projects from './pages/projects.vue';
import Gallery from './pages/gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/gallery', component: Gallery },
];

const config = createRouter({
  history: createWebHistory(),
  routes,
});

export default config;
