# Wire Vue
Utility library for Vue that helps get reactive data from [Wire](https://github.com/WiresWare/wire_ts) data-container layer by providing special component `<WireData />` 

## How to
1. Dependency:
```
npm i -D wire-vue wire-ts
or 
yarn add -D wire-vue wire-ts
```
2. Vue plugin:
```typescript
import { createApp } from 'vue';
import WireVue from 'wire-vue';
import App from './App.vue';

createApp(App)
  .use(WireVue) 
  .mount('#app');
```
3. Use:
(simple)
```vue
  <WireData
    v-slot="{ has, data }"
    :for="DataKeys.COUNT"
    :when="() => true"
  >
    <h1>{{ has ? data : 'no data' }}</h1>
  </WireData>
```
(with naming slots)
```vue
  <WireData :for="DataKeys.COUNT" :when="() => true">
    <template #default="{ data }">
      <h1>{{ data }}</h1>
    </template>
    <template #undefined>
      <p>Value is undefined</p>
    </template>
  </WireData>
```
4. Update WireData from anywhere in the app:
```typescript
const count = ref<number>(Wire.data(DataKeys.COUNT).value);
watch(count, (value: number) => Wire.data(DataKeys.COUNT, value));
```