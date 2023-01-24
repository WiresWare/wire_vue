import { createApp, defineComponent } from 'vue'
import './style.css'
import App from './App.vue'
import WireVue from 'cores.wire_vue';
import { Wire } from "cores.wire";
import DataKeys from "./constants/DataKeys";

Wire.data(DataKeys.COUNT, undefined);

const app = createApp(App);
app.use(WireVue);
app.mount('#app');

app.component('wire-data-app', defineComponent({
  props: {
    message: { type: String, default: 'Message' },
  },
  setup(props) {
    console.log('WireData2', props.message);
    props.message; // <-- type: string
  },
  template: `<div>Hello {{ message }}</div>`,
}));
