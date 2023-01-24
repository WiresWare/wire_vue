import { createApp } from 'vue';
import WireVue from 'wire-vue';
import { Wire } from 'wire-ts';

import DataKeys from '@/constants/DataKeys';

import './style.css';
import App from './App.vue';

Wire.data(DataKeys.COUNT, undefined);

createApp(App)
  .use(WireVue)
  .mount('#app');