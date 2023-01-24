import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import WireVue from 'cores.wire_vue';
import { Wire } from 'cores.wire';
import DataKeys from './constants/DataKeys';

Wire.data(DataKeys.COUNT, undefined);

createApp(App)
  .use(WireVue)
  .mount('#app');