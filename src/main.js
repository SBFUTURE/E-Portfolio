import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


createApp(App).use(router).mount('#app')