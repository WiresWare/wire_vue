export default {
  WIRE_DATA_V_SLOT: `<WireData
  v-slot="{ has, data }"
  :for="DataKeys.COUNT"
  :when="() => true"
>
  <CountDisplay
    :has-data="has"
    :count="data"
  />
</WireData>`,

  WIRE_DATA_TEMPLATE_SLOTS: `<WireData :for="DataKeys.COUNT" :when="() => true">
  <template #default="{ data }">
    <CountBadge :count="data" />
  </template>
  <template #undefined>
    <UndefinedStatus />
  </template>
</WireData>`,

  WIRE_SEND_SIGNAL: `// In component - send signal
const onCountButtonIncrement = () => {
  Wire.send(Signals.INCREASE);
};

// In CountController - handle signal
Wire.add(scope, Signals.INCREASE, () => {
  Wire.data(DataKeys.COUNT, (value: number) => {
    return (value ?? 0) + 1;
  });
});`,
};
