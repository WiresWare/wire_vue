import { App } from 'vue';
import WireData from './component/WireData.vue';
export default {
  install(app: App) {
    app.component('WireData', WireData);
  },
};