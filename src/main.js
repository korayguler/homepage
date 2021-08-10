import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';
import Router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';
import './assets/css/tailwind.css';
import './assets/css/base.css';

const app = createApp(App);

app.use(Router);
app.use(store);
app.use(VueEasyLightbox);

app.mount('#app');
