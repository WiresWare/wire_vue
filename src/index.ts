import type { App } from 'vue';
import WireData from '@/component/WireData.vue';
export default {
  install(app: App) {
    app.component('WireData', WireData as any);
  },
};
export { WireData };
export type { IWireDataProps, WireDataRebuildWhenFunction } from '@/types/WireData';
