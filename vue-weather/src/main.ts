import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { appAxios } from './utils/appAxios';

const app = createApp(App);

app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
