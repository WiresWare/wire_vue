import { createApp } from 'vue';
import WireVue from 'wire-vue';
import { Wire } from 'wire-ts';

import DataKeys from '@/constants/DataKeys';
import CountController from '@/controller/CountController';
import CountMiddleware from '@/middleware/CountMiddleware';
import LocalKeys from '@/constants/LocalKeys';

import './style.css';
import App from './App.vue';

const countRaw = localStorage.getItem(LocalKeys.COUNT) ?? ' ';
const countInitial = parseInt(countRaw) || undefined;

CountController.register();
Wire.middleware(new CountMiddleware());
Wire.data(DataKeys.COUNT, countInitial);

createApp(App)
  .use(WireVue)
  .mount('#app');
