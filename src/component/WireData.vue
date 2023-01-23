<script setup lang="ts">
import { Wire } from 'cores.wire/dist';
import { onMounted, onUnmounted, ref } from 'vue';

type RebuildWhenMethod = (value: any) => boolean;

interface IWireDataProps {
  dataKey: string;
  rebuildWhen?: RebuildWhenMethod;
  isStatic?: boolean;
}

const props = defineProps<IWireDataProps>();
const wireData = Wire.data(props.dataKey);
const dataValue = ref<any | null>(wireData.value);
const onWireDataUpdate = async (value: any | null) => {
  if (props.rebuildWhen && !props.rebuildWhen(value)) return;
  dataValue.value = value;
};
onMounted(() => {
  if (props.isStatic) return;
  wireData.subscribe(onWireDataUpdate);
});
onUnmounted(() => {
  if (props.isStatic) return;
  wireData.unsubscribe(onWireDataUpdate);
});
</script>

<template>
  <slot v-bind="dataValue" />
  <slot
    v-if="!dataValue"
    name="whenNull"
  />
</template>

