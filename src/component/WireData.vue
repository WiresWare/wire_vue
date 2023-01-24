<script setup lang="ts">
import { Wire } from 'wire-ts';
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue';

type RebuildWhenMethod = (value: any) => boolean;

interface IWireDataProps {
  for: string;
  when?: any | RebuildWhenMethod;
  isStatic?: boolean;
}

const slots = useSlots();
const props = defineProps<IWireDataProps>();
const wireData = Wire.data(props.for);
const data = ref<any>(wireData.value);

const hasData = computed(() => data.value !== undefined && data.value !== null);
const hasWhen = () => props.when !== undefined && props.when !== null;
const hasUndefinedSlot = computed(() => slots.undefined);

const isWhenFunction = () => !!props.when && props.when instanceof Function;

const onWireDataUpdate = async (value: any) => {
  const skip = (hasWhen() && !props.when) || (isWhenFunction() && !props.when(value));
  if (skip) return;
  // console.log('> WireData -> onWireDataUpdate:', value);
  data.value = value;
};
onMounted(() => {
  // console.log('> WireData -> onMounted: for =', props.for, data.value);
  if (props.isStatic) return;
  wireData.subscribe(onWireDataUpdate);
});
onUnmounted(() => {
  if (props.isStatic) return;
  wireData.unsubscribe(onWireDataUpdate);
});
</script>

<template>
  <slot
    v-if="hasData || (!hasData && !hasUndefinedSlot)"
    :data="data"
    :has="hasData"
  />
  <slot v-else name="undefined" />
</template>

