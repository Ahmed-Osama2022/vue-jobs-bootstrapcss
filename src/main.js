// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'primeicons/primeicons.css';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

createApp(App).use(router).use(Toast).mount('#app');
